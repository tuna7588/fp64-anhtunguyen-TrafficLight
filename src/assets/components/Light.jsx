export const Light = ({ color, active }) => {
  return (
    <div
      className="light h-16 w-16 rounded-full"
      style={{ backgroundColor: color, opacity: active ? 1 : 0.4 }}
    ></div>
  );
};
