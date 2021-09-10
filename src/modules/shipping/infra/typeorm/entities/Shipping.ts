import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm"
import { v4 as uuidv4 } from 'uuid'

@Entity('shipping')
class Shipping {
    @PrimaryColumn()
    id?: string;

    @Column()
    company_name: string;

    @Column()
    trading_name: string;

    @Column({
        unique: true
    })
    cnpj: string;

    @Column({
        unique: true
    })
    email: string;

    @Column()
    modal: string;

    @Column()
    cellphone: string;

    @Column()
    telephone: string;

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
export { Shipping }