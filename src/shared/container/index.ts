import { container } from "tsyringe";
import { HubRepository } from "../../modules/hub/infra/typeorm/repositories/HubRepositories";
import { IHubRepository } from "../../modules/hub/repositories/IHubRepositories";



container.registerSingleton<IHubRepository>(
    "HubRepository",
    HubRepository
)