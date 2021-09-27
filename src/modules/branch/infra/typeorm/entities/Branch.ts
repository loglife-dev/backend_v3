import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid'
import { Hub } from "../../../../hub/infra/typeorm/entities/Hub";
import { Shipping } from "../../../../shipping/infra/typeorm/entities/Shipping";

@Entity('branch')
class Branch {
    @PrimaryColumn()
    id: string;

    @Column()
    nickname: string;

    @JoinColumn({ name: 'hub_id' })
    @ManyToOne(() => Hub)
    hubId: Hub;

    @Column()
    hub_id: string;

    @JoinColumn({ name: 'shipping_id' })
    @ManyToOne(() => Shipping)
    shippingId: Shipping;

    @Column()
    shipping_id: string;

    @Column()
    email: string;

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

export { Branch }