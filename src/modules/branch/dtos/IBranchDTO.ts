

interface IBranchDTO {
    id?: string;
    nickname: string;
    hub_id: string;
    shipping_id: string;
    email: string;
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
export { IBranchDTO }