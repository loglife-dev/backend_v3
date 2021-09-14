import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IBudgetRepository } from "../../repositories/IBudgetRepository";

@injectable()
class DeleteBudgetUseCase {
    constructor(
        @inject("BudgetRepository")
        private readonly budGetRepository: IBudgetRepository) { }

    async execute(id: string): Promise<void> {
        const budget = await this.budGetRepository.findById(id)

        if (!budget) {
            throw new AppError("Budget does not exists!");
        }
        await this.budGetRepository.Delete(budget);
    }
}

export { DeleteBudgetUseCase }