import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IBranchRepository } from "../../repositories/IBranchRepository";

@injectable()
class DeleteBranchUseCase {
    constructor(
        @inject("BranchRepository")
        private readonly branchRepository: IBranchRepository) { }

    async execute(id: string): Promise<void> {
        const branch = await this.branchRepository.findById(id)

        if (!branch) {
            throw new AppError("Branch does not exists!");
        }
        await this.branchRepository.Delete(branch);
    }
}

export { DeleteBranchUseCase }