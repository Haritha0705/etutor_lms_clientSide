import AxiosService from "@/services/axios.service";
import { BackendEndpoints } from "@/lib/constants";
import {
    LoginModel,
    LoginResponse,
    RegisterModel,
    RegisterResponse, verifyOTPModel
} from "@/types/auth.types";

export const signupUser = async (payload: RegisterModel):Promise<RegisterResponse> => {
    const { data } = await AxiosService.post<RegisterResponse>(
        BackendEndpoints.SIGNUP_USER,
        payload)
    return data;
}

export const loginUser = async (payload: LoginModel):Promise<LoginResponse> => {
    const { data } = await AxiosService.post<LoginResponse>(
        BackendEndpoints.LOGIN_USER,
        payload,
        { withCredentials: true })
    return data;
}

export const sendOTP = async (payload: RegisterModel) => {
    const { data } = await AxiosService.post(
        BackendEndpoints.REQUEST_SIGNUP_OTP,
        payload)
    return data;
}

export const verifyOTP = async (
    payload: verifyOTPModel
): Promise<RegisterResponse> => {
    const { data } = await AxiosService.post<RegisterResponse>(
        BackendEndpoints.VERIFY_SIGNUP_OTP,
        payload
    );
    return data;
};
