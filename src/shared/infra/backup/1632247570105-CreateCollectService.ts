import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCollectService1632247570105 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'collectService',
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
                        name: 'volume',
                        type: 'integer',
                        isNullable: true,
                    },
                    {
                        name: 'sample',
                        type: 'integer',
                        isNullable: true,
                    },
                    {
                        name: 'problem',
                        type: 'text',
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
                        name: 'receipt_photo',
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
                        name: 'unsuccess_latitude',
                        type: 'timestamp',
                        isNullable: true,
                    },
                    {
                        name: 'unsuccess_longitude',
                        type: 'timestamp',
                        isNullable: true,
                    },
                    {
                        name: 'unsuccess_timestamp',
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
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('collectService')
    }

}
