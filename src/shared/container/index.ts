import { container } from "tsyringe";
import { AddressRepository } from "../../modules/address/infra/repositories/AddressRepository";
import { IAddressRepository } from "../../modules/address/repositories/IAddressRepository";
import { CityRepository } from "../../modules/city/infra/repositories/CityRepositories";
import { ICityRepository } from "../../modules/city/repositories/ICityRepository";
import { CollectorRepository } from "../../modules/collector/infra/typeorm/repositories/CollectorRepository";
import { ICollectorRepository } from "../../modules/collector/repositories/ICollectorRepository";
import { CustomerRepository } from "../../modules/customer/infra/typeorm/repositories/CustomerRepository";
import { ICustomerRepository } from "../../modules/customer/repositories/ICustomerRepository";
import { DriverRepository } from "../../modules/driver/infra/typeorm/repositories/DriverRepositories";
import { IDriverRepository } from "../../modules/driver/repositories/IDriverRepository";
import { HubRepository } from "../../modules/hub/infra/typeorm/repositories/HubRepositories";
import { IHubRepository } from "../../modules/hub/repositories/IHubRepositories";
import { PermissionRepository } from "../../modules/permission/infra/typeorm/repositories/PermissionRepository";
import { IPermissionRepository } from "../../modules/permission/repositories/IPermissionRepository";
import { ProviderRepository } from "../../modules/provider/infra/typeorm/repositories/ProviderRepository";
import { IProviderRepository } from "../../modules/provider/repositories/IProviderRepository";
import { ShippingRepository } from "../../modules/shipping/infra/typeorm/repositories/ShippingRepository";
import { IShippingRepository } from "../../modules/shipping/repositories/IShippingRepository";
import { UserRepository } from "../../modules/user/infra/typeorm/repositories/UserRepository";
import { IUserRepository } from "../../modules/user/repositories/IUserRepositories";

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

container.registerSingleton<IDriverRepository>(
    "DriverRepository",
    DriverRepository
)

container.registerSingleton<IUserRepository>(
    "UserRepository",
    UserRepository
)

container.registerSingleton<IAddressRepository>(
    "AddressRepository",
    AddressRepository
)

container.registerSingleton<IProviderRepository>(
    "ProviderRepository",
    ProviderRepository
)

container.registerSingleton<IShippingRepository>(
    "ShippingRepository",
    ShippingRepository

)