
interface IAvaiableServiceDTO {
    id?: string;
    service_id?: string;
    landing_availability_date: Date;
    landing_availability_hour: Date;
    observation: string;
}
export { IAvaiableServiceDTO }