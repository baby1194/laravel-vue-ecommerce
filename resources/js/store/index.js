import { createStore } from 'vuex';

export default createStore({
  strict: process.env.NODE_ENV !== 'production',
  state: { cart: [] },
  mutations: {
    ADD_PRODUCT_TO_CART({ cart }, payload) {
      cart.push(payload);
    },
  },
  // actions: {},
  // modules: {},
});
