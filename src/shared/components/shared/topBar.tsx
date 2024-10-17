import React, { FC } from "react";
import { cn } from "@/shared/lib/utils";
import { Container, Categories, SortPopup } from "../shared";
import { Category } from "@prisma/client";

interface Props {
    categories: Category[];
    className?: string;
}

export const TopBar: FC<Props> = ({ className, categories }) => {
    return (
        <div
            className={cn(
                "sticky top-0 gb-white py-5 shadow-lg shadow-black/5 z-10",
                className,
            )}
        >
            <Container className={cn("flex items-center justify-between")}>
                <Categories items={categories} />
                <SortPopup />
            </Container>
        </div>
    );
};
