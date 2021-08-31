import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { v4 as uuidv4 } from 'uuid'

@Entity('permission')
class Permission{
    @PrimaryColumn()
    readonly id?: string;

    @Column()
    key: string;

    @Column()
    group: string;

    @Column()
    order: Number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuidv4()
        }
    }

}

export { Permission}