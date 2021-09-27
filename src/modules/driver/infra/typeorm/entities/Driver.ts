import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm"
import { v4 as uuidv4 } from 'uuid'
import { Collector } from "../../../../collector/infra/typeorm/entities/Collector";

@Entity('driver')
class Driver {
    @PrimaryColumn()
    id: string;

    @Column()
    situation: string;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    collector_id: string;
   
    @ManyToOne(() => Collector,{
        eager: true
    })
    @JoinColumn({ name: 'collector_id' })
    collector: Collector;

    @Column()
    cpf: string;

    @Column()
    email: string;

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

export { Driver }