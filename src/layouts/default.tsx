
import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-screen bg-black">
      <Navbar />
      <main className="container mx-auto  flex-grow">
        {children}
      </main>
      <Footer/>
    </div>
  );
}
