export interface SignResponse {
    username: string;
    email: string;
    authorities: string[];
    token: string;
    isEnabled: boolean;
}
