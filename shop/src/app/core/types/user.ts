import { IBase } from "./base";

export interface IUser extends IBase{
  username: string;
  email: string;
  password: string;
  tel: string;
  myAds: string[];
}
