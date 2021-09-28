import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCollectorCost1631298409593 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'collectorCost',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'collector_id',
                        type: 'uuid',
                        isNullable: false,
                    },
                    {
                        name: 'city_id',
                        type: 'uuid',
                        isNullable: false,
                    },
                    {
                        name: 'cost_motorcycle',
                        type: 'varchar',
                    },
                    {
                        name: 'additional_cost_motorcycle',
                        type: 'varchar',
                    },
                    {
                        name: 'cost_car',
                        type: 'varchar',
                    },
                    {
                        name: 'additional_cost_car',
                        type: 'varchar',
                    },
                    {
                        name: 'cost_truck',
                        type: 'varchar',
                    },
                    {
                        name: 'additional_cost_truck',
                        type: 'varchar',
                    },
                    {
                        name: 'observation',
                        type: 'text',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],
                foreignKeys: [
                    {
                        name: 'FKCollector',
                        referencedTableName: 'collector',
                        referencedColumnNames: ['id'],
                        columnNames: ['collector_id'],
                        onUpdate: 'CASCADE',
                        onDelete: 'SET NULL',
                    },
                    {
                        name: 'FKCity',
                        referencedTableName: 'city',
                        referencedColumnNames: ['id'],
                        columnNames: ['city_id'],
                        onUpdate: 'CASCADE',
                        onDelete: 'SET NULL',
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('collectorCost')
    }

}
