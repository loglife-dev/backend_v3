import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { v4 as uuidv4 } from 'uuid'

@Entity('hub')
class Hub {
    @PrimaryColumn()
    readonly id?: string;

    @Column({
        unique: true
    })
    name: string;

    @Column()
    state: string;

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

export { Hub }