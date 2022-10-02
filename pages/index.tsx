import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { client } from "@/libs/client";

interface Article {
  id: string;
  title: string;
  text: string;
}

type Props = {
  articles: Article[];
};

export default function Home({ articles }: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>一覧</title>
        <meta name="description" content="ほげ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div>
          <ul>
            {articles.map((article) => (
              <li key={article.id}>
                <Link href={`/article/${article.id}`}>
                  <a>{article.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "articles" });

  return {
    props: {
      articles: data.contents,
    },
  };
};
