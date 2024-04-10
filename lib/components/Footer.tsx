import styles from "@/styles/Home.module.css";
import Image from "next/image";

interface FooterComponentProps {
  title: string;
  content: string;
}

export const Footer: React.FC<FooterComponentProps> = ({ title, content }) => {
  return (
    <footer className={styles.footer}>
      <h2>WIJ ACCEPTEREN</h2>
      <div className={styles.paymentRow}>
        <Image
          src="https://images.ctfassets.net/p0p55mrd4915/4SvI9WFi5JoxgDi3jKbX75/8e7e66f95136c4e4ebcf47b3bc60088d/payment-ideal.svg"
          alt="Payment Ideal"
          width={40}
          height={30}
        />
        <Image
          src="https:////images.ctfassets.net/p0p55mrd4915/5A1eD7KultLY4xLwYEBrCP/1368409d866b3a4162458daaa7e77a65/payment-mastercard.svg"
          alt="Mastercard"
          width={40}
          height={30}
        />
        <Image
          src="https:////images.ctfassets.net/p0p55mrd4915/29NErcvIkpW0wZZ9uXknNy/98bc9555c6dbfd731a5fab3ae2403c44/payment-visa.svg"
          alt="Visa"
          width={40}
          height={30}
        />
        <Image
          src="https:////images.ctfassets.net/p0p55mrd4915/7AgxxCcuhGS0scs0lAkFyO/a23781e69b84d22b43281f44bd4a3200/payment-paypal.svg"
          alt="Paypal"
          width={40}
          height={30}
        />
      </div>
      <div className={styles.footeNavRow}>
        <div className={styles.footerNavItem}>
          <h2>SCOTCH & SODA</h2>
          <ul>
            <li>Over Scotch & Soda</li>
            <li>Winkels</li>
            <li>Vacatures</li>
            <li>Affiliates</li>
          </ul>
        </div>
        <div className={styles.footerNavItem}>
          <h2>BESTELLING</h2>
          <ul>
            <li>Verzenden</li>
            <li>Retouren</li>
            <li>Bestellen</li>
          </ul>
        </div>
        <div className={styles.footerNavItem}>
          <h2>HULP & INFO</h2>
          <ul>
            <li>Veelgestelde vragen</li>
          </ul>
        </div>
        <div className={styles.footerNavItem}>
          <h2>CONTACT</h2>
          <ul>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className={styles.socialsRow}>
        <Image
          src="https://images.ctfassets.net/p0p55mrd4915/6FTVBm0KYiIxWrbgpQDhOf/c443508a8620013575aa97dd811855dc/Facebook.png"
          alt="Facebook"
          width={25}
          height={25}
        />
        <Image
          src="https://images.ctfassets.net/p0p55mrd4915/1YJBo3uDhIRu8QdWgeaKbP/b5992d8606f41b9a641935c4b676a7dd/Instagram.png"
          alt="Instagram"
          width={25}
          height={25}
        />
        <Image
          src="https://images.ctfassets.net/p0p55mrd4915/4KEgRQP6SqktstnP9Qccz8/9b1d91019ed20bc3630bc03281773d57/Pinterest.png"
          alt="Pinterest"
          width={25}
          height={25}
        />
        <Image
          src="https://images.ctfassets.net/p0p55mrd4915/3bV2jdU4EwtNp5zul1ztd7/8a9fb1eaf86e6d03eeb73a575b76ab72/Linkedin.png"
          alt="Linkedin"
          width={25}
          height={25}
        />
        <Image
          src="https://images.ctfassets.net/p0p55mrd4915/3rQ5dQLx8GamF4Hjoyp0FI/d5378bf226916dab713222feea7c486f/YouTube.png"
          alt="YouTube"
          width={25}
          height={25}
        />
        <Image
          src="https://images.ctfassets.net/p0p55mrd4915/3sMhg7zDq6jIE8OvHBvc43/c27e5db271c686d44717baaaa2d013e6/Twitter.png"
          alt="Twitter"
          width={25}
          height={25}
        />
        <Image
          src="https://images.ctfassets.net/p0p55mrd4915/6KR28q88fmZfCaw67Apwq7/8a92f6a8c0c0a60c72b338a125ef11c0/TikTok.png"
          alt="TikTok"
          width={25}
          height={25}
        />
      </div>
      <ul className={styles.legalRow}>
        <li>Privacy statement</li>
        <li>Cookie statement</li>
        <li>Terms & Conditions</li>
        <li>© Scotch & Soda 2024</li>
        <li>Cookies Settings</li>
        <li>Dutch / NL</li>
      </ul>
    </footer>
  );
};
