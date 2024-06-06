import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import { exo2, roboto } from "./fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Miracle- Game",
    template: "%s | Miracle- Game",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${exo2.variable}`}>
      <body className="px-4 bg-orange-50 py-2 flex flex-col min-h-screen">
        <header>
          <Navbar />
        </header>
        <main className="py-3 grow">{children}</main>
        <footer className="text-center text-slate-500 text-sm border-t py-3">
          Game data and images courtesy of{" "}
          <a
            className="text-orange-800 hover:underline"
            href="https://rawg.io/"
            target="_blank"
          >
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}
