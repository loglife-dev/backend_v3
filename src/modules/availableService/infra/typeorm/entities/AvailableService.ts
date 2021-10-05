import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Service } from "../../../../service/infra/typeorm/entities/Service";
import { v4 as uuidv4 } from 'uuid'

@Entity('availableService')
class AvailableService {
    @PrimaryColumn()
    id: string;

    @JoinColumn({ name: 'service_id' })
    @OneToOne(() => Service)
    serviceId: Service

    @Column()
    service_id: string;

    @Column()
    landing_availability_date: Date;

    @Column()
    landing_availability_hour: Date;

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
export { AvailableService }