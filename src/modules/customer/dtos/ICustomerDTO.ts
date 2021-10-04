

export interface ICustomerDTO {
    
    id?:string;
    type: string;
    situation: string;
    trading_firstname: string;
    company_lastname: string;
    cnpj_cpf: string;
    cost_center: string;
    deadline_delivery: Date;
    operational_email: string;
    financial_email: string;
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
    state_register: string;
    icms: string;
    iss: string;
    payment_conditional: string;
    day_expiration_1: string;
    day_expiration_2: string;
    payment_type: string;
    emission_type: string;
    observation: string;
}