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
      <h2>{title}</h2>
      <section className={styles.faqContainer}>
        <div {...experiencesProps}>
          <div>{children}</div>
        </div>
        <div className={styles.linkContainer}>
          <Link href={url}>
            <span>{label}</span>
          </Link>
        </div>
      </section>
    </div>
  );
};
