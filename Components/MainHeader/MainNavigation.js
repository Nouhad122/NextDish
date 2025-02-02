import logo from '@/assets/logo.png'
import Link from 'next/link'
import Image from 'next/image'
import classes from '@/Components/MainHeader/MainNavigation.module.css'
import MainNavBackground from './MainNavBackground'
import NavLink from './NavLink'

const MainNavigation = () => {
  return (
    <>
        <MainNavBackground />

        <header className={classes.header}>
            <Link className={classes.logo} href="/">
                <Image src={logo} alt='A plate with food on it' priority />
                NextDish
            </Link>

            <nav className={classes.nav}>
                <ul>
                    <NavLink href='/meals'>Browse Meals</NavLink>
                    <NavLink href='/community'>Foodies Community</NavLink>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default MainNavigation
