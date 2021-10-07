

interface IBoardServiceDTO {
    id?: string;
    service_id?: string;
    branch_id?: string;
    driver_id?: string;
    step?: string;
    arrival_latitude?: string;
    arrival_longitude?: string;
    arrival_timestamp?: Date;
    operational_number?: string;
    cte?: string;
    cte_loglife?: string;
    board_volume?: Number;
    board_weight?: Number;
    cte_photo?: string;
    real_weight?: Number;
    taxed_weight?: Number;
    cte_transfer_cost?: Number;
    departure_latitude?: string;
    departure_longitude?: string;
    departure_timestamp?: Date;
    board_observation?: string;
    validate_observation?: string;
}
export { IBoardServiceDTO }