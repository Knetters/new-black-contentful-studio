import React, { ReactNode, useState } from "react";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

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
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faq}>
      {title !== "" && <h2 className={styles.faqTitle}>{title}</h2>}
      <section className={styles.faqContainer}>
        {React.Children.map(children, (child, index) => {
          // Clone each child with additional props to manage open state
          return React.cloneElement(child as React.ReactElement, {
            isOpen: index === openIndex,
            onToggle: () => handleItemClick(index),
          });
        })}
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
