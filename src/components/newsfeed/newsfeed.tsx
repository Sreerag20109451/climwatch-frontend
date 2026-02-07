import NewsCard, { NewsReport } from "./newscard";
import { Divider } from "@heroui/divider";
export type NewsItems = NewsReport[]


interface NewsFeedProps {
  newsItems: NewsItems;
}

export default function NewsFeed({newsItems}: NewsFeedProps) {


    return (
        <main className="flex flex-col flex-gap-2 items-start justify-start w-full p-4" role="grid" aria-label="climate news feed" aria-rowcount={-1} id="news-feed">


            <div role="row">
                <h3 id="newsfeed-title" className="tracking-normal text-2xl text-emerald-300" role="row" aria-label="newsfeed" aria-colindex={1}>News Feed</h3>
            </div>
            <div role="row">
                <Divider className="my-4" />
            </div>
            <div role="row">
                <div role="grid" aria-label="newscards" id="newscards" aria-rowcount={-1} aria-colcount={-1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-2">
                    {
                        newsItems.map(item => (
                            <NewsCard {...item} />
                        ))
                    }


                </div>

            </div>


        </main>
    )

}