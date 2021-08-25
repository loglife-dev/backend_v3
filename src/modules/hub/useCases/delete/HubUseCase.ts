import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IHubDTO } from "../../dtos/IHubDTO";
import { Hub } from "../../infra/typeorm/entities/Hub";
import { IHubRepository } from "../../repositories/IHubRepositories";

interface IRequest {
  id: string;

}

@injectable()
class DeleteHubUseCase {
  constructor(
    @inject("HubRepository")
    private readonly hubRepository: IHubRepository,

  ) { }

  public async execute(id: string): Promise<void> {
    const hub = await this.hubRepository.Get(id)

    if (!hub) {
      throw new AppError("Customer does not exists!");
    }


    await this.hubRepository.Delete(hub);
  }
}

export { DeleteHubUseCase }