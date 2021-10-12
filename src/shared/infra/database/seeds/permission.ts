import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { v4 } from "uuid";
import { Permission } from "../../../../modules/permission/infra/typeorm/entities/Permission";

export default class CreatePermission implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<void> {
        await connection
            .createQueryBuilder()
            .insert()
            .into(Permission)
            .values([
                {
                    id: v4(),
                    key: 'VISUALIZAR CONFIGURAÇÕES',
                    value: 'view-config',
                    group: 'config',
                    order: 1,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'ADICIONAR PERMISSÃO',
                    value: 'add-permission',
                    group: 'permission',
                    order: 1,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'EDITAR PERMISSÃO',
                    value: 'edit-permission',
                    group: 'permission',
                    order: 2,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'REMOVER PERMISSÃO',
                    value: 'remove-permission',
                    group: 'permission',
                    order: 3,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'ADICIONAR USUÁRIO',
                    value: 'add-user',
                    group: 'user',
                    order: 1,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'VISUALIZAR USUÁRIO',
                    value: 'view-user',
                    group: 'user',
                    order: 2,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'EDITAR USUÁRIO',
                    value: 'edit-user',
                    group: 'user',
                    order: 3,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'REMOVER USUÁRIO',
                    value: 'remove-user',
                    group: 'user',
                    order: 4,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'ADICIONAR CLIENTE',
                    value: 'add-customer',
                    group: 'customer',
                    order: 1,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'VISUALIZAR CLIENTE',
                    value: 'view-customer',
                    group: 'customer',
                    order: 2,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'EDITAR CLIENTE',
                    value: 'edit-customer',
                    group: 'customer',
                    order: 3,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'REMOVER CLIENTE',
                    value: 'remove-customer',
                    group: 'customer',
                    order: 4,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'ADICIONAR COLETADOR',
                    value: 'add-collector',
                    group: 'collector',
                    order: 1,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'VISUALIZAR COLETADOR',
                    value: 'view-collector',
                    group: 'collector',
                    order: 2,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'EDITAR COLETADOR',
                    value: 'edit-collector',
                    group: 'collector',
                    order: 3,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'REMOVER COLETADOR',
                    value: 'remove-collector',
                    group: 'collector',
                    order: 4,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'ADICIONAR MOTORISTA',
                    value: 'add-driver',
                    group: 'driver',
                    order: 1,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'VISUALIZAR MOTORISTA',
                    value: 'view-driver',
                    group: 'driver',
                    order: 2,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'EDITAR MOTORISTA',
                    value: 'edit-driver',
                    group: 'driver',
                    order: 3,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'REMOVER MOTORISTA',
                    value: 'remove-driver',
                    group: 'driver',
                    order: 4,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'ADICIONAR HUB',
                    value: 'add-hub',
                    group: 'hub',
                    order: 1,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'VISUALIZAR HUB',
                    value: 'view-hub',
                    group: 'hub',
                    order: 2,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'EDITAR HUB',
                    value: 'edit-hub',
                    group: 'hub',
                    order: 3,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'REMOVER HUB',
                    value: 'remove-hub',
                    group: 'hub',
                    order: 4,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'ADICIONAR CIDADE',
                    value: 'add-city',
                    group: 'city',
                    order: 1,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'VISUALIZAR CIDADE',
                    value: 'view-city',
                    group: 'city',
                    order: 2,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'EDITAR CIDADE',
                    value: 'edit-city',
                    group: 'city',
                    order: 3,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'REMOVER CIDADE',
                    value: 'remove-city',
                    group: 'city',
                    order: 4,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'ADICIONAR ENDEREÇO',
                    value: 'add-address',
                    group: 'address',
                    order: 1,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'VISUALIZAR ENDEREÇO',
                    value: 'view-address',
                    group: 'address',
                    order: 2,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'EDITAR ENDEREÇO',
                    value: 'edit-address',
                    group: 'address',
                    order: 3,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'REMOVER ENDEREÇO',
                    value: 'remove-address',
                    group: 'address',
                    order: 4,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'ADICIONAR TRANSPORTADORA',
                    value: 'add-shipping',
                    group: 'shipping',
                    order: 1,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'VISUALIZAR TRANSPORTADORA',
                    value: 'view-shipping',
                    group: 'shipping',
                    order: 2,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'EDITAR TRANSPORTADORA',
                    value: 'edit-shipping',
                    group: 'shipping',
                    order: 3,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'REMOVER TRANSPORTADORA',
                    value: 'remove-shipping',
                    group: 'shipping',
                    order: 4,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'ADICIONAR BASE DE TRANSPORTADORA',
                    value: 'add-branch',
                    group: 'branch',
                    order: 1,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'VISUALIZAR BASE DE TRANSPORTADORA',
                    value: 'view-branch',
                    group: 'branch',
                    order: 2,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'EDITAR BASE DE TRANSPORTADORA',
                    value: 'edit-branch',
                    group: 'branch',
                    order: 3,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'REMOVER BASE DE TRANSPORTADORA',
                    value: 'remove-branch',
                    group: 'branch',
                    order: 4,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'ADICIONAR FORNECEDOR',
                    value: 'add-provider',
                    group: 'provider',
                    order: 1,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'VISUALIZAR FORNECEDOR',
                    value: 'view-provider',
                    group: 'provider',
                    order: 2,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'EDITAR FORNECEDOR',
                    value: 'edit-provider',
                    group: 'provider',
                    order: 3,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'REMOVER FORNECEDOR',
                    value: 'remove-provider',
                    group: 'provider',
                    order: 4,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'ADICIONAR CUSTO DE COLETADOR',
                    value: 'add-collector-cost',
                    group: 'collector-cost',
                    order: 1,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'VISUALIZAR CUSTO DE COLETADOR',
                    value: 'view-collector-cost',
                    group: 'collector-cost',
                    order: 2,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'EDITAR CUSTO DE COLETADOR',
                    value: 'edit-collector-cost',
                    group: 'collector-cost',
                    order: 3,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'REMOVER CUSTO DE COLETADOR',
                    value: 'remove-collector-cost',
                    group: 'collector-cost',
                    order: 4,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'ADICIONAR ORÇAMENTO',
                    value: 'add-budget',
                    group: 'budget',
                    order: 1,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'VISUALIZAR ORÇAMENTO',
                    value: 'view-budget',
                    group: 'budget',
                    order: 2,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'EDITAR ORÇAMENTO',
                    value: 'edit-budget',
                    group: 'budget',
                    order: 3,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'REMOVER ORÇAMENTO',
                    value: 'remove-budget',
                    group: 'budget',
                    order: 4,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'VISUALIZAR LISTA DE SERVIÇOS',
                    value: 'view-service-list',
                    group: 'services',
                    order: 1,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'VISUALIZAR CONSULTA DE SERVIÇOS',
                    value: 'view-service-consult',
                    group: 'services',
                    order: 2,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'SOLICITAR SERVIÇO ÚNICO',
                    value: 'add-single-service',
                    group: 'services',
                    order: 3,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'SOLICITAR SERVIÇO RECORRENTE',
                    value: 'add-recurrent-service',
                    group: 'services',
                    order: 4,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'VISUALIZAR SERVIÇOS SOLICITADOS',
                    value: 'view-requested-service',
                    group: 'services',
                    order: 5,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'EDITAR SERVIÇOS SOLICITADOS',
                    value: 'edit-requested-service',
                    group: 'services',
                    order: 6,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'VALIDAR SERVIÇOS SOLICITADOS',
                    value: 'valid-requested-service',
                    group: 'services',
                    order: 7,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'DEFINIR COLETAS',
                    value: 'define-collect',
                    group: 'services',
                    order: 8,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'COLETAR SERVIÇOS',
                    value: 'add-collect-service',
                    group: 'services',
                    order: 9,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'DEFINIR EMBARQUES',
                    value: 'define-boarding',
                    group: 'services',
                    order: 10,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'EMBARCAR SERVIÇOS',
                    value: 'add-boarding-service',
                    group: 'services',
                    order: 11,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'VALIDAR EMBARQUE DE SERVIÇOS',
                    value: 'valid-boarding-service',
                    group: 'services',
                    order: 12,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'ALOCAR SERVIÇOS',
                    value: 'add-allocated-service',
                    group: 'services',
                    order: 13,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'DISPONIBILIZAR DESEMBARQUES',
                    value: 'add-available-service',
                    group: 'services',
                    order: 14,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'DEFINIR DESEMBARQUES',
                    value: 'define-landing',
                    group: 'services',
                    order: 15,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'DESEMBARCAR SERVIÇOS',
                    value: 'add-landing-service',
                    group: 'services',
                    order: 16,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'DEFINIR ENTREGAS',
                    value: 'define-delivery',
                    group: 'services',
                    order: 17,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'ENTREGAR SERVIÇOS',
                    value: 'add-delivery-service',
                    group: 'services',
                    order: 18,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'VISUALIZAR RELATÓRIO DE CUSTOS',
                    value: 'view-cost-report',
                    group: 'reports',
                    order: 1,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'VISUALIZAR RELATÓRIO DE ESTOQUES',
                    value: 'view-stock-report',
                    group: 'reports',
                    order: 2,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'VISUALIZAR RELATÓRIO DE FATURAMENTO',
                    value: 'view-billing-report',
                    group: 'reports',
                    order: 3,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'VISUALIZAR RELATÓRIO DE SLA',
                    value: 'view-sla-report',
                    group: 'reports',
                    order: 4,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'EDITAR SERVIÇO EM ANDAMENTO',
                    value: 'edit-progress-service',
                    group: 'services',
                    order: 19,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'VISUALIZAR RELATÓRIO CARGAS EM TRÂNSITO',
                    value: 'view-cargo-in-transit-report',
                    group: 'reports',
                    order: 5,
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: v4(),
                    key: 'REMOVER SERVIÇO',
                    value: 'remove-service',
                    group: 'services',
                    order: 20,
                    created_at: new Date(),
                    updated_at: new Date()
                },
            ])
            .execute();
    }

}
