export class User {
    id: number;
    username: string;
    password: string;
    email: string;    
    userVerified: boolean;
    
    constructor(id: number, username: string, password: string, email: string, userVerified: boolean){
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.userVerified = userVerified;
    }

}