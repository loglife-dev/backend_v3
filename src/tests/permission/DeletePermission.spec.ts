import { IPermissionDTO } from "../../modules/permission/dtos/IPermissionDTO";
import { PermissionnRepositoryInMemory } from "../../modules/permission/repositories/in-memory/PermissionRepositoryInMemory";
import { CreatePermissionUseCase } from "../../modules/permission/useCases/create/PermissionUseCase";
import { DeletePermissionUseCase } from "../../modules/permission/useCases/delete/PermissionUseCase";



let createPermissionUseCase: CreatePermissionUseCase;
let permissionRepositoryInMemory: PermissionnRepositoryInMemory;
let deletePermissionUseCase: DeletePermissionUseCase;

describe("Delete a permission", () => {
    beforeEach(() => {
        permissionRepositoryInMemory = new PermissionnRepositoryInMemory();
        createPermissionUseCase = new CreatePermissionUseCase(permissionRepositoryInMemory);
        deletePermissionUseCase = new DeletePermissionUseCase(permissionRepositoryInMemory);

    });
    it("Should be able to exclude one customer", async () => {

        const permission: IPermissionDTO = {
            id: '1e0b9d6a-0739-11ec-9a03-0242ac130003',
            key: 'chave-wwl',
            value: '10',
            group: 'test-permission',
            order: 1
        }

        await createPermissionUseCase.execute(permission)

        const permissionDelete = await deletePermissionUseCase.execute(permission.id);

        expect(permissionDelete).toBe(undefined);
    });
})