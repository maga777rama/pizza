import { PizzaSize, PizzaType } from "@/shared/constants/pizza";
import { CartStateItem } from "@/shared/lib/get-cart-details";

export const GetCartItemDetails = (
    pizzaType: PizzaType,
    pizzaSize: PizzaSize,
    ingredients: CartStateItem["ingredients"],
) => {
    const details = [];

    if (pizzaSize && pizzaType) {
        const typeName = pizzaType === 1 ? "Традиционное" : "Тонкое";
        details.push(`${typeName} ${pizzaSize} см`);
    }

    if (ingredients) {
        details.push(...ingredients.map((ingredient) => ingredient.name));
    }
    return details.join(", ");
};
