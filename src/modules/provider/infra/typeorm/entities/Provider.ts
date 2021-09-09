import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';
import { City } from "../../../../city/infra/entities/City";
import { Hub } from "../../../../hub/infra/typeorm/entities/Hub";
@Entity('provider')
class Provider {
    @PrimaryColumn()
    id?: string;

    @Column()
    company_name: string;

    @Column()
    trading_name: string;

    @Column()
    hub_id: string;

    @JoinColumn({ name: 'hub_id' })
    @ManyToOne(() => Hub)
    hubId: Hub;

    @Column({
        unique: true
    })
    email: string;

    @Column()
    material: string;

    @Column()
    unit_cost: string;

    @Column()
    payment_conditional: string;

    @Column()
    day_expiration_1: string;

    @Column()
    day_expiration_2: string;

    @Column()
    payment_type: string;

    @Column()
    cellphone: string;

    @Column()
    telephone: string;

    @Column()
    cep: string;

    @Column()
    state: string;

    @Column()
    city: string;

    @Column()
    street: string;

    @Column()
    number: string;

    @Column()
    neighborhood: string;

    @Column()
    complement: string;

    @Column()
    business_open: Date;

    @Column()
    business_close: Date;

    @Column()
    saturday_open: Date;

    @Column()
    saturday_close: Date;

    @Column()
    sunday_open: Date;

    @Column()
    sunday_close: Date;

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

export { Provider }