interface IHubDTO {
    id?: string;
    name: string;
    state: string;
    observation: string;
}

interface IHubUpdateDTO {
    id?: string
    name: string;
    state: string;
    observation: string;
}
export { IHubDTO, IHubUpdateDTO }