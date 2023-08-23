'use client'

import styles from './style.module.scss'

import Image from 'next/image'

//@ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css';

export default function Slider() {
  return (
    <>
      <Splide
        aria-label=""
        options={{
          autoplay: true,
          interval: 3000,
        }}
      >
        <SplideSlide>
        </SplideSlide>
      </Splide>
    </>
  )
}
