import { container } from "tsyringe";
import { AddressRepository } from "../../modules/address/infra/repositories/AddressRepository";
import { IAddressRepository } from "../../modules/address/repositories/IAddressRepository";
import { BoardServiceRepository } from "../../modules/boardService/infra/typeorm/repositories/BoardServiceRepository";
import { IBoardServiceRepository } from "../../modules/boardService/repositories/IBoardServiceRepository";
import { BranchRepository } from "../../modules/branch/infra/typeorm/repositories/BranchRepository";
import { IBranchRepository } from "../../modules/branch/repositories/IBranchRepository";
import { BudgetRepository } from "../../modules/budget/infra/typeorm/repositories/BudgetRepository";
import { IBudgetRepository } from "../../modules/budget/repositories/IBudgetRepository";
import { CityRepository } from "../../modules/city/infra/repositories/CityRepositories";
import { ICityRepository } from "../../modules/city/repositories/ICityRepository";
import { CollectorRepository } from "../../modules/collector/infra/typeorm/repositories/CollectorRepository";
import { ICollectorRepository } from "../../modules/collector/repositories/ICollectorRepository";
import { CollectorCostRepository } from "../../modules/collector_cost/infra/typeorm/repositories/CollectorCostRepository";
import { ICollectorCostRepository } from "../../modules/collector_cost/repositories/ICollectorCostRepository";
import { CollectServiceRepository } from "../../modules/collectService/infra/typeorm/repositories/CollectServiceRepository";
import { ICollectServiceRepository } from "../../modules/collectService/repositories/ICollectServiceRepository";
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
import { RequestedServiceRepository } from "../../modules/requestedService/infra/typeorm/repositories/RequestedServiceRepository";
import { IRequestedServiceRepository } from "../../modules/requestedService/repositories/IRequestdServiceRepository";
import { ServiceRepository } from "../../modules/service/infra/typeorm/repositories/ServiceRepository";
import { IServiceRepository } from "../../modules/service/repositories/IServiceRepository";
import { ServiceGroupRepository } from "../../modules/serviceGroup/infra/typeorm/repositories/ServiceGroupRepository";
import { IServiceGroupRepository } from "../../modules/serviceGroup/repositories/IServiceGroupRepository";
import { SetToBoardRepository } from "../../modules/setToBoard/infra/typeorm/repositories/SetToBoardRepository";
import { ISetToBoardRepository } from "../../modules/setToBoard/repositories/ISetToBoardRepository";
import { SetToCollectRepository } from "../../modules/setToCollect/infra/typeorm/repositories/SetToCollectRepository";
import { ISetToCollectRepository } from "../../modules/setToCollect/repositories/ISetToCollectRepository";
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

container.registerSingleton<IBranchRepository>(
    "BranchRepository",
    BranchRepository
)

container.registerSingleton<ICollectorCostRepository>(
    "CollectorCostRepository",
    CollectorCostRepository
)

container.registerSingleton<IBudgetRepository>(
    "BudgetRepository",
    BudgetRepository
)

container.registerSingleton<IServiceRepository>(
    "ServiceRepository",
    ServiceRepository
)

container.registerSingleton<IRequestedServiceRepository>(
    "RequestedServiceRepository",
    RequestedServiceRepository
)

container.registerSingleton<ISetToCollectRepository>(
    "SetToCollectRepository",
    SetToCollectRepository
)

container.registerSingleton<ICollectServiceRepository>(
    "CollectServiceRepository",
    CollectServiceRepository
)

container.registerSingleton<IServiceGroupRepository>(
    "ServiceGroupRepository",
    ServiceGroupRepository
)

container.registerSingleton<ISetToBoardRepository>(
    "SetToBoardRepository",
    SetToBoardRepository
)

container.registerSingleton<IBoardServiceRepository>(
    "BoardServiceRepository",
    BoardServiceRepository
)