import styles from "@/styles/Home.module.css";

const FilterIcon = () => {
  return (
    <svg
      className={`${styles.FilterBarButtonIcon} ${styles.FilterBarButtonIconLeft}`}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9 11C10.3979 11 11.5725 10.0439 11.9055 8.75H21V7.25H11.9055C11.5725 5.95608 10.3979 5 9 5C7.60212 5 6.42755 5.95608 6.09451 7.25H3V8.75H6.09451C6.42755 10.0439 7.60212 11 9 11ZM10.5 8C10.5 8.82843 9.82843 9.5 9 9.5C8.17157 9.5 7.5 8.82843 7.5 8C7.5 7.17157 8.17157 6.5 9 6.5C9.82843 6.5 10.5 7.17157 10.5 8Z"
        fill="#181314"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.0945 15.25C12.4275 13.9561 13.6021 13 15 13C16.3979 13 17.5725 13.9561 17.9055 15.25H21V16.75H17.9055C17.5725 18.0439 16.3979 19 15 19C13.6021 19 12.4275 18.0439 12.0945 16.75L3 16.75V15.25L12.0945 15.25ZM13.5 16C13.5 15.1716 14.1716 14.5 15 14.5C15.8284 14.5 16.5 15.1716 16.5 16C16.5 16.8284 15.8284 17.5 15 17.5C14.1716 17.5 13.5 16.8284 13.5 16Z"
        fill="#181314"
      ></path>
    </svg>
  );
};

export default FilterIcon;
