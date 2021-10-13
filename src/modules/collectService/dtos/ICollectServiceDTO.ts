
interface ICollectServiceDTO {
    id?: string;
    service_id?: string;
    address_id?: string;
    driver_id: string;
    provider_id: string;
    step?: string;
    arrival_latitude?: string;
    arrival_longitude?: string;
    arrival_timestamp?: Date;
    responsible_name?: string;
    responsible_cpf?: string;
    volume?: Number;
    sample?: Number;
    problem?: string;
    box_photo?: string;
    content_declaration?: string;
    receipt_photo?: string;
    departure_latitude?: string;
    departure_longitude?: string;
    departure_timestamp?: Date;
    unsuccess_latitude?: string;
    unsuccess_longitude?: string;
    unsuccess_timestamp?: Date;
    observation?: string;
}

export { ICollectServiceDTO }