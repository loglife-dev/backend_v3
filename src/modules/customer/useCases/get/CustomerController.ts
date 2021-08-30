import { Request, Response } from "express";
import { container, injectable } from "tsyringe";
import { GetAllCustomerseCase, GetCustomerUseCase } from "./CustomerUseCase";

class GetCustomerController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const getCustomerUseCase = container.resolve(GetCustomerUseCase);

        const customer = await getCustomerUseCase.execute(id);

        return response.json(customer);
    }
}


class GetAllCustomerCotroller {
    async handle(request: Request, response: Response): Promise<Response> {

        const getAllcustomerUseCase = container.resolve(GetAllCustomerseCase)

        const customer = await getAllcustomerUseCase.execute()

        return response.json(customer);
    }
}

export { GetCustomerController, GetAllCustomerCotroller }