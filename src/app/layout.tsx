import type { Metadata } from "next";
import { Roboto_Flex, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";

const robotoFlex = Roboto_Flex({
 weight:['200', '300', '400', '500', '700', '900'],
  subsets: ["latin"],
});
const ibmPlex = IBM_Plex_Sans({
 weight:['200', '300', '400', '500', '600', '700' ],
  subsets: ["latin"],
});

// const notoTraditionalNushu = Noto_Traditional_Nushu({
//   weight: ['300', '400', '500', '700'],
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "BitMoney",
  description: "A decentralized cryptocurrency exchange",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoFlex.className} ${ibmPlex.className}  bg-dark-gradient text-white`}
      >
        <header className="w-full"><Header/></header>
        <main>{children}</main>
      </body>
    </html>
  );
}
