import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About me', href: '/aboutme' },
  { name: 'Projects', href: '/projects' },
  { name: 'Socials', href: '/socials' },
  { name: 'Skills', href: '/skills' },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  const router = useRouter();

  return (
    <Disclosure as="nav" className="bg-orange-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-orange-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          router.asPath == item.href ? 'bg-orange-900 text-white' : 'text-gray-300 hover:bg-orange-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm'
                        )}
                        aria-current={router.asPath == item.href ? 'page' : undefined}
                      >
                        <p style={{fontSize: '1.5em'}}>
                          {item.name}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}