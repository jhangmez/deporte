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
import { Skeleton } from '@nextui-org/skeleton'
import SignOut from '@components/Auth/sign-out'
import { Icon } from '@iconify/react'
import { Button } from '@nextui-org/button'
import { useQuery } from '@apollo/client'
import { getTodosQuery } from '@lib/graphql/query'

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

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

  const { loading, error, data, refetch } = useQuery(getTodosQuery)

  return (
    <main className='dark text-foreground bg-background'>
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
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
              placeholder='Type to search...'
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
          <NavbarItem>
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
          </NavbarItem>
          <Dropdown placement='bottom-end'>
            <DropdownTrigger>
              <Avatar
                isBordered
                as='button'
                className='transition-transform'
                color='secondary'
                name='Jason Hughes'
                size='sm'
                src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
              />
            </DropdownTrigger>
            <DropdownMenu aria-label='Profile Actions' variant='flat'>
              <DropdownItem key='profile' className='h-14 gap-2'>
                <p className='font-semibold'>Signed in as</p>
                <p className='font-semibold'>zoey@example.com</p>
              </DropdownItem>
              <DropdownItem key='settings'>My Settings</DropdownItem>
              <DropdownItem key='team_settings'>Team Settings</DropdownItem>
              <DropdownItem key='analytics'>Analytics</DropdownItem>
              <DropdownItem key='system'>System</DropdownItem>
              <DropdownItem key='configurations'>Configurations</DropdownItem>
              <DropdownItem key='help_and_feedback'>
                Help & Feedback
              </DropdownItem>
              <DropdownItem key='logout' color='danger'>
                <SignOut />
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
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

      <Button as={Link} href='/register/infant' color='primary'>
        Crear perfil infante
      </Button>

      {loading ? (
        <div className='max-w-[300px] w-full flex items-center gap-3'>
          <div>
            <Skeleton className='flex rounded-full w-12 h-12' />
          </div>
          <div className='w-full flex flex-col gap-2'>
            <Skeleton className='h-3 w-3/5 rounded-lg' />
            <Skeleton className='h-3 w-4/5 rounded-lg' />
          </div>
        </div>
      ) : error ? (
        <p>Error</p>
      ) : (
        data?.todos.map((user) => (
          <div key={user.id}>
            <br></br>
            {user.email}
            <br></br>
            {user.phonenumber}
            <br></br>
            {user.perinfId}
            <br></br>
          </div>
        ))
      )}
    </main>
  )
}
