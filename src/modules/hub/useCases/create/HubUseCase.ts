import { delay, inject, injectable } from "tsyringe";
import { getCustomRepository } from "typeorm";
import { AppError } from "../../../../shared/errors/AppError";
import { HubRepositories } from "../../repositories/HubRepositories";


interface IRequest{
 name: string;
 state: string;
 observation: string;
}

class CreateHubUseCase {

     async execute({name, state, observation}:  IRequest) {
        const hubRepositories = getCustomRepository(HubRepositories);
        
        if(name == " " || state == " ") throw new AppError('Preencha')

        if(!name){
            throw new AppError('Name incorrect!', 400)
        }

        const hubAlreadyExists = await hubRepositories.findOne({name});

        if(hubAlreadyExists){
            throw new AppError('Hub Already exists!')

        }

        const hub = hubRepositories.create({ 
            name, 
            state,
            observation
        });
        await hubRepositories.save(hub)

        return hub;
    }

}

export { CreateHubUseCase}