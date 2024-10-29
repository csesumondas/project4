import { Roboto } from "next/font/google";
import "./globals.css";
import { ItemProvider } from "./ItemContext";

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  title: "Bangla Puzzle Limited",
  description: "Created by Sumon Kumar Das with NextJs 15",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <ItemProvider>{children}</ItemProvider>
      </body>
    </html>
  );
}
