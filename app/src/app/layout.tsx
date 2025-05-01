import "@/styles/globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "CEMG THE DEV",
  description: "Site de portfólio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="//code.jivosite.com/widget/D2w4SPR7yx" async></script>
      </head>
      <body className={`${roboto.className}`}>{children}</body>
    </html>
  );
}
