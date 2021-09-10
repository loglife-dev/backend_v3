


interface ICollectorCostDTO {
    id?: string;
    collector_id: string;
    city_id: string;
    cost_motorcycle: string;
    additional_cost_motorcycle: string;
    cost_car: string;
    additional_cost_car: string;
    cost_truck: string;
    additional_cost_truck: string;
    observation: string;
}

export { ICollectorCostDTO }