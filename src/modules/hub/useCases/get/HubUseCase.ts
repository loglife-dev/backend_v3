import { getCustomRepository } from "typeorm"
import { AppError } from "../../../../shared/errors/AppError";
import { HubRepositories } from "../../repositories/HubRepositories"



class GetHubAllUseCase {
    async execute() {
        const hubRepositories = getCustomRepository(HubRepositories);

        const hub = await hubRepositories.find()

        return hub
    }
}


class GetHubByIdUseCase {
    async execute(id: string) {
        const hubRepositories = getCustomRepository(HubRepositories);

        const hubAlreadyExists = await hubRepositories.findOne({
            where: { id }
        })

        if(!hubAlreadyExists){
            throw new AppError('Hub not found!')
        }


        return hubAlreadyExists
    }

}

export { GetHubAllUseCase, GetHubByIdUseCase }

