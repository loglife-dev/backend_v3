import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { v4 as uuidv4 } from 'uuid'
import { Collector } from "../../../../collector/infra/typeorm/entities/Collector";
import { Customer } from "../../../../customer/infra/typeorm/entities/Customer";
import { Driver } from "../../../../driver/infra/typeorm/entities/Driver";

@Entity('user')
class User {
    @PrimaryColumn()
    id?: string;

    @Column()
    situation: string;

    @Column()
    user_type: string;

    @Column()
    loglife_employee: Boolean;

    @Column()
    customer_id: string;

    @JoinColumn({ name: 'customer_id' })
    @OneToOne(() => Customer)
    customerId: Customer

    @Column()
    collector_id: string;

    @JoinColumn({ name: 'collector_id' })
    @OneToOne(() => Collector)
    collectorId: Collector

    @Column()
    driver_id: string;

    @JoinColumn({ name: 'driver_id' })
    @OneToOne(() => Driver)
    driverId: Driver

    @Column("varchar", {
        array: true
    })
    permissions: string[];

    @Column({
        unique: true
    })
    email: string;

    @Column()
    password: string;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

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

export { User }