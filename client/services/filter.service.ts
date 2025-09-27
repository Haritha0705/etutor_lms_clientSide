import AxiosService from "@/services/axios.service";
import {BackendEndpoints} from "@/lib/constants";
import {CategoriesResponse, ToolsResponse} from "@/types/course.types";


export const fineAllCategory = async ():Promise<CategoriesResponse> => {
    const { data } = await AxiosService.get<CategoriesResponse>(
        BackendEndpoints.GET_ALL_CATEGORY,
    )
    return data
}

export const fineAllTools = async ():Promise<ToolsResponse> => {
    const { data } = await AxiosService.get<ToolsResponse>(
        BackendEndpoints.GET_ALL_TOOL,
    )
    return data
}

