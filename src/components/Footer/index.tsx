import styles from './style.module.scss'

import Image from 'next/image'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerHead}>
        <a className={styles.online} href=""><img src="" alt="" />HABA オンラインショップ</a>
        <div className={styles.sns}>
          <p>HABA SNS 公式アカウント：</p>
          <ul>
            {/* <li><a href=""><img src="/assets/images/icon_facebook.svg" alt="" /></a></li>
            <li><a href=""><img src="/assets/images/icon_twitter.svg" alt="" /></a></li>
            <li><a href=""><img src="/assets/images/icon_line.svg" alt="" /></a></li>
            <li><a href=""><img src="/assets/images/icon_instagram.svg" alt="" /></a></li>
            <li><a href=""><img src="/assets/images/icon_youtube.svg" alt="" /></a></li> */}
          </ul>
        </div>
      </div>
      <div className={styles.footerContent}>
        <div>
          <Image
            src="/assets/images/footer_logo.png"
            alt="HABA"
            width={175}
            height={55}
          />
        </div>
        <ul className={styles.pageList}>
          <li><a href="">株式会社ハーバー研究所</a></li>
          <li><a href="">お問い合わせ</a></li>
          <li><a href="">サイトポリシー</a></li>
          <li><a href="">個人情報保護方針</a></li>
          <li><a href="">特定商取引法に基づく表記</a></li>
        </ul>
      </div>
      <div className={styles.footerCopy}>
        <p>© HABA Laboratories Inc. All Rights Reserved. </p>
      </div>
    </footer>
  )
}


