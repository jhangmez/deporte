'use client'

import Image from 'next/image'
import Link from 'next/link'
import productsData from '@utils/products.json'

export default function ListarProductos() {
  return (
    <div className='container mx-auto lg:px-16'>
      <div className='flex h-full flex-col justify-center px-3 lg:px-0'>
        <div className='flex flex-col lg:flex-row justify-between items-center inline-flex py-10 gap-5 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2'>
          {productsData.map((producto, index) => (
            <Link
              href={`/producto/${producto?.id}`}
              key={producto?.id}
              className='w-full h-auto py-3 bg-light-surfaceContainer dark:bg-dark-surfaceContainer rounded-[20px] shadow flex-col justify-start items-center gap-2 inline-flex'
            >
              <div className='px-2 h-auto text-2xl text-light-primary dark:text-dark-primary font-bold'>
                {producto?.nombre}
              </div>

              <div className='px-2 rounded-xl justify-center items-center flex'>
                <Image
                  src='https://media.licdn.com/dms/image/D4E0BAQF8hQhYCYeIPg/company-logo_100_100/0/1694934728315?e=1707350400&v=beta&t=Xv-qkoofXDXHwiLrQabAJmozzhjR0ap8PTgBe0-Bk5A'
                  alt='Jhangmez Picture'
                  className='self-stretch grow shrink basis-0 rounded-xl'
                  width={300}
                  height={300}
                />
              </div>
              <div className='self-stretch h-[auto] px-2 flex-col justify-center items-start gap-2 flex '>
                <p className='text-light-primary dark:text-dark-primary font-bold'>
                  $ {producto?.preciodolares} o S/ {producto?.preciosoles}
                </p>
              </div>
              <div className='self-stretch h-[auto] px-2 flex-col justify-center items-start gap-2 flex '>
                <p className='text-light-primary dark:text-dark-primary font-bold'>
                  {producto?.fabricante}
                </p>
              </div>
              <div className='self-stretch h-[auto] px-2 flex-col justify-center items-start gap-2 flex '>
                <p className='text-light-primary dark:text-dark-primary'>
                  {producto?.descripcion}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
