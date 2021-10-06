

interface IDeliveryServiceDTO {
    id?: string;
    service_id?: string;
    address_id?: string;
    driver_id?: string;
    step?: string;
    arrival_latitude?: string;
    arrival_longitude?: string;
    arrival_timestamp?: string;
    responsible_name?: string;
    responsible_cpf?: string;
    delivery_volume?: string;
    problem?: string;
    box_photo?: string;
    content_declaration?: string;
    departure_latitude?: string;
    departure_longitude?: string;
    departure_timestamp?: string;
    observation?: string;
}

export { IDeliveryServiceDTO }