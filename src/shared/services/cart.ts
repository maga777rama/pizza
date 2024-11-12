import { axiosInstance } from "@/shared/services/instance";
import { CartDTO, CreateCartItemValues } from "@/shared/services/dto/cart.dto";

export const fetchCart = async (): Promise<CartDTO> => {
    const { data } = await axiosInstance.get("/cart");
    return data.cart;
};

export const updateItemQuantity = async (
    itemId: number,
    quantity: number,
): Promise<CartDTO> => {
    console.log("все заебись ");
    return (await axiosInstance.patch<CartDTO>("/cart/" + itemId, { quantity }))
        .data;
};

export const removeCartItem = async (id: number): Promise<CartDTO> => {
    return (await axiosInstance.delete<CartDTO>("/cart/" + id)).data;
};

export const addCartItem = async (
    values: CreateCartItemValues,
): Promise<CartDTO> => {
    return (await axiosInstance.post<CartDTO>("/cart", values)).data;
};
