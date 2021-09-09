import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IHubRepository } from "../../repositories/IHubRepositories";



@injectable()
class DeleteHubUseCase {
  constructor(
    @inject("HubRepository")
    private readonly hubRepository: IHubRepository,

  ) { }

  async execute(id: string): Promise<void> {
    const hub = await this.hubRepository.findById(id)

    if (!hub) {
      throw new AppError("Hub does not exists!");
    }


    await this.hubRepository.Delete(hub);
  }
}

export { DeleteHubUseCase }