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
          gap: 80,
          pagination: false
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
          <div className="splide__arrows">
            <div className="splide__arrows__inner">
              <button className="splide__arrow splide__arrow--prev">Prev</button>
              <button className="splide__arrow splide__arrow--next">Next</button>
            </div>
          </div>
        </div>
      </Splide>
      <style jsx>{`
        .splide__arrow {
          width: 80px;
          height: 80px;
          left: calc(50% + 365px);
          background: #fff;
          opacity: 1;
        }
        .splide__arrows__inner {
          background-color: #fff; 
        }
        .splide__arrow--prev {
          border-radius: 0 0 40px 40px;
          bottom: auto;
          top: 50%;
        }
        .splide__arrow--next {
          border-radius: 40px 40px 0 0;
          bottom: 50%;
          top: auto;
        }
      `}</style>
    </>
  )
}
