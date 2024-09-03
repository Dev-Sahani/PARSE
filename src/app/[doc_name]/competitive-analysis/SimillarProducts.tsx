import { Data } from "./page"
import Image from "next/image";

interface Prop {
  data: Data
}

const imgs : {src:string, text:string}[] = [
  {src: "/simillar1.png", text:"Mama Earth sunscreen"},
  {src: "/simillar2.png", text:"SPF 50 Sunscreen"},
  {src: "/simillar3.png", text:"The Derma Co 1% Hyaluronic Sunscreen"},
]

export default ({ data }: Prop) => {
  return (
    <div className="flex flex-wrap gap-6 pb-4">
    {
      imgs.map((el, ind) => (
        <div className="w-[350px] bg-primary p-4" key={ind}>
          <span data-state="closed">
            <div className="overflow-hidden">
              {/* <img alt="React Rendezvous" loading="lazy" width="250" height="330" decoding="async" data-nimg="1" className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-[3/4]" style={{color: "transparent"}} src="../../public/test1.png"/> */}
              <Image alt="React Rendezvous" width={350} height={380} src={el.src} className="object-cover transition-all hover:scale-105 aspect-[3/4]" style={{color: "transparent"}}/>
            </div>
          </span>
          <div className="my-4 text-sm">
            <h3 className="font-medium leading-none text-white">
              {el.text}
            </h3>
          </div>
        </div>
      ))
    }
    </div>
  )
}