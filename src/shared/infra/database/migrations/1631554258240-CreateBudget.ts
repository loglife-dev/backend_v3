import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateBudget1631554258240 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'budget',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'customer_id',
                        type: 'uuid',
                        isNullable: false,
                    },
                    {
                        name: 'source_hub_id',
                        type: 'uuid',
                        isNullable: false,
                    },
                    {
                        name: 'destination_hub_id',
                        type: 'uuid',
                        isNullable: false,
                    },
                    {
                        name: 'source_cities',
                        type: 'int',
                        isArray: true,
                    },
                    {
                        name: 'destination_cities',
                        type: 'int',
                        isArray: true,
                    },
                    {
                        name: 'source_address_qty',
                        type: 'integer',
                    },
                    {
                        name: 'destination_address_qty',
                        type: 'integer',
                    },
                    {
                        name: 'deadline',
                        type: 'integer',
                    },
                    {
                        name: 'service_type',
                        type: 'varchar',
                    },
                    {
                        name: 'franchising',
                        type: 'integer',
                    },
                    {
                        name: 'modal',
                        type: 'varchar',
                    },
                    {
                        name: 'vehicle',
                        type: 'varchar',
                    },
                    {
                        name: 'caixa_termica',
                        type: 'integer',
                    },
                    {
                        name: 'embalagem_secundaria',
                        type: 'integer',
                    },
                    {
                        name: 'gelo_seco',
                        type: 'integer',
                    },
                    {
                        name: 'gelox',
                        type: 'integer',
                    },
                    {
                        name: 'isopor3l',
                        type: 'integer',
                    },
                    {
                        name: 'isopor7l',
                        type: 'integer',
                    },
                    {
                        name: 'terciaria3l',
                        type: 'integer',
                    },
                    {
                        name: 'terciaria8l',
                        type: 'integer',
                    },
                    {
                        name: 'price',
                        type: 'float',
                    },
                    {
                        name: 'price_kg_extra',
                        type: 'float',
                    },
                    {
                        name: 'transfer_budget',
                        type: 'float',
                    },
                    {
                        name: 'price_add_collect',
                        type: 'float',
                    },
                    {
                        name: 'price_add_delivery',
                        type: 'float',
                    },
                    {
                        name: 'price_unsuccessful_collect',
                        type: 'float',
                    },
                    {
                        name: 'observation',
                        type: 'text',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    }
                ],
                foreignKeys: [
                    {
                        name: 'FKCustomer',
                        referencedTableName: 'customer',
                        referencedColumnNames: ['id'],
                        columnNames: ['customer_id'],
                        onUpdate: 'CASCADE',
                        onDelete: 'SET NULL',
                    },
                    {
                        name: 'FKHubSource',
                        referencedTableName: 'hub',
                        referencedColumnNames: ['id'],
                        columnNames: ['source_hub_id'],
                        onUpdate: 'CASCADE',
                        onDelete: 'SET NULL',
                    },
                    {
                        name: 'FKHubDestination',
                        referencedTableName: 'hub',
                        referencedColumnNames: ['id'],
                        columnNames: ['destination_hub_id'],
                        onUpdate: 'CASCADE',
                        onDelete: 'SET NULL',
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('budget')
    }

}
