import styles from "@/styles/Home.module.css";

interface TopLineComponentProps {
  text: string;
}

export const TopLine: React.FC<TopLineComponentProps> = ({ text }) => {
  return (
    <div className={styles.line}>
      <span>{text}</span>
      <button>Dutch / NL</button>
    </div>
  );
};
