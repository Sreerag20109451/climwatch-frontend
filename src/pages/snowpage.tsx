import MapComponent from "@/components/map";
import { title } from "@/components/primitives";
import SnowHero from "@/components/snowhero";
import DefaultLayout from "@/layouts/default";

export default function SnowPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">

        <SnowHero/>
      </section>
    </DefaultLayout>
  );
}
