import { ImageSourcePropType } from "react-native";

export interface CartItem {
    id: number;
    price: number;
    discount?: number;
    productName: string;
    productDescription: string;
    productImagesList: ImageSourcePropType[];
}

export const onSaleProducts: CartItem[] = [
    {
        id: 1,
        price: 250.00,
        discount: 50,
        productDescription: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
        productName: "Fall Limited Edition Sneakers",
        productImagesList: [
            require("../assets/images/image-product-1.jpg"),
            require("../assets/images/image-product-2.jpg"),
            require("../assets/images/image-product-3.jpg"),
            require("../assets/images/image-product-4.jpg")
        ]
    }
]