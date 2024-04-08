import styles from "@/styles/Home.module.css";

const TopLine = () => {
  return (
    <div className={styles.line}>
      <span>Gratis standaard verzending vanaf €50</span>
      <span>Retourneren binnen 30 dagen</span>
      <button>Dutch / NL</button>
    </div>
  );
};

export default TopLine;
