import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/common/Header";
import NewFooter from "@/components/common/NewFooter";
import ToastProvider from "@/components/Toast";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Medgloss",
  description: "Medgloss your study buddy",
};

export default function RootLayout({ children, Component, pageProps }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
          <Header />
          {/* <Aside/> */}
          {/* <TopAdSection/> */}
          <main className=" bg-white min-h-screen  z-10">{children}</main>

          {/* <BottomAdSection/> */}
          <footer className="z-10 mt-5 relative bottom-0">
            <NewFooter />{" "}
          </footer>
        </div>
        <ToastProvider />
      </body>
    </html>
  );
}
