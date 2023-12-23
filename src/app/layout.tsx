import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sean O'Hara",
  description: "Pesonal website of Sean O'Hara",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col font-sans min-h-screen text-gray-800 bg-gray-100">
          <Header />

          <div className="flex flex-col flex-1 max-w-5xl mx-auto px-4 py-8 w-full leading-normal">
            {children}
          </div>
          <footer className="bg-gray-600">
            <div className="flex justify-between max-w-xl mx-auto p-4 text-sm">
              <p className="text-gray-200">
                Created by{" "}
                <a
                  href="https://sohara.com"
                  className="font-bold no-underline text-gray-200"
                >
                  Sean O&apos;Hara
                </a>
                &nbsp;
                <a
                  href="mailto:sohara@sohara.com"
                  className="no-underline text-gray-200"
                >
                  sohara@sohara.com
                </a>
              </p>

              <p>
                <a
                  href="https://github.com/sohara"
                  className="font-bold no-underline text-gray-200"
                >
                  GitHub
                </a>
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
