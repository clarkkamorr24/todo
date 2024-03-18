import moment from "moment";
import { toast } from "sonner";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useItemsStore = create(
  persist(
    (set) => ({
      items: [],
      addItem: (newItemText) => {
        const newItem = {
          id: new Date().getTime(),
          name: newItemText,
          status: false,
          date: moment().format("llll"),
        };
        set((state) => ({ items: [...state.items, newItem] }));
      },
      deleteItem: (id) => {
        set((state) => {
          const newItems = state.items.filter((item) => item.id !== id);
          toast.error("Successfully deleted 🥳");
          return { items: newItems };
        });
      },
      toggleItem: (id) => {
        set((state) => {
          const newItems = state.items.map((item) => {
            if (item.id === id) {
              return { ...item, status: !item.status };
            }

            return item;
          });
          return { items: newItems };
        });
      },
    }),
    {
      name: "items",
    }
  )
);

export const useModal = create((set) => ({
  modal: false,
  show: () => set(() => ({ modal: true })),
  hide: () => set(() => ({ modal: false })),
}));

export const useSort = create((set) => ({
  sort: "default",
  sortBy: (value) => {
    set(() => ({ sort: value }));
  },
}));
