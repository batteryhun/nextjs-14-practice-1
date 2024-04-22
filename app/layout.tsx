import { Metadata } from "next";
import Navigation from "./components/navigation";

export const metadata: Metadata = {
  title: {
    template: "%s | Nextflix",
    default: "Loading...",
  },
  description: "Nextjs is best framework:)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
