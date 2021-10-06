import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class DeliveryService1633531762112 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'deliveryService',
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
                        name: 'address_id',
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
                        type: 'varchar',
                    },
                    {
                        name: 'arrival_longitude',
                        type: 'varchar',
                    },
                    {
                        name: 'arrival_timestamp',
                        type: 'timestamp',
                    },
                    {
                        name: 'responsible_name',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'responsible_cpf',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'delivery_volume',
                        type: 'int',
                        isNullable: true,
                    },
                    {
                        name: 'problem',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'box_photo',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'content_declaration',
                        type: 'varchar',
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
                        name: 'observation',
                        type: 'text',
                        isNullable: true,
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
                        name: 'FKService',
                        referencedTableName: 'service',
                        referencedColumnNames: ['id'],
                        columnNames: ['service_id'],
                        onUpdate: 'CASCADE',
                        onDelete: 'CASCADE',
                    },
                    {
                        name: 'FKAddress',
                        referencedTableName: 'address',
                        referencedColumnNames: ['id'],
                        columnNames: ['address_id'],
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
        await queryRunner.dropTable('deliveryService')
    }

}
