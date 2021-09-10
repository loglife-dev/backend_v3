import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateBranch1631282941282 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'branch',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'nickname',
                        type: 'varchar',
                        isUnique: true,
                    },
                    {
                        name: 'hub_id',
                        type: 'uuid',
                        isNullable: false,
                    },
                    {
                        name: 'shipping_id',
                        type: 'uuid',
                        isNullable: false,
                    },
                    {
                        name: 'email',
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
                    },
                    {
                        name: 'saturday_close',
                        type: 'timestamp',
                    },
                    {
                        name: 'sunday_open',
                        type: 'timestamp',
                    },
                    {
                        name: 'sunday_close',
                        type: 'timestamp',
                    },
                    {
                        name: 'observation',
                        type: 'text'
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
                        name: 'FKHub',
                        referencedTableName: 'hub',
                        referencedColumnNames: ['id'],
                        columnNames: ['hub_id'],
                        onUpdate: 'CASCADE',
                        onDelete: 'SET NULL'
                    },
                    {
                        name: 'FKShipping',
                        referencedTableName: 'shipping',
                        referencedColumnNames: ['id'],
                        columnNames: ['shipping_id'],
                        onUpdate: 'CASCADE',
                        onDelete: 'SET NULL'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('branch');
    }

}
