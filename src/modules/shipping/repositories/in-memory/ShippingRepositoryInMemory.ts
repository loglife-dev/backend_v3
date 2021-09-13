import { IShippingDTO } from "../../dtos/IShippingDTO";
import { Shipping } from "../../infra/typeorm/entities/Shipping";
import { IShippingRepository } from "../IShippingRepository";

class ShippingRepositoryInMemory implements IShippingRepository {
    shippings: Shipping[] = [];

    async Get(): Promise<Shipping[]> {
        const all = this.shippings;
        return all;
    }

    async findById(id: string): Promise<Shipping> {
        const shipping = this.shippings.find((shipping) => shipping.id === id);

        return shipping;
    }

    async findByCnpj(cnpj: string): Promise<Shipping> {
        const shipping = this.shippings.find((shipping) => shipping.cnpj === cnpj);

        return shipping;
    }

    async Create({
        id,
        company_name,
        trading_name,
        cnpj,
        email,
        modal,
        cellphone,
        telephone,
        observation,
    }: IShippingDTO): Promise<Shipping> {
        const shipping = new Shipping();

        Object.assign(shipping, {
            id: "59fde46d-40ad-46ac-a674-a8506c4791f6",
            company_name,
            trading_name,
            cnpj,
            email,
            modal,
            cellphone,
            telephone,
            observation,
        });
        this.shippings.push(shipping);

        return shipping;
    }

    async Update(shipping: Shipping): Promise<Shipping> {
        this.shippings.push(shipping);

        return shipping;
    }

    async Delete(shipping: Shipping): Promise<void> {
        const findIndex = this.shippings.findIndex(shipping => shipping === shipping);

        this.shippings.splice(findIndex, 1);
    }

}

export { ShippingRepositoryInMemory }