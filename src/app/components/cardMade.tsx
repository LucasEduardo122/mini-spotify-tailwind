import Image from "next/image";

interface PropsCard {
    name: string,
    url: string,
    description: string
}

export default function CardMade({url, name, description}: PropsCard) {
    return (
        <a href="" className='bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/20'>
            <Image alt="Imagem do album" className='w-full' width={128} height={128} src={`${url}`} />
            <strong className='front-semibold text-white'>{name}</strong>
            <span className='text-sm text-zinc-400'>{description}</span>
        </a>
    )
}