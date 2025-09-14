import { useMutation } from "@tanstack/react-query";
import {loginUser, signupUser} from "@/services/auth.service";
import {LoginModel, LoginResponse, RegisterModel, RegisterResponse} from "@/types/auth.types";

export const useSignup= () => {
    return useMutation<RegisterResponse, any, RegisterModel>({
        mutationFn: signupUser
    })
}

export const useLogin= () => {
    return useMutation<LoginResponse, any, LoginModel>({
        mutationFn: loginUser
    })
}