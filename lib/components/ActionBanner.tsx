import React, { ReactNode, useState } from "react";
import styles from "@/styles/Home.module.css";

interface ActionBannerComponentProps {
  title: string;
  imageURL: string;
  children: ReactNode;
  className?: string;
}

export const ActionBanner: React.FC<ActionBannerComponentProps> = ({
  title,
  imageURL,
  children,
  className,
}) => {
  return (
    <div
      className={`${styles.abRow} ${className}`}
      style={{ backgroundImage: `url(${imageURL})` }}
    >
      <h2>{title}</h2>
      <div className={styles.extraContent}>{children}</div>
    </div>
  );
};
