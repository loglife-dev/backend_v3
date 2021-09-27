import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IHubRepository } from "../../../hub/repositories/IHubRepositories";
import { IShippingRepository } from "../../../shipping/repositories/IShippingRepository";
import { IBranchDTO } from "../../dtos/IBranchDTO";
import { Branch } from "../../infra/typeorm/entities/Branch";
import { IBranchRepository } from "../../repositories/IBranchRepository";

@injectable()
class UpdateBranchUseCase {
    constructor(
        @inject("BranchRepository")
        private readonly branchRepository: IBranchRepository,
        @inject("HubRepository")
        private hubRepository: IHubRepository,
        @inject("ShippingRepository")
        private readonly shippingRepository: IShippingRepository) { }

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
        const branch = await this.branchRepository.findById(id)

        if (!branch) {
            throw new AppError("Branch does not exists!");
        }

        const branchExistsNickname = await this.branchRepository.findByNickname(nickname)


        if (branchExistsNickname && branch.nickname !== nickname) {
            throw new AppError("Nickname already exists!");
        }

        const hubId = await this.hubRepository.findById(hub_id);

        if (!hubId) {
            throw new AppError("HubId does not exists!");
        }

        const shippingId = await this.shippingRepository.findById(shipping_id);

        if (!shippingId) {
            throw new AppError("ShippingId does not exists!");
        }

        branch.nickname = nickname;
        branch.hub_id = hub_id;
        branch.shipping_id = shipping_id;
        branch.email = email;
        branch.cellphone = cellphone;
        branch.telephone = telephone;
        branch.cep = cep;
        branch.state = state;
        branch.city = city;
        branch.street = street;
        branch.number = number;
        branch.neighborhood = neighborhood;
        branch.complement = complement;
        branch.business_open = business_open;
        branch.business_close = business_close;
        branch.saturday_open = saturday_open;
        branch.saturday_close = saturday_close;
        branch.sunday_open = sunday_open;
        branch.sunday_close = sunday_close;
        branch.observation = observation;

        const updateBranch = await this.branchRepository.Update(branch);

        return updateBranch;

    }
}

export { UpdateBranchUseCase }