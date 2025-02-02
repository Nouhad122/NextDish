import logo from '@/assets/logo.png'
import Link from 'next/link'
import Image from 'next/image'
import classes from '@/Components/MainHeader/MainNavigation.module.css'
import MainNavBackground from './MainNavBackground'

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
                    <li>
                        <Link href="/meals">
                            Browse Meals
                        </Link>
                    </li>
                    <li>
                        <Link href="/community">
                            Foodies Community
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default MainNavigation
