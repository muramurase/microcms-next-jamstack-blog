import Head from "next/head";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "../../../styles/MainImage.module.css";

export default function MainImage() {
  const hoge = useRef<HTMLImageElement | null>(null);

  const handleScroll = useCallback(() => {
    hoge.current.style.top = window.scrollY / 4 + "px";
  }, [hoge]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className={styles.container}>
      <Head>
        <title>main-image</title>
        <meta
          name="description"
          content="メインイメージ系のトップ画面サンプル"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.imageArea}>
          <div id="hoge" className={styles.imageWrap}>
            <ul>
              <li>
                <img
                  className={styles.image}
                  ref={hoge}
                  src="https://www.awa-kinokuniya.com/files/index/img01_01.jpg"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>

        <div
          className="bnr-wrap fx-done"
          style={{ backgroundColor: "#000", height: "2500px" }}
        ></div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
