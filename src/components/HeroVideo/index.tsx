import Link from 'next/link'

export default function HeroVideo() {
  return (
    <div className='relative h-[500px] md:h-[700px]'>
      <video
        autoPlay
        loop
        muted
        className='absolute w-full h-full object-cover'
      >
        <source src='video-banner.mp4' type='video/mp4' />
      </video>

      <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white'>
        <div className='absolute bottom-1 left-1 text-gray-500 dark:text-gray-400 text-xs'>
          Video de:{' '}
          <Link
            href='https://www.youtube.com/watch?v=YYaleuLixPk'
            target='_blank'
            className='underline'
          >
            <span className='self-center text-gray-500 dark:text-gray-400'>
              TURISMO EN PERU
            </span>
          </Link>
        </div>
        <div className='md:w-full sm:w-full lg:w-2/6 flex-col justify-center items-center gap-2.5 inline-flex'>
          <div className=' text-center'>
            <span className='text-light-surface dark:text-dark-onSurface text-5xl font-bold '>
              Desarrolla y demuestra el talento de tu infante al mundo
              deportivo.
            </span>
          </div>
          <div className=' text-center text-light-surface dark:text-dark-onSurface text-2xl font-medium '>
            Demuestra las habilidades deportivas de tu infante para encontrar
            inversores que ayuden a desarrollar su potencial.
          </div>
        </div>
      </div>
    </div>
  )
}
