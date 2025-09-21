import {useQuery} from "@tanstack/react-query";
import {fineAllCategory} from "@/services/filter.service";
import {Category} from "@/types/course.types";

type APIError = { message: string };

export const useCategories = () => {
    return useQuery<Category[], APIError>({
        queryKey: ["categories"],
        queryFn: async () => {
            const res = await fineAllCategory();
            return res.data || [];
        },
        staleTime: 1000 * 60 * 5,
        retry: 1,
    });
};
