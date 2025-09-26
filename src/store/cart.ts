"use client";
import { create } from "zustand";
import { useEffect, useState } from "react";

type Variant = "1kg" | "500g";
export type CartItem = {
  id: string;
  name: string;
  variant: Variant;
  price: number;
  qty: number;
};

export type CartState = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string, variant: Variant) => void;
  updateQty: (id: string, variant: Variant, qty: number) => void;
  clear: () => void;
  totalQty: () => number;
  totalAmount: () => number;
};

const KEY = "econutrient_cart";
const TSKEY = "econutrient_cart_ts";
const TTL_MS = 24 * 60 * 60 * 1000;

function load(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const ts = localStorage.getItem(TSKEY);
    const now = Date.now();
    if (ts && now - Number(ts) > TTL_MS) {
      localStorage.removeItem(KEY);
      localStorage.removeItem(TSKEY);
      return [];
    }
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as CartItem[]) : [];
  } catch {
    return [];
  }
}

function save(items: CartItem[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(items));
  localStorage.setItem(TSKEY, String(Date.now()));
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  addItem: (item) =>
    set((state) => {
      const idx = state.items.findIndex(
        (it) => it.id === item.id && it.variant === item.variant
      );
      const items = [...state.items];
      if (idx > -1) {
        items[idx] = { ...items[idx], qty: items[idx].qty + item.qty };
      } else {
        items.push(item);
      }
      save(items);
      return { items };
    }),
  removeItem: (id, variant) =>
    set((state) => {
      const items = state.items.filter((it) => !(it.id === id && it.variant === variant));
      save(items);
      return { items };
    }),
  updateQty: (id, variant, qty) =>
    set((state) => {
      const items = state.items.map((it) =>
        it.id === id && it.variant === variant ? { ...it, qty } : it
      );
      save(items);
      return { items };
    }),
  clear: () => {
    save([]);
    return { items: [] };
  },
  totalQty: () => get().items.reduce((sum, it) => sum + it.qty, 0),
  totalAmount: () => get().items.reduce((sum, it) => sum + it.price * it.qty, 0),
}));

export function useCartHydration() {
  const [hydrated, setHydrated] = useState(false);
  const setState = useCartStore.setState;
  useEffect(() => {
    setState({ items: load() });
    setHydrated(true);
  }, [setState]);
  return hydrated;
}
