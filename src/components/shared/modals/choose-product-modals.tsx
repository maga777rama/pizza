import React, { FC } from "react";
import { Dialog } from "@/components/ui";
import { DialogContent } from "@/components/ui";
import { Product } from "@prisma/client";
import { cn } from "@/lib/utils";
// import { Title } from "@/components/shared";

interface Props {
    product: Product;
    className?: string;
}

export const ChooseProductModal: FC<Props> = ({ className, product }) => {
    return (
        <Dialog open={Boolean(product)}>
            <DialogContent
                className={cn(
                    "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
                    className,
                )}
            >
                {/*<Title>{product.name}</Title>*/}
            </DialogContent>
        </Dialog>
    );
};
