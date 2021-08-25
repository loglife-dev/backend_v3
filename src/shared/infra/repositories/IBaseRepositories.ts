export interface IBaseRepository<T> {

    Get(id: string): Promise<T>;
    GetAll(page: number): Promise<T[]>;
    Create(entity: T): Promise<T>;
    Update(entity: T): Promise<T>;
    Delete(entity: T): Promise<void>;
    
}