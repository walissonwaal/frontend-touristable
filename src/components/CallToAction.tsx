"use client"
import { IconMapSearch } from "@tabler/icons-react";
import { useRouter } from 'next/navigation'

export default function CallToAction() {

  const router = useRouter()

  return (
    <section className='h-full flex flex-col gap-5 items-center justify-center'>
      <div className="flex gap-2 items-center text-2xl md:text-5xl font-bold text-primaryGreen dark:text-primaryWhite">
        Somos a TouristTable 🙂 
      </div>
      <h3 className="text-md md:text-xl max-w-md text-center text-zinc-400 dark:text-primaryWhite tracking-wider">
        Junte-se à nós para encontrar
        <span className='font-bold'> os melhores destinos</span> gastronômicos e passeios da web!
      </h3>
      <button onClick={() => router.push('/users/register')} className="button">Encontrar locais</button>

      
    </section>
  );
}