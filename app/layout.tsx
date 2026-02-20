import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title:{
    template: "%s | Shopcart online store",
    default:"Shopcart online store"

  },
  description: "shopcart Online Store,your first store bch techri khouya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-Poppins antialiased"
      >
        {children}
      </body>
    </html>
  );
}
