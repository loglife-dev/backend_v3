import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IAddressRepository } from "../../../address/repositories/IAddressRepository";
import { IBranchRepository } from "../../../branch/repositories/IBranchRepository";
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
        @inject("BranchRepository")
        private readonly branchRepository: IBranchRepository,
        @inject("DriverRepository")
        private readonly driverRepository: IDriverRepository) { }

    async execute({
        id,
        branch_id,
        driver_id,
        step,
        operational_number,
        cte,
        cte_loglife,
        board_volume,
        board_weight,
        cte_photo,
        real_weight,
        taxed_weight,
        cte_transfer_cost,
        board_observation,
        validate_observation,
    }: IBoardServiceDTO): Promise<BoardService> {
        const boardService = await this.boardServiceRepository.findById(id)

        if (!boardService) {
            throw new AppError("BoardService does not exists!")
        }

        const branchId = await  this.branchRepository.findById(branch_id);
        if (!branchId) {
            throw new AppError("BranchId does not exists!")
        }


        const driverId = await this.driverRepository.findById(driver_id);
        if (!driverId) {
            throw new AppError("DriverId does not exists!")
        }

        boardService.branch_id = branch_id;
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
            driverId
        })

        return updateBoard
    }
}
export { UpdateBoardServiceUseCase }
