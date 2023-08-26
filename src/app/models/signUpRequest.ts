export class SignUpRequest {
    username: string;
    email: string;
    password: string;
    front: boolean;

    constructor(username: string, email: string, password: string, front: boolean) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.front = front;
    }
}