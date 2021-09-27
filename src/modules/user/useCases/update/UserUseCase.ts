import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICollectorRepository } from "../../../collector/repositories/ICollectorRepository";
import { ICustomerRepository } from "../../../customer/repositories/ICustomerRepository";
import { IDriverRepository } from "../../../driver/repositories/IDriverRepository";
import { IUserDTO } from "../../dtos/IUserDTO";
import { User } from "../../infra/typeorm/entities/User";
import { IUserRepository } from "../../repositories/IUserRepositories";


@injectable()
class UpdateUserUseCase {
    constructor(
        @inject("UserRepository")
        private readonly userRepository: IUserRepository,
        @inject("CustomerRepository")
        private readonly customerRepository: ICustomerRepository,
        @inject("DriverRepository")
        private readonly driverRepository: IDriverRepository,
        @inject("CollectorRepository")
        private readonly collectorRepository: ICollectorRepository) { }

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
        const user = await this.userRepository.findById(id)

        if (!user) {
            throw new AppError("User does not exists!");
        }

        const userExistEmail = await this.userRepository.findByEmail(email)

        if (userExistEmail && user.email !== email) {
            throw new AppError("Email already exists!");
        }

        const customerId = await this.customerRepository.findById(customer_id);
        const driverId = await this.driverRepository.findById(driver_id);
        const collectorId = await this.collectorRepository.findById(collector_id);

        user.situation = situation;
        user.user_type = user_type;
        user.loglife_employee = loglife_employee;
        user.customer_id = customer_id;
        user.driver_id = driver_id;
        user.collector_id = collector_id;
        user.permissions = permissions;
        user.email = email;
        user.password = password;
        user.firstname = firstname;
        user.lastname = lastname;


        const updatePermission = await this.userRepository.Update({
            ...user,
            customerId,
            driverId,
            collectorId,
        })

        return updatePermission;
    }
}

export { UpdateUserUseCase }