
import DefaultLayout from "@/layouts/default";
import Hero from "@/components/hero";
import NewsFeed from "@/components/newsfeed/newsfeed";
import { newsData } from "@/config/site";
export default function IndexPage() {
  return (
    <DefaultLayout>
      <Hero/>
      <NewsFeed newsItems={newsData}/>
    </DefaultLayout>
  );
}
