import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm"
import { Address } from "../../../../address/infra/entities/Address";
import { Driver } from "../../../../driver/infra/typeorm/entities/Driver";
import { Service } from "../../../../service/infra/typeorm/entities/Service";
import { v4 as uuidv4 } from 'uuid'

@Entity("landingService")
class LandingService {
    @PrimaryColumn()
    id: string;

    @JoinColumn({ name: 'service_id' })
    @OneToOne(() => Service)
    serviceId: Service

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

    @Column()
    step: string;

    @Column()
    arrival_latitude: string;

    @Column()
    arrival_longitude: string;

    @Column()
    arrival_timestamp: Date;

    @Column()
    landing_volume: Number;

    @Column()
    box_break: boolean;

    @Column()
    cargo_photo: string;

    @Column()
    departure_latitude: string;

    @Column()
    departure_longitude: string;

    @Column()
    departure_timestamp: Date;

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
export { LandingService }