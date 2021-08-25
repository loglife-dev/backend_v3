import { getCustomRepository } from "typeorm"
import { AppError } from "../../../../shared/errors/AppError";
import { HubRepositories } from "../../repositories/HubRepositories"

interface IRequest {
    id: string;
    name: string;
    state: string;
    observation: string;
}

class UpdateHubUseCase {
    async execute({id, name,state, observation  }: IRequest) {

        try{
            const hubRepositories = getCustomRepository(HubRepositories);

            if (name == " " || state == " ") throw new AppError('Preencha')
            
            const hubAlreadyExists= await hubRepositories.findOne(id);
    
            if(!hubAlreadyExists){
                throw new AppError('Hub not found!')
            }
    
    
            const hub = hubRepositories.update(
                { id },
                {
                    name, 
                    state,
                    observation
                }
            )
    
            return hub
 
        }catch(err){
            throw new AppError('Hub not found!');
  
        }
        
    }
}

export { UpdateHubUseCase }

