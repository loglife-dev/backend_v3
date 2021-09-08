import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAddressUseCase, GetAllAddressUseCase } from "./AddressUseCase";

class GetAddressController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const getAddressUseCase = container.resolve(GetAddressUseCase);

        const address = await getAddressUseCase.execute(id);

        return response.json(address);
    }
}

class GetAllAddressController {
    async handle(request: Request, response: Response): Promise<Response> {
        const getAllAddressUseCase = container.resolve(GetAllAddressUseCase);

        const address = await getAllAddressUseCase.execute();

        return response.json(address)
    }
}

export { GetAddressController, GetAllAddressController }