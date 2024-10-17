"use client";

import React, { FC } from "react";
import { cn } from "@/shared/lib/utils";
import { useCategoryStore } from "@/shared/store/category";
import { Category } from "@prisma/client";

interface Props {
    items: Category[];
    className?: string;
}

const cats: { id: number; name: string }[] = [
    { id: 1, name: "Пиццы" },
    { id: 2, name: "Завтрак" },
    { id: 3, name: "Закуски" },
    { id: 4, name: "Коктейли" },
    { id: 5, name: "Кофе" },
    { id: 6, name: "Напитки" },
    { id: 7, name: "Десерты" },
];

export const Categories: FC<Props> = (className) => {
    const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
    const categoryActiveId = useCategoryStore((state) => state.activeId);

    return (
        <div
            className={cn(
                "inline-flex gap-1 bg-gray-50 p-1 rounded-2xl",
                className,
            )}
        >
            {cats.map(({ name, id }, index) => (
                <a
                    key={index}
                    className={cn(
                        "flex items-center font-bold h-11 rounded-2xl px-5",
                        categoryActiveId === id &&
                            "bg-white shadow-md shadow-gray-200 text-primary",
                    )}
                    href={`/#${name}`}
                >
                    <button onClick={() => setActiveCategoryId(id)}>
                        {name}
                    </button>
                </a>
            ))}
        </div>
    );
};