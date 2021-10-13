import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./UserUseCase";


class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { situation, user_type, loglife_employee, customer_id, driver_id,
            collector_id, permissions, email, firstname, lastname } = request.body;

        const createUserUseCase = container.resolve(CreateUserUseCase);

        const user = await createUserUseCase.execute({
            situation,
            user_type,
            loglife_employee,
            customer_id,
            driver_id,
            collector_id,
            permissions,
            email,
            password: 'loglife123',
            firstname,
            lastname,
        });

        const userResponse = {
            situation: user.situation,
            user_type: user.user_type,
            loglife_employee: user.loglife_employee,
            customer_id: customer_id,
            driver_id: user.driver_id,
            collector_id: user.collector_id,
            permissions: user.permissions,
            email: user.email,
            password: user.password,
            firstname: user.firstname,
            lastname: user.firstname,
        }

        return response.status(201).json(userResponse);
    }
}
export { CreateUserController };