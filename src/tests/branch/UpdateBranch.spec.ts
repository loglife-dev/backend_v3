import { IBranchDTO } from "../../modules/branch/dtos/IBranchDTO";
import { BranchRepositoryInMemory } from "../../modules/branch/repositories/in-memory/BranchRepositoryInMemory";
import { CreateBranchUseCase } from "../../modules/branch/useCases/create/BranchUseCase";
import { UpdateBranchUseCase } from "../../modules/branch/useCases/update/BranchUseCase";

let createBranchUseCase: CreateBranchUseCase;
let branchRepositoryInMemory: BranchRepositoryInMemory;
let updateBranchUseCase: UpdateBranchUseCase;

describe("Update branch", () => {
    beforeEach(() => {
        branchRepositoryInMemory = new BranchRepositoryInMemory();
        createBranchUseCase = new CreateBranchUseCase(branchRepositoryInMemory);
        updateBranchUseCase = new UpdateBranchUseCase(branchRepositoryInMemory);
    });

    it("should be able to update one branch", async () => {
        const branch: IBranchDTO = {
            id: '59fde46d-40ad-46ac-a674-a8506c4791f6',
            nickname: 'branch_test',
            hub_id: '1e0b9d6a-0739-11ec-9a03-0242ac130003',
            shipping_id: '1e0b9d6a-0739-11ec-9a03-0242ac130003',
            email: 'branch@gmail.com',
            cellphone: '92 33445555',
            telephone: '92 9999999',
            cep: '6908566',
            state: 'Amazonas',
            city: 'Manaus',
            street: 'São Geraldo',
            number: '10000',
            neighborhood: 'test',
            complement: 'Djalma batista',
            business_open: new Date(),
            business_close: new Date(),
            saturday_open: new Date(),
            saturday_close: new Date(),
            sunday_open: new Date(),
            sunday_close: new Date(),
            observation: 'observation test'
        }
        await createBranchUseCase.execute(branch);
        const findId = await branchRepositoryInMemory.findById(branch.id);

        const updateBranch = await updateBranchUseCase.execute({
            id: '59fde46d-40ad-46ac-a674-a8506c4791f6',
            nickname: 'branch test',
            hub_id: '1e0b9d6a-0739-11ec-9a03-0242ac130003',
            shipping_id: '1e0b9d6a-0739-11ec-9a03-0242ac130003',
            email: 'branch@gmail.com',
            cellphone: '92 33445555',
            telephone: '92 9999999',
            cep: '6908566',
            state: 'Amazonas',
            city: 'Manaus',
            street: 'São Geraldo',
            number: '10000',
            neighborhood: 'test',
            complement: 'Djalma batista',
            business_open: new Date(),
            business_close: new Date(),
            saturday_open: new Date(),
            saturday_close: new Date(),
            sunday_open: new Date(),
            sunday_close: new Date(),
            observation: 'observation test'
        })
        expect(updateBranch.nickname).toBe('branch test');
    });
})