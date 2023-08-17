import styles from './style.module.scss'

export default function Wrapper({children }: any):JSX.Element{
  return (
    <div  className={styles.wrapper}>
      {children}
    </div>
  )
}
