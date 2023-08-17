import styles from './style.module.scss'

import Image from 'next/image'
import Link from 'next/link'

export default function Article() {
  return (
    <article className={styles.article}>
    <Link href="" className={styles.articleLink}>
      <div className={styles.articleImg}>
        <Image
          src='/assets/images/index/article_01.png'
          alt=''
          width={360}
          height={360}
          objectFit="cover"
        />
      </div>
      <div className={styles.articleContent}>
        <span className={styles.articleCategory}>商品コラム</span>
        <h2 className={styles.articleTitle}>この文章はダミーです。文字の大きさ、量、時間、行間を確認するために入れています。</h2>
        <p className={styles.articleText}>この文章はダミーです文字の大きさ、量、時間、行間を確認するために入れています。この文章はダミーです文字の大きさ、量、時間、行間を確認するために入れています。</p>
        <div className={styles.articleTagList}>
          <Link className={styles.articleTag} href="">スキンケア</Link>
          <Link className={styles.articleTag} href="">しわ</Link>
          <Link className={styles.articleTag} href="">くすみ</Link>
        </div>
      </div>
    </Link>
  </article>
  )
}
