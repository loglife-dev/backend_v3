import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm"
import { Customer } from "../../../../customer/infra/typeorm/entities/Customer";
import { v4 as uuidv4 } from 'uuid';
@Entity('service')
class Service {
    @PrimaryColumn()
    id: string;

    @Column()
    protocol: Number;

    @Column()
    step: string;

    @JoinColumn({ name: 'customer_id' })
    @OneToOne(() => Customer)
    customerId: Customer;

    @Column()
    customer_id: string;

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
export { Service }