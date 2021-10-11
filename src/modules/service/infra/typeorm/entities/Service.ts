import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm"
import { Customer } from "../../../../customer/infra/typeorm/entities/Customer";
import { v4 as uuidv4 } from 'uuid';
import { RequestedService } from "../../../../requestedService/infra/typeorm/entities/RequestedService";
import { CollectService } from "../../../../collectService/infra/typeorm/entities/CollectService";
import { BoardService } from "../../../../boardService/infra/typeorm/entities/BoardService";
import { LandingService } from "../../../../landingService/infra/typeorm/entities/LandingService";
import { DeliveryService } from "../../../../deliveryService/infra/typeorm/entities/DeliveryService";
import { AllocateService } from "../../../../allocateService/infra/typeom/entities/AllocateService";
import { AvailableService } from "../../../../availableService/infra/typeorm/entities/AvailableService";

@Entity('service')
class Service {
    @PrimaryColumn()
    id: string;

    @Column()
    protocol: number;

    @Column()
    step: string;

    @OneToOne(() => RequestedService, requestedService => requestedService.serviceId, {
        eager: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    requestedServiceId: RequestedService;

    @OneToOne(() => CollectService, collectService => collectService.serviceId)
    collectServiceId: CollectService;

    @OneToOne(() => BoardService, boardService => boardService.serviceId)
    boardServiceId: BoardService;

    @OneToOne(() => AllocateService, allocateService => allocateService.serviceId)
    allocateServiceId: AllocateService;

    @OneToOne(() => AvailableService, availableService => availableService.serviceId)
    availableServiceId: AvailableService;

    @OneToOne(() => LandingService, landingService => landingService.serviceId)
    landingServiceId: LandingService;

    @OneToOne(() => DeliveryService, deliveryService => deliveryService.serviceId)
    deliveryServiceId: DeliveryService;

    @JoinColumn({ name: 'customer_id' })
    @OneToOne(() => Customer)
    customerId: Customer;

    @Column()
    customer_id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidv4()
        }
    }

}
export { Service }