import React, { FC } from "react";
import { cn } from "@/lib/utils";
import { Container, SearchInput } from "@/components/shared";
import Image from "next/image";
import img1 from "../../public/logo.png";
import { Button } from "@/components/ui";
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
                    <div>
                        {/*ограничивает абсолютное позиционирование*/}
                        <Button className="group relative">
                            <b>520 ₽</b>

                            {/*span - разделитель*/}
                            <span className="h-full w-[1px] bg-white/30 mx-3" />
                            <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                                <ShoppingCart
                                    className="h-4 w-4 relative"
                                    strokeWidth={2}
                                />
                                <b>3</b>
                            </div>
                            <ArrowRight
                                size={20}
                                className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                            />
                        </Button>
                    </div>
                </div>
            </Container>
        </header>
    );
};
