import logo from '@/assets/logo.png'
import Link from 'next/link'
const MainNavigation = () => {
  return (
    <header>
        <Link href="/">
            <img src={logo.src} alt='' />
        </Link>

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
    </header>
  )
}

export default MainNavigation
