import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Service } from "../../../../service/infra/typeorm/entities/Service";
import { v4 as uuidv4 } from 'uuid'
import { Driver } from "../../../../driver/infra/typeorm/entities/Driver";
import { Branch } from "../../../../branch/infra/typeorm/entities/Branch";
@Entity('boardService')
class BoardService {
    @PrimaryColumn()
    id: string;

    @OneToOne(() => Service)
    @JoinColumn({ name: 'service_id' })
    serviceId: Service

    @Column()
    service_id: string;

    @JoinColumn({ name: 'branch_id' })
    @OneToOne(() => Branch)
    branchId: Branch

    @Column()
    branch_id: string;

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
    operational_number: string;

    @Column()
    cte: string;

    @Column()
    cte_loglife: string;

    @Column()
    board_volume: Number;

    @Column()
    board_weight: Number;

    @Column()
    cte_photo: string;

    @Column()
    real_weight: Number;

    @Column()
    taxed_weight: Number;

    @Column()
    cte_transfer_cost: Number;

    @Column()
    departure_latitude: string;

    @Column()
    departure_longitude: string;

    @Column()
    departure_timestamp: Date;

    @Column()
    board_observation: string;

    @Column()
    validate_observation: string;

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
export { BoardService }