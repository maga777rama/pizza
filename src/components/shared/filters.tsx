"use client";

import React, { FC } from "react";
import { Title, RangeSlider, CheckboxFiltersGroup } from "@/components/shared";
import { Input } from "../ui";
import { Props } from "next/script";
import { useIngredients, useFilters, useQueryFilters } from "@/hooks";

export const Filters: FC<Props> = ({ className }) => {
    const { ingredients, loading } = useIngredients();
    const filters = useFilters();
    useQueryFilters(filters);

    console.log(999, filters.prices.priceFrom);
    console.log(111, filters.prices.priceTo);
    const items = ingredients.map((item) => ({
        value: String(item.id),
        text: item.name,
    }));

    const updatePrices = (prices: number[]) => {
        filters.setPrices("priceFrom", prices[0]);
        filters.setPrices("priceTo", prices[1]);
    };

    return (
        <div className={className}>
            <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

            <CheckboxFiltersGroup
                name="pizzaTypes"
                className="mb-5"
                title="Тип теста"
                onClickCheckbox={filters.setPizzaTypes}
                selected={filters.pizzaTypes}
                items={[
                    { text: "Тонкое", value: "1" },
                    { text: "Традиционное", value: "2" },
                ]}
            />

            <CheckboxFiltersGroup
                name="sizes"
                className="mb-5"
                title="Размеры"
                onClickCheckbox={filters.setSizes}
                selected={filters.sizes}
                items={[
                    { text: "20 см", value: "20" },
                    { text: "30 см", value: "30" },
                    { text: "40 см", value: "40" },
                ]}
            />

            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Цена от и до:</p>
                <div className="flex gap-3 mb-5">
                    <Input
                        type="number"
                        placeholder="0"
                        min={100}
                        max={1000}
                        defaultValue={100}
                        value={String(filters.prices.priceFrom)}
                        onChange={(e) =>
                            filters.setPrices(
                                "priceFrom",
                                Number(e.target.value),
                            )
                        }
                    />
                    <Input
                        type="number"
                        placeholder="1000"
                        min={100}
                        max={1000}
                        defaultValue={1000}
                        value={String(filters.prices.priceTo)}
                        onChange={(e) =>
                            filters.setPrices("priceTo", Number(e.target.value))
                        }
                    />
                </div>
                <RangeSlider
                    min={100}
                    max={1000}
                    step={10}
                    value={[
                        filters.prices.priceFrom || 0,
                        filters.prices.priceTo || 1000,
                    ]}
                    onValueChange={updatePrices}
                />
            </div>

            <CheckboxFiltersGroup
                className="mt-5"
                title="Формат"
                name="indredients"
                limit={6}
                defaultItems={items.slice(0, 6)}
                items={items}
                loading={loading}
                onClickCheckbox={filters.setSelectedIngredients}
                selected={filters.selectedIngredients}
            />
        </div>
    );
};
