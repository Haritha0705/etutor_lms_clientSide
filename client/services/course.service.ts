import AxiosService from "@/services/axios.service";
import {CoursesResponse} from "@/types/course.types";
import {BackendEndpoints} from "@/lib/constants";

export const fineAllCourses = async (params: { page: number; limit: number }):Promise<CoursesResponse> => {
  const { data } = await AxiosService.get<CoursesResponse>(
      BackendEndpoints.GET_ALL_COURSES,
      {params}
  )
    return data
}