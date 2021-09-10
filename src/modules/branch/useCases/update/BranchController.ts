import { Request, Response } from 'express';
import { container } from "tsyringe";
import { UpdateBranchUseCase } from './BranchUseCase';


class UpdateBranchController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const { nickname, hub_id, shipping_id, email, cellphone, telephone, cep, state, city, street, number, neighborhood, complement, business_open, business_close,
            saturday_open, saturday_close, sunday_open, sunday_close, observation } = request.body;

        const updateBranchUseCase = container.resolve(UpdateBranchUseCase)

        const branch = await updateBranchUseCase.execute({
            id,
            nickname,
            hub_id,
            shipping_id,
            email,
            cellphone,
            telephone,
            cep,
            state,
            city,
            street,
            number,
            neighborhood,
            complement,
            business_open,
            business_close,
            saturday_open,
            saturday_close,
            sunday_open,
            sunday_close,
            observation
        })
        return response.json(branch);
    }
}


export { UpdateBranchController }