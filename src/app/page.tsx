import styles from './style.module.scss'

import Article from '@/components/Article/article'

import articleData from '@/../article.json'

import Aside from '@/components/Aside'
import Wrapper from '@/components/Wrapper'
import Slider from '@/components/Slider'

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
    <>
      <Slider />
      <Wrapper>
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
        <Aside />
      </Wrapper>
    </>
  )
}
