import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import styles from "../../styles/GoToTop.module.css";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div className={styles.wrapper}>
      {isVisible && (
        <div className={styles.topBtn} onClick={goToBtn}>
          <FaArrowUp className={styles.topBtnIcon} />
        </div>
      )}
    </div>
  );
};

export default GoToTop;
