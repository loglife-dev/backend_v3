

interface IAllocateServiceDTO {
    id?: string;
    service_id?: string;
    allocated_flight: string;
    availability_date: Date;
    availability_hour: Date;
    observation: string;
}
export { IAllocateServiceDTO }