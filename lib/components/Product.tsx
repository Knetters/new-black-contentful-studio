import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';

interface ProductProps {
  product: {
    fields: {
      title: string;
      slug: string;
      price: number;
      image: {
        fields: {
          file: {
            url: string;
          };
        };
      };
    };
    sys: {
      id: string;
    };
  };
}

const Product: React.FC<ProductProps> = ({ product }) => {
    return (
      <section className={styles.productItem}>
        <Link className={styles.link} href={`/products/${product.fields.slug}`} key={product.sys.id}>
            <img className={styles.productImage} src={`https:${product.fields.image.fields.file.url}`} alt=""/>
            <h2 className={styles.productTitle}>{product.fields.title}</h2>
            <span className={styles.price}>€ {product.fields.price}</span>
            <button className={styles.favorite}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-testid="icon-heart"><path fill-rule="evenodd" fill="none" stroke="#181314" d="M12.095 4.611c-.126.125-.243.257-.354.391-.11-.134-.228-.266-.354-.39-2.147-2.149-5.63-2.149-7.777 0-2.03 2.027-2.14 5.245-.336 7.405l-.018.018.354.353 7.423 7.425.708.707.708-.707 7.423-7.425.354-.353-.018-.018c1.804-2.16 1.694-5.378-.336-7.406-2.147-2.148-5.63-2.148-7.777 0" transform="translate(-1287 -2133) translate(100 2059) translate(848 46) translate(335 24) translate(4 4)"></path></svg></button>
        </Link>
      </section>
    );
  };

export default Product;
