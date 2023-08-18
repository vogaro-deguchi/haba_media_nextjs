import styles from './ranking-article.module.scss'

import Image from 'next/image'
import Link from 'next/link'

export default function RankingArticle(props: any): JSX.Element {
  return (
    <article className={styles.article}>
      <Link href="" className={styles.articleLink}>
        <Image 
          src="/assets/images/index/article_01.png"
          alt=""
          width ={100}
          height ={100}
        />
        <p className={styles.articleTitle}>{props.title}</p>
      </Link>
    </article>
  )
}
