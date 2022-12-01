
import type { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'

import { BoxesImg } from '../assets/media/images'
import styles from '../styles/About.module.css'

// about component
const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Antique Collecters | About</title>
      </Head>
      <main role='main'>
        <Image className={styles.imgBoxes} src={BoxesImg} alt='antique filing boxes' />
        <article role='article' className={styles.aboutText}>
          <h3 className={styles.title}>Welcome to Gray & Co.</h3>
          <p>
            Hello! We&apos;re thrilled you&apos;re here.
            <br />
            We&apos;re luxury antique shop near SoMa that specializes in homegoods.
            We hand select all of our items from international sellers in England, Ireland and France.
          </p>
          <p>
            With more than 200 items, we&apos;ll help you find exactly what you&apos;re looking for.
          </p>
        </article>
        <aside role='complementary' className={styles.aside}>
          <div id='contact' className={styles.contact}>
            <p>
              <span className={styles.company}>
                Gray & Co.
              </span>
              <br />
              (415) 926 - 0721
              <br />
              501 Pine Street
            </p>
            <p>
              <b>Shop hours:</b>
              <br />
              M - F  12 p.m. - 7p.m.
              <br />
              Sa, Su 10 a.m. - 8p.m.
            </p>
          </div>
        </aside>
      </main>
    </>
  )
}

export default About