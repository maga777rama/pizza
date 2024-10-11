"use client";

import { cn } from "@/lib/utils";
import { Title } from "./title";
import React from "react";
import { ProductImage } from "@/components/shared/product-image";
import { Button } from "@/components/ui";

interface Props {
    imageUrl: string;
    name: string;
    className?: string;
    ingredients: any[];
    items?: any[];
    onClickAdd?: VoidFunction;
}

export const ChooseProductForm: React.FC<Props> = ({
    name,
    items,
    imageUrl,
    ingredients,
    onClickAdd,
    className,
}) => {
    // const {
    //     size,
    //     type,
    //     availablePizzaSizes,
    //     setPizzaSize,
    //     setPizzaType,
    //     textDetaills,
    //     loading,
    //     addPizza,
    //     selectedIngredientsIds,
    //     toggleAddIngredient,
    // } = useChoosePizza(items);

    // const totalIngredientPrice: number =
    //     ingredients
    //         ?.filter((ingredient) => selectedIngredientsIds.has(ingredient.id))
    //         ?.reduce((acc, item) => acc + item.price, 0) || 0;
    //
    // const pizzaPrice: number =
    //     items?.find((item) => item.pizzaType === type)?.price || 0;
    // const totalPrice: number = totalIngredientPrice + pizzaPrice;
    //
    // const handleClickAdd = async () => {
    //     try {
    //         await addPizza();
    //         onClickAdd?.();
    //     } catch (error) {
    //         toast.error("Произошла ошибка при добавлении в корзину");
    //         console.error(error);
    //     }
    // };

    const textDetails = "30 см, традиционное тесто 30";
    const totalPrice = 350;

    return (
        <div className={cn(className, "flex flex-1")}>
            <ProductImage imageUrl={imageUrl} size={30} />

            <div className="w-[490px] bg-[#FCFCFC] p-7">
                <Title text={name} size="md" className="font-extrabold mb-1" />

                <p className="text-gray-400">{textDetails}</p>

                {/*<PizzaSelector*/}
                {/*    pizzaSizes={availablePizzaSizes}*/}
                {/*    selectedSize={String(size)}*/}
                {/*    selectedPizzaType={String(type)}*/}
                {/*    onClickSize={setPizzaSize}*/}
                {/*    onClickPizzaType={setPizzaType}*/}
                {/*/>*/}

                {/*<div className="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar">*/}
                {/*    <IngredientsList*/}
                {/*        ingredients={ingredients}*/}
                {/*        onClickAdd={toggleAddIngredient}*/}
                {/*        selectedIds={selectedIngredientsIds}*/}
                {/*    />*/}
                {/*</div>*/}

                <Button
                    // loading={loading}
                    // onClick={handleClickAdd}
                    className="h-[55px] px-10 text-base rounded-[18px] w-full"
                >
                    Добавить в корзину за {totalPrice} ₽
                </Button>
            </div>
        </div>
    );
};
