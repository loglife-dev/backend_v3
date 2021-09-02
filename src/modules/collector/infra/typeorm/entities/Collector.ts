import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, Unique, UpdateDateColumn } from "typeorm"
import { v4 as uuidv4 } from 'uuid'

@Entity('collector')
class Collector {
    @PrimaryColumn()
    readonly id?: string;

    @Column()
    situation: string;

    @Column()
    company_name: string;

    @Column()
    trading_name: string;

    @Column({
        array: true,
        default: [],
        nullable: false,
      })
    hub_list: string;


    @Column({
        unique: true
    })
    cnpj: string;


    @Column()
    operational_email: string;

    @Column()
    delay_cost: string;

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
    municipal_register: string;

    @Column()
    payment_type: string;

    @Column()
    day_expiration: string;

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

export { Collector }