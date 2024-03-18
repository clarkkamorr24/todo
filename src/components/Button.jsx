import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export default function Button({ onClick, children, className, noAnimation }) {
  return (
    <motion.button
      whileHover={!noAnimation && { scale: 1.1 }}
      whileTap={!noAnimation && { scale: 0.9 }}
      className={cn("rounded-md bg-primary p-2 text-white", className)}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
