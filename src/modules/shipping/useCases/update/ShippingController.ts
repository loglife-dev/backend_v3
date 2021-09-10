import { Request, Response } from "express"
import { container } from "tsyringe";
import { UpdateShippingUseCase } from "./ShippingUseCase";

class UpdateShippingController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const { company_name, trading_name, cnpj, email, modal, cellphone, telephone, observation } = request.body;

        const updateShippingUseCase = container.resolve(UpdateShippingUseCase)

        const updateShipping = await updateShippingUseCase.execute({
            id,
            company_name,
            trading_name,
            cnpj,
            email,
            modal,
            cellphone,
            telephone,
            observation,
        })
        return response.json(updateShipping);
    }
}

export { UpdateShippingController };