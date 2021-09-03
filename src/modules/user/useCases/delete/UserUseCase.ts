import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IUserRepository } from "../../repositories/IUserRepositories";



@injectable()
class DeleteUserUseCase {
    constructor(
        @inject("UserRepository")
        private readonly userRepository: IUserRepository) { }

    async execute(id: string): Promise<void> {
        const user = await this.userRepository.Get(id);

        if (!user) {
            throw new AppError("User does not exists!");
        }

        await this.userRepository.Delete(user);

    }
}

export { DeleteUserUseCase }