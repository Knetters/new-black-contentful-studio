import React from "react";
import styles from "@/styles/Home.module.css";

interface FaqItemComponentProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const FaqItem: React.FC<FaqItemComponentProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  return (
    <div className={styles.faqItem}>
      <details className={styles.details} open={isOpen} onClick={onToggle}>
        <summary className={styles.summary}>{question}</summary>
        <p className={styles.answer}>{answer}</p>
      </details>
    </div>
  );
};
