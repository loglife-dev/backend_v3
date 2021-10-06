import { IBaseRepository } from "../../../shared/infra/repositories/IBaseRepositories";
import { LandingService } from "../infra/typeorm/entities/LandingService";

export interface ILandingServiceRepository extends IBaseRepository<LandingService> {
    Get(): Promise<LandingService[]>;
    findById(id: string): Promise<LandingService>;
}