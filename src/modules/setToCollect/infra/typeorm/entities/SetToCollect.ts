import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm"
import { Address } from "../../../../address/infra/entities/Address";
import { Service } from "../../../../service/infra/typeorm/entities/Service";
import { Provider } from "../../../../provider/infra/typeorm/entities/Provider";
import { Driver } from "../../../../driver/infra/typeorm/entities/Driver";
import { v4 as uuidv4 } from 'uuid';

@Entity('setToCollect')
class SetToCollect {
    @PrimaryColumn()
    id: string;

    @JoinColumn({ name: 'service_id' })
    @OneToOne(() => Service)
    serviceId: Service

    @Column()
    service_id: string;

    @Column()
    step: string;

    @JoinColumn({ name: 'address_id' })
    @OneToOne(() => Address)
    addressId: Address

    @Column()
    address_id: string;

    @JoinColumn({ name: 'provider_id' })
    @OneToOne(() => Provider)
    providerId: Provider

    @Column()
    provider_id: string;

    @JoinColumn({ name: 'driver_id' })
    @OneToOne(() => Driver)
    driverId: Driver

    @Column()
    driver_id: string;

    @Column()
    observation: string;

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
export { SetToCollect }