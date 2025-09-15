"use client";

import SendOTP from "@/components/send-otp";
import { useVerifyOTP } from "@/hooks/useAuth";
import { useSearchParams, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { RegisterResponse, verifyOTPModel } from "@/types/auth.types";

const VerifyOTPPage = () => {
    const verifyOTP = useVerifyOTP();
    const searchParams = useSearchParams();
    const router = useRouter();

    const email = searchParams.get("email") || "";

    const handleSubmit = async (otp: string) => {
        const reqVerifyOTPBody: verifyOTPModel = {
            email: email,
            otp: otp,
        };
        try {
            const res:RegisterResponse = await verifyOTP.mutateAsync(reqVerifyOTPBody);
            Cookies.set("accessToken", res.token.accessToken, {path: "/"});
            Cookies.set("refreshToken", res.token.refreshToken, {path: "/"});
            router.push("/");
        } catch (err: any) {
            console.error("OTP verification failed:", err);
            alert(err.response?.data?.message || "OTP verification failed");
        }
        alert(otp)
    };

    return <SendOTP
        handleSubmit={handleSubmit}
        email={email}
        loading={verifyOTP.isPending}
    />;
};

export default VerifyOTPPage;
