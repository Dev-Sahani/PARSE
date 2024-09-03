import { Data } from "./page"
import Image from "next/image";

interface Prop {
  data: Data
}

const imgs : {src:string, text:string}[] = [
  {src: "/test1.png", text:"Anything"},
  {src: "/test2.png", text:"Anything"},
  {src: "/test3.png", text:"Anything"}
]

export default ({ data }: Prop) => {
  return (
    <div className="p-6 bg-secondary">
      <div className="flex gap-x-8 pb-4">
      {
        imgs.map((el, ind) => (
          <div className="w-[250px]" key={ind}>
            <span data-state="closed">
              <div className="overflow-hidden">
                {/* <img alt="React Rendezvous" loading="lazy" width="250" height="330" decoding="async" data-nimg="1" className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-[3/4]" style={{color: "transparent"}} src="../../public/test1.png"/> */}
                <Image alt="React Rendezvous" width={250} height={330} src={el.src} className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-[3/4]" style={{color: "transparent"}}/>
              </div>
            </span>
            <div className="my-4 text-sm">
              <h3 className="font-medium leading-none">
                {el.text}
              </h3>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  )
}