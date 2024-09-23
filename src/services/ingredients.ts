import { axiosInstance } from "./instance";
import { ApiRoutes } from "./constants";
import { Ingredient } from "@prisma/client";
import prisma from "@/prisma/prisma-client";

export const getAll = async (): Promise<Ingredient[]> => {
    return (await axiosInstance.get<Ingredient[]>(ApiRoutes.INGREDIENTS)).data;
};
