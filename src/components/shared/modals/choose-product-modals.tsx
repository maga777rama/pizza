"use client";

import React, { FC } from "react";
import { Dialog, DialogContent } from "@/components/ui";
import { Product } from "@prisma/client";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { ChoosePizzaForm } from "@/components/shared";

interface Props {
    product: Product;
    className?: string;
}

export const ChooseProductModal: FC<Props> = ({ className, product }) => {
    const router = useRouter();
    const onCloseModal = () => {
        router.back();
    };

    return (
        <Dialog open={Boolean(product)} onOpenChange={onCloseModal}>
            <DialogContent
                className={cn(
                    "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
                    className,
                )}
            >
                <ChoosePizzaForm
                    imageUrl={product.imageUrl}
                    name={product.name}
                    ingredients={[]}
                />
            </DialogContent>
        </Dialog>
    );
};
