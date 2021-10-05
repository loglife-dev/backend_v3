

interface IAllocateServiceDTO {
    id?: string;
    service_id: string;
    allocated_filight: string;
    availability_date: Date;
    availability_hour: Date;
    observation: string;
}
export { IAllocateServiceDTO }