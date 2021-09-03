import { BaseRepository } from "../../../../../shared/infra/repositories/BaseRepositories";
import { IUserRepository } from "../../../repositories/IUserRepositories";
import { User } from "../entities/User";



class UserRepository extends BaseRepository<User> implements IUserRepository {
    constructor() {
        super(User)
    }

    async findByEmail(email: string): Promise<User> {
        return this.repository.findOne({ email })
    }

}
export { UserRepository }