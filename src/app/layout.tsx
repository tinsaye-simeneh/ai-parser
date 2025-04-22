import { MantineProvider, AppShell, NavLink } from "@mantine/core";
import "@mantine/core/styles.css";
import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MantineProvider>
          <AppShell header={{ height: 60 }} padding="md">
            <AppShell.Header>
              <div className="flex items-center h-full px-4 bg-blue-500 text-white">
                <Link href="/" passHref legacyBehavior>
                  <NavLink
                    label="AI Text Parser"
                    className="text-white hover:bg-blue-600"
                    active={true}
                  />
                </Link>
                <Link href="/comment-remover" passHref legacyBehavior>
                  <NavLink
                    label="Code Comment Remover"
                    className="text-white hover:bg-blue-600"
                  />
                </Link>
              </div>
            </AppShell.Header>
            <AppShell.Main>{children}</AppShell.Main>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
