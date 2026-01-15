
import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col gap-4 min-h-screen bg-black">
      <Navbar />
      <main className="container mx-auto  flex-grow">
        {children}
      </main>
    </div>
  );
}
