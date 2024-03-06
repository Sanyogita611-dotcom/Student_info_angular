import { Address } from "./Address.Infrastructure";
import { Gender } from "./Gender.Infrastructure";

export interface student{
    id:number,
    name:string,
    birthDate:string,
    email:string,
    contact:string,
    profileImage:string,
    genderId:number,
    address:Address,
    gender:Gender
}

