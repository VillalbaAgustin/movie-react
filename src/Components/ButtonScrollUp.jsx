import { useEffect, useState } from "react";
import styles from "./ButtonScrollUp.module.css";

export const ButtonScrollUp = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  window.onscroll = function() {
    var y = window.scrollY;
    (y > 100) ? setIsScrolling(true) : setIsScrolling(false);
  };
  // console.log(window.scrollY);
  
  return (
    <div className={styles.buttonConteiner} >
      {isScrolling && (
        <button className={styles.button} onClick={goToTop}>
          <div>^</div>
        </button>
      )}
    </div>
  );
};
