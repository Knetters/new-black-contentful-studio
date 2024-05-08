import styles from "@/styles/Home.module.css";

const SortIcon = () => {
  return (
    <svg
      className={styles.FilterBarButtonIcon}
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      aria-hidden="false"
      viewBox="0 0 30 30"
    >
      <path d="M11.5 1.75H0V0.25H11.5V1.75Z" fill="#1D1E1D"></path>
      <path
        d="M13.25 8.25H11.4023L14.0004 12L16.5985 8.25H14.75V0.25H13.25V8.25Z"
        fill="#1D1E1D"
      ></path>
      <path d="M0 5.75H8.5V4.25H0V5.75Z" fill="#1D1E1D"></path>
      <path d="M5.5 9.75H0V8.25H5.5V9.75Z" fill="#1D1E1D"></path>
    </svg>
  );
};

export default SortIcon;
