import styles from "./page.module.css"

export default function Event() {
  return (
    <main className={styles.container}>
      <div className={styles.wideItem}>大きいアイテム</div>

      <div className={styles.item}>アイテム 1</div>
      <div className={styles.item}>アイテム 2</div>
      <div className={styles.item}>アイテム 3</div>
      <div className={styles.item}>アイテム 4</div>
    </main>
  )
}