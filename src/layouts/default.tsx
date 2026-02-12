
import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col px-6 w-screen min-h-screen bg-black">
      <Navbar />
      <main className="w-full mx-auto  flex-grow">
        {children}
      </main>
    </div>
  );
}
