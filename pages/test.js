import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sw9b</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welkom bij <a href="https://www.sw9b.nl">Sw9b.nl</a>
        </h1>

        <p className={styles.description}>
          Made by{' '}
          <code className={styles.code}>Sw9b#2788</code>
        </p>

        <div className={styles.grid}>
          <a href="https://bit.ly/3vmeb4Z" className={styles.card}>
            <h3>Geen Rickroll &rarr;</h3>
            <p>Neh echt niet hoor</p>
          </a>

          <a href="https://bit.ly/3vmeb4Z" className={styles.card}>
            <h3>Misschien een Rickroll? &rarr;</h3>
            <p>Wie weet is het een rickroll</p>
          </a>

          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className={styles.card}
          >
            <h3>Is dit dan ook een rickroll? &rarr;</h3>
            <p></p>
          </a>

          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className={styles.card}
          >
            <h3>Rickroll? &rarr;</h3>
            <p>

            </p>
          </a>
          <code className={styles.code}>
            <img src="Banana-Free-Download-PNG.png" alt="Vercel Logo" className={styles.logo} />
          </code>
          <code className={styles.code}>
            Big <a href="https://www.youtube.com/watch?v=7yLUALnwui4">Bingus</a>
          </code>

        </div>
      </main>
      <p className={styles.description}>
      <a href="https://info.sw9b.nl">@media</a>
      </p>
      

      <footer className={styles.footer}>
        <a
          href="https://www.thisisnotarealsitelmao.butreally"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="logo.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
