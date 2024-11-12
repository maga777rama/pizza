import React, { FC } from "react";
import { cn } from "@/shared/lib/utils";
import { CartButton, Container, SearchInput } from "../shared";
import Image from "next/image";
import img1 from "@/public/logo.png";
import { Button } from "../ui";
import { ArrowRight, ShoppingCart, User } from "lucide-react";
import Link from "next/link";

interface Props {
    className?: string;
}

export const Header: FC<Props> = ({ className }) => {
    return (
        <header className={cn("border border-b", className)}>
            <Container className="flex items-center justify-between py-8">
                {/*левая часть*/}
                <Link href={"/"}>
                    <div className="flex items-center gap-4">
                        <Image src={img1} alt="logo" width={35} height={35} />
                        <div>
                            {" "}
                            <h1 className="text-2xl uppercase font-black ">
                                мага не лох
                            </h1>
                            <p className="text-sm text-gray-400 leading-3">
                                хейтеры пидарасы
                            </p>
                        </div>
                        <div></div>
                    </div>
                </Link>

                <div className="mx-10 flex-1">
                    <SearchInput />
                </div>

                {/*правая часть */}

                <div className="flex items-center gap-3">
                    <Button
                        variant="outline"
                        className="flex items-center gap-3"
                    >
                        <User size={16} />
                        Войти
                    </Button>
                    <CartButton />
                </div>
            </Container>
        </header>
    );
};
