import styles from "@/styles/Home.module.css";
import React, { ReactNode } from "react";
import Link from "next/link";

interface FaqContainerComponentProps {
  title: string;
  label: string;
  url: string;
  nestedComponents?: ComponentData[];
  children?: never;
}

interface ComponentData {
  component: React.ComponentType<any>;
  props: Record<string, any>;
}

export const FaqContainer: React.FC<FaqContainerComponentProps> = ({
  title,
  label,
  url,
  nestedComponents = [],
  ...experiencesProps
}) => {
  return (
    <section className={styles.faqContainer}>
      {nestedComponents.map(({ component: Component, props }, index) => (
        <Component key={index} {...props} />
      ))}
      <Link href={url}>
        <span>{label}</span>
      </Link>
    </section>
  );
};
