"use client";

import Link from 'next/link'
import React from 'react'
import { IoBugOutline } from "react-icons/io5";
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

const NavBar = () => {
  const pathname = usePathname();
  const links = [
    { href: '/', label: 'Dashboard' },
    { href: '/issues', label: 'Issues' },
  ]

  return (
    <nav className='flex space-x-6 border-b mb-6 px-5 h-14 items-center'>
      <Link href="/">
        <IoBugOutline />
      </Link>
      <ul className='flex space-x-6'>
        {links.map(({ href, label }) => (
          <li key={`${href}${label}`}>
            <Link href={href} className={classNames({
              'text-zinc-900': pathname === href,
              'text-zinc-400': pathname !== href
            })}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar