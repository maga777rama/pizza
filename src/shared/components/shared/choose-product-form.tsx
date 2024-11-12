"use client";

import { cn } from "@/shared/lib/utils";
import { Title } from "./title";
import React from "react";
import { Button } from "../ui";

interface Props {
    imageUrl: string;
    name: string;
    price: number;
    className?: string;
    onSubmit?: VoidFunction;
}

export const ChooseProductForm: React.FC<Props> = ({
    name,
    imageUrl,
    price,
    onSubmit,
    className,
}) => {
    return (
        <div className={cn(className, "flex flex-1")}>
            <div className="flex items-center justify-center flex-1 relative w-full">
                <img
                    src={imageUrl}
                    alt={name}
                    className="relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]"
                />
            </div>

            <div className="w-[490px] bg-[#FCFCFC] p-7">
                <Title
                    text={name}
                    size="md"
                    // возможно надо добавить mt-10
                    className="font-extrabold mb-1"
                />

                <Button
                    onClick={onSubmit}
                    className="h-[55px] px-10 text-base rounded-[18px] w-full mt-5"
                >
                    Добавить в корзину за {price} ₽
                </Button>
            </div>
        </div>
    );
};
