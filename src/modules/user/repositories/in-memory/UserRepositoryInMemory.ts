import { hash } from "bcryptjs";
import { IUserDTO } from "../../dtos/IUserDTO";
import { User } from "../../infra/typeorm/entities/User";
import { IUserRepository } from "../IUserRepositories";



class UserRepositoryInMemory implements IUserRepository {
    users: User[] = [];

    async Get(id: string): Promise<User> {
        const user = this.users.find((user) => user.id === id);
        return user;
    }

    async GetAll(): Promise<User[]> {
        const all = this.users;
        return all;
    }

    async Create({
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
        const user = new User();

        Object.assign(user, {
            id: '59fde46d-40ad-46,ac-a674-a8506c4791f6',
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
        this.users.push(user);

        return user;
    }

    async Update(user: User): Promise<User> {
        this.users.push(user);
        return user;
    }

    async Delete(user: User): Promise<void> {
        const findIndex = this.users.findIndex(user => user === user)
        this.users.splice(findIndex, 1);
    }

    async findByEmail(email: string): Promise<User> {
        const user = this.users.find((user) => user.email === email);
        return user;
    }


}

export { UserRepositoryInMemory }