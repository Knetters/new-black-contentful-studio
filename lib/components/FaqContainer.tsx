import styles from "@/styles/Home.module.css";
import React, { ReactNode } from "react";
import Link from "next/link";

interface FaqContainerComponentProps {
  title: string;
  label: string;
  url: string;
  children: ReactNode;
}

export const FaqContainer: React.FC<FaqContainerComponentProps> = ({
  title,
  label,
  url,
  children,
  ...experiencesProps
}) => {
  return (
    <div className={styles.faq}>
      {title !== "" && <h2 className={styles.faqTitle}>{title}</h2>}
      <section className={styles.faqContainer}>
        <div {...experiencesProps}>
          <div>{children}</div>
        </div>
        {url !== "" && (
          <div className={styles.linkContainer}>
            <Link href={url}>
              <span className={styles.link}>{label}</span>
            </Link>
          </div>
        )}
      </section>
    </div>
  );
};
