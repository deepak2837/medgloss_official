import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";
import NewFooter from "../../components/PYQ/NewFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={inter.className} >
      <header ><Header/></header>
        <main className="mt-24 bg-white">
        {children}
        </main>
        <footer className="">
       <NewFooter/>
        </footer>
        </body>
    </html>
  );
}
