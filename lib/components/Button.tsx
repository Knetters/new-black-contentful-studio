import styles from "@/styles/Home.module.css";

interface ButtonComponentProps {
  text: string;
  className?: string;
}

export const Button: React.FC<ButtonComponentProps> = ({ text, className }) => {
  return <button className={`${styles.UIbutton} ${className}`}>{text}</button>;
};
