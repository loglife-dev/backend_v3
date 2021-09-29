

interface IAddressDTO {
    id?: string
    customer_id?: string;
    type: string
    cnpj_cpf: string;
    trading_name: string;
    branch: string;
    responsible_name: string;
    responsible_email: string;
    responsible_telephone: string;
    cep: string;
    state: string;
    city_id?: string;
    street: string;
    number: string;
    neighborhood: string;
    complement: string;
    reference_point: string;
    icms: string;
    business_open: Date;
    business_close: Date;
    saturday_open: Date;
    saturday_close: Date;
    sunday_open: Date;
    sunday_close: Date;
    observation: string;
}
export { IAddressDTO }