import { useMutation } from "@tanstack/react-query";
import {loginUser, sendOTP, signupUser, verifyOTP} from "@/services/auth.service";
import {LoginModel, LoginResponse, RegisterModel, RegisterResponse, verifyOTPModel} from "@/types/auth.types";

type APIError = { message: string };

export const useSignup= () => {
    return useMutation<RegisterResponse, APIError, RegisterModel>({
        mutationFn: signupUser
    })
}

export const useLogin= () => {
    return useMutation<LoginResponse, APIError, LoginModel>({
        mutationFn: loginUser
    })
}

export const useSendOTP= () => {
    return useMutation({
        mutationFn: sendOTP
    })
}

export const useVerifyOTP = () => {
    return useMutation<RegisterResponse, APIError, verifyOTPModel>({
        mutationFn: verifyOTP
    });
};
