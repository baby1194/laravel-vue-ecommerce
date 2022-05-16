// https://www.youtube.com/watch?v=Ok6vO98RV_Q&t=335s

// https://www.youtube.com/watch?v=9whgkjxoCME

import { defineStore } from "pinia";

import axios from "axios";

const state = {
    products: [],
    cart: [],
    order: {},
    customer: {},
    checkoutFormIsValid: false,
    error: null,
};

export const useCart = defineStore("shopState", {
    state: () => state,
    actions: {
        async getProductsFromApi() {
            axios
                .get("/api/products")
                .then((response) => {
                    if (response.data) {
                        this.products = response.data;
                    }
                })
                .catch((error) => (this.error = error));
        },
        addToCart(item) {
            this.cart.push(item);
        },
        clearCart() {
            this.cart.length = 0;
        },
    },
});
