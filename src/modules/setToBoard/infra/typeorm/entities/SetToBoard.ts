import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Branch } from "../../../../branch/infra/typeorm/entities/Branch";
import { Driver } from "../../../../driver/infra/typeorm/entities/Driver";
import { v4 as uuidv4 } from 'uuid'
import { ServiceGroup } from "../../../../serviceGroup/infra/typeorm/entities/ServiceGroup";

@Entity("setToBoard")
class SetToBoard {
    @PrimaryColumn()
    id: string;

    @JoinColumn({ name: 'group_id' })
    @OneToOne(() => ServiceGroup)
    serviceGroupId: ServiceGroup;

    @Column()
    group_id: string;

    @Column()
    step: string;

    @JoinColumn({ name: 'branch_id' })
    @OneToOne(() => Branch)
    branchId: Branch;

    @Column()
    branch_id: string;

    @JoinColumn({ name: 'driver_id' })
    @OneToOne(() => Driver)
    driverId: Driver;

    @Column()
    driver_id: string;

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
export { SetToBoard }