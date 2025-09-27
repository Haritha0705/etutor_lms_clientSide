import {Level} from "@/enum/level.enum";

export type Instructor = {
    id: number;
    instructorId: number;
    full_name: string;
    bio: string;
    expertise: string;
    profilePic: string;
    updatedAt: string;
}

export type Category  = {
    id: number;
    name: string;
    icon?: string;
    subCategories: SubCategory[]
    courses: Course[];
}

export type SubCategory = {
    id: number;
    name: string;
    coursesCount: number;
}

export type Tool = {
    id: number;
    name: string;
    coursesCount: number;
    courses: Course[];
}

export type Course = {
    id: number;
    instructorId: number;
    categoryId: number;
    subCategoryId: number;
    toolId: number;
    title: string;
    description: string;
    duration: string;
    level: Level;
    isPaid: boolean;
    price?: number;
    enrollmentCount: number;
    averageRating: number,
    ratingCount: number,
    instructor: Instructor;
    category: Category;
    subCategory: SubCategory;
    tool: Tool;
    createdAt: string;
    updatedAt: string;
}

export type Meta = {
    page: number;
    limit: number;
    totalPages: number;
    totalCount: number;
}

export type CoursesResponse = {
    success: boolean;
    data: Course[];
    meta?: Meta;
}

export type CategoriesResponse = {
    success: boolean;
    data?: Category[];
}

export type ToolsResponse = {
    success: boolean;
    data?: Tool[];
}

