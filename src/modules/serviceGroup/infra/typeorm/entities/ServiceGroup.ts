import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';
@Entity('service_group')
class ServiceGroup {

    @PrimaryColumn()
    id: string;

    @Column("varchar", {
        array: true
    })
    service_list: string[];

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
export { ServiceGroup }