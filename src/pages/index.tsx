import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { fetchEntries } from '@/utils/contentful';
import Product from '../../lib/components/Product';
import TopLine from '../../lib/components/TopLine';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>New Black contentful studio</title>
        <meta name="description" content="A Next.js app with Contentful CMS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <TopLine />

      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.grid}>
          {products.map((product) => (
            <Product key={product.sys.id} product={product} /> // Use the Product component
          ))}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const products = await fetchEntries('products'); // Fetching products from Contentful
  return {
    props: {
      products,
    },
  };
}
