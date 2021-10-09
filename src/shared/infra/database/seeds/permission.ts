import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { v4 } from "uuid";
import { Permission } from "../../../../modules/permission/infra/typeorm/entities/Permission";

export default class CreatePermission implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<void> {
        await connection
        .createQueryBuilder()
        .insert()
        .into(Permission)
        .values([
            {
                id: v4(),
                key: 'chave',
                value: '3000',
                group: 'usuario',
                order: 1,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                id: v4(),
                key: 'teste',
                value: '400',
                group: 'relatorio',
                order: 2,
                created_at: new Date(),
                updated_at: new Date(),
            },
        ])
        .execute();
    }

}
