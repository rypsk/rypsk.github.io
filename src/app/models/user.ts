import { Authority } from "./authority";

export class User {
    id: number;
    username: string;    
    email: string;   
    password: string; 
    authorities: Authority[];
    userVerified: boolean;
    
    constructor(id: number, username: string, email: string, password: string, authorities: Authority[], userVerified: boolean){
        this.id = id;
        this.username = username;        
        this.email = email;
        this.password = password;
        this.authorities = authorities;
        this.userVerified = userVerified;
    }

}