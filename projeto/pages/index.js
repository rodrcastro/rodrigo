import Head from 'next/head';
import Link from 'next/link';

import Date from '../components/Date/date';
import Footer from '../components/Footer/footer';
import Nav from '../components/Nav/nav';
import About from '../components/About/about';

import { getSortedPostsData } from '../lib/posts';

import styles from './Home.module.css';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <main className={styles.main}>
        <About />
        <section>
          <ul>
            {allPostsData.map(({ id, date, title }) => (
              <li key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <Date dateString={date} />
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
