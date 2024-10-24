import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "English App",
    template: "DnZ",
  },
  description: "Instrumental English and Digital Thinking Project."
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head>
      <body
        className={`bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
