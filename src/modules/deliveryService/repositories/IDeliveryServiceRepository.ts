import { IBaseRepository } from "../../../shared/infra/repositories/IBaseRepositories";
import { DeliveryService } from "../infra/typeorm/entities/DeliveryService";

export interface IDeliveryServiceRepository extends IBaseRepository<DeliveryService> {
    Get(): Promise<DeliveryService[]>;
    findById(id: string): Promise<DeliveryService>;
    findAllIds(id: string): Promise<DeliveryService[]>;
    findQuery(service_id: string, address_id: string): Promise<DeliveryService>
}