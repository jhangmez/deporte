'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import toast from 'react-hot-toast'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Icon } from '@iconify/react'
import { Checkbox } from '@nextui-org/checkbox'
import { Input } from '@nextui-org/input'
import { Chip } from '@nextui-org/chip'
import { Divider } from '@nextui-org/divider'

export default function Form({ type }: { type: 'login' | 'register' }) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => setIsVisible(!isVisible)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setLoading(true)
        if (type === 'login') {
          signIn('credentials', {
            redirect: false,
            email: e.currentTarget.email.value,
            password: e.currentTarget.password.value
            // @ts-ignore
          }).then(({ error }) => {
            if (error) {
              setLoading(false)
              toast.error(error)
            } else {
              router.refresh()
              router.push('/home')
            }
          })
        } else {
          fetch('/api/auth/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: e.currentTarget.email.value,
              password: e.currentTarget.password.value,
              // @ts-ignore
              name: e.currentTarget.name.value
            })
          }).then(async (res) => {
            setLoading(false)
            if (res.status === 200) {
              toast.success(
                '¡Cuenta creada! Redirigiendo para iniciar sesión...'
              )
              setTimeout(() => {
                router.push('/login')
              }, 2000)
            } else {
              const { error } = await res.json()
              toast.error(error)
            }
          })
        }
      }}
      className='flex flex-col space-y-4 px-2 py-8 sm:px-2'
    >
      <div className='flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-2 flex-col'>
        <label
          htmlFor='email'
          className='block text-xs text-light-onSurface dark:text-dark-onSurface uppercase'
        >
          Correo electrónico
        </label>
        <Input
          id='email'
          name='email'
          size='sm'
          isRequired
          type='email'
          autoComplete='email'
          placeholder='correo@ejemplo.com'
          endContent={
            <Icon
              icon='mdi:email'
              width='28'
              height='28'
              className='text-2xl text-default-400 pointer-events-none flex-shrink-0'
            />
          }
        />
      </div>
      <div className='flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-2 flex-col'>
        <label
          htmlFor='password'
          className='block text-xs text-light-onSurface dark:text-dark-onSurface uppercase'
        >
          Contraseña
        </label>
        <Input
          id='password'
          name='password'
          size='sm'
          required
          placeholder='Escribe tu contraseña'
          // errorMessage='Escriba su contraseña'
          endContent={
            <button
              className='focus:outline-none'
              type='button'
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <Icon
                  icon='mdi:eye'
                  width='28'
                  height='28'
                  className='text-2xl text-default-400 pointer-events-none'
                />
              ) : (
                <Icon
                  icon='mdi:eye-closed'
                  width='28'
                  height='28'
                  className='text-2xl text-default-400 pointer-events-none'
                />
              )}
            </button>
          }
          type={isVisible ? 'text' : 'password'}
        />
      </div>
      {type === 'register' && (
        <div>
          <label
            htmlFor='Nombre'
            className='block text-xs text-light-onSurface dark:text-dark-onSurface uppercase'
          >
            Nombre
          </label>
          <input
            id='name'
            name='name'
            type='text'
            placeholder='Nombre'
            required
            className='mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm'
          />
        </div>
      )}

      {type === 'register' && (
        <Checkbox className='flex items-start mb-6'>
          <div className='ml-2 text-sm font-medium text-light-onSurface dark:text-dark-onSurface'>
            Estoy de acuerdo con los {''}
            <Link
              href='/termscond'
              className='text-light-primary dark:text-dark-primary hover:underline '
            >
              términos y condiciones
            </Link>
            .
          </div>
        </Checkbox>
      )}

      <div className='w-fill flex-col justify-center gap-5 items-center inline-flex'>
        <button
          disabled={loading}
          className={`${
            loading
              ? 'cursor-not-allowed border-light-outline border'
              : 'w-fit border-light-outline text-light-onPrimary hover:bg-dark-primary hover:text-dark-onPrimary'
          } min-w-[197px] w-fit h-10 bg-light-primary rounded-[100px] shadow flex-col justify-center items-center inline-flex`}
        >
          {loading ? (
            <Icon
              icon='eos-icons:bubble-loading'
              height={18}
              width={18}
              color='#41484f'
            />
          ) : (
            <div className='self-stretch grow  shrink basis-0 pl-4 pr-6 py-2.5 justify-center items-center  inline-flex'>
              {type === 'login' ? 'Ingresar' : 'Crear cuenta'}
            </div>
          )}
        </button>
        {type === 'login' ? (
          <p className='text-center text-sm text-light-onSurface dark:text-dark-onSurface'>
            No tienes cuenta? {''}
            <Link
              href='/register'
              className='font-semibold text-light-primary dark:text-dark-primary'
            >
              Crear una cuenta
            </Link>{' '}
            gratis.
          </p>
        ) : (
          <p className='text-center text-sm text-light-onSurface dark:text-dark-onSurface'>
            Ya tienes una cuenta?{' '}
            <Link
              href='/login'
              className='font-semibold text-light-primary dark:text-dark-primary'
            >
              Ingresar
            </Link>
          </p>
        )}
        <div className='relative w-full'>
          <Divider className='mt-2 bg-light-onSurface dark:bg-dark-onSurface' />
          <p className='absolute left-1/2 -top-1 transform -translate-x-1/2 bg-light-surface dark:bg-dark-surface text-light-onSurface dark:text-dark-onSurface'>
            o
          </p>
        </div>
        <button
          className={`${
            loading
              ? 'cursor-not-allowed border-light-outlineVariant dark:border-dark-outlineVariant'
              : 'w-fit border-light-outlineVariant dark:border-dark-outlineVariant bg-light-surface text-light-primary hover:bg-dark-surfaceVariant hover:text-dark-primary'
          } min-w-[197px] w-fit h-10 bg-light-surface hover:bg-light-surfaceVariant hover:text-dark-primary rounded-[100px] shadow flex-col justify-center items-center gap-2 inline-flex`}
        >
          {loading ? (
            <Icon
              icon='eos-icons:bubble-loading'
              height={18}
              width={18}
              color='#41484f'
            />
          ) : (
            <div className='self-stretch grow shrink basis-0 pl-4 pr-6 py-2.5 justify-center items-center gap-2 inline-flex'>
              <Icon icon='logos:google-icon' height={18} width={18} />
              <div className='text-center text-sm font-medium leading-tight tracking-tight'>
                {type === 'login'
                  ? 'Ingresar con Google'
                  : 'Crear cuenta con Google'}
              </div>
            </div>
          )}
        </button>
      </div>

      <div className='w-full flex justify-center'>
        <Chip
          className='bg-light-tertiaryContainer darl:bg-dark-tertiaryContainer'
          startContent={<Icon icon='zondicons:exclamation-solid' />}
        >
          Vuelva a enviar el formulario.
        </Chip>
      </div>
    </form>
  )
}
