import { createStore, createLogger } from 'vuex';

import VuexPersistence from 'vuex-persist';

const debug = process.env.NODE_ENV !== 'production';

const debugLogger = debug ? createLogger() : [];

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

// TODO Move state into modules when the store becomes bigger

export default createStore({
  state: {
    products: [],
    cart: [],
    order: {},
  },
  getters: {
    cartTotal: (state) => (state.cart.length
      ? state.cart.reduce(
        (total, product) => total + product.price * product.quantity,
        0,
      )
      : 0),
    cartQuantity: (state) => (state.cart.length
      ? state.cart.reduce(
        (item, value) => item.quantity + value.quantity,
      )
      : 0),
  },
  actions: {
    addProductToCart({ commit }, product) {
      commit('ADD_PRODUCT_TO_CART', product);
    },
    removeProductFromCart({ commit }, product) {
      commit('REMOVE_PRODUCT_FROM_CART', product);
    },
    emptyCart({ commit }) {
      commit('UPDATE_CART', []);
    },
  },
  mutations: {
    UPDATE_CART(state, cart) {
      const newState = state;
      newState.cart = cart;
    },
    UPDATE_ORDER(state, order) {
      const newState = state;
      newState.order = order;
    },
    ADD_PRODUCT_TO_CART({ cart }, payload) {
      // ESLint complains if we modify the state directly
      const cartCopy = cart;
      const foundProductInCartIndex = cart.findIndex(
        (item) => item.slug === payload.slug,
      );
      if (!foundProductInCartIndex) {
        cartCopy[foundProductInCartIndex].quantity += 1;
        return cartCopy;
      }
      const newPayload = payload;
      newPayload.quantity = 1;
      cart.push(newPayload);
      return cart;
    },
    REMOVE_PRODUCT_FROM_CART({ cart }, payload) {
      cart.splice(cart.indexOf(payload), 1);
    },
  },
  strict: debug,
  plugins: [vuexLocal.plugin, debugLogger],
});
