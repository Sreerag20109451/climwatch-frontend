import {Chip} from "@heroui/chip";



export interface NewsReport {

    title : string
    image: string
    content: string
    source: string
    href: string
}

export default function NewsCard(newsreport  : NewsReport ){


    return(
           <main className="flex flex-col p-4 gap-y-2 justify-start w-full items-start newscard">
        <img className="newscard-image" src={newsreport.image} ></img>
        <h1 className="text-lg font-bold text-zinc-500 tracking-tight text-white">{newsreport.title}</h1>
            <Chip color="default"><h4 className="text-sm">{newsreport.source}</h4></Chip>
        <span><h3 className="text-md text-zinc-500 font-semibold tracking-normal">{newsreport.content}</h3>
            </span>
        
    </main>

    )


 

}