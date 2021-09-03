import { IUserDTO } from "../../modules/user/dtos/IUserDTO";
import { UserRepositoryInMemory } from "../../modules/user/repositories/in-memory/UserRepositoryInMemory";
import { CreateUserUseCase } from "../../modules/user/useCases/create/UserUseCase";
import { AppError } from "../../shared/errors/AppError";


let createUserUseCase: CreateUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;


describe("Create User", () => {
    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory();
        createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
    });

    it("should be able to create a new user", async () => {
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
        const createUser = await userRepositoryInMemory.findByEmail(user.email);

        expect(createUser).toHaveProperty("id");
    })

    it("should not be able to create a new user with email exists", async () => {

        expect(async () => {
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
            await createUserUseCase.execute(user);

        }).rejects.toBeInstanceOf(AppError);
    })
})