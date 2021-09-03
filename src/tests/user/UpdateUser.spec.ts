import { IUserDTO } from "../../modules/user/dtos/IUserDTO";
import { UserRepositoryInMemory } from "../../modules/user/repositories/in-memory/UserRepositoryInMemory";
import { CreateUserUseCase } from "../../modules/user/useCases/create/UserUseCase";
import { UpdateUserUseCase } from "../../modules/user/useCases/update/UserUseCase";


let createUserUseCase: CreateUserUseCase;
let userRepositiryInMemory: UserRepositoryInMemory;
let updateUserUseCase: UpdateUserUseCase;

describe("Update user", () => {
    beforeEach(() => {
        userRepositiryInMemory = new UserRepositoryInMemory();
        createUserUseCase = new CreateUserUseCase(userRepositiryInMemory);
        updateUserUseCase = new UpdateUserUseCase(userRepositiryInMemory);
    });

    it("Should be able to update one user", async () => {
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

        const findUser = await userRepositiryInMemory.findByEmail(user.email);

        const updateUser = await updateUserUseCase.execute({
            id: '59fde46d-40ad-46,ac-a674-a8506c4791f6',
            situation: 'entregue',
            user_type: 'motorista',
            loglife_employee: false,
            collector_id: '',
            customer_id: '',
            driver_id: '59fde46d-40ad-46ac-a674-a8506c4791f6',
            permissions: ['test'],
            email: 'ricado200@email.com',
            password: '1234',
            firstname: 'José',
            lastname: 'Ricardo',
        });

        expect(updateUser.situation).toBe("entregue");
        expect(updateUser.email).toBe("ricado200@email.com");
    })
})