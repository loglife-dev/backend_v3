import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IPermissionDTO } from "../../dtos/IPermissionDTO";
import { Permission } from "../../infra/typeorm/entities/Permission";
import { IPermissionRepository } from "../../repositories/IPermissionRepository";


@injectable()
class UpdatePermissionUseCase {
    constructor(
        @inject("PermissionRepository")
        private readonly permissionRepository: IPermissionRepository) { }

    async execute({
        id,
        key,
        group,
        order,
    }: IPermissionDTO): Promise<Permission> {
        const permissionExists = await this.permissionRepository.findById(id)

        if (!permissionExists) {
            throw new AppError("Permission does not exists!");
        }

        const permissionExistKey = await this.permissionRepository.findByKey(key)

        if (permissionExistKey && permissionExists.key !== key) {
            throw new AppError("Key already exists!");
        }


        Object.assign(permissionExists, {
            id,
            key,
            group,
            order,
        });

        const updatePermission = await this.permissionRepository.Update(
            permissionExists
        );

        return updatePermission;
    }
}

export { UpdatePermissionUseCase }