
interface ILandingServiceDTO {
    id?: string;
    service_id?: string;
    branch_id?: string;
    driver_id?: string;
    step?: string;
    arrival_latitude?: string;
    arrival_longitude?: string;
    arrival_timestamp?: Date;
    landing_volume?: Number;
    box_break?: boolean;
    cargo_photo?: string;
    departure_latitude?: string;
    departure_longitude?: string;
    departure_timestamp?: Date;
    observation?: string;

}

export { ILandingServiceDTO }