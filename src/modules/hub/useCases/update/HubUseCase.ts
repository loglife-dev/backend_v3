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
    const hubExist = await this.hubRepositories.Get(id)

    if (!hubExist) {
      throw new AppError("Hub does not exists!");
    }

    const hubExistByName = await this.hubRepositories.findByName(name)

    if (hubExistByName && hubExist.name !== name) {
      throw new AppError("Hub already exists!");
    }


    Object.assign(hubExist, {
      id,
      name,
      state,
      observation

    });

    const updatedHub = await this.hubRepositories.Update(
      hubExist
    );

    return updatedHub;
  }
}

export { UpdateHubUseCase }