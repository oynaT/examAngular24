import { IBase } from "./base";
import { IUser } from "./user";

export interface IItem extends IBase{
  name: string;
  description: string;
  location: string;
  price: Number;
  img: string;
  owner: IUser
}
