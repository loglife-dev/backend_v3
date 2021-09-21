import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { User } from "../../infra/typeorm/entities/User";
import { IUserRepository } from "../../repositories/IUserRepositories";


@injectable()
class GetUserUseCase {
    constructor(
        @inject("UserRepository")
        private readonly userRepository: IUserRepository) { }

    async execute(id: string): Promise<User>{
        const user = await this.userRepository.findById(id);

        return user;
    }
    
}

@injectable()
class GetAllUserUseCase {
    constructor(
        @inject("UserRepository")
        private readonly userRepository: IUserRepository) { }

    async execute(): Promise<User[]> {
        const user = await this.userRepository.Get()

        return user;
    }
}

export { GetUserUseCase, GetAllUserUseCase };