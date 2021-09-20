import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IPermissionDTO } from "../../dtos/IPermissionDTO";
import { Permission } from "../../infra/typeorm/entities/Permission";
import { IPermissionRepository } from "../../repositories/IPermissionRepository";


@injectable()
class CreatePermissionUseCase {
    constructor(
        @inject("PermissionRepository")
        private readonly permissionRepository: IPermissionRepository) { }

    async execute({
        key,
        value,
        group,
        order,

    }: IPermissionDTO): Promise<Permission> {

        if (key === "" || group === "") {
            throw new AppError("fill in all fields", 400)
        }

        const permissionAlreadyExists = await this.permissionRepository.findByKey(key);

        if (permissionAlreadyExists) {
            throw new AppError("There is already a registered user with this Permission!!", 400)
        }

        const permission = new Permission();

        Object.assign(permission, {
            key,
            value,
            group,
            order,
        });

        const createPermission = await this.permissionRepository.Create(permission)

        return createPermission;

    }
}

export { CreatePermissionUseCase };