"use client";

import { cn } from "@/shared/lib/utils";
import { Title } from "./title";
import React, { useState } from "react";
import { Button } from "../ui";
import { Ingredient, ProductItem } from "@prisma/client";
import { GroupVariants, IngredientItem, PizzaImage } from "../shared";
import {
    mapPizzaType,
    PizzaSize,
    pizzaSizes,
    PizzaType,
    pizzaTypes,
} from "@/shared/constants/pizza";
import { useSet } from "react-use";

interface Props {
    imageUrl: string;
    name: string;
    className?: string;
    ingredients: Ingredient[];
    items?: ProductItem[];
    onClickAddCart?: VoidFunction;
}

export const ChoosePizzaForm: React.FC<Props> = ({
    name,
    items,
    imageUrl,
    ingredients,
    onClickAddCart,
    className,
}) => {
    const [size, setSize] = useState<PizzaSize>(20);
    const [type, setType] = useState<PizzaType>(1);
    const [selectedIngredients, { toggle: addIngredients }] = useSet(
        new Set<number>([]),
    );
    const textDetails = "30 см, традиционное тесто 30";
    const totalPrice = 350;

    // сделать чтобы при выборе несуществующей пиццы сбрасывалось на первый вариант
    const pizzaPrice =
        items.find((item) => item.pizzaType === type && item.size === size)
            ?.price || 0;

    const totalIngredientsPrice = ingredients
        .filter((ingredient) => selectedIngredients.has(ingredient.id))
        .reduce((acc, ingredients) => acc + ingredients.price, 0);

    const totalPrice = pizzaPrice + totalIngredientsPrice;
    const textDetails = `${size} см, ${mapPizzaType[type]} пицца`;

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
                        items={pizzaSizes}
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

                <Button className="h-[55px] px-10 text-base rounded-[18px] w-full">
                    Добавить в корзину за {pizzaPrice} ₽
                </Button>
            </div>
        </div>
    );
};
