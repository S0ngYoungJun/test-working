import styles from '@/app/page.module.scss'
import PostsPage from '@/app/post/page'

export default function Home() {
  return (
    <main className={styles.main}>
      <PostsPage />
    </main>
  )
}