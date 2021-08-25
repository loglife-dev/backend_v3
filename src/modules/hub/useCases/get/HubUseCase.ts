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

  public async execute(page: number): Promise<Hub[]> {
    const customers = await this.hubRepositories.GetAll(page)

    return customers;
  }
}

export { GetHubUseCase, GetAllHubUseCase };


