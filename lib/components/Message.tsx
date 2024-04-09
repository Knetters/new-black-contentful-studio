import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";

interface MessageComponentProps {
  message: string;
  linkUrl: string;
  linkText: string;
}

export const Message: React.FC<MessageComponentProps> = ({ message, linkUrl, linkText }) => {
  const [isVisible, setIsVisible] = useState(true);

  const closeMessage = () => {
    setIsVisible(false);
  }

  return (
    <>
      {isVisible && (
        <div className={styles.messageBox}>
          <p>{message}</p>
          <Link className={styles.messageURL} href={linkUrl}>
            {linkText}
          </Link>
          <button onClick={closeMessage} className={styles.close}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.9999 13.0608L17.5403 18.6012L18.601 17.5406L13.0605 12.0001L18.6011 6.45954L17.5404 5.39888L11.9999 10.9395L6.45885 5.39844L5.39819 6.4591L10.9392 12.0001L5.39831 17.541L6.45897 18.6017L11.9999 13.0608Z" fill="#fff"></path>
            </svg>
          </button>
        </div>
      )}
    </>
  );
};
