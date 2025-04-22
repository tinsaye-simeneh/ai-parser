"use client";

import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconMessageCode } from "@tabler/icons-react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        <MantineProvider>
          <header className="fixed top-0 left-0 right-0 h-16 bg-gray-800 text-white z-10 shadow-md">
            <div className="flex items-center justify-between h-full px-4">
              <div className="text-lg font-bold hidden md:block">AI Parser</div>
              <div className="text-2xl text-white md:hidden">
                <IconMessageCode />
              </div>
              <div className="flex items-center">
                <Link
                  href="/"
                  className={`px-4 py-2 hover:bg-gray-700 ${
                    pathname === "/" ? "bg-gray-700" : ""
                  }`}
                >
                  AI Text Parser
                </Link>
                <Link
                  href="/comment-remover"
                  className={`px-4 py-2 ml-3 hover:bg-gray-700 ${
                    pathname === "/comment-remover" ? "bg-gray-700" : ""
                  }`}
                >
                  Comment Remover
                </Link>
              </div>
            </div>
          </header>
          <main className="pt-16">{children}</main>
        </MantineProvider>
      </body>
    </html>
  );
}
