import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateShipping1631273434239 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'shipping',
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
                        name: 'cnpj',
                        type: 'varchar',
                        isUnique: true,
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isUnique: true,
                    },
                    {
                        name: 'modal',
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
        await queryRunner.dropTable('shipping');
    }

}
