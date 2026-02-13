
import SingleSkelton from "../singleskelton"

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


export default function NewsfeedSkelton() {


    return (

        <div role="row">
            <div role="grid" aria-label="newscards" id="newscards" aria-rowcount={-1} aria-colcount={-1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 md:gap-4 gap-4">
                {
                    arr.map(item => (
                        <SingleSkelton key={item} />
                    ))
                }


            </div>

        </div>
    )


}