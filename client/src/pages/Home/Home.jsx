import React from "react";
import styles from "./home.module.css";
import { Link } from "react-router-dom";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { servicesData } from "../../serviceData";
import { blogs } from "../../blogs";
import Form from "../../components/Form/Form";
function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.heroSection}>
          <div className={styles.imgContainer}>
            <img
              src="https://generative-ai.bluetickconsultants.com/images/products/generativeAI.png"
              alt="AI"
            />
          </div>
          <div>
            <h1>Transforming Enterprises</h1>
            <p>
              Founded in 2017, Bluetick Consultants is a technology-driven firm
              that has made a significant impact in the Indian and US startup
              ecosystems.
            </p>
          </div>
        </div>

        <Link to="https://www.bluetickconsultants.com/generative-ai.html">
          <button className={styles.about}>To know more about us</button>
        </Link>
        <div className={styles.services}>
          {servicesData.map((service, idx) => {
            return (
              <ServiceCard
                cardStatus={"services"}
                key={servicesData[idx].title}
                service={service}
              />
            );
          })}
        </div>
        <div
          className={styles.blogCaption}
          // style={{ textAlign: "left", padding: "0px 25px", fontSize: "1.3rem" }}
        >
          Explore and enjoy the blogs written by our passionate techies.
        </div>
        <div className={styles.blogs}>
          {blogs.map((blog, idx) => {
            return <ServiceCard cardStatus={"blogs"} key={idx} blog={blog} />;
          })}
        </div>
        <div className={styles.formContainer}>
          <Form />
        </div>
      </div>
    </>
  );
}

export default Home;
