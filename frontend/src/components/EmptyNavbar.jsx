import { ReactComponent as Logo } from "../assets/icons/Logo.svg";

import styles from "../css/components/EmptyNavbar.module.css";

export default function EmptyNavbar() {
  return (
    <div className={styles.navbar}>
      <Logo className={styles.logo} />
      <span className={styles.logo_text}>ROBOTIK</span>
    </div>
  );
}
