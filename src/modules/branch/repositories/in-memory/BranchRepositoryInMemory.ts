import { IBranchDTO } from "../../dtos/IBranchDTO";
import { Branch } from "../../infra/typeorm/entities/Branch";
import { IBranchRepository } from "../IBranchRepository";

class BranchRepositoryInMemory implements IBranchRepository {
    branchs: Branch[] = [];

    async Get(): Promise<Branch[]> {
        const all = this.branchs;
        return all;
    }

    async findById(id: string): Promise<Branch> {
        const branch = this.branchs.find((branch) => branch.id === id)

        return branch;
    }

    async findByNickname(nickname: string): Promise<Branch> {
        const branch = this.branchs.find((branch) => branch.nickname === nickname)

        return branch;
    }

    async Create({
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
        const branch = new Branch();

        Object.assign(branch, {
            id: '59fde46d-40ad-46ac-a674-a8506c4791f6',
            nickname,
            hub_id: '1e0b9d6a-0739-11ec-9a03-0242ac130003',
            shipping_id: '1e0b9d6a-0739-11ec-9a03-0242ac130003',
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
        this.branchs.push(branch);

        return branch;
    }

    async Update(branch: Branch): Promise<Branch> {
        this.branchs.push(branch);

        return branch;
    }

    async Delete(branch: Branch): Promise<void> {
        const findIndex = this.branchs.findIndex(branch => branch === branch)

        this.branchs.splice(findIndex, 1);
    }

}
export { BranchRepositoryInMemory }