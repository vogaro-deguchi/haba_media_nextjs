import styles from './style.module.scss'

import Article from '@/components/Article/article'

export default function Home() {
  return (
    <section className={styles.secArticle}>
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
    </section>
  )
}
