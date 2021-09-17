

interface IProviderDTO {
    id?: string;
    company_name: string;
    trading_name: string;
    hub_id: string;
    email: string;
    cnpj: string;
    material: string;
    unit_cost: string;
    payment_conditional: string;
    day_expiration_1: string;
    day_expiration_2: string;
    payment_type: string;
    cellphone: string;
    telephone: string;
    cep: string;
    state: string;
    city: string;
    street: string;
    number: string;
    neighborhood: string;
    complement: string;
    business_open: Date;
    business_close: Date;
    saturday_open: Date;
    saturday_close: Date;
    sunday_open: Date;
    sunday_close: Date;
    observation: string;
}
export { IProviderDTO }