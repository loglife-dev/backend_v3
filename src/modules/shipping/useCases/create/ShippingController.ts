import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateShippingUseCase } from "./ShippingUseCase";

class CreateShippingController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { company_name, trading_name, cnpj, email, modal, cellphone, telephone, observation } = request.body;

        const createShippingUseCase = container.resolve(CreateShippingUseCase);
        const shipping = await createShippingUseCase.execute({
            company_name,
            trading_name,
            cnpj,
            email,
            modal,
            cellphone,
            telephone,
            observation,
        });
        const shippingResponse = {
            company_name: shipping.company_name,
            trading_name: shipping.trading_name,
            cnpj: shipping.cnpj,
            email: shipping.email,
            modal: shipping.modal,
            cellphone: shipping.cellphone,
            telephone: shipping.telephone,
            observation: shipping.observation,
        }
        return response.status(201).json(shippingResponse);
    }
}

export { CreateShippingController }