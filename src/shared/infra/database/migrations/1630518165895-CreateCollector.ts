import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCollector1630518165895 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'collector',
                columns: [
                    {
                        name: 'id', type: 'uuid', isPrimary: true
                    },
                    {
                        name: 'situation',
                        type: 'varchar',
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
                        name: 'hub_list',
                        type: 'varchar',
                        isArray: true,
                    },
                    {
                        name: 'cnpj',
                        type: 'varchar',
                        isUnique: true,
                    },
                    {
                        name: 'operational_email',
                        type: 'varchar',
                    },
                    {
                        name: 'financial_email',
                        type: 'varchar'
                    },
                    {
                        name: 'delay_cost',
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
                        name: 'municipal_register',
                        type: 'varchar',
                    },
                    {
                        name: 'payment_type',
                        type: 'varchar',
                    },
                    {
                        name: 'day_expiration',
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
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('collector');
    }

}
