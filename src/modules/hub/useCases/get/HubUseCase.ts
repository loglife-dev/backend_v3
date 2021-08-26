import { inject, injectable } from "tsyringe";
import { Hub } from "../../infra/typeorm/entities/Hub";
import { IHubRepository } from "../../repositories/IHubRepositories";

@injectable()
class GetHubUseCase {
  constructor(
    @inject("HubRepository")
    private readonly hubRepository: IHubRepository) { }

  public async execute(id: string): Promise<Hub> {
    const hub = await this.hubRepository.Get(id);

    return hub;
  }
}

@injectable()
class GetAllHubUseCase {
  constructor(
    @inject("HubRepository")
    private readonly hubRepositories: IHubRepository
  ) { }

  public async execute(): Promise<Hub[]> {
    const hub = await this.hubRepositories.GetAll()

    return hub;
  }
}

export { GetHubUseCase, GetAllHubUseCase };


