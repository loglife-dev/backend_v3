import { inject, injectable } from "tsyringe";
import { Hub } from "../../infra/typeorm/entities/Hub";
import { IHubRepository } from "../../repositories/IHubRepositories";

@injectable()
class GetHubUseCase {
  constructor(
    @inject("HubRepository")
    private readonly hubRepository: IHubRepository) { }

  async execute(id: string): Promise<Hub> {
    const hub = await this.hubRepository.findById(id);

    return hub;
  }
}

@injectable()
class GetAllHubUseCase {
  constructor(
    @inject("HubRepository")
    private readonly hubRepositories: IHubRepository) { }

  async execute(): Promise<Hub[]> {
    const hub = await this.hubRepositories.Get()

    return hub;
  }
}

export { GetHubUseCase, GetAllHubUseCase };


