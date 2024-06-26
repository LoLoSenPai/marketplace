import type { Metadata } from "next";
import { Providers } from "@/components/shared/Providers";
import { Navbar } from "@/components/shared/Navbar";
import { SideMenuDesktop } from "@/components/shared/SideMenu";
import "../globals.css";

export const metadata: Metadata = {
  title: "Whisker | Marketplace",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="pb-[100px]">
        <Providers>
          <SideMenuDesktop />
          <div className="p-4 lg:ml-64">
            <Navbar />
            <main>{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
