import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IHubUpdateDTO } from "../../dtos/IHubDTO";
import { Hub } from "../../infra/typeorm/entities/Hub";
import { IHubRepository } from "../../repositories/IHubRepositories";


@injectable()
class UpdateHubUseCase {
  constructor(
    @inject("HubRepository")
    private readonly hubRepositories: IHubRepository
  ) { }

  async execute({
    id,
    name,
    state,
    observation
  }: IHubUpdateDTO): Promise<Hub> {
    const hub = await this.hubRepositories.findById(id);

    if (!hub) {
      throw new AppError("Hub does not exists!");
    }

    const hubExistByName = await this.hubRepositories.findByName(name)

    if (hubExistByName && hub.name !== name) {
      throw new AppError("Hub already exists!");
    }

    hub.name = name,
    hub.state = state;
    hub.observation = observation;

    const updatedHub = await this.hubRepositories.Update(hub);

    return updatedHub;
  }
}

export { UpdateHubUseCase }