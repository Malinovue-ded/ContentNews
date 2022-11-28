import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      Верх который никто не будет делать
    </header>
  );
};

export default React.memo(Header);