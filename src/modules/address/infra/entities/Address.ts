
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid'
import { City } from '../../../city/infra/entities/City';
import { Customer } from '../../../customer/infra/typeorm/entities/Customer';


@Entity('address')
class Address {
    @PrimaryColumn()
    id?: string;

    @JoinColumn({ name: 'customer_id' })
    @ManyToOne(() => Customer)
    customerId: Customer;

    @Column()
    customer_id: string;

    @Column()
    type: string

    @Column({
        unique: true
    })
    cnpj_cpf: string;

    @Column()
    trading_name: string;

    @Column()
    branch: string;

    @Column()
    responsible_name: string;

    @Column()
    responsible_email: string;

    @Column()
    responsible_telephone: string;

    @Column()
    cep: string;

    @Column()
    state: string;

    @JoinColumn({ name: 'city_id' })
    @OneToOne(() => City)
    cityId: City;

    @Column()    
    city_id: string;

    @Column()
    street: string; 

    @Column()
    number: string;

    @Column()
    neighborhood: string;

    @Column()
    complement: string;

    @Column()
    reference_point: string;

    @Column()
    icms: string;

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
export { Address }