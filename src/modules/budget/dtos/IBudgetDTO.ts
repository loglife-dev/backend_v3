

interface IBudgetDTO {
    id?: string
    customer_id: string;
    source_hub_id: string;
    destination_hub_id: string;
    source_cities: Number[];
    destination_cities: Number[];
    source_address_qty: Number;
    destination_address_qty: Number;
    deadline: Number;
    service_type: string;
    franchising: Number;
    modal: string;
    vehicle: string;
    caixa_termica: Number;
    embalagem_secundaria: Number;
    gelo_seco: Number;
    gelox: Number;
    isopor3l: Number;
    isopor7l: Number;
    terciaria3l: Number;
    terciaria8l: Number;
    price: Number;
    price_kg_extra: Number;
    transfer_budget: Number;
    price_add_collect: Number;
    price_add_delivery: Number;
    price_unsuccessful_collect: Number;
    observation: string;
}
export { IBudgetDTO }