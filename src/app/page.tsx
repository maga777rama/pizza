import { Container, Filters, ProductsGroupList } from "@/components/shared";
import { Title } from "@/components/shared";
import { TopBar } from "@/components/shared";

export default function Home() {
    return (
        <>
            <Container className="mt-10">
                <Title
                    text="Тут все мои пиццы"
                    size="lg"
                    className="font-extrabold"
                />
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
                            <ProductsGroupList
                                title={"Пицца"}
                                items={[
                                    {
                                        id: 1,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif",
                                        price: 550,
                                        items: [{ price: 500 }],
                                    },
                                    {
                                        id: 2,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif",
                                        price: 550,
                                        items: [{ price: 500 }],
                                    },
                                    {
                                        id: 3,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif",
                                        price: 550,
                                        items: [{ price: 500 }],
                                    },
                                    {
                                        id: 4,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif",
                                        price: 550,
                                        items: [{ price: 500 }],
                                    },
                                    {
                                        id: 5,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif",
                                        price: 550,
                                        items: [{ price: 500 }],
                                    },
                                    {
                                        id: 6,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif",
                                        price: 550,
                                        items: [{ price: 500 }],
                                    },
                                    {
                                        id: 7,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif",
                                        price: 550,
                                        items: [{ price: 500 }],
                                    },
                                    {
                                        id: 8,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif",
                                        price: 550,
                                        items: [{ price: 500 }],
                                    },
                                    {
                                        id: 9,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif",
                                        price: 550,
                                        items: [{ price: 500 }],
                                    },
                                    {
                                        id: 10,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif",
                                        price: 550,
                                        items: [{ price: 500 }],
                                    },
                                    {
                                        id: 11,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif",
                                        price: 550,
                                        items: [{ price: 500 }],
                                    },
                                    {
                                        id: 12,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif",
                                        price: 550,
                                        items: [{ price: 500 }],
                                    },
                                ]}
                                categoryId={1}
                            />
                            <ProductsGroupList
                                title={"Завтрак"}
                                items={[
                                    {
                                        id: 1,
                                        name: "Омлет с ветчиной и грибами",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7970321044479C1D1085457A36EB.avif",
                                        price: 550,
                                        items: [{ price: 500 }],
                                    },
                                    {
                                        id: 2,
                                        name: "Омлет с ветчиной и грибами",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7970321044479C1D1085457A36EB.avif",
                                        price: 550,
                                        items: [{ price: 500 }],
                                    },
                                    {
                                        id: 3,
                                        name: "Омлет с ветчиной и грибами",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7970321044479C1D1085457A36EB.avif",
                                        price: 550,
                                        items: [{ price: 500 }],
                                    },
                                    {
                                        id: 4,
                                        name: "Омлет с ветчиной и грибами",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7970321044479C1D1085457A36EB.avif",
                                        price: 550,
                                        items: [{ price: 500 }],
                                    },
                                    {
                                        id: 5,
                                        name: "Омлет с ветчиной и грибами",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7970321044479C1D1085457A36EB.avif",
                                        price: 550,
                                        items: [{ price: 500 }],
                                    },
                                    {
                                        id: 6,
                                        name: "Омлет с ветчиной и грибами",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7970321044479C1D1085457A36EB.avif",
                                        price: 550,
                                        items: [{ price: 500 }],
                                    },
                                    {
                                        id: 7,
                                        name: "Омлет с ветчиной и грибами",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7970321044479C1D1085457A36EB.avif",
                                        price: 550,
                                        items: [{ price: 500 }],
                                    },
                                    {
                                        id: 8,
                                        name: "Омлет с ветчиной и грибами",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7970321044479C1D1085457A36EB.avif",
                                        price: 550,
                                        items: [{ price: 500 }],
                                    },
                                    {
                                        id: 9,
                                        name: "Омлет с ветчиной и грибами",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7970321044479C1D1085457A36EB.avif",
                                        price: 550,
                                        items: [{ price: 500 }],
                                    },
                                ]}
                                categoryId={2}
                            />
                            <ProductsGroupList
                                title={"хуй"}
                                items={[
                                    {
                                        id: 1,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif",
                                        price: 550,
                                        items: [{ price: 500 }],
                                    },
                                    {
                                        id: 2,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif",
                                        price: 550,
                                        items: [{ price: 500 }],
                                    },
                                    {
                                        id: 3,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif",
                                        price: 550,
                                        items: [{ price: 500 }],
                                    },
                                    {
                                        id: 4,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif",
                                        price: 550,
                                        items: [{ price: 500 }],
                                    },
                                    {
                                        id: 5,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif",
                                        price: 550,
                                        items: [{ price: 500 }],
                                    },
                                    {
                                        id: 6,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif",
                                        price: 550,
                                        items: [{ price: 500 }],
                                    },
                                    {
                                        id: 7,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif",
                                        price: 550,
                                        items: [{ price: 500 }],
                                    },
                                    {
                                        id: 8,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif",
                                        price: 550,
                                        items: [{ price: 500 }],
                                    },
                                    {
                                        id: 9,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif",
                                        price: 550,
                                        items: [{ price: 500 }],
                                    },
                                    {
                                        id: 10,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif",
                                        price: 550,
                                        items: [{ price: 500 }],
                                    },
                                    {
                                        id: 11,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif",
                                        price: 550,
                                        items: [{ price: 500 }],
                                    },
                                    {
                                        id: 12,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif",
                                        price: 550,
                                        items: [{ price: 500 }],
                                    },
                                ]}
                                categoryId={3}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
