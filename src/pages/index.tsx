
import DefaultLayout from "@/layouts/default";
import Hero from "@/components/hero";
import NewsFeed from "@/components/newsfeed/newsfeed";
import { useQuery } from "@tanstack/react-query";
import { getnewsfeed } from "@/api/newsfeed";
import NewsfeedSkelton from "@/components/newsfeed/newsfeedskelton";
import SimpleError from "@/components/newsfeed/newsfeederror";
export default function IndexPage() {


  
  const newsfeedQuery = useQuery({
    queryKey : ['daily-newsfeed'],
    queryFn : getnewsfeed,
    retry: false,
    refetchOnWindowFocus: false,
  })

  console.log(newsfeedQuery.data)

  return (



    <DefaultLayout>
      <Hero/>
      {newsfeedQuery.data && <NewsFeed newsItems={newsfeedQuery.data!!}/>}
      {newsfeedQuery.isLoading && <NewsfeedSkelton/>}
      {newsfeedQuery.error 
      && <SimpleError/>}

    </DefaultLayout>
  );
}
