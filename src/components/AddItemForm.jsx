import { useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import Button from "./Button";
import { toast } from "sonner";

export default function AddItemForm({ onAddItem, handleClose }) {
  const inputRef = useRef();
  const [text, setText] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (emojiObject) => {
    setText((prevInput) => prevInput + emojiObject.emoji);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      toast.error("Item can't be empty ☹️");
      return;
    }

    onAddItem(text);
    setText("");
    handleClose();
    toast.success("Item successfully added! 🚀");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2">
      <h1 className="text-dark text-3xl font-semibold ">Hello. 😊</h1>
      <input
        ref={inputRef}
        value={text}
        type="text"
        placeholder="Enter text. . ."
        className="rounded-md p-2 w-full focus:outline focus:outline-2 focus:outline-primary"
        onChange={(e) => {
          setText(e.target.value);
        }}
        autoFocus
      />
      <span
        className="absolute top-[70px] right-8 cursor-pointer"
        onClick={() => setShowPicker((val) => !val)}
      >
        🙂
      </span>

      {showPicker && (
        <div className="absolute top-[110px] right-0">
          <EmojiPicker onEmojiClick={onEmojiClick} />
        </div>
      )}
      <Button className="w-full" noAnimation>
        Submit
      </Button>
    </form>
  );
}
