import { IoTrashBinSharp } from "react-icons/io5";

import Icon from "./Icon";
import { cn } from "../lib/utils";
import { useItemsStore, useSort } from "../stores/useItemStore";
import { useMemo } from "react";

export default function ItemList() {
  const items = useItemsStore((state) => state.items);
  const deleteItem = useItemsStore((state) => state.deleteItem);
  const toggleItem = useItemsStore((state) => state.toggleItem);
  const sort = useSort((state) => state.sort);

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sort === "complete") {
          return b.status - a.status;
        }

        if (sort === "inprogress") {
          return a.status - b.status;
        }

        return;
      }),
    [items, sort]
  );

  return (
    <ul className="flex flex-col gap-2">
      {sortedItems.map((item) => (
        <Item
          key={item.id}
          item={item}
          handleDeleteItem={deleteItem}
          onToggleItem={toggleItem}
        />
      ))}
    </ul>
  );
}

function Item({ item, handleDeleteItem, onToggleItem }) {
  return (
    <li className="flex justify-between bg-white rounded-md p-4">
      <label className="relative flex items-center cursor-pointer gap-4">
        <input
          onChange={() => onToggleItem(item.id)}
          checked={item.status}
          type="checkbox"
          className="peer shrink-0 appearance-none w-6 h-6 border-2 border-primary rounded-md bg-white mt-1 checked:bg-secondary checked:border-2"
        />
        <svg
          className="absolute w-5 h-5 mt-1 hidden peer-checked:block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 24"
          fill="none"
          stroke="#9A3412"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <div>
          <h1
            className={cn(
              "font-bold text-lg",
              item.status && "line-through decoration-dark"
            )}
          >
            {item.name}
          </h1>
          <span className="text-xs">{item.date}</span>
        </div>
      </label>
      <section className="flex gap-2">
        <Icon onClick={() => handleDeleteItem(item.id)}>
          <IoTrashBinSharp />
        </Icon>
      </section>
    </li>
  );
}
