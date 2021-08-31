import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IPermissionRepository } from "../../repositories/IPermissionRepository";



@injectable()
class DeletePermissionUseCase {
    constructor(
        @inject("PermissionRepository")
        private readonly permissionRepository: IPermissionRepository) { }

    async execute(id: string): Promise<void> {
        const permission = await this.permissionRepository.findById(id)

        if (!permission) {
            throw new AppError("Permission does not exists!");
        }

        await this.permissionRepository.Delete(permission);

    }
}

export { DeletePermissionUseCase }