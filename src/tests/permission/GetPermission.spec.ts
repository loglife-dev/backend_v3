import { IPermissionDTO } from "../../modules/permission/dtos/IPermissionDTO";
import { PermissionnRepositoryInMemory } from "../../modules/permission/repositories/in-memory/PermissionRepositoryInMemory";
import { CreatePermissionController } from "../../modules/permission/useCases/create/PermissionController";
import { CreatePermissionUseCase } from "../../modules/permission/useCases/create/PermissionUseCase";
import { GetAllPermissionUseCase, GetPermissionUseCase } from "../../modules/permission/useCases/get/PermissionUseCase";


let createPermissionUseCase: CreatePermissionUseCase;
let permissionRepositoryInMemory: PermissionnRepositoryInMemory;
let getPermissionUseCase: GetPermissionUseCase;
let getAllPermissionUseCase: GetAllPermissionUseCase;

describe("List all permission", () => {
    beforeEach(() => {
        permissionRepositoryInMemory = new PermissionnRepositoryInMemory();
        getAllPermissionUseCase = new GetAllPermissionUseCase(permissionRepositoryInMemory);
        createPermissionUseCase = new CreatePermissionUseCase(permissionRepositoryInMemory);
        getPermissionUseCase = new GetPermissionUseCase(permissionRepositoryInMemory);
    });

    it("Should be able to list all permission", async () => {

        const permission: IPermissionDTO = {
            id: '1e0b9d6a-0739-11ec-9a03-0242ac130003',
            key: 'chave-wwl',
            value: '10',
            group: 'test-permission',
            order: 1
        }

        await createPermissionUseCase.execute(permission)

        const all = await getAllPermissionUseCase.execute()
        expect(all[0]).toHaveProperty("id");
        expect(all.length).toEqual(1);
    });

    it("Should be able to findOne id Permission", async () => {

        const permission: IPermissionDTO = {
            id: '1e0b9d6a-0739-11ec-9a03-0242ac130003',
            key: 'chave-wwl',
            value: '10',
            group: 'test-permission',
            order: 1
        }

        await createPermissionUseCase.execute(permission)

        const findPermission = await getPermissionUseCase.execute(permission.id);

        expect(findPermission.id).toBe("1e0b9d6a-0739-11ec-9a03-0242ac130003");
    })

})