import { Request, Response } from "express";
import { container } from "tsyringe";
import { Service } from "../../../service/infra/typeorm/entities/Service";
import { ServiceRepository } from "../../../service/infra/typeorm/repositories/ServiceRepository";
import { CreateRequestedServiceUseCase } from "./RequestedServiceUseCase";

class CreateRequestedServiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const service = new Service()
        const serviceRepository = new ServiceRepository();
        const { customer_id, budget_id, source_address_id, destination_address_id, source_collector_id, destination_collector_id, source_branch_id,
            destination_branch_id, provider_id, deadline, service_type, franchising, modal, vehicle, caixa_termica, embalagem_secundaria, gelo_seco,
            gelox, isopor3l, isopor7l, terciaria3l, terciaria8l, collect_date, collect_hour_start, collect_hour_end, delivery_date, delivery_hour, observation
        } = request.body;

        Object.assign(service, {
            step: 'Servico-solicitado',
            customer_id: customer_id,
            group_id: null
        });
        await serviceRepository.Create(service);

        const createRequestedServiceUseCase = container.resolve(CreateRequestedServiceUseCase);

        const requested = await createRequestedServiceUseCase.execute({
            service_id: service.id,
            budget_id,
            source_address_id,
            destination_address_id,
            source_collector_id,
            destination_collector_id,
            source_branch_id,
            destination_branch_id,
            provider_id,
            deadline,
            service_type,
            franchising,
            modal,
            vehicle,
            caixa_termica,
            embalagem_secundaria,
            gelo_seco,
            gelox,
            isopor3l,
            isopor7l,
            terciaria3l,
            terciaria8l,
            collect_date,
            collect_hour_start,
            collect_hour_end,
            delivery_date,
            delivery_hour,
            observation,
        });

        const requestedResponse = {
            budget_id: requested.budget_id,
            source_address_id: requested.source_address_id,
            destination_address_id: requested.destination_address_id,
            source_collector_id: requested.source_collector_id,
            destination_collector_id: requested.destination_collector_id,
            source_branch_id: requested.source_branch_id,
            destination_branch_id: requested.destination_branch_id,
            provider_id: requested.provider_id,
            deadline: requested.deadline,
            service_type: requested.service_type,
            franchising: requested.franchising,
            modal: requested.modal,
            vehicle: requested.vehicle,
            caixa_termica: requested.caixa_termica,
            embalagem_secundaria: requested.embalagem_secundaria,
            gelo_seco: requested.gelo_seco,
            gelox: requested.gelox,
            isopor3l: requested.isopor3l,
            isopor7l: requested.isopor7l,
            terciaria3l: requested.terciaria3l,
            terciaria8l: requested.terciaria8l,
            collect_date: requested.collect_date,
            collect_hour_start: requested.collect_hour_start,
            collect_hour_end: requested.collect_hour_end,
            delivery_date: requested.delivery_date,
            delivery_hour: delivery_hour,
            observation: requested.observation,
        }

        return response.status(201).json(requestedResponse);
    }
}

export { CreateRequestedServiceController }