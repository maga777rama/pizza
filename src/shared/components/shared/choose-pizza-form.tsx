"use client";

import { cn } from "@/shared/lib/utils";
import { Title } from "./title";
import React from "react";
import { Button } from "../ui";
import { Ingredient, ProductItem } from "@prisma/client";
import { GroupVariants, IngredientItem, PizzaImage } from "../shared";
import {
    mapPizzaType,
    PizzaSize,
    PizzaType,
    pizzaTypes,
} from "@/shared/constants/pizza";
import { calcTotalPizzaPrice } from "@/shared/lib";
import { usePizzaOptions } from "@/shared/hooks/use-pizza-options";
import { getPizzaDetails } from "@/shared/hooks";

interface Props {
    imageUrl: string;
    name: string;
    className?: string;
    ingredients: Ingredient[];
    items: ProductItem[];
    onClickAddCart: VoidFunction;
}

export const ChoosePizzaForm: React.FC<Props> = ({
    name,
    items,
    imageUrl,
    ingredients,
    onClickAddCart,
    className,
}) => {
    const {
        type,
        size,
        selectedIngredients,
        availableSizes,
        setSize,
        setType,
        addIngredients,
    } = usePizzaOptions(items);

    const { textDetails, totalPrice } = getPizzaDetails(
        type,
        size,
        items,
        ingredients,
        selectedIngredients,
    );

    const handleClickAdd = () => {
        onClickAddCart();
    };
    return (
        <div className={cn(className, "flex flex-1")}>
            <PizzaImage imageUrl={imageUrl} size={size} />

            <div className="w-[490px] bg-[#FCFCFC] p-7">
                <Title
                    text={name}
                    size="md"
                    // возможно надо прописать mt-10 в класснейм
                    className="font-extrabold mb-1"
                />

                <p className="text-gray-400">{textDetails}</p>
                <div className="flex flex-col gap-4 mt-5">
                    <GroupVariants
                        items={availableSizes}
                        value={String(size)}
                        onClick={(value) => setSize(Number(value) as PizzaSize)}
                    />

                    <GroupVariants
                        items={pizzaTypes}
                        value={String(type)}
                        onClick={(value) => setType(Number(value) as PizzaType)}
                    />
                </div>
                <div className="bg-gray-50 p-5 mb-5 rounded-md h-[420px] overflow-auto scrollbar mt-5">
                    <div className="grid grid-cols-3 gap-3">
                        {ingredients.map((ingredient) => (
                            <IngredientItem
                                key={ingredient.id}
                                name={ingredient.name}
                                price={ingredient.price}
                                imageUrl={ingredient.imageUrl}
                                onClick={() => addIngredients(ingredient.id)}
                                active={selectedIngredients.has(ingredient.id)}
                            />
                        ))}
                    </div>
                </div>

                <Button
                    className="h-[55px] px-10 text-base rounded-[18px] w-full"
                    onClick={handleClickAdd}
                >
                    Добавить в корзину за {totalPrice} ₽
                </Button>
            </div>
        </div>
    );
};
