import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm"
import { v4 as uuidv4 } from 'uuid'
import { Hub } from "../../../hub/infra/typeorm/entities/Hub";

@Entity('city')
class City {
    @PrimaryColumn()
    readonly id?: string;

    @Column({
        unique: true
    })
    name: string;

    @Column()
    state: string;

    @Column()
    hub_id: string;

    @JoinColumn({ name: 'hub_id' })
    @ManyToOne(() => Hub)
    hubId: Hub;

    @Column()
    schedule_deadline: Date;

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

export { City }