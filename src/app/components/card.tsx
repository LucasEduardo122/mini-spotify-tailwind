import { Play } from "lucide-react"
import Image from "next/image"

interface PropsCard {
    name: string,
    url: string
}

export default function Card({name, url}: PropsCard) {
    return (
        <a href="" className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
            <Image alt="Imagem do album" width={104} height={104} src={`${url}`} />
            <strong className='text-white'>{name}</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-10 invisible group-hover:visible'>
                <Play />
            </button>
        </a>
    )
}