'use client'

import styles from './style.module.scss'

import Image from 'next/image'
import Link from 'next/link'

import articleData from '@/../article.json'

type articleType = {
  userId: number;
  id: number;
  category: string;
  title: string;
  text: string;
  tags: string[];
}

//@ts-ignore
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css';

export default function Slider() {
  return (
    <>
      <Splide
        className={styles.splide}
        hasTrack={ false }
        aria-label=""
        options={{
          type : 'loop',
          autoplay: true,
          interval: 3000,
          gap: 80
        }}
      >
        <div className="custom-wrapper">
          <SplideTrack>
            {articleData.map((data: articleType) => {
              return (
                <SplideSlide key={data.id} className={styles.splideSlide}>
                  <div className={styles.articleContent}>
                    <span className={styles.articleCategory}>{data.category}</span>
                    <h2 className={styles.articleTitle}>{data.title}</h2>
                    <p className={styles.articleText}>{data.text}</p>
                    <div className={styles.articleTagList}>
                      {data.tags.map((tag: any) => {
                        return (
                          <Link className={styles.articleTag} href="" key={tag.id}>{tag}</Link>
                        )
                      })}
                    </div>
                  </div>
                  <div className={styles.articleImg}>
                    <Image
                      src='/assets/images/index/article_01.png'
                      alt=''
                      width={525}
                      height={525}
                      objectFit="cover"
                    />
                  </div>
                </SplideSlide>
              )
            })}
          </SplideTrack>
          {/* <div className="splide__arrows splideArrows">
            <div className="splideArrowsInner">
              <button className="splide__arrow splideArrowPrev">Prev</button>
              <button className="splide__arrow splideArrowNext">Next</button>
            </div>
          </div> */}
        </div>
      </Splide>
    </>
  )
}
