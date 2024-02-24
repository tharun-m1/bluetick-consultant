import React from "react";
import styles from "./servicecard.module.css";
import blogStyles from "./blogs.module.css";
import { Link } from "react-router-dom";

function ServiceCard({ service, cardStatus, blog }) {
  return (
    <>
      {cardStatus === "services" ? (
        <div className={styles.container}>
          <img src={service.icon} alt="card icon" />
          <h1 className={styles.title}>{service.title}</h1>
          <p>{service.description}</p>
        </div>
      ) : (
        <div className={blogStyles.container}>
          <div className={blogStyles.title}>
            <h1>{blog.title}</h1>
          </div>
          <div className={blogStyles.description}>{blog.description} </div>

          <div className={blogStyles.readMore}>
            <button>
              <Link style={{ textDecoration: "none" }} to={blog.link}>
                Read More
              </Link>{" "}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ServiceCard;
