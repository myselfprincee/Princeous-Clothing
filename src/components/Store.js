import { create } from "zustand";
// import { devtools, persist } from "zustand/middleware"

const myStore = create((set) => ({
    count: 0,
    Increment: () => {
        set((state) => {
            const newCount = state.count + 1;
            return { count: newCount > 10 ? 10 : newCount }
        })
    },
    Decrement: () => {
        set((state) => {
            const newCount = state.count - 1;
            return { count: newCount < 0 ? 0 : newCount }
        })
    },
    cart: [],
    addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
    removeFromCart: (productId) =>
        set((state) => ({ cart: state.cart.filter((item) => item.id !== productId) })),
    reset: () => { set({ count: 0 }) }


}));

export default myStore;