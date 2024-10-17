"use client";

import React, { useEffect, useRef } from "react";
import { Title } from "./title";
import { ProductCard } from "../shared";
import { useIntersection } from "react-use";
import { useCategoryStore } from "@/shared/store/category";

interface Props {
    title: string;
    items: any[];
    categoryId: number;
    className?: string;
    listClassName?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
    title,
    items,
    categoryId,
    className,
    listClassName,
}) => {
    const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
    const intersectionRef = useRef(null);
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.1,
    });

    useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveCategoryId(categoryId);
        }
    }, [categoryId, title, intersection?.isIntersecting]);
    return (
        <div className={className} id={title} ref={intersectionRef}>
            <Title text={title} size="lg" className="font-extrabold mb-5" />
            <div className="grid grid-cols-3 gap-[50px]">
                {items.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        imageUrl={product.imageUrl}
                        // price={product.items[0].price}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    );
};
