import Button from "./Button";
import SortTask from "./SortTask";
import { useModal } from "../stores/useItemStore";

export default function Header() {
  const show = useModal((state) => state.show);
  return (
    <header className="w-full max-w-4xl flex justify-between">
      <Button onClick={show}>Add Task</Button>
      <SortTask />
    </header>
  );
}
