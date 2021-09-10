import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IBranchDTO } from "../../dtos/IBranchDTO";
import { Branch } from "../../infra/typeorm/entities/Branch";
import { IBranchRepository } from "../../repositories/IBranchRepository";


@injectable()
class CreateBranchUseCase {
    constructor(
        @inject("BranchRepository")
        private readonly branchRepository: IBranchRepository) { }

    async execute({
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

        if (nickname == "" || email == "" || cellphone == "" || telephone == "" || cep == "" || state == "" || city == "" || street == "" || number == "" ||
            neighborhood == "" || complement == "") {
            throw new AppError("fill in all fields", 400)
        }

        const branchAlreadyExists = await this.branchRepository.findByNickname(nickname);

        if (branchAlreadyExists) {
            throw new AppError("There is already a registered nickname with this Branch!!", 400)
        }

        const branch = new Branch();
        Object.assign(branch, {
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
        const createBranch = await this.branchRepository.Create(branch);

        return createBranch;

    }
}

export { CreateBranchUseCase }