import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IUserDTO } from "../../dtos/IUserDTO";
import { User } from "../../infra/typeorm/entities/User";
import { IUserRepository } from "../../repositories/IUserRepositories";


@injectable()
class UpdateUserUseCase {
    constructor(
        @inject("UserRepository")
        private readonly userRepository: IUserRepository) { }

    async execute({
        id,
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
        const userExists = await this.userRepository.findById(id)

        if (!userExists) {
            throw new AppError("User does not exists!");
        }

        const userExistEmail = await this.userRepository.findByEmail(email)

        if (userExistEmail && userExists.email !== email) {
            throw new AppError("Email already exists!");
        }


        Object.assign(userExists, {
            id,
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
        });

        const updatePermission = await this.userRepository.Update(
            userExists
        );

        return updatePermission;
    }
}

export { UpdateUserUseCase }