import { BaseRepository } from "../../../../../shared/infra/repositories/BaseRepositories";
import { IPermissionRepository } from "../../../repositories/IPermissionRepository";
import { Permission } from "../entities/Permission";


class PermissionRepository extends BaseRepository<Permission> implements IPermissionRepository {
    constructor() {
        super(Permission)
    }

    async Get(): Promise<Permission[]> {
        return this.repository.find({
            order: {
                group: 'ASC',
                order: 'ASC'
            }
        });
    }

    async findById(id: string): Promise<Permission> {
        return this.repository.findOne({ id })
    }

    async findByKey(key: string): Promise<Permission> {
        return this.repository.findOne({ key })
    }

}

export { PermissionRepository }