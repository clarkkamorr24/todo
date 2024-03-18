import { Toaster } from "sonner";

export default function Toast() {
  return (
    <Toaster
      position="top-center"
      richColors
      toastOptions={{
        unstyled: true,
        classNames: {
          error:
            "flex items-center justify-center px-6 py-4 gap-2 text-xl rounded-md",
          success:
            "flex items-center justify-center px-6 py-4 gap-2 text-xl rounded-md",
        },
      }}
    />
  );
}
