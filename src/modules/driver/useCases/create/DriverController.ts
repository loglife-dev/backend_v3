import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateDriverUseCase } from "./DriverUseCase";

class CreateDriverController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { situation, firstname, lastname,  collector_id, cpf,  email, observation } = request.body;

        const createDriverUseCase = container.resolve(CreateDriverUseCase);

        const driver = await createDriverUseCase.execute({
            situation,
            firstname,
            lastname,
            collector_id,
            cpf,
            email,
            observation
        });

        const driverResponse = {
            situation: driver.situation,
            firstname: driver.firstname,
            lastname: driver.lastname,
            collector_id: driver.collector_id,
            cpf: driver.cpf,
            email: driver.email,
            observation: driver.observation,
        }


        return response.status(201).json(driverResponse);
    }
}
export { CreateDriverController };