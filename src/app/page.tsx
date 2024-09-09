import { Container, Filters } from "@/components/shared";
import { Title } from "@/components/shared";
import { TopBar } from "@/components/shared";

export default function Home() {
    return (
        <>
            <Container className="mt-10">
                <Title text="Все пиццы" size="lg" className="font-extrabold" />
            </Container>
            <TopBar />
            <Container className="pb-14">
                <div className="flex gap-[60]">
                    {/*фильтрация */}
                    <div className="w-[250px]">
                        <Filters />
                    </div>

                    {/*список товаров*/}
                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            Список товаров
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
