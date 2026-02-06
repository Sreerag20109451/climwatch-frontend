import {Chip} from "@heroui/chip";

import { GoArrowRight } from "react-icons/go";

interface NewsReport {

    title : string
    image: string
    content: string
    source: string
    href: string
}

export default function NewsCard(newsreport  : NewsReport ){


    <main className="flex flex-col p-4 gap-y-2 justify-start md:w-1/2 lg:w- items-center newscard opacity-0">
        <img className="newscard-image" src={newsreport.image} ></img>
        <h1 className="text-2xl font-bold tracking-tight text-white">{newsreport.title}</h1>
            <Chip color="default"><h4 className="text-md text-emerald-300">{newsreport.source}</h4></Chip>
        <span><h3 className="text-lg text-white font-semibold tracking-normal">{newsreport.content}</h3>
        <a href={newsreport.href}>
            <GoArrowRight/></a>
            </span>
        
    </main>

}