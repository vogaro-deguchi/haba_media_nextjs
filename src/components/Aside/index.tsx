import styles from './style.module.scss'

import Image from 'next/image'

import RankingArticle from '@/components/Article/ranking-article'

export default function Footer() {
  return (
    <aside className={styles.aside}>
      <div className={styles.category}>
        <Image 
          src="/assets/images/icon_category.svg"
          alt=""
          width ={30}
          height ={30}
        />
        <p className={styles.asideTitle}>記事カテゴリ</p>
        <ul className={styles.categoryList}>
          <li><a href="">商品コラム</a></li>
          <li><a href="">スタッフコラム</a></li>
          <li><a href="">美容情報</a></li>
          <li><a href="">インナーケア</a></li>
          <li><a href="">ライフスタイル</a></li>
        </ul>
      </div>
      <div className={styles.ranking}>
        <Image 
          src="/assets/images/icon_ranking.svg"
          alt=""
          width ={30}
          height ={30}
        />
        <p className={styles.asideTitle}>人気記事ランキング</p>
        <RankingArticle />
        <RankingArticle />
        <RankingArticle />
      </div>
    </aside>
  )
}
