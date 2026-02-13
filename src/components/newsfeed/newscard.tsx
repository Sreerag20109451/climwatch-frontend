import { Chip } from "@heroui/chip";

export interface NewsReport {
  title: string;
  image: string;
  content: string | null; // Added null check since one item had null content
  source: string;
  href: string;
}

export default function NewsCard(newsreport: NewsReport) {
  return (
    <main className="flex flex-col p-4 gap-y-3 justify-start w-full items-start newscard border border-zinc-800 rounded-xl">
      <div className="w-full overflow-hidden rounded-lg bg-zinc-900">
        <img 
          className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-300" 
          src={newsreport.image} 
          alt={newsreport.title}
        />
      </div>

      <h1 className="text-lg font-bold tracking-tight text-white line-clamp-2 min-h-[3.5rem]">
        {newsreport.title}
      </h1>

      <Chip size="sm" variant="flat" color="default">
        <span className="text-xs font-medium uppercase text-zinc-300">{newsreport.source}</span>
      </Chip>

      {/* Truncated Description */}
      <p className="text-sm text-zinc-400 font-medium leading-relaxed line-clamp-3">
        {newsreport.content || "No description available for this report."}
      </p>

      <a 
        href={newsreport.href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-xs text-blue-400 hover:underline mt-auto pt-2"
      >
        Read more →
      </a>
    </main>
  );
}