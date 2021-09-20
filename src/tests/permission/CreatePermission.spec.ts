import { IPermissionDTO } from "../../modules/permission/dtos/IPermissionDTO";
import { PermissionnRepositoryInMemory } from "../../modules/permission/repositories/in-memory/PermissionRepositoryInMemory";
import { CreatePermissionUseCase } from "../../modules/permission/useCases/create/PermissionUseCase";
import { AppError } from "../../shared/errors/AppError";



let createPermissionUseCase: CreatePermissionUseCase;
let permissionRepositoryInMemory: PermissionnRepositoryInMemory;


describe("Create Permission", () => {
    beforeEach(() => {
        permissionRepositoryInMemory = new PermissionnRepositoryInMemory();
        createPermissionUseCase = new CreatePermissionUseCase(permissionRepositoryInMemory);

    });
    it("should be able to create a new permission", async () => {

        const permission: IPermissionDTO = {
            id: '1e0b9d6a-0739-11ec-9a03-0242ac130003',
            key: 'chave-wwl',
            value: '10',
            group: 'test-permission',
            order: 1
        }

        await createPermissionUseCase.execute(permission)

        const permissionCreated = await permissionRepositoryInMemory.findByKey(permission.key);

        expect(permissionCreated).toHaveProperty("id")
    });

    it("should not be able to create a new permission with key exists", async () => {

        expect(async () => {
            const permission: IPermissionDTO = {
                id: '1e0b9d6a-0739-11ec-9a03-0242ac130003',
                key: 'chave-wwl',
                value: '10',
                group: 'test-permission',
                order: 1
            }
            await createPermissionUseCase.execute(permission);

            await createPermissionUseCase.execute(permission)

        }).rejects.toBeInstanceOf(AppError)

    })
})