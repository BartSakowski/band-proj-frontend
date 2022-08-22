import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Header.module.css'

export default function Header() {


  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href='/'> 
          <a>Young Detectives</a>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href='/members'>
              <a>Members</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}