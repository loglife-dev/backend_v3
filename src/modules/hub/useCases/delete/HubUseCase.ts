import { getCustomRepository } from "typeorm";
import { AppError } from "../../../../shared/errors/AppError";
import { HubRepositories } from "../../repositories/HubRepositories";

class DeleteHubUseCase {
  async execute(id: string) {
    const hubRepositories = getCustomRepository(HubRepositories);

    const hub = await hubRepositories.findOne({ id });

    if (!hub) {
      throw new AppError("Hub not found!");
    }

    await hubRepositories.remove(hub);
  }
}

export { DeleteHubUseCase };
