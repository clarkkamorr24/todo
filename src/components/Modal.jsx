import { AnimatePresence, motion } from "framer-motion";
import AddItemForm from "./AddItemForm";
import { useModal, useItemsStore } from "../stores/useItemStore";

const modeVariants = {
  hidden: {
    y: "-100vh",
    opacity: 0,
    transform: "scale(0) rotateX(-360deg)",
  },
  visible: {
    y: "-25vh",
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "spring",
      damping: 15,
      stiffness: 500,
    },
  },
  exit: {
    y: "-100vh",
    opacity: 0,
  },
};

export default function Modal() {
  const addItem = useItemsStore((state) => state.addItem);
  const hide = useModal((state) => state.hide);
  return (
    <AnimatePresence>
      <Backdrop onClick={hide}>
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="relative w-full py-4 px-4 max-w-xl m-auto p-1 rounded-md  bg-tertiary "
          variants={modeVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <AddItemForm onAddItem={addItem} handleClose={hide} />
        </motion.div>
      </Backdrop>
    </AnimatePresence>
  );
}

function Backdrop({ children, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      className="absolute top-0 left-0 h-full w-full bg-secondary flex items-center justify-center overflow-y-hidden bg-opacity-70"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}
