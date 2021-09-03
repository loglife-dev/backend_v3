import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1630668816296 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'user',
                columns: [
                    {
                        name: 'id', 
                        type: 'uuid', 
                        isPrimary: true,
                    },
                    {
                        name: 'situation',
                        type: 'varchar',
                    },
                    {
                        name: 'user_type',
                        type: 'varchar',
                    },
                    {
                        name: 'loglife_employee',
                        type: 'boolean',
                        isNullable: true,
                    },
                    {
                        name: 'customer_id',
                        type: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'collector_id',
                        type: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'driver_id',
                        type: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'permissions',
                        type: 'varchar',
                        isArray: true,
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isUnique: true,
                    },
                    {
                        name: 'password',
                        type: 'varchar',
                    },
                    {
                        name: 'firstname',
                        type: 'varchar',
                    },
                    {
                        name: 'lastname',
                        type: 'varchar'
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
                        onDelete: 'SET NULL'
                        
                    },
                    {
                        name: 'FKCollector',
                        referencedTableName: 'collector',
                        referencedColumnNames: ['id'],
                        columnNames: ['collector_id'],
                        onUpdate: 'CASCADE',
                        onDelete: 'SET NULL'
                        
                    },
                    {
                        name: 'FKDriver',
                        referencedTableName: 'driver',
                        referencedColumnNames: ['id'],
                        columnNames: ['driver_id'],
                        onUpdate: 'CASCADE',
                        onDelete: 'SET NULL'
                        
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user');
    }

}
