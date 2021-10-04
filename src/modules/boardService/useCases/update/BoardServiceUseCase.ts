import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IAddressRepository } from "../../../address/repositories/IAddressRepository";
import { IDriverRepository } from "../../../driver/repositories/IDriverRepository";
import { IServiceRepository } from "../../../service/repositories/IServiceRepository";
import { IBoardServiceDTO } from "../../dtos/BoardServiceDTO";
import { BoardService } from "../../infra/typeorm/entities/BoardService";
import { IBoardServiceRepository } from "../../repositories/IBoardServiceRepository";


@injectable()
class UpdateBoardServiceUseCase {
    constructor(
        @inject("BoardServiceRepository")
        private readonly boardServiceRepository: IBoardServiceRepository,
        @inject("ServiceRepository")
        private readonly serviceRepository: IServiceRepository,
        @inject("AddressRepository")
        private readonly addressRepository: IAddressRepository,
        @inject("DriverRepository")
        private readonly driverRepository: IDriverRepository) { }

    async execute({
        id,
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
        const boardService = await this.boardServiceRepository.findByBoardId(service_id)

        if (!boardService) {
            throw new AppError("BoardService does not exists!")
        }

        const serviceId = await this.serviceRepository.findById(service_id);
        if (!serviceId) {
            throw new AppError("ServiceId does not exists!")
        }

        const addressId = await this.addressRepository.findById(address_id);
        if (!addressId) {
            throw new AppError("AddressId does not exists!")
        }

        const driverId = await this.driverRepository.findById(driver_id);
        if (!driverId) {
            throw new AppError("DriverId does not exists!")
        }
  
        boardService.service_id = service_id;
        boardService.address_id = address_id;
        boardService.driver_id = driver_id;
        boardService.step = step;
        boardService.operational_number = operational_number;
        boardService.cte = cte;
        boardService.cte_loglife = cte_loglife;
        boardService.board_volume = board_volume;
        boardService.board_weight = board_weight;
        boardService.cte_photo = cte_photo;
        boardService.real_weight = real_weight;
        boardService.taxed_weight = taxed_weight;
        boardService.cte_transfer_cost = cte_transfer_cost;
        boardService.board_observation = board_observation;
        boardService.validate_observation = validate_observation;

        const updateBoard = await this.boardServiceRepository.Update({
            ...boardService,
            serviceId,
            addressId,
            driverId
        })

        return updateBoard
    }
}
export { UpdateBoardServiceUseCase }
