'use client'

import React from 'react'

import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar
} from '@nextui-org/react'
import { Icon } from '@iconify/react'
import { Skeleton } from '@nextui-org/skeleton'
import { useQuery } from '@apollo/client'
import { Myself } from '@lib/graphql/query'
import { signOut } from 'next-auth/react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const { loading, error, data, refetch } = useQuery(Myself)

  const menuItems = [
    'Profile',
    'Dashboard',
    'Activity',
    'Analytics',
    'System',
    'Deployments',
    'My Settings',
    'Team Settings',
    'Help & Feedback',
    'Log Out'
  ]
  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className='bg-light-onTertiary dark:bg-dark-onTertiary'
    >
      <NavbarContent className='sm:hidden' justify='start'>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>

      <NavbarContent className='sm:hidden pr-3' justify='center'>
        <NavbarBrand>
          <Link
            href='/home'
            className='w-fit h-14 justify-start items-center gap-[5px] inline-flex'
          >
            <Icon
              icon='icon-park-outline:sport'
              width='28'
              height='28'
              className='text-light-onSurface dark:text-dark-onSurface'
            />
            <div>
              <span className='text-light-onSurface dark:text-dark-onSurface text-2xl font-bold leading-[44px]'>
                In
              </span>
              <span className='text-light-primary dark:text-dark-primary text-2xl font-bold leading-[44px]'>
                Deportiva
              </span>
            </div>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarBrand>
          <Link
            href='/home'
            className='w-fit h-14 justify-start items-center gap-[5px] inline-flex'
          >
            <Icon
              icon='icon-park-outline:sport'
              width='28'
              height='28'
              className='text-light-onSurface dark:text-dark-onSurface'
            />
            <div>
              <span className='text-light-onSurface dark:text-dark-onSurface text-2xl font-bold leading-[44px]'>
                In
              </span>
              <span className='text-light-primary dark:text-dark-primary text-2xl font-bold leading-[44px]'>
                Deportiva
              </span>
            </div>
          </Link>
          <Input
            classNames={{
              base: 'max-w-full sm:max-w-[12rem] h-10',
              mainWrapper: 'h-full',
              input: 'text-small',
              inputWrapper:
                'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20'
            }}
            className='hidden sm:flex ml-4'
            placeholder='Buscador'
            size='sm'
            startContent={
              <Icon
                icon='mdi:magnify'
                width='18'
                height='18'
                className='text-light-onSurface dark:text-dark-onSurface'
              />
            }
            type='search'
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent as='div' className='items-center' justify='end'>
        {/* <NavbarItem className=''>
          <Link color='foreground' href='#'>
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href='#' aria-current='page'>
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='#'>
            Integrations
          </Link>
        </NavbarItem> */}
        {loading ? (
          <div className='max-w-[300px] w-full flex items-center gap-3'>
            <div>
              <Skeleton className='flex rounded-full w-12 h-12' />
            </div>
          </div>
        ) : error ? (
          <p className='text-light-onSurface dark:text-dark-onSurface'>
            Error {error.message}
          </p>
        ) : (
          <>
            <Dropdown placement='bottom-end'>
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as='button'
                  showFallback
                  className='transition-transform'
                  name={data?.me?.name || ''}
                  size='sm'
                  src='/user_picture.jpg'
                />
              </DropdownTrigger>
              <DropdownMenu aria-label='Profile Actions' variant='flat'>
                <DropdownItem className='h-14 gap-2'>
                  <p className='font-semibold'>Ingresado como</p>
                  <p className='font-semibold'>{data?.me?.email}</p>
                </DropdownItem>
                <DropdownItem key='profile' href={`/user/${data?.me?.id}`}>
                  Perfil
                </DropdownItem>
                <DropdownItem key='configurations'>
                  Configuraciones
                </DropdownItem>
                <DropdownItem key='help_and_feedback'>
                  Ayuda & Feedback
                </DropdownItem>
                <DropdownItem
                  key='logout'
                  color='danger'
                  className='text-danger'
                  onPress={() => signOut()}
                >
                  Cerrar sesión
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </>
        )}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className='w-full'
              color={
                index === 2
                  ? 'warning'
                  : index === menuItems.length - 1
                  ? 'danger'
                  : 'foreground'
              }
              href='#'
              size='lg'
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
