// import FilterIcon from "@/components/icons/FilterIcon";
// import SortIcon from "@/components/icons/SortIcon";
import styles from "@/styles/Home.module.css";

const FilterBar = () => {
  return (
    <div className={styles.filterBar}>
      <button className={styles.sideButton}>
        <span className={styles.filterButtonContent}>Filter</span>
      </button>
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
      <button className={styles.sideButton}>
        <span className={styles.filterButtonContent}>Sorteren</span>
      </button>
    </div>
  );
};

export default FilterBar;
