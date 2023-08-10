import { chunk } from "lodash";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import styles from "./styles/news.module.scss";

export default function Posts({ allPosts }) {
  const router = useRouter();
  const currentPage = router.query.page ? parseInt(router.query.page, 10) : 1;
  const pages = chunk(allPosts, 10);
  const posts = pages[currentPage - 1];
  return <>
    <Head>
      <title>お知らせ - SuperGoodMeetings</title>
    </Head>
    <Layout>
      <div className={styles.posts_container}>
        <h1>お知らせ</h1>
        <div>
          {posts.map((post, i) => (
            <div key={i}>
              <p className={styles.posts_item}>
                <span>{post.date}</span>
                <Link href={`/posts/${encodeURIComponent(post.slug)}`} legacyBehavior>{post.title}</Link>
              </p>
            </div>
          ))}
        </div>
        <ul className={styles.pager}>
          {pages.map((_, i) => {
            const page = i + 1;
            if (page === currentPage) {
              return <li key={page}>{page}</li>;
            } else {
              return (
                <li key={page}>
                  <Link href={{ pathname: "/posts", query: { page } }} legacyBehavior>{`${page}`}</Link>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </Layout>
  </>;
}

export async function getStaticProps() {
  const allPosts = getAllPosts(["slug", "title", "date"]);
  return {
    props: { allPosts },
  };
}
