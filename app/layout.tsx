import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import SidePanel from "@/components/SidePanel";

const lato = Lato({ weight: ["300", "400", "700"], preload: false });

export const metadata: Metadata = {
    title: "Finance Dashboard",
    description: "Frontend Test",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={lato.className}>
                <div className="layout">
                    <nav className="sidebar fixed left-2">
                        <Navigation />
                    </nav>
                    <main className="body bg-[#F7F6FC]">{children}</main>
                    <aside className="side-panel fixed right-2">
                        <SidePanel />
                    </aside>
                </div>
            </body>
        </html>
    );
}
