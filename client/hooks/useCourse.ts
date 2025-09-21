import {useQuery} from "@tanstack/react-query";
import {CoursesResponse} from "@/types/course.types";
import {fineAllCourses} from "@/services/course.service";
import {BackendEndpoints} from "@/lib/constants";
import {keepPreviousData} from "@tanstack/query-core";

type APIError = { message: string };

export const useCourse = (params: { page: number; limit: number }) => {
    return useQuery<CoursesResponse, APIError>({
        queryKey: [BackendEndpoints.GET_ALL_COURSES, params],
        queryFn: () => fineAllCourses(params),
        placeholderData: keepPreviousData,
        staleTime: 1000 * 60 * 5,
    });
};
