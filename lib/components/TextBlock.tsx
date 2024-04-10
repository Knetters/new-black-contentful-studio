import styles from "@/styles/Home.module.css";

interface TextBlockComponentProps {
  title: string;
  content: string;
}

export const TextBlock: React.FC<TextBlockComponentProps> = ({
  title,
  content,
}) => {
  const paragraphs = content.split("\n").map((paragraph, index) => (
    <p
      key={index}
      className={styles.articleContent}
      style={{ marginBottom: "10px" }}
    >
      {paragraph}
    </p>
  ));

  return (
    <article className={styles.article}>
      <h2 className={styles.articleTitle}>{title}</h2>
      <div>{paragraphs}</div>
    </article>
  );
};
