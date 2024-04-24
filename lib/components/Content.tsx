import React from "react";
import ReactMarkdown from "react-markdown";
import styles from "@/styles/Home.module.css";

interface ContentComponentProps {
  content: string;
  className?: string;
}

export const Content: React.FC<ContentComponentProps> = ({
  content,
  className,
}) => {
  console.log(content); // Add this line to see what type content actually is
  return (
    <article className={`${styles.contentContainer} ${className}`}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
};
