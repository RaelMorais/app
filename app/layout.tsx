import type { Metadata } from "next";
import { Roboto } from "next/font/google"; 
import "./globals.css";
import { cn } from "@/lib/utils"; 

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"], 
});

export const metadata: Metadata = {
  title: "Create Next App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          roboto.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}