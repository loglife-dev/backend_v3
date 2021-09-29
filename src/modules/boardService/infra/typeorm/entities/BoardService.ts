import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('boardService')
class BoardService {
    @PrimaryColumn()
    id: string;

    @Column()
    service_id: string;

}
export { BoardService }