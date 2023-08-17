import styles from './style.module.scss'

import Image from 'next/image'

export default function Home() {
  return (
    <section className={styles.secArticle}>
      <article className={styles.article}>
        {/* <a href="" className={styles.articleLink}> */}
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
              <a className={styles.articleTag} href="">スキンケア</a>
              <a className={styles.articleTag} href="">しわ</a>
              <a className={styles.articleTag} href="">くすみ</a>
            </div>
          </div>
        {/* </a> */}
      </article>
      <article className={styles.article}>
        {/* <a href="" className={styles.articleLink}> */}
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
              <a className={styles.articleTag} href="">スキンケア</a>
              <a className={styles.articleTag} href="">しわ</a>
              <a className={styles.articleTag} href="">くすみ</a>
            </div>
          </div>
        {/* </a> */}
      </article>
    </section>
  )
}
