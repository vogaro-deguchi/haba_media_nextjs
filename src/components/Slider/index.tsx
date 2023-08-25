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
          interval: 5000,
          speed: 2000,
          gap: 80,
          pagination: false,
          breakpoints: {
            767: {
              gap: 0,
            },
          }
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
                      sizes='(min-width: 767px) 525px, 100%'
                      layout="responsive"
                    />
                  </div>
                </SplideSlide>
              )
            })}
          </SplideTrack>
            <div className={`${styles.splideArrows} splide__arrows`}>
              <div className={`${styles.splideArrowsInner} splide__arrows__inner`}>
                <button className={`${styles.splideArrowPrev} splide__arrow splide__arrow--prev`}>Prev</button>
                <button className={`${styles.splideArrowNext} splide__arrow splide__arrow--next`}>Next</button>
              </div>
            </div>
        </div>
      </Splide>
    </>
  )
}
