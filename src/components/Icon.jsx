export default function Icon({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-primary rounded-full p-3 my-2 text-white"
    >
      {children}
    </button>
  );
}
