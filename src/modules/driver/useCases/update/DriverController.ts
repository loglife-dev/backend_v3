import { Request, Response } from "express"
import { container } from "tsyringe";
import { UpdateDriverUseCase } from "./DriverUseCase";

class UpdateDriverController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const { situation, firstname, lastname, collector_id, cpf, email, observation } = request.body;

        const updateDriverUseCase = container.resolve(UpdateDriverUseCase)

        const updatedDriver = await updateDriverUseCase.execute({
            id,
            situation,
            firstname,
            lastname,
            collector_id,
            cpf,
            email,
            observation,
        })
        return response.json(updatedDriver);
    }
}

export { UpdateDriverController };