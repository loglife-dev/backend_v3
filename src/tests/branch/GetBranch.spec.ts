import { IBranchDTO } from "../../modules/branch/dtos/IBranchDTO";
import { BranchRepositoryInMemory } from "../../modules/branch/repositories/in-memory/BranchRepositoryInMemory";
import { CreateBranchUseCase } from "../../modules/branch/useCases/create/BranchUseCase";
import { GetAllBranchUseCase, GetBranchUseCase } from "../../modules/branch/useCases/get/BranchUseCase";

let getAllBranchUseCase: GetAllBranchUseCase;
let branchRepositoryInMemory: BranchRepositoryInMemory;
let createBranchUseCase: CreateBranchUseCase;
let getBranchUseCase: GetBranchUseCase;

describe("List all Branch", () => {
    beforeEach(() => {
        branchRepositoryInMemory = new BranchRepositoryInMemory()
        createBranchUseCase = new CreateBranchUseCase(branchRepositoryInMemory);
        getAllBranchUseCase = new GetAllBranchUseCase(branchRepositoryInMemory);
        getBranchUseCase = new GetBranchUseCase(branchRepositoryInMemory);
    });

    it("Should be able to list all branch", async () => {
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

        const all = await getAllBranchUseCase.execute()
        expect(all[0]).toHaveProperty("id");
        expect(all.length).toEqual(1);
    })

    it("Should be able to findOne id branch", async () => {
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

        const findBranchId = await getBranchUseCase.execute(branch.id)

        expect(findBranchId.id).toBe('59fde46d-40ad-46ac-a674-a8506c4791f6');
    })
})