import { ParentEntity } from './parentEntity.model';

export class UserModel extends ParentEntity{
    public name: string;
    public surname: string;
    public phone: string;
    public address: string;
}