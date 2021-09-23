import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IBranchDTO } from "../../dtos/IBranchDTO";
import { Branch } from "../../infra/typeorm/entities/Branch";
import { IBranchRepository } from "../../repositories/IBranchRepository";

@injectable()
class UpdateBranchUseCase {
    constructor(
        @inject("BranchRepository")
        private readonly branchRepository: IBranchRepository) { }

    async execute({
        id,
        nickname,
        hub_id,
        shipping_id,
        email,
        cellphone,
        telephone,
        cep,
        state,
        city,
        street,
        number,
        neighborhood,
        complement,
        business_open,
        business_close,
        saturday_open,
        saturday_close,
        sunday_open,
        sunday_close,
        observation,
    }: IBranchDTO): Promise<Branch> {
        const branchExists = await this.branchRepository.findById(id)

        if (!branchExists) {
            throw new AppError("Branch does not exists!");
        }

        const branchExistsNickname = await this.branchRepository.findByNickname(nickname)


        if (branchExistsNickname && branchExists.nickname !== nickname) {
            throw new AppError("Nickname already exists!");
        }

        Object.assign(branchExists, {
            id,
            nickname,
            hub_id,
            shipping_id,
            email,
            cellphone,
            telephone,
            cep,
            state,
            city,
            street,
            number,
            neighborhood,
            complement,
            business_open,
            business_close,
            saturday_open,
            saturday_close,
            sunday_open,
            sunday_close,
            observation,
        });
        const updateBranch = await this.branchRepository.Update(branchExists);

        return updateBranch;

    }
}

export { UpdateBranchUseCase }