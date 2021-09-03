import { IBaseRepository } from "../../../shared/infra/repositories/IBaseRepositories";
import { User } from "../infra/typeorm/entities/User";



export interface IUserRepository extends IBaseRepository<User> {
    
    findByEmail(email: string): Promise<User>;
}