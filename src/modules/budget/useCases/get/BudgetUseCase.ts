import { inject, injectable } from "tsyringe";
import { Budget } from "../../infra/typeorm/entities/Budget";
import { IBudgetRepository } from "../../repositories/IBudgetRepository";

@injectable()
class GetBudgetUseCase {
    constructor(
        @inject("BudgetRepository")
        private readonly budGetRepository: IBudgetRepository) { }

    async execute(id: string): Promise<Budget> {
        const budget = await this.budGetRepository.findById(id)

        return budget;
    }
}

@injectable()
class GetAllBudgetUseCase {
    constructor(
        @inject("BudgetRepository")
        private readonly budGetRepository: IBudgetRepository) { }

    async execute(): Promise<Budget[]> {
        const budget = await this.budGetRepository.Get()

        return budget
    }
}

export { GetBudgetUseCase, GetAllBudgetUseCase }