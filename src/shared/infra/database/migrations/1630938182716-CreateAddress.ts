import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAddress1630938182716 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'address',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'customer_id',
                        type: 'uuid',
                    },
                    {
                        name: 'type',
                        type: 'varchar',
                    },
                    {
                        name: 'cnpj_cpf',
                        type: 'varchar',
                        isUnique: true,
                    },
                    {
                        name: 'trading_name',
                        type: 'varchar',
                    },
                    {
                        name: 'branch',
                        type: 'varchar',
                    },
                    {
                        name: 'responsible_name',
                        type: 'varchar',
                    },
                    {
                        name: 'responsible_email',
                        type: 'varchar',
                    },
                    {
                        name: 'responsible_telephone',
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
                        name: 'city_id',
                        type: 'uuid',
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
                        name: 'reference_point',
                        type: 'varchar',
                    },
                    {
                        name: 'icms',
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
                        name: 'FkCustomer',
                        referencedTableName: 'customer',
                        referencedColumnNames: ['id'],
                        columnNames: ['customer_id'],
                        onUpdate: 'CASCADE',
                        onDelete: 'SET NULL'
                    },
                    {
                        name: 'FKCity',
                        referencedTableName: 'city',
                        referencedColumnNames: ['id'],
                        columnNames: ['city_id'],
                        onUpdate: 'CASCADE',
                        onDelete: 'SET NULL'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('address')
    }

}
