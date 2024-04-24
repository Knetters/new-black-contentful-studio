import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

interface CallToActionComponentProps {
  title: string;
  message: string;
  label: string;
  url: string;
  className?: string;
}

export const CallToAction: React.FC<CallToActionComponentProps> = ({
  title,
  message,
  label,
  url,
  className,
}) => {
  return (
    <div className={`${styles.ctaRow} ${className}`}>
      <div className={styles.ctaContent}>
        <h2>{title}</h2>
        <p>{message}</p>
      </div>
      <Link className={styles.ctaLink} href={url}>
        <span>{label}</span>
      </Link>
    </div>
  );
};
