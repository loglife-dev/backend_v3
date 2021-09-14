import { IUserDTO } from "../../modules/user/dtos/IUserDTO";
import { UserRepositoryInMemory } from "../../modules/user/repositories/in-memory/UserRepositoryInMemory";
import { AuthenticateUserUseCase } from "../../modules/user/useCases/authenticate/UserUseCase";
import { CreateUserUseCase } from "../../modules/user/useCases/create/UserUseCase";
import { AppError } from "../../shared/errors/AppError";

let authenticateUserUseCase: AuthenticateUserUseCase;
let createUserUseCase: CreateUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;

describe("Authenticate User", () => {
    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory();
        authenticateUserUseCase = new AuthenticateUserUseCase(userRepositoryInMemory)
        createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
    })

    it("Should be able to authenticate an user", async () => {
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

        const result = await authenticateUserUseCase.execute({
            email: user.email,
            password: user.password,
        });

        expect(result).toHaveProperty("token");
    });

    it("should not be able to authenticate a nonexistent user ", async () => {
        await expect(
            authenticateUserUseCase.execute({
                email: "false@email.com",
                password: "123",
            }),
        ).rejects.toBeInstanceOf(AppError);
    });


    it("Shoud be able to authenticate with incorrect password", async () => {
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

        expect(
            authenticateUserUseCase.execute({
                email: user.email,
                password: '2222',
            }),
        ).rejects.toBeInstanceOf(AppError)


    })
})