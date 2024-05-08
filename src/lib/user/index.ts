
export interface User{
    id:number,
    name:string,
    username:string,
    profile:string,
    password?:string,
    lastDate?:Date
    createdDate?:Date,
}