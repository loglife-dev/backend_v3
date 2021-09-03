import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetAllUserUseCase, GetUserUseCase } from "./UserUseCase";


class GetUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const getUserUseCase = container.resolve(GetUserUseCase);

        const user = await getUserUseCase.execute(id);

        return response.json(user);
    }
}

class GetAllUserCotroller {
    async handle(request: Request, response: Response): Promise<Response> {

        const getAllUserUseCase = container.resolve(GetAllUserUseCase)

        const user = await getAllUserUseCase.execute();

        return response.json(user);
    }
}

export { GetUserController, GetAllUserCotroller }