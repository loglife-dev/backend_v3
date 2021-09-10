import { inject, injectable } from "tsyringe";
import { Branch } from "../../infra/typeorm/entities/Branch";
import { IBranchRepository } from "../../repositories/IBranchRepository";

@injectable()
class GetBranchUseCase {
    constructor(
        @inject("BranchRepository")
        private readonly branchRepository: IBranchRepository) { }

    async execute(id: string): Promise<Branch> {
        const branch = await this.branchRepository.findById(id)

        return branch;
    }
}

@injectable()
class GetAllBranchUseCase {
    constructor(
        @inject("BranchRepository")
        private readonly branchRepository: IBranchRepository) { }

    async execute(): Promise<Branch[]> {
        const branch = await this.branchRepository.Get()

        return branch
    }
}

export { GetBranchUseCase, GetAllBranchUseCase }