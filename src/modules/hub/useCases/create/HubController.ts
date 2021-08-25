import { Request, Response } from "express";
import { CreateHubUseCase } from "./HubUseCase"

class CreateHubController {

    async handle(request: Request, response:Response): Promise<Response>{
        const { name, state, observation } = request.body;
    
        const createHubUseCase = new CreateHubUseCase();
               
        const hub = await createHubUseCase.execute({ 
            name, 
            state, 
            observation
        });

        return response.status(201).json(hub);
    }

}
export { CreateHubController}