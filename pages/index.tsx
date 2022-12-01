import type { NextPage } from 'next'
import Image, { StaticImageData } from 'next/image'

import { 
  BowlsImg, 
  CameraImg, 
  LightningImg,
  WatchImg, 
} from '../assets/media/images'
import styles from '../styles/Home.module.css'

// interface for article item
interface IArticleItem {
  alt: string
  src: StaticImageData
  text: string
}

// define article list to render
const articlesList = [
  {
    alt: 'antique pocket watch',
    src: WatchImg,
    text: 'Timepieces',
  },
  {
    alt: 'antique black camera',
    src: CameraImg,
    text: 'Cameras',
  },
  {
    alt: 'antique ceramic bowls',
    src: BowlsImg,
    text: 'Kitchenware',
  },
  {
    alt: 'antique crystal chandelier',
    src: LightningImg,
    text: 'Lighting',
  },
]

// article item component
const ArticleItem = ({ item }: { item: IArticleItem }) => {
  return (
    <article role='article' className={styles.article}>
      <Image 
        alt={item.alt} 
        className={styles.imgHomeItem} 
        src={item.src} 
        loading='lazy'
        placeholder='blur'
      />
      <p className={styles.imgItemText}>{item.text}</p>
    </article>
  )
}

// home component
const Home: NextPage = () => {

  // create the article items
  const articleItems = articlesList.map((item, index) => (
    <ArticleItem item={item} key={index}/>
  ))
  
  return (
    <main role='main'>
      <section>
        {articleItems}
      </section>
    </main>
  )
}

export default Home
