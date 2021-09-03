import { IUserDTO } from "../../modules/user/dtos/IUserDTO";
import { UserRepositoryInMemory } from "../../modules/user/repositories/in-memory/UserRepositoryInMemory";
import { CreateUserUseCase } from "../../modules/user/useCases/create/UserUseCase";
import { DeleteUserUseCase } from "../../modules/user/useCases/delete/UserUseCase";


let createUserUseCase: CreateUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;
let deleteUserUseCase: DeleteUserUseCase;


describe("Delete a user", () => {
    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory();
        createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
        deleteUserUseCase = new DeleteUserUseCase(userRepositoryInMemory);
    });

    it("Should be able to exclude one user", async () => {
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
        const findId = await deleteUserUseCase.execute(user.id);

        expect(findId).toBe(undefined);
    })
})