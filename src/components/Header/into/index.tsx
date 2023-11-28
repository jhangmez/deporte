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

import SignOut from '@components/Auth/sign-out'
import { useQuery } from '@apollo/client'
import { Myself } from '@lib/graphql/query'

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
                  className='transition-transform'
                  name='Jason Hughes'
                  size='sm'
                  src='https://lh3.googleusercontent.com/pw/ADCreHdB1kXhJcx09p40r0LRYzwAJQAfPmvPuyAoJ0zQ4Zb1gBWyzoT6SHLbktyXYbmKlcI3c-7ETsFwe-y7c70ZDvWJD5iVQf3djMJXmn539RBvcfPcs6oFbyYDPzDZJNWrJXKTBAWeWJbXE1NkDKUdaJ58RK-ypBGjBxXjr39wBbGwQ4zl8WwsyNK-nPaTXC6s849S5g1a5IMaDyIo69U12NOGKex4mVqLE5zsr2WzasdJFwyh2HYZ10rF0I0cUqQhLLHRMY0H3g9n9PkhBNlHDyQeABc8zZQ2QLHiOTKHyU8wGyyE09duLSI07kCqHK5wIj3HdS687R2eV4cw6yd28x4vPEe4Cr_EjOBSBK6gyQWFpuewc-uHYvxlL4Mct3re0wRMjHcxr5eLWNDylT28Q4mk34vMviTRn7UQiKxZj4HSJxeuIYb0DGRTGa_UxOOwDtVhldyZTFj23KgPiNMoiEN8waH24_R6q7wxHhDL1KFpKuoSiJO-GmYT0tWhExhO4aarM4OALt7y7gujC7Gzpi62aoWb_sVmkVKkbqVwYZvzbebi-zCrMzByChUDjVBBQV6dYgYWycw8KJP7fB5KP2_TnFGGa5gkHGgPupUOpobnTnolIeLBD0Vjt3dhH2U4xM861mn7cMQp_nd9DqsZorK2jwYT33JD0mgqHUTz25cbwGP_Pq-kwoMAaaJNz1wXZCTlbO05w3JwP1wo5S_LyKhPFd1QiAH3EBNt3WZX6P7RaW__ga-mMwXc0Rb7WmJ9ztOnPznAZ7K89PujoYEiF3vO-zBGJ9w--aTZ-jz6fmd7yUdkkQXVKZgFOO4okgEy4mzhaIqW41zhtFQB7sOn5EuN1dGUTVpSYy8tQWVXLGZycOE9vedcQlwjcu5k1_0X_SoEw1aiLn0EOejaeXDsBfDdv4bVQqs4i7FPDEewwY4S8hJ2AKYTW5HgTvMbgXe0GmCR8XxoWRrNJ43Bki_crk4LKA_imD_97PHcVdLu397-GIEjzG2W660-84wzgtNvN3-so9PDi-ITKWwFhtwFJL0Qmf-yaMpELgHlio1B8DSZqh9G6rT24dK3=w150-h150-s-no-gm?authuser=2'
                />
              </DropdownTrigger>
              <DropdownMenu aria-label='Profile Actions' variant='flat'>
                <DropdownItem key='profile' className='h-14 gap-2'>
                  <p className='font-semibold'>Ingresado como</p>
                  <p className='font-semibold'>{data?.me?.email}</p>
                </DropdownItem>
                <DropdownItem key='configurations'>
                  Configuraciones
                </DropdownItem>
                <DropdownItem key='help_and_feedback'>
                  Ayuda & Feedback
                </DropdownItem>
                <DropdownItem key='logout' color='danger'>
                  <SignOut />
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
