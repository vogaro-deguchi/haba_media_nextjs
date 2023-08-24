
import styles from './article.module.scss'

import Image from 'next/image'
import Link from 'next/link'

export default function Article(props: any): JSX.Element {
  return (
    <article className={styles.article}>
      <Link href="" className={styles.articleLink} />
      <div className={styles.articleImg}>
        <Image
          src='/assets/images/index/article_01.png'
          alt=''
          width={360}
          height={360}
          layout="responsive"
        />
      </div>
      <div className={styles.articleContent}>
        <span className={styles.articleCategory}>{props.category}</span>
        <h2 className={styles.articleTitle}>{props.title}</h2>
        <p className={styles.articleText}>{props.text}</p>
        <div className={styles.articleTagList}>
          {props.tags.map((tag: any) => {
            return (
              <Link className={styles.articleTag} href="" key={tag.id}>{tag}</Link>
            )
          })}
        </div>
      </div>
    </article>
  )
}
