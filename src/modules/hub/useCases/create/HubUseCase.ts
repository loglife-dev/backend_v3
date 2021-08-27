import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IHubDTO } from "../../dtos/IHubDTO";
import { Hub } from "../../infra/typeorm/entities/Hub";
import { IHubRepository } from "../../repositories/IHubRepositories";


@injectable()
class CreateHubUseCase {
  constructor(
    @inject("HubRepository")
    private readonly hubRepository: IHubRepository) { }

  public async execute({ name, state, observation }: IHubDTO): Promise<Hub> {

    if (name === "" || state === "") {
      throw new AppError("fill fieds", 400)
    }

    const hubAlreadyExists = await this.hubRepository.findByName(name);

    if (hubAlreadyExists) {
      throw new AppError("There is already a registered user with this Hub!!", 400)
    }

    const hub = new Hub();
    Object.assign(hub, {
      name,
      state,
      observation
    });

    const createHub = await this.hubRepository.Create(hub)

    return createHub;

  }
}

export { CreateHubUseCase };
