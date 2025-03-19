// import React from "react";
// import styles from "./SpinnerLoder.module.css";

// const SpinnerLoader = ({
//   size = "medium",
//   gradient = "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
// }) => {
//   let spinnerSize = styles.spinnerMedium;
//   if (size === "small") spinnerSize = styles.spinnerSmall;
//   if (size === "large") spinnerSize = styles.spinnerLarge;

//   return (
//     <div className={`${styles.spinnerContainer} ${spinnerSize}`}>
//       <div className={styles.spinner} style={{ background: gradient }}></div>
//     </div>
//   );
// };

// export default SpinnerLoader;

// components/SpinnerLoader.js
import React from "react";
import styles from "./SpinnerLoder.module.css"; // Create SpinnerLoader.module.css

const SpinnerLoader = ({
  size = "medium",
  color = "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
}) => {
  let spinnerSize = styles.spinnerMedium;
  if (size === "small") spinnerSize = styles.spinnerSmall;
  if (size === "large") spinnerSize = styles.spinnerLarge;

  return (
    <div
      className={`${styles.spinner} ${spinnerSize}`}
      style={{ borderTopColor: color }}
    ></div>
  );
};

export default SpinnerLoader;
