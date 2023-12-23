import Link from "next/link";

// const handleClick = (ev: React.MouseEvent<HTMLElement>) => {
//   ev.preventDefault();
//   const element = document.getElementById("nav");
//   element?.classList.toggle("block");
//   element?.classList.toggle("hidden");
// };

export const Header = () => (
  <nav className="bg-gray-600">
    <div className="flex flex-wrap items-center justify-between max-w-5xl mx-auto p-4">
      <Link href="/" className="flex items-center no-underline text-gray-100">
        <span className="font-mono font-thin text-3xl">sean o&apos;hara</span>
      </Link>

      <button
        className="block md:hidden border border-gray-500 flex items-center px-3 py-2 rounded text-gray-500"
        // onClick={handleClick}
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

      <div id="nav" className="hidden md:flex md:items-center w-full md:w-auto">
        <div className="text-sm">
          <Link
            href="/"
            className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-gray-100 font-mono tracking-wide"
          >
            Home
          </Link>

          <Link
            href="/resume"
            className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-gray-100 font-mono tracking-wide"
          >
            Resume
          </Link>

          <Link
            href="/contact"
            className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-gray-100 font-mono tracking-wide"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  </nav>
);
