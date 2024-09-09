import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/shared/container";
import { Categories } from "@/components/shared/categories";
import { SortPopup } from "@/components/shared/sort-popup";

export const TopBar = () => {
    return (
        <div
            className={cn(
                "sticky top-0 gb-white py-5 shadow-lg shadow-black/5 z-10",
            )}
        >
            <Container className={cn("flex items-center justify-between")}>
                <Categories />
                <SortPopup />
            </Container>
        </div>
    );
};
