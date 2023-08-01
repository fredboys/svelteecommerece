import { writable, get } from "svelte/store";

export const cartItems = writable<CartItem[]>([]);