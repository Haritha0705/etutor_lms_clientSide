import axios from "axios";

const AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    timeout:180_000,
    headers: {},
})
export default AxiosInstance

export const setupInterceptors = (navigate: (path: string) => void) => {
    AxiosInstance.interceptors.response.use(
        (res) => res,
        (error) => {
            if (error.response && error.response.status === 401) {
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
                navigate("/login");
            }
            return Promise.reject(error);
        }
    );
};