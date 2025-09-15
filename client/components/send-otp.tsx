import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import {Button} from "@/components/ui/button";
import React, {useState} from "react";

type VerifyOTPProps = {
    handleSubmit: (otp: string) => void;
    email: string;
    loading?: boolean;
};

const VerifyOTP = ({handleSubmit,email,loading}:VerifyOTPProps) => {
    const [otp, setOtp] = useState("");
    return(
        <div className="bg-gray-50 dark:bg-gray-900 flex min-h-screen flex-col items-center justify-center p-6 md:p-10">
            <div className="flex w-full max-w-sm flex-col items-center gap-6 bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Verify OTP</h2>
                <p className="text-gray-500 dark:text-gray-300 text-center">
                    Enter the 6-digit OTP sent to your email <span className={"text-sm text-gray-500"}>{email}</span>
                </p>
                <InputOTP maxLength={6} value={otp}  onChange={(value: string) => setOtp(value)}>
                    <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                    </InputOTPGroup>
                </InputOTP>
                <Button
                    type="submit"
                    className="w-full cursor-pointer"
                    onClick={()=>handleSubmit(otp)}
                    disabled={loading || otp.length < 6}
                >
                    {loading ? (
                        <div className="flex items-center justify-center gap-2">
                            <svg
                                className="animate-spin h-4 w-4 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                />
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                />
                            </svg>
                            Checking OTP...
                        </div>
                    ) : (
                        "Verify OTP"
                    )}
                </Button>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    Didn&#39;t receive the code?{" "}
                    <button className=" hover:underline">Resend OTP</button>
                </p>
            </div>
        </div>
    )
}
export default VerifyOTP