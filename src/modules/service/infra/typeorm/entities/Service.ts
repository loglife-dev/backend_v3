import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm"
import { Customer } from "../../../../customer/infra/typeorm/entities/Customer";
import { v4 as uuidv4 } from 'uuid';
import { ServiceGroup } from "../../../../serviceGroup/infra/typeorm/entities/ServiceGroup";
import { RequestedService } from "../../../../requestedService/infra/typeorm/entities/RequestedService";
@Entity('service')
class Service {
    @PrimaryColumn()
    id: string;

    @Column()
    protocol: number;

    @Column()
    step: string;

    @OneToOne(() => RequestedService, requestedService => requestedService.serviceId,
        { eager: true })
    requestedService: RequestedService;

    @JoinColumn({ name: 'customer_id' })
    @OneToOne(() => Customer)
    customerId: Customer;

    @Column()
    customer_id: string;

    @JoinColumn({ name: 'group_id' })
    @OneToOne(() => ServiceGroup)
    groupId: ServiceGroup

    @Column()
    group_id: string;

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