export interface IUser {
    firstname: string;
    lastname: string;
    email: string;
    phoneNumber: string;
    webSiteURL: string;
    role: Role | null;
}

export interface IAuth {
    login: string;
    password: string;
}

export enum Role {
    admin = 'admin',
    user = 'user',
}

export interface Answer {
    login: string;
    role: Role;
}
