import AxiosService from "@/services/axios.service";
import {BackendEndpoints} from "@/lib/constants";
import {CategoriesResponse} from "@/types/course.types";


export const fineAllCategory = async ():Promise<CategoriesResponse> => {
    const { data } = await AxiosService.get<CategoriesResponse>(
        BackendEndpoints.GET_ALL_CATEGORY,
    )
    return data
}

