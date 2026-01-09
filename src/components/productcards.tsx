import {Card, CardHeader, CardFooter} from "@heroui/card";

import {Image} from "@heroui/image";

import {Button} from "@heroui/button";
import { useEffect, useState } from "react";
import { Link } from "@heroui/link";

export interface ProductCardProps {

    productname : string,
    description : string,
    href : string
    image :string
}



export default function ProductCard(product : ProductCardProps){

    return(
         <Card isFooterBlurred className={`w-full h-[300px] col-span-12 sm:col-span-7`}>
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">{product.productname}</p>
          <h4 className="text-white/90 font-medium text-xl">{product.description}</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src={product.image}
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">

        <Link href={product.href}>
          <Button color="primary" radius="full" size="sm">
            View snow data
          </Button>
          </Link>
        </CardFooter>
      </Card>
    )



}