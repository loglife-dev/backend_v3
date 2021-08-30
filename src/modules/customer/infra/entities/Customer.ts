import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, Unique, UpdateDateColumn } from "typeorm"
import { v4 as uuidv4 } from 'uuid'
import { Hub } from "../../../hub/infra/typeorm/entities/Hub";

@Entity('customer')
class Customer {
    @PrimaryColumn()
    readonly id?: string;

    @Column()
    type: string;

    @Column()
    situation: string;

    @Column()
    trading_firstname: string;

    @Column()
    company_lastname: string;

    @Column()
    cnpj_cpf: string;
    

    @Column()
    deadline_delivery: Date;

    @Column()
    operational_email: string;

    @Column()
    financial_email: string;

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
    state_register: string;

    @Column()
    icms: string;

    @Column()
    iss: string;

    @Column()
    payment_conditional: string;

    @Column()
    day_expiration_1: string;

    @Column()
    day_expiration_2: string;

    @Column()
    payment_type: string;

    @Column()
    emission_type: string;

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

export { Customer }