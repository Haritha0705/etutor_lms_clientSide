import { useQuery } from "@tanstack/react-query";
import { CoursesResponse } from "@/types/course.types";
import { findAllCourses } from "@/services/course.service";
import { BackendEndpoints } from "@/lib/constants";

type APIError = { message: string };

interface FindAllCoursesParams {
    page: number;
    limit: number;
    categories?: string[];
    tools?: string[];
}

export const useCourse = (params: FindAllCoursesParams) => {
    return useQuery<CoursesResponse, APIError>({
        queryKey: [BackendEndpoints.GET_ALL_COURSES_With_Filter, params],
        queryFn: () => findAllCourses(params),
        staleTime: 1000 * 60 * 5,
    });
};
