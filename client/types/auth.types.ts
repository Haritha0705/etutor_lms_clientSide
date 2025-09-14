import {Role} from "@/enum/role.enum";

export interface RegisterModel {
    username: string;
    password: string;
    email: string;
    role:string;
}

export interface RegisterResponse {
    success: boolean;
    token: { accessToken: string; refreshToken: string };
    user: RegisterModel;
    message: string;
    status: number;
}

export interface LoginModel {
    email:string;
    password:string;
    role:string;
}

export interface LoginResponse {
    success: boolean;
    token: { accessToken: string; refreshToken: string };
    message: string;
}