import { container } from "tsyringe";
import { CityRepository } from "../../modules/city/infra/repositories/CityRepositories";
import { ICityRepository } from "../../modules/city/repositories/ICityRepository";
import { CustomerRepository } from "../../modules/customer/infra/typeorm/CustomerRepository";
import { ICustomerRepository } from "../../modules/customer/repositories/ICustomerRepository";
import { HubRepository } from "../../modules/hub/infra/typeorm/repositories/HubRepositories";
import { IHubRepository } from "../../modules/hub/repositories/IHubRepositories";



container.registerSingleton<IHubRepository>(
    "HubRepository",
    HubRepository
)

container.registerSingleton<ICityRepository>(
    "CityRepository",
    CityRepository
)

container.registerSingleton<ICustomerRepository>(
    "CustomerRepository",
    CustomerRepository
)