import LiveClockUpdate from "./LiveClock";

export default function Title() {
  return (
    <>
      <h1 className="text-dark text-6xl font-medium mb-10 text-center">
        {" MARINELL'S TODO APP "}
      </h1>
      <LiveClockUpdate />
    </>
  );
}
