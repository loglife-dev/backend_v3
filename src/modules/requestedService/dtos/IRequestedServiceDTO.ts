

interface IRequestedServiceDTO {
    id?: string;
    service_id: string;
    budget_id: string;
    source_address_id: string[];
    destination_address_id: string[];
    source_collector_id: string;
    destination_collector_id: string;
    source_branch_id: string;
    destination_branch_id: string;
    provider_id: string;
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
    collect_date: Date;
    collect_hour_start: Date;
    collect_hour_end: Date;
    delivery_date: Date;
    delivery_hour: Date;
    observation: string;
}

export { IRequestedServiceDTO }
