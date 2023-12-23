import Link from "next/link";
import { MenuToggle } from "./MenuToggle";

export const Header = () => (
  <nav className="bg-gray-600">
    <div className="flex flex-wrap items-center justify-between max-w-5xl mx-auto p-4">
      <Link href="/" className="flex items-center no-underline text-gray-100">
        <span className="font-mono font-thin text-3xl">sean o&apos;hara</span>
      </Link>

      <MenuToggle />

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
