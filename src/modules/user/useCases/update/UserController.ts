import { Request, Response } from "express"
import { container } from "tsyringe";
import { UpdateUserUseCase } from "./UserUseCase";


class UpdateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const { situation, user_type, loglife_employee, customer_id, driver_id, collector_id, permissions, email,  password, firstname, lastname} = request.body;

        const updateUserUseCase = container.resolve(UpdateUserUseCase)

        const updatedUser = await updateUserUseCase.execute({
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
        })
        return response.json(updatedUser);
    }
}

export { UpdateUserController };