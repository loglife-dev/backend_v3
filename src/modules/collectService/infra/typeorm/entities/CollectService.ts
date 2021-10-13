import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm"
import { v4 as uuidv4 } from 'uuid';
import { Address } from "../../../../address/infra/entities/Address";
import { Driver } from "../../../../driver/infra/typeorm/entities/Driver";
import { Service } from "../../../../service/infra/typeorm/entities/Service";
import { Provider } from "../../../../provider/infra/typeorm/entities/Provider";
@Entity('collectService')
class CollectService {
    @PrimaryColumn()
    id: string;

    @JoinColumn({ name: 'service_id' })
    @OneToOne(() => Service)
    serviceId: Service;

    @Column()
    service_id: string;

    @JoinColumn({ name: 'address_id' })
    @OneToOne(() => Address)
    addressId: Address

    @Column()
    address_id: string;

    @JoinColumn({ name: 'driver_id' })
    @OneToOne(() => Driver)
    driverId: Driver

    @Column()
    driver_id: string;

    @JoinColumn({ name: 'provider_id' })
    @OneToOne(() => Provider)
    providerId: Provider;

    @Column()
    provider_id: string;

    @Column()
    step: string;

    @Column()
    arrival_latitude: string;

    @Column()
    arrival_longitude: string;

    @Column()
    arrival_timestamp: Date;

    @Column()
    responsible_name: string;

    @Column()
    responsible_cpf: string;

    @Column()
    volume: Number;

    @Column()
    sample: Number;

    @Column()
    problem: string;

    @Column()
    box_photo: string;

    @Column()
    content_declaration: string;

    @Column()
    receipt_photo: string;

    @Column()
    departure_latitude: string;

    @Column()
    departure_longitude: string;

    @Column()
    departure_timestamp: Date;

    @Column()
    unsuccess_latitude: string;

    @Column()
    unsuccess_longitude: string;

    @Column()
    unsuccess_timestamp: Date;

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

export { CollectService }