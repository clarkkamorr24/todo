// import EmptyView from "./EmptyView";
import { useItemsStore } from "../stores/useItemStore";
import EmptyView from "./EmptyView";
import ItemList from "./ItemList";

export default function Body() {
  const items = useItemsStore((state) => state.items);
  return (
    <section className="h-[600px] bg-secondary w-full max-w-4xl mt-2 rounded-md px-3 py-5 overflow-auto">
      {items.length === 0 && <EmptyView />}
      <ItemList />
    </section>
  );
}
