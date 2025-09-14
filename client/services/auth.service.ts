import AxiosService from "@/services/axios.service";
import { BackendEndpoints } from "@/lib/constants";
import {LoginModel, LoginResponse, RegisterModel, RegisterResponse} from "@/types/auth.types";

export const signupUser = async (payload: RegisterModel):Promise<RegisterResponse> => {
    const { data } = await AxiosService.post<RegisterResponse>(
        BackendEndpoints.SIGNUP_USER,
        payload)
    return data;
}

export const loginUser = async (payload: LoginModel):Promise<LoginResponse> => {
    const { data } = await AxiosService.post<LoginResponse>(
        BackendEndpoints.LOGIN_USER,
        payload)
    return data;
}