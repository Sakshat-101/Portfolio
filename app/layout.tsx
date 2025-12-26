export const metadata = {
  title: "Sakshat Keote | AI & Web Developer",
  description:
    "AI Automation & Web Experience Developer specializing in intelligent systems, modern UI, and automation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0b0d10] text-slate-100">{children}</body>
    </html>
  );
}
