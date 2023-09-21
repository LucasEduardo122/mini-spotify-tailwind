import Image from 'next/image'
import { ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize } from 'lucide-react';
import Menu from './components/menu';
import Card from './components/card';
import CardMade from './components/cardMade';

const dadosCard = [
  {
    id: 1, 
    name: 'Bruna Karla',
    url: 'https://images-americanas.b2w.io/produtos/4267919497/imagens/cd-bruna-karla-aceito-o-teu-chamado/4267919534_1_large.jpg',
    description: 'Deixa a lagrima rolar'
  },

  {
    id: 2, 
    name: 'Talita Cantazaro',
    url: 'https://cdns-images.dzcdn.net/images/cover/7baac327ae62b5c3b240fedb66d555a3/500x500.jpg',
    description: 'Ruja o Leão'
  },

  {
    id: 3, 
    name: 'Sarah Beatriz',
    url: 'https://i1.sndcdn.com/artworks-PBgFqlEUMdNQ-0-t500x500.jpg',
    description: 'O Maior Vilão Sou Eu'
  },

  {
    id: 4, 
    name: 'Anderson Freire',
    url: 'https://upload.wikimedia.org/wikipedia/pt/1/14/Deus-nao-te-rejeita.jpg',
    description: 'Deus Não Te Rejeita'
  },

  {
    id: 5, 
    name: 'Anderson Freire',
    url: 'https://www.vagalume.com.br/anderson-freire/discografia/anderson-freire-ao-vivo.jpg',
    description: 'Canção Do Céu'
  },

  {
    id: 6, 
    name: 'Fernanda Brum',
    url: 'https://i.scdn.co/image/ab67616d00001e02995b924a3003cb4ef61b7187',
    description: 'Onde O Fogo Não Se Apaga'
  },
]

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
        <Menu />

        <main className='flex-1 p-6'>
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-1 text-white'>
              <ChevronLeft />
            </button>

            <button className='rounded-full bg-black/40 p-1 text-white'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-4xl mt-10 text-white'>Good Morning</h1>

          <div className='grid grid-cols-3 gap-6 mt-10'>
            {dadosCard.map(list => (
              <Card key={list.id} name={list.name} url={list.url}/>
            ))}
          </div>

          <h2 className='font-semibold text-2xl mt-10 text-white'>Made for Lucas</h2>

          <div className='grid grid-cols-8 gap-4 mt-4'>
            {dadosCard.map(list => (
              <CardMade key={list.id} name={list.name} url={list.url} description={list.description}/>
            ))}
          </div>
        </main>
      </div>

      <footer className='bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <Image alt="Imagem do album" width={56} height={56} src="https://images-americanas.b2w.io/produtos/4267919497/imagens/cd-bruna-karla-aceito-o-teu-chamado/4267919534_1_large.jpg" />
          <div className='flex flex-col'>
            <strong className='font-normal text-white'>Bruna Karla</strong>
            <span className='text-xs text-zinc-400'>Deixa a lágrima rolar</span>
          </div>
        </div>

        <div className='flex flex-col items-center'>
          <div className='flex items-center gap-6'>
            <Shuffle size={20} className='text-zinc-200' />
            <SkipBack size={20} className='text-zinc-200' />

            <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black'>
             <Play/> 
            </button> 

            <SkipForward size={20} className='text-zinc-200'/>
            <Repeat size={20} className='text-zinc-200'/>  
          </div>

          <div className='flex items-center gap-2'>
              <span className='text-xs text-zinc-400'>0:31</span>
              <div className='h-1 rounded-full w-96 bg-zinc-600'>
                <div className='bg-zinc-200 w-40 h-1 rounded-full'></div>
              </div>
              <span className='text-xs text-zinc-400'>3:00</span>
          </div>
        </div>

        <div className='flex items-center gap-4 text-white'>
          <Mic2 size={20}/>
          <LayoutList size={20} />
          <Laptop2 size={20} />

          <div className='flex items-center gap-2'>
            <Volume size={20} />

            <div className='h-1 rounded-full w-24 bg-zinc-600'>
              <div className='bg-zinc-200 w-1 h-1 rounded-full'></div>
            </div>
          </div>
          <Maximize size={20} />
        </div>
      </footer>
    </div>
  )
}
