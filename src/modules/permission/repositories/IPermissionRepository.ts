import { IBaseRepository } from "../../../shared/infra/repositories/IBaseRepositories";
import { Permission } from "../infra/typeorm/entities/Permission";

export interface IPermissionRepository extends IBaseRepository<Permission> {

    findById(id: string): Promise<Permission>;
    findByKey(key: string): Promise<Permission>;

}