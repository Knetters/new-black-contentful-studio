import React from "react";
import styles from "@/styles/Home.module.css";

interface ButtonComponentProps {
  text: string;
}

export const Button: React.FC<ButtonComponentProps> = ({ text }) => {
  return <button className={styles.UIbutton}>{text}</button>;
};
