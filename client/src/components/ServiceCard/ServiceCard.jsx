import React from "react";
import styles from "./servicecard.module.css";

function ServiceCard({ service }) {
  return (
    <>
      <div className={styles.container}>
        <img src={service.icon} alt="card icon" />
      </div>
    </>
  );
}

export default ServiceCard;
