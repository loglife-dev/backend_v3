import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IUserDTO } from "../../dtos/IUserDTO";
import { User } from "../../infra/typeorm/entities/User";
import { IUserRepository } from "../../repositories/IUserRepositories";
import { hash } from "bcryptjs";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UserRepository")
        private readonly userRepository: IUserRepository) { }

    async execute({
        situation,
        user_type,
        loglife_employee,
        customer_id,
        driver_id,
        collector_id,
        permissions,
        email,
        password,
        firstname,
        lastname,
    }: IUserDTO): Promise<User> {
        
        if (user_type == "" || email == "" || firstname == "" || lastname == "") {
            throw new AppError("fill in all fields")
        }

        const userAlreadyExists = await this.userRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new AppError("There is already a registered user with this User!!", 400)
        }

        const passwordHash = await hash(password, 8);

        const user = new User();
        Object.assign(user, {
            situation,
            user_type,
            loglife_employee,
            customer_id,
            driver_id,
            collector_id,
            permissions,
            email,
            password: passwordHash,
            firstname,
            lastname,
        });

        const createUser = await this.userRepository.Create(user)

        return createUser;

    }
}

export { CreateUserUseCase };