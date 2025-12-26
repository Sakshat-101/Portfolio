export const metadata = {
  title: "Sakshat Keote | AI & Web Developer",
  description:
    "AI Automation & Web Experience Developer building modern, animated, high-performance websites.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
