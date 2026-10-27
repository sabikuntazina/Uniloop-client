import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "UniLoop — Campus Student Marketplace",
  description:
    "Buy and sell used textbooks, calculators, academic materials, and student essentials safely across your university community.",
  keywords: [
    "student marketplace",
    "used textbooks",
    "university buy and sell",
    "engineering calculator",
    "dorm essentials",
    "campus commerce",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" className="scroll-smooth">
      <body className="bg-[#090909] text-[#F8F8F8] antialiased selection:bg-[#F5C542] selection:text-black min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
