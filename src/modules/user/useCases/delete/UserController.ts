import { Request, Response } from "express"
import { container } from "tsyringe";
import { DeleteUserUseCase } from "./UserUseCase";


class DeleteUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteUserUseCase = container.resolve(DeleteUserUseCase);

        await deleteUserUseCase.execute(id)

        return response.sendStatus(200)
    }
}

export { DeleteUserController }