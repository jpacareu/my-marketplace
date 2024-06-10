import { createAppSlice } from "@/lib/createAppSlice";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchItem, fetchItems } from "./itemsAPI";

export interface Item {
  id: string;
  title: string;
  image: string;
  price: number;
  location: string;
  features: string[];
  availability: string;
}

export interface ItemsSliceState {
  items: Item[];
  item: Item | null;
  status: "idle" | "loading" | "failed";
}

const initialState: ItemsSliceState = {
  items: [],
  item: null,
  status: "idle",
};

export const itemsSlice = createAppSlice({
  name: "items",
  initialState,
  reducers: (create) => ({
    update: create.reducer((state, action: PayloadAction<Item>) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    }),
    fetchAll: create.asyncThunk(
      async () => {
        const response = await fetchItems();
        // The value we return becomes the `fulfilled` action payload
        return response.data;
      },
      {
        pending: (state) => {
          state.status = "loading";
        },
        fulfilled: (state, action) => {
          state.status = "idle";
          state.items = action.payload;
        },
        rejected: (state) => {
          state.status = "failed";
        },
      }
    ),
    fetchOne: create.asyncThunk(
      async (id: string) => {
        const response = await fetchItem(id);
        // The value we return becomes the `fulfilled` action payload
        return response.data;
      },
      {
        pending: (state) => {
          state.status = "loading";
        },
        fulfilled: (state, action) => {
          state.status = "idle";
          state.item = action.payload;
        },
        rejected: (state) => {
          state.status = "failed";
        },
      }
    ),
  }),
  selectors: {
    selectItems: (state) => state.items,
    selectStatus: (state) => state.status,
    selectItem: (state) => state.item,
  },
});

export const { update, fetchAll, fetchOne } = itemsSlice.actions;

export const { selectItems, selectStatus, selectItem } =
  itemsSlice.selectors;
