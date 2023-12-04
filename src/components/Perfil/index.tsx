'use client'

export default function Perfil({ slug }: { slug: string }) {
  const id = slug

  return (
    <div className='container mx-auto lg:px-16'>
      <p className='text-light-onSurface dark:text-dark-onSurface'>
        HOLA tu estas buscando al usuario {id}
      </p>
    </div>
  )
}
