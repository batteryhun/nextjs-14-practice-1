import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About-us",
};
export default function AboutusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <h4>this is about us layout</h4>
    </div>
  );
}
