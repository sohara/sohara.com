"use client";

const handleClick = (ev: React.MouseEvent<HTMLElement>) => {
  ev.preventDefault();
  const element = document.getElementById("nav");
  element?.classList.toggle("block");
  element?.classList.toggle("hidden");
};

export function MenuToggle() {
  return (
    <button
      className="block md:hidden border border-gray-500 flex items-center px-3 py-2 rounded text-gray-500"
      onClick={handleClick}
    >
      <svg
        className="fill-current h-3 w-3"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      </svg>
    </button>
  );
}
