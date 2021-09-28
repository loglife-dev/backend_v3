import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid'
import { City } from "../../../../city/infra/entities/City";
import { Collector } from "../../../../collector/infra/typeorm/entities/Collector";

@Entity('collectorCost')
class Collector_Cost {
    @PrimaryColumn()
    id: string;

    @JoinColumn({ name: 'collector_id' })
    @ManyToOne(() => Collector)
    collectorId: Collector

    @Column()
    collector_id: string;

    @JoinColumn({ name: 'city_id' })
    @ManyToOne(() => City)
    cityId: City

    @Column()
    city_id: string;

    @Column()
    cost_motorcycle: string;

    @Column()
    additional_cost_motorcycle: string;

    @Column()
    cost_car: string;

    @Column()
    additional_cost_car: string;

    @Column()
    cost_truck: string;

    @Column()
    additional_cost_truck: string;

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

export { Collector_Cost }