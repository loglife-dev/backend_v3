import { IPermissionDTO } from "../../modules/permission/dtos/IPermissionDTO";
import { PermissionnRepositoryInMemory } from "../../modules/permission/repositories/in-memory/PermissionRepositoryInMemory";
import { CreatePermissionUseCase } from "../../modules/permission/useCases/create/PermissionUseCase";
import { UpdatePermissionUseCase } from "../../modules/permission/useCases/update/PermissionUseCase";


let createPermissionUseCase: CreatePermissionUseCase;
let permissionRepositoryInMemory: PermissionnRepositoryInMemory;
let updatePermissionUseCase: UpdatePermissionUseCase;

describe("Update permission", () => {
    beforeEach(() => {
        permissionRepositoryInMemory = new PermissionnRepositoryInMemory();
        createPermissionUseCase = new CreatePermissionUseCase(permissionRepositoryInMemory);
        updatePermissionUseCase = new UpdatePermissionUseCase(permissionRepositoryInMemory);
    });

    it("Should be able to update one permission", async () => {

        const permission: IPermissionDTO = {
            id: '1e0b9d6a-0739-11ec-9a03-0242ac130003',
            key: 'chave-wwl',
            group: 'test-permission',
            order: 1
        }

        await createPermissionUseCase.execute(permission)

        const updatePermission = await updatePermissionUseCase.execute({
            id: '1e0b9d6a-0739-11ec-9a03-0242ac130003',
            key: 'chave-wwlss',
            group: 'test-permission',
            order: 2
        })
        expect(updatePermission.key).toBe("chave-wwlss")
        expect(updatePermission.order).toBe(2)
    });
})