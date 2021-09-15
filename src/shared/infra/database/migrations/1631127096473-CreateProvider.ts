import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProvider1631127096473 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'provider',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'company_name',
                        type: 'varchar',
                    },
                    {
                        name: 'trading_name',
                        type: 'varchar',
                    },
                    {
                        name: 'hub_id',
                        type: 'uuid',
                        isNullable: false,
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isUnique: true,
                    },
                    {
                        name: 'material',
                        type: 'varchar',
                    },
                    {
                        name: 'unit_cost',
                        type: 'varchar',
                    },
                    {
                        name: 'payment_conditional',
                        type: 'varchar',
                    },
                    {
                        name: 'day_expiration_1',
                        type: 'varchar'
                    },
                    {
                        name: 'day_expiration_2',
                        type: 'varchar'
                    },
                    {
                        name: 'payment_type',
                        type: 'varchar',
                    },
                    {
                        name: 'cellphone',
                        type: 'varchar',
                    },
                    {
                        name: 'telephone',
                        type: 'varchar',
                    },
                    {
                        name: 'cep',
                        type: 'varchar',
                    },
                    {
                        name: 'state',
                        type: 'varchar',
                    },
                    {
                        name: 'city',
                        type: 'varchar',
                    },
                    {
                        name: 'street',
                        type: 'varchar',
                    },
                    {
                        name: 'number',
                        type: 'varchar',
                    },
                    {
                        name: 'neighborhood',
                        type: 'varchar',
                    },
                    {
                        name: 'complement',
                        type: 'varchar',
                    },
                    {
                        name: 'business_open',
                        type: 'timestamp',
                    },
                    {
                        name: 'business_close',
                        type: 'timestamp',
                    },
                    {
                        name: 'saturday_open',
                        type: 'timestamp',
                        isNullable: true,
                    },
                    {
                        name: 'saturday_close',
                        type: 'timestamp',
                        isNullable: true,
                    },
                    {
                        name: 'sunday_open',
                        type: 'timestamp',
                        isNullable: true,
                    },
                    {
                        name: 'sunday_close',
                        type: 'timestamp',
                        isNullable: true,
                    },
                    {
                        name: 'observation',
                        type: 'varchar',
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
                        name: 'FKHub',
                        referencedTableName: 'hub',
                        referencedColumnNames: ['id'],
                        columnNames: ['hub_id'],
                        onUpdate: 'CASCADE',
                        onDelete: 'SET NULL',
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('provider')
    }

}
