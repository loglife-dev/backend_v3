import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateBranchUseCase } from "./BranchUseCase";

class CreateBranchController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { nickname, hub_id, shipping_id, email, cellphone, telephone, cep, state, city, street, number, neighborhood, complement, business_open, business_close,
            saturday_open, saturday_close, sunday_open, sunday_close, observation } = request.body;

        const createBranchUseCase = container.resolve(CreateBranchUseCase);

        const branch = await createBranchUseCase.execute({
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
            observation,
        });

        const branchResponse = {
            nickname: branch.nickname,
            hub_id: branch.hub_id,
            shipping_id: branch.shipping_id,
            email: branch.email,
            cellphone: branch.cellphone,
            telephone: branch.telephone,
            cep: branch.cep,
            state: branch.state,
            city: branch.city,
            street: branch.street,
            number: branch.number,
            neighborhood: branch.neighborhood,
            complement: branch.complement,
            business_open: branch.business_open,
            business_close: branch.business_close,
            saturday_open: branch.saturday_open,
            saturday_close: branch.saturday_close,
            sunday_open: branch.saturday_open,
            sunday_close: branch.sunday_close,
            observation: branch.observation,
        }


        return response.status(201).json(branchResponse);
    }
}
export { CreateBranchController }