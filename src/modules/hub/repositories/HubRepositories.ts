
import { EntityRepository, Repository } from "typeorm";
import { Hub } from "../entities/Hub";

@EntityRepository(Hub)
class HubRepositories extends Repository<Hub>{}

export {HubRepositories}