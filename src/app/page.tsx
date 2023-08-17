import styles from './style.module.scss'

import Article from '@/components/Article'

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
