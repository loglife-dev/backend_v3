import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateBoardService1632924869648 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'boardService',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'service_id',
                        type: 'uuid',
                        isNullable: false,
                    },
                    {
                        name: 'branch_id',
                        type: 'uuid',
                        isNullable: false,
                    },
                    {
                        name: 'driver_id',
                        type: 'uuid',
                        isNullable: false,
                    },
                    {
                        name: 'step',
                        type: 'varchar',
                    },
                    {
                        name: 'arrival_latitude',
                        type: 'varchar'
                    },
                    {
                        name: 'arrival_longitude',
                        type: 'varchar'
                    },
                    {
                        name: 'arrival_timestamp',
                        type: 'timestamp',
                    },
                    {
                        name: 'operational_number',
                        type: 'text',
                        isNullable: true,
                    },
                    {
                        name: 'cte',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'cte_loglife',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'board_volume',
                        type: 'integer',
                        isNullable: true,
                    },
                    {
                        name: 'board_weight',
                        type: 'float',
                        isNullable: true,
                    },
                    {
                        name: 'cte_photo',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'real_weight',
                        type: 'float',
                        isNullable: true,
                    },
                    {
                        name: 'taxed_weight',
                        type: 'float',
                        isNullable: true,
                    },
                    {
                        name: 'cte_transfer_cost',
                        type: 'float',
                        isNullable: true,
                    },
                    {
                        name: 'departure_latitude',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'departure_longitude',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'departure_timestamp',
                        type: 'timestamp',
                        isNullable: true,
                    },
                    {
                        name: 'board_observation',
                        type: 'text',
                        isNullable: true,
                    },
                    {
                        name: 'validate_observation',
                        type: 'text',
                        isNullable: true,
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
                        name: 'FKService',
                        referencedTableName: 'service',
                        referencedColumnNames: ['id'],
                        columnNames: ['service_id'],
                        onUpdate: 'CASCADE',
                        onDelete: 'CASCADE'
                    },
                    {
                        name: 'FKBranch',
                        referencedTableName: 'branch',
                        referencedColumnNames: ['id'],
                        columnNames: ['branch_id'],
                        onUpdate: 'CASCADE',
                        onDelete: 'SET NULL',
                    },
                    {
                        name: 'FKDriver',
                        referencedTableName: 'driver',
                        referencedColumnNames: ['id'],
                        columnNames: ['driver_id'],
                        onUpdate: 'CASCADE',
                        onDelete: 'SET NULL',
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('boardService');
    }

}
