"use client"
import { IconMapSearch } from "@tabler/icons-react";
import { useRouter } from 'next/navigation'
import Image  from 'next/image';

export default function CallToAction() {

  const router = useRouter()

  return (
    <section className='h-full flex flex-col gap-5 items-center justify-center'>
      <div className="flex gap-2 items-center text-2xl md:text-5xl font-bold text-primaryGreen dark:text-primaryWhite">
        Somos a TouristTable <Image src='/img/family.png' alt='Tourist' width={30} height={30} />
      </div>
      <h3 className="leading-7 font-light text-md md:text-xl max-w-md text-center text-zinc-400 dark:text-primaryWhite tracking-wider">
        Junte-se à nós para encontrar
        <span className='font-bold'> os melhores destinos</span> gastronômicos e passeios da web!
      </h3>
      <button onClick={() => router.push('/users/register')} className="button">Encontrar locais</button>

      
    </section>
  );
}