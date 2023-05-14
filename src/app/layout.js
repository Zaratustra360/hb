import "./globals.sass";
import { Alegreya_Sans } from "next/font/google";

const ASans = Alegreya_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "HappyBara программа",
  description:
    "Учебная программа английского языка для школ с уникальной методикой обучения языку",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ASans.className}>{children}</body>
    </html>
  );
}
