import styles from "@/styles/Home.module.css";

interface FaqItemComponentProps {
  question: string;
  answer: string;
}

export const FaqItem: React.FC<FaqItemComponentProps> = ({
  question,
  answer,
}) => {
  return (
    <div className={styles.faqItem}>
      <details className={styles.details}>
        <summary className={styles.summary}>{question}</summary>
        {answer}
      </details>
    </div>
  );
};
