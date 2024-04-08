import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { fetchEntries } from '@/utils/contentful';

export default function Product({ product }) {
  const router = useRouter();
  const { slug } = router.query;

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{product.fields.title}</title>
      </Head>
      <div>
        <h1>{product.fields.title}</h1>
        <p>{product.fields.description}</p>
      </div>
      <Link href="/">Back</Link>
    </>
  );
}

export async function getStaticPaths() {
  const products = await fetchEntries('products');

  const paths = products.map((product) => ({
    params: { slug: product.fields.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const products = await fetchEntries('products');
  const product = products.find((p) => p.fields.slug === params.slug);

  return {
    props: {
      product,
    },
  };
}
