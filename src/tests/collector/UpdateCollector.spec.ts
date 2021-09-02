import { ICollectorDTO } from "../../modules/collector/dtos/ICollectorDTO";
import { CollectorRepositoryInMemory } from "../../modules/collector/repositories/in-memory/CollectorRepositoryInMemory";
import { CreateCollectorUseCase } from "../../modules/collector/useCases/create/CollectorUseCase";
import { UpdateCollectorUseCase } from "../../modules/collector/useCases/update/CollectorUseCase";


let createCollectorUseCase: CreateCollectorUseCase;
let collectorRepositoryInMemory: CollectorRepositoryInMemory;
let updateCollectorUseCase: UpdateCollectorUseCase;


describe("Update collector", () => {
    beforeEach(() => {
        collectorRepositoryInMemory = new CollectorRepositoryInMemory();
        createCollectorUseCase = new CreateCollectorUseCase(collectorRepositoryInMemory);
        updateCollectorUseCase = new UpdateCollectorUseCase(collectorRepositoryInMemory);
    });

    it("Should be able to update one collector", async () => {
        const collector: ICollectorDTO = {
            id: '59fde46d-40ad-46ac-a674-a8506c4791f6',
            situation: 'em adamento',
            company_name: 'company test',
            trading_name: 'trading test name',
            hub_list:  ["59fde46d-40ad-46ac-a674-a8506c4791f6"],
            cnpj: '00011222',
            operational_email: 'emailtest@gmail.com',
            delay_cost: '5.00',
            cellphone: '(92)9911-2222',
            telephone: '(92)99999',
            cep: '68086-642',
            state: 'Amazonas',
            city: 'Manaus',
            street: 'Gilberto mestrinho',
            number: '33330',
            neighborhood: 'cC1A',
            complement: 'Avenida Iraque',
            municipal_register: 'kl22',
            payment_type: 'Dinheiro',
            day_expiration: '05/2021',
            business_open: new Date(),
            business_close: new Date(),
            saturday_open: new Date(),
            saturday_close: new Date(),
            sunday_open: new Date(),
            sunday_close: new Date(),
            observation: 'ok'
        }
        await createCollectorUseCase.execute(collector);

        const collectorUpdate = await updateCollectorUseCase.execute({
            id: '59fde46d-40ad-46ac-a674-a8506c4791f6',
            situation: 'Entregue',
            company_name: 'company test',
            trading_name: 'trading test name',
            hub_list:  ["59fde46d-40ad-46ac-a674-a8506c4791f6"],
            cnpj: '00011222',
            operational_email: 'emailtest@gmail.com',
            delay_cost: '5.00',
            cellphone: '(92)9911-2222',
            telephone: '(92)99999',
            cep: '68086-642',
            state: 'Amazonas',
            city: 'Manaus',
            street: 'Gilberto mestrinho',
            number: '33330',
            neighborhood: 'cC1A',
            complement: 'Avenida Iraque',
            municipal_register: 'kl22',
            payment_type: 'Dinheiro',
            day_expiration: '05/2021',
            business_open: new Date(),
            business_close: new Date(),
            saturday_open: new Date(),
            saturday_close: new Date(),
            sunday_open: new Date(),
            sunday_close: new Date(),
            observation: 'Produto em perfeitas condições'
        });

        expect(collectorUpdate.situation).toBe("Entregue")
        expect(collectorUpdate.observation).toBe("Produto em perfeitas condições");
    })
})