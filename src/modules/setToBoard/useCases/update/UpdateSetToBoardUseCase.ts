import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IBranchRepository } from "../../../branch/repositories/IBranchRepository";
import { IDriverRepository } from "../../../driver/repositories/IDriverRepository";
import { IServiceRepository } from "../../../service/repositories/IServiceRepository";
import { ISetToBoardDTO } from "../../dtos/ISetToBoardDTO";
import { SetToBoard } from "../../infra/typeorm/entities/SetToBoard";
import { ISetToBoardRepository } from "../../repositories/ISetToBoardRepository";

@injectable()
class UpdateSetToBoardUseCase {
    constructor(
        @inject("SetToBoardRepository")
        private readonly setToBoardRepository: ISetToBoardRepository,
        @inject("ServiceRepository")
        private readonly serviceRepository: IServiceRepository,
        @inject("BranchRepository")
        private readonly branchRepository: IBranchRepository,
        @inject("DriverRepository")
        private readonly driverRepository: IDriverRepository) { }

    async execute({
        id,
        service_id,
        step,
        branch_id,
        driver_id,
        observation,
    }: ISetToBoardDTO): Promise<SetToBoard> {
        const board = await this.setToBoardRepository.findById(id);

        if (!board) {
            throw new AppError("SetToBoard does not exists!");
        }

        const serviceId = await this.serviceRepository.findById(service_id);

        if (!serviceId) {
            throw new AppError("ServiceId does not exists!");
        }

        const branchId = await this.branchRepository.findById(branch_id);

        if (!branchId) {
            throw new AppError("BranchId does not exists!");
        }

        const driverId = await this.driverRepository.findById(driver_id);

        if (!driverId) {
            throw new AppError("DriverId does not exists!");
        }

        board.service_id = service_id;
        board.step = step;
        board.branch_id = branch_id;
        board.driver_id = driver_id;
        board.observation = observation;

        const updateSetToBoard = await this.setToBoardRepository.Update({
            ...board,
            serviceId,
            branchId,
            driverId
        });

        return updateSetToBoard;
    }
}
export { UpdateSetToBoardUseCase }