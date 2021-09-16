import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm"
import { Branch } from "../../../../branch/infra/typeorm/entities/Branch";
import { Budget } from "../../../../budget/infra/typeorm/entities/Budget";
import { Collector } from "../../../../collector/infra/typeorm/entities/Collector";
import { Provider } from "../../../../provider/infra/typeorm/entities/Provider";
import { Service } from "../../../../service/infra/typeorm/entities/Service";
import { v4 as uuidv4 } from 'uuid';

@Entity('requested_service')
class RequestedService {
    @PrimaryColumn()
    id: string;

    @JoinColumn({ name: 'service_id' })
    @OneToOne(() => Service)
    serviceId: Service;

    @Column()
    service_id: string;

    @JoinColumn({ name: 'budget_id' })
    @OneToOne(() => Budget)
    budgetId: Budget;

    @Column()
    budget_id: string;

    @Column("varchar", {
        array: true
    })
    source_address_id: string[];

    @Column("varchar", {
        array: true
    })
    destination_address_id: string[];

    @JoinColumn({ name: 'source_collector_id' })
    @OneToOne(() => Collector)
    sourceCollectorId: Collector;

    @Column()
    source_collector_id: string;

    @JoinColumn({ name: 'destination_collector_id' })
    @OneToOne(() => Collector)
    destinationCollectorId: Collector;

    @Column()
    destination_collector_id: string;

    @JoinColumn({ name: 'source_branch_id' })
    @OneToOne(() => Branch)
    sourceBranchId: Branch;

    @Column()
    source_branch_id: string;

    @JoinColumn({ name: 'source_branch_id' })
    @OneToOne(() => Branch)
    destinationBranchId: Branch;

    @Column()
    destination_branch_id: string;

    @JoinColumn({ name: 'provider_id' })
    @OneToOne(() => Provider)
    providerId: Provider;

    @Column()
    provider_id: string;

    @Column()
    deadline: Number;

    @Column()
    service_type: string;

    @Column()
    franchising: Number;

    @Column()
    modal: string;

    @Column()
    vehicle: string;

    @Column()
    caixa_termica: Number;

    @Column()
    embalagem_secundaria: Number;

    @Column()
    gelo_seco: Number;

    @Column()
    gelox: Number;

    @Column()
    isopor3l: Number;

    @Column()
    isopor7l: Number;

    @Column()
    terciaria3l: Number;

    @Column()
    terciaria8l: Number;

    @Column()
    collect_date: Date;

    @Column()
    collect_hour_start: Date;

    @Column()
    collect_hour_end: Date;

    @Column()
    delivery_date: Date;

    @Column()
    delivery_hour: Date;

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

export { RequestedService }