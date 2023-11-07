'use client'

import Image from 'next/image'
import Link from 'next/link'
import playersData from '@utils/players.json'

export default function Listar() {
  return (
    <div className='container mx-auto lg:px-16'>
      <div className='flex h-full flex-col justify-center px-3 lg:px-0'>
        <div className='pt-10 h-auto lg:text-4xl text-3xl text-light-primary dark:text-dark-primary font-bold'>
          Jugadores sin club
        </div>
        <div className='flex flex-col lg:flex-row justify-between items-center inline-flex py-10 gap-5 grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2'>
          {playersData.map((players, index) => (
            <Link
              href={`/players/${players?.id}`}
              key={players?.id}
              className='w-full h-auto py-3 bg-light-surfaceContainer dark:bg-dark-surfaceContainer rounded-[20px] shadow flex-col justify-start items-center gap-2 inline-flex'
            >
              <div className='px-2 rounded-xl justify-center items-center flex'>
                <Image
                  src='https://media.licdn.com/dms/image/D4E0BAQF8hQhYCYeIPg/company-logo_100_100/0/1694934728315?e=1707350400&v=beta&t=Xv-qkoofXDXHwiLrQabAJmozzhjR0ap8PTgBe0-Bk5A'
                  alt='Player Picture'
                  className='self-stretch grow shrink basis-0 rounded-xl'
                  width={200}
                  height={200}
                />
              </div>
              <div className='px-2 h-auto text-2xl text-light-primary dark:text-dark-primary font-bold'>
                {players?.nombre} {players?.apellidoap}
              </div>
              <div className='self-stretch h-[auto] px-2 flex-col justify-center items-start gap-2 flex '>
                <p className='text-light-primary dark:text-dark-primary font-bold'>
                  {players?.club}
                </p>
              </div>
              <div className='self-stretch h-[auto] px-2 flex-col justify-center items-start gap-2 flex '>
                <p className='text-light-primary dark:text-dark-primary font-bold'>
                  {players?.deporte}
                </p>
              </div>
              <div className='self-stretch h-[auto] px-2 flex-col justify-center items-start gap-2 flex '>
                <p className='text-light-primary dark:text-dark-primary'>
                  {players?.posicion}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
