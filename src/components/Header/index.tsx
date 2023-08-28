import { useState } from "react";

import styles from "./styles.module.css";

import cx from "clsx";

const Header = () => {
  const [open] = useState(false);

  return (
    <header
      className={cx(styles.container, {
        [styles.isOpen]: open,
      })}
    >
      <section className={styles.subContainer}></section>
      <h1>Header</h1>
    </header>
  );
};

export default Header;
