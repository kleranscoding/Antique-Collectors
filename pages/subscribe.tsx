
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { SpamImg } from '../assets/media/images'
import styles from '../styles/Subscribe.module.css'

// subscribeEnd component
const SubscribeEnd = () => {
  let styleSubscribeEnd = {
    container: {
      height: '30vh',
      padding: '0 5px',
    },
  }
  return (
    <div style={styleSubscribeEnd.container}>
      <h3>
        Thank you for your support
      </h3>
    </div>
  )
}

// subscribe component
const Subscribe: NextPage = () => {
  return (
    <>
      <Head>
        <title>Antique Collecters | Subscribe</title>
      </Head>
      <main role='main'>
        <Image className={styles.imgSpam} src={SpamImg} alt='we will not spam you' />
        <h3 className={styles.subcscribeTitle}>
          In the newsletter you&apos;ll get photos of rare collectibles + VIP event invites
        </h3>
        <SubscribeEnd />
      </main>
    </>
  )
}

export default Subscribe