"use client";

import { RegisterForm } from "@/components/register-form";
import React, { useState } from "react";
import { useSendOTP, useSignup } from "@/hooks/useAuth";
import { RegisterModel, RegisterResponse } from "@/types/auth.types";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function RegisterPage() {
    const router = useRouter();
    const [form, setForm] = useState({ username: "", email: "", password: "" });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [selectedRole, setSelectedRole] = useState("student");
    const [isVerify, setIsVerify] = useState(false);
    const [isTerms, setIsTerms] = useState(false);

    const signup = useSignup();
    const sendOTP = useSendOTP();

    const validateForm = () => {
        const tempErrors: { [key: string]: string } = {};

        if (!isTerms) tempErrors.terms = "Accept Terms & Conditions is required";

        if (!form.username) tempErrors.username = "Full name is required";
        if (!form.email) tempErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(form.email))
            tempErrors.email = "Email is invalid";

        if (!form.password) tempErrors.password = "Password is required";
        else if (form.password.length < 8)
            tempErrors.password = "Password must be at least 8 characters";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        const reqRegisterBody: RegisterModel = {
            username: form.username,
            email: form.email,
            password: form.password,
            role: selectedRole,
        };

        try {
            if (isVerify) {
                await sendOTP.mutateAsync(reqRegisterBody);
                router.push(`/verify-otp?email=${reqRegisterBody.email}`);
            }else{
                const res: RegisterResponse = await signup.mutateAsync(reqRegisterBody);
                Cookies.set("accessToken", res.token.accessToken, { path: "/" });
                Cookies.set("refreshToken", res.token.refreshToken, { path: "/" });
                router.push("/");
            }
        } catch (err: any) {
            alert(err.response?.data?.message || "Something went wrong!");
        }
    };

    return (
        <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
            <div className="flex w-full items-center max-w-sm flex-col gap-6">
                {/* Role Switch */}
                <div className="flex justify-center items-center w-1/2 rounded-full border border-black p-1 gap-1">
                    <div
                        onClick={() => setSelectedRole("student")}
                        className={`rounded-full py-1 px-4 cursor-pointer ${
                            selectedRole === "student"
                                ? "bg-black text-white"
                                : "bg-transparent text-black"
                        }`}
                    >
                        Student
                    </div>
                    <div
                        onClick={() => setSelectedRole("instructor")}
                        className={`rounded-full py-1 px-4 cursor-pointer ${
                            selectedRole === "instructor"
                                ? "bg-black text-white"
                                : "bg-transparent text-black"
                        }`}
                    >
                        Teacher
                    </div>
                </div>

                {/* Register Form */}
                <RegisterForm
                    form={form}
                    errors={errors}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    loading={signup.isPending || sendOTP.isPending}
                    role={selectedRole}
                    isVerify={isVerify}
                    isTerms={isTerms}
                    setIsVerify={setIsVerify}
                    setIsTerms={setIsTerms}
                />
            </div>
        </div>
    );
}
