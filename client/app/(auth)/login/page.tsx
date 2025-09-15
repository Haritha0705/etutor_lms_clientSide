"use client";

import {LoginForm} from '@/components/login-form'
import {useRouter} from "next/navigation";
import React, {useState} from "react";
import {useLogin} from "@/hooks/useAuth";
import {LoginModel, LoginResponse} from "@/types/auth.types";
import {Role} from "@/enum/role.enum";
import Cookies from "js-cookie";

export default function LoginPage() {
    const router = useRouter();
    const [form, setForm] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [selectedRole, setSelectedRole] = useState<Role>(Role.STUDENT);
    const login = useLogin();

    const validateForm = () => {
        const tempErrors: { [key: string]: string } = {};
        if (!form.email) tempErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(form.email))
            tempErrors.email = "Email is invalid";
        if (!form.password) tempErrors.password = "Password is required";
        else if (form.password.length < 8)
            tempErrors.password = "Password must be at least 6 characters";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        const reqLoginBody: LoginModel = {
            email: form.email,
            password: form.password,
            role: selectedRole,
        };

        try {
            const res:LoginResponse = await login.mutateAsync(reqLoginBody)

            Cookies.set("accessToken", res.token.accessToken, { path: "/" });
            Cookies.set("refreshToken", res.token.refreshToken, { path: "/" });

            alert('Successful')
            // Redirect based on role
            if (selectedRole === 'student') router.push("/");
            else if (selectedRole === 'instructor') router.push("/instructor/dashboard");
            else router.push("/admin/dashboard");

        }catch (err:any) {
            alert(err.response?.data?.message || "Something went wrong!");
        }
    };

    const handleGoogleLogin = () => {
        window.location.href = `http://localhost:4000/api/v1/auth/google/login`;
    };

    return (
        <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
            <div className="flex w-full items-center max-w-sm flex-col gap-6">
                <div className="flex justify-center items-center w-/13 rounded-full border border-black p-1 gap-1">
                    <div
                        onClick={() => setSelectedRole(Role.STUDENT)}
                        className={`rounded-full py-1 px-4 cursor-pointer ${selectedRole === "student" ? "bg-black text-white" : "bg-transparent text-black"}`}>Student
                    </div>
                    <div
                        onClick={() => setSelectedRole(Role.INSTRUCTOR)}
                        className={`rounded-full py-1 px-4 cursor-pointer ${
                            selectedRole === "instructor" ? "bg-black text-white" : "bg-transparent text-black"}`}>Teacher
                    </div>
                    <div
                        onClick={() => setSelectedRole(Role.ADMIN)}
                        className={`rounded-full py-1 px-4 cursor-pointer ${
                            selectedRole === "admin" ? "bg-black text-white" : "bg-transparent text-black"}`}>Admin
                    </div>
                </div>
                <LoginForm
                    form={form}
                    errors={errors}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    loading={login.isPending}
                    role={selectedRole}
                    handleLogin={handleGoogleLogin}
                />
            </div>
        </div>

    )
}
