import { hash } from "bcryptjs";
import { DriverRepositoryInMemory } from "../../modules/driver/repositories/in-memory/DriverRepositoryInMemory";
import { IUserDTO } from "../../modules/user/dtos/IUserDTO";
import { UserRepositoryInMemory } from "../../modules/user/repositories/in-memory/UserRepositoryInMemory";
import { CreateUserUseCase } from "../../modules/user/useCases/create/UserUseCase";
import { GetAllUserUseCase, GetUserUseCase } from "../../modules/user/useCases/get/UserUseCase";



let getAllUserUseCase: GetAllUserUseCase;
let getUserUseCase: GetUserUseCase;
let createUserUseCase: CreateUserUseCase;
let userRepositiryInMemory: UserRepositoryInMemory;

describe("List all user", () => {
    beforeEach(() => {
        userRepositiryInMemory = new UserRepositoryInMemory();
        getAllUserUseCase = new GetAllUserUseCase(userRepositiryInMemory);
        createUserUseCase = new CreateUserUseCase(userRepositiryInMemory);
        getUserUseCase = new GetUserUseCase(userRepositiryInMemory);
    });



    it("should be able to list all user", async () => {
        const user: IUserDTO = {
            id: '59fde46d-40ad-46,ac-a674-a8506c4791f6',
            situation: 'em adamento',
            user_type: 'motorista',
            loglife_employee: false,
            collector_id: '',
            customer_id: '',
            driver_id: '59fde46d-40ad-46ac-a674-a8506c4791f6',
            permissions: ['test'],
            email: 'ricado@email.com',
            password: '1234',
            firstname: 'José',
            lastname: 'Ricardo',
        }
        await createUserUseCase.execute(user);

        const all = await getAllUserUseCase.execute()
        expect(all[0]).toHaveProperty("id");
        expect(all.length).toEqual(1);
    });
})