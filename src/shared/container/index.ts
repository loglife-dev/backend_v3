import { container } from "tsyringe";
import { CityRepository } from "../../modules/city/infra/repositories/CityRepositories";
import { ICityRepository } from "../../modules/city/repositories/ICityRepository";
import { CollectorRepository } from "../../modules/collector/infra/typeorm/repositories/CollectorRepository";
import { ICollectorRepository } from "../../modules/collector/repositories/ICollectorRepository";
import { CustomerRepository } from "../../modules/customer/infra/typeorm/repositories/CustomerRepository";
import { ICustomerRepository } from "../../modules/customer/repositories/ICustomerRepository";
import { HubRepository } from "../../modules/hub/infra/typeorm/repositories/HubRepositories";
import { IHubRepository } from "../../modules/hub/repositories/IHubRepositories";
import { PermissionRepository } from "../../modules/permission/infra/typeorm/repositories/PermissionRepository";
import { IPermissionRepository } from "../../modules/permission/repositories/IPermissionRepository";



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

container.registerSingleton<IPermissionRepository>(
    "PermissionRepository",
    PermissionRepository
)

container.registerSingleton<ICollectorRepository>(
    "CollectorRepository",
    CollectorRepository
)