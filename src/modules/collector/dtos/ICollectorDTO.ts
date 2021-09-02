


interface ICollectorDTO {
    id?: string;
    situation: string;
    company_name: string;
    trading_name: string;
    hub_list: string[];
    cnpj: string;
    operational_email: string;
    delay_cost: string;
    cellphone: string;
    telephone: string;
    cep: string;
    state: string;
    city: string;
    street: string;
    number: string;
    neighborhood: string;
    complement: string;
    municipal_register: string;
    payment_type: string;
    day_expiration: string;
    business_open: Date;
    business_close: Date;
    saturday_open: Date;
    saturday_close: Date;
    sunday_open: Date;
    sunday_close: Date;
    observation: string;
}
export { ICollectorDTO }