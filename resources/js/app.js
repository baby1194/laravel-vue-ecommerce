require("./bootstrap");

import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

import store from "./store/index";

import Layout from "./components/Layouts/Layout.vue";
import MainIndex from "./components/MainIndex.vue";
import Navbar from "./components/Header/Navbar.vue";
import Products from "./components/Products/Products.vue";
import Categories from "./components/Categories/Categories.vue";

const routes = [
    { path: "/", component: MainIndex },
    { path: "/products", component: Products },
    { path: "/categories", component: Categories },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

createApp({
    components: { Layout, Navbar, MainIndex, Products, Categories },
})
    .use(store)
    .use(router)
    .mount("#app");
