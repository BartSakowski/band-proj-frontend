import Head from 'next/head'
import Header from './Header'
import Hero from './Hero'
import Footer from './Footer'
import styles from '../styles/Layout.module.css'
import {useRouter} from 'next/router'


export default function Layout({hero, title, keywords, description, children}) {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>

      <Header />

     <Hero hero={hero}/>

      <div className={styles.container}>
        {children}
      </div>
      <Footer/>
    </div>
  )
}


Layout.defaultProps = {
  title: 'Young Detectives | Chicago Indie Rock',
  description: 'Stay informed on your fav Chicago indie rock band',
  keywords: 'music, indie, rock, alt',
}

