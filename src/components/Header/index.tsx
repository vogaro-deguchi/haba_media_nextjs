import styles from './style.module.scss'

import Image from 'next/image'

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <span className={styles.main}>
          <Image
            src="/assets/images/header_title.png"
            alt="HABA MEDIA"
            width={555}
            height={64}
          />
        </span>
        <span className={styles.sub}>ダミータイトルが入ります。</span>
      </h1>
    </header>
  )
}
