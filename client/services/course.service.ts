import AxiosService from "@/services/axios.service";
import { CoursesResponse } from "@/types/course.types";
import { BackendEndpoints } from "@/lib/constants";

interface FindAllCoursesParams {
    page: number;
    limit: number;
    categories?: string[];
    tools?: string[];
}

export const findAllCourses = async (
    params: FindAllCoursesParams
): Promise<CoursesResponse> => {
    const { data } = await AxiosService.get<CoursesResponse>(
        BackendEndpoints.GET_ALL_COURSES_With_Filter,
        {
            params: {
                page: params.page,
                limit: params.limit,
                ...(params.categories && params.categories.length > 0
                    ? { categories: params.categories.join(",") }
                    : {}),
                ...(params.tools && params.tools.length > 0
                    ? { tools: params.tools.join(",") }
                    : {}),
            },
        }
    );

    return data;
};
