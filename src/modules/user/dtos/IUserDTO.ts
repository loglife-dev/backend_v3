

interface IUserDTO {
    id?: string;
    situation: string;
    user_type: string;
    loglife_employee: Boolean;
    customer_id: string;
    driver_id: string;
    collector_id: string
    permissions: string[];
    email: string;
    password: string;
    firstname: string;
    lastname: string;
}
export { IUserDTO }