import styles from './style.module.scss'

import Article from '@/components/Article/article'

import articleData from '@/../article.json'

type articleType = {
  userId: number;
  id: number;
  category: string;
  title: string;
  text: string;
  tags: string[];
}

export default function Home() {
  return (
    <section className={styles.secArticle}>
      {articleData.map((data: articleType) => {
        return (
          <Article 
            key = {data.id}
            {...data}
          />
        )
      })}
    </section>
  )
}
