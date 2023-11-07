import Form from '@components/Auth/form'
import Link from 'next/link'

export default function Login() {
  return (
    <div className='flex h-screen w-screen items-center justify-center  '>
      <div className='z-10 w-full max-w-md overflow-hidden rounded-[12px] border shadow-xl '>
        <div className='flex flex-col items-center justify-center space-y-3 border-b bg-light-surface dark:bg-dark-surface px-4 py-6 pt-8 text-center sm:px-16'>
          <Link href='/' className='flex items-center gap-2.5'>
            <div className='w-6 h-[23.57px] relative'>
              <div className='w-6 h-[5.56px] left-0 top-[9px] absolute bg-light-primary dark:bg-dark-primary' />
              <div className='w-6 h-[5.56px] left-[3.59px] top-[20.78px] absolute origin-top-left rotate-[-60deg] bg-light-primary dark:bg-dark-primary' />
              <div className='w-6 h-[5.56px] left-[8.41px] top-0 absolute origin-top-left rotate-[60deg] bg-light-primary dark:bg-dark-primary' />
            </div>
            <span className='self-center font-bold text-2xl leading-[48px] whitespace-nowrap text-light-onSurface dark:text-dark-onSurface'>
              han
              <span className='text-2xl font-bold leading-[48px] text-light-primary dark:text-dark-primary'>
                pY
              </span>
            </span>
          </Link>

          <h3 className='text-xl font-semibold text-light-onSurface dark:text-dark-onSurface'>
            Ingresar
          </h3>
          <p className='text-sm text-light-onSurface dark:text-dark-onSurface'>
            Usa tu correo electrónico y contraseña para ingresar.
          </p>
        </div>

        <Form type='login' />
      </div>
    </div>
  )
}
