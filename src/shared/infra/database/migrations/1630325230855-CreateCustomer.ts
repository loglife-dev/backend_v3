import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCustomer1630325230855 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'customer',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'type',
                        type: 'varchar',
                    },
                    {
                        name: 'situation',
                        type: 'varchar',
                    },
                    {
                        name: 'trading_firstname',
                        type: 'varchar',
                    },
                    {
                        name: 'company_lastname',
                        type: 'varchar',
                    },
                    {
                        name: 'cnpj_cpf',
                        type: 'varchar',
                        isUnique: true,
                    },
                    {
                        name: 'deadline_delivery',
                        type: 'timestamp',
                    },
                    {
                        name: 'operational_email',
                        type: 'varchar',
                    },
                    {
                        name: 'financial_email',
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
                        name: 'state_register',
                        type: 'varchar',
                    },
                    {
                        name: 'icms',
                        type: 'varchar',
                    },
                    {
                        name: 'iss',
                        type: 'varchar',
                    },
                    {
                        name: 'payment_conditional',
                        type: 'varchar',
                    },
                    {
                        name: 'day_expiration_1',
                        type: 'varchar',
                    },
                    {
                        name: 'day_expiration_2',
                        type: 'varchar',
                    },
                    {
                        name: 'payment_type',
                        type: 'varchar',
                    },
                    {
                        name: 'emission_type',
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
                ]

            })

        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('customer');
    }

}
