import { inject, injectable } from "tsyringe";
import { IServiceRepository } from "../../../service/repositories/IServiceRepository";
import { IBoardServiceDTO } from "../../dtos/BoardServiceDTO";
import { BoardService } from "../../infra/typeorm/entities/BoardService";
import { IBoardServiceRepository } from "../../repositories/IBoardServiceRepository";

@injectable()
class CreateBoardServiceUseCase {
    constructor(
        @inject("BoardServiceRepository")
        private readonly boardServiceRepository: IBoardServiceRepository,
        @inject("ServiceRepository")
        private readonly serviceRepository: IServiceRepository) { }

    async execute({
        service_id,
        address_id,
        driver_id,
        step,
        arrival_latitude,
        arrival_longitude,
        arrival_timestamp,
        operational_number,
        cte,
        cte_loglife,
        board_volume,
        board_weight,
        cte_photo,
        real_weight,
        taxed_weight,
        cte_transfer_cost,
        departure_latitude,
        departure_longitude,
        departure_timestamp,
        board_observation,
        validate_observation,
    }: IBoardServiceDTO): Promise<BoardService> {

        const serviceId = await this.serviceRepository.findById(service_id);
        serviceId.step = 'board-service'
        await this.serviceRepository.Update(serviceId);

        const createBoard = await this.boardServiceRepository.create({
            service_id: serviceId.id,
            address_id,
            driver_id,
            step,
            arrival_latitude,
            arrival_longitude,
            arrival_timestamp,
            operational_number,
            cte,
            cte_loglife,
            board_volume,
            board_weight,
            cte_photo,
            real_weight,
            taxed_weight,
            cte_transfer_cost,
            departure_latitude,
            departure_longitude,
            departure_timestamp,
            board_observation,
            validate_observation,
        })

        return createBoard

    }
}
export { CreateBoardServiceUseCase }