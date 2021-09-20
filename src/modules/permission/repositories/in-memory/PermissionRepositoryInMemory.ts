import { IPermissionDTO } from "../../dtos/IPermissionDTO";
import { Permission } from "../../infra/typeorm/entities/Permission";
import { IPermissionRepository } from "../IPermissionRepository";



class PermissionnRepositoryInMemory implements IPermissionRepository {
    permissions: Permission[] = [];

    async Get(): Promise<Permission[]> {
        const all = this.permissions;
        return all;
    }

    async Create({ id, key, value, group, order }: IPermissionDTO): Promise<Permission> {
        const permission = new Permission();

        Object.assign(permission, {
            id: '1e0b9d6a-0739-11ec-9a03-0242ac130003',
            key,
            value,
            group,
            order,
        });
        this.permissions.push(permission);

        return permission;
    }

    async Update(permission: Permission): Promise<Permission> {
        this.permissions.push(permission);

        return permission;
    }

    async Delete(permission: Permission): Promise<void> {
        const findIndex = this.permissions.findIndex(permission => permission === permission);

        this.permissions.splice(findIndex, 1);
    }
    
    async findById(id: string): Promise<Permission> {
        const permission = this.permissions.find((permission) => permission.id === id);

        return permission;
    }

    async findByKey(key: string): Promise<Permission> {
        const permission = this.permissions.find((permission) => permission.key === key);

        return permission;
    }

}
export { PermissionnRepositoryInMemory }