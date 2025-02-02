'use client';
import Link from 'next/link';
import classes from './NavLink.module.css'
import { usePathname } from 'next/navigation'

const NavLink = ({href, children}) => {
    const path = usePathname();
  return (
    <li>
        <Link
         href={href}
         className=
          {path.startsWith(href) ?
          `${classes.link} ${classes.active}` :
          classes.link}
        >
            {children}
        </Link>
    </li>
  )
}

export default NavLink
