import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Service } from "../../../../service/infra/typeorm/entities/Service";
import { v4 as uuidv4 } from 'uuid'
@Entity('boardService')
class BoardService {
    @PrimaryColumn()
    id: string;

    @OneToOne(() => Service)
    @JoinColumn({ name: 'service_id' })
    serviceId: Service

    @Column()
    service_id: string;

    @Column()
    board_id: string;

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