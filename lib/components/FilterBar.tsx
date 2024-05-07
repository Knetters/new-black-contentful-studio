import styles from "@/styles/Home.module.css";
import Link from "next/link";

const FilterBar = () => {
  return (
    <div className={styles.filterBar}>
      <button className={styles.sideButton}>Filter</button>
      <ul className={styles.filterList}>
        <li>
          <button>Geslacht</button>
        </li>
        <li>
          <button>Categorie</button>
        </li>
        <li>
          <button>Maat</button>
        </li>
        <li>
          <button>Kleur</button>
        </li>
        <li>
          <button>Mouwlengte</button>
        </li>
        <li>
          <button>Stijl</button>
        </li>
      </ul>
      <button>Sorteren</button>
    </div>
  );
};

export default FilterBar;
