import styles from './ranking-article.module.scss'

import Image from 'next/image'
import Link from 'next/link'

export default function RankingArticle() {
  return (
    <article className={styles.article}>
      <Link href="" className={styles.articleLink}>
        <Image 
          src="/assets/images/index/article_01.png"
          alt=""
          width ={100}
          height ={100}
        />
        <p className={styles.articleTitle}>この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</p>
      </Link>
    </article>
  )
}
