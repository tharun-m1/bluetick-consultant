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
        <div className={styles.footer}>
          <div className={styles.top}>
            <div className={styles.logo}>
              <img
                alt="logo"
                src="https://generative-ai.bluetickconsultants.com/images/bluetick-consultants.png"
              />
              <div>Bluetick Consultants LLP</div>
              <br />
              <div>contact@bluetickconsultants.com</div>
              <div className={styles.marks}>
                <img
                  className={styles.glassdorr}
                  alt="glassdoor"
                  src="https://generative-ai.bluetickconsultants.com/images/glassdoor-rating.webp"
                />
                <img
                  className={styles.iso}
                  alt="iso"
                  src="https://tse1.mm.bing.net/th?id=OIP.Rc8mef-ySVBnW5uXzZQ4sAHaHj&pid=Api&rs=1&c=1&qlt=95&h=180"
                />
              </div>
            </div>
            <div className={styles.resources}>
              <div>Resources</div>
              <div>
                <img
                  alt="next"
                  src="https://cdn.hugeicons.com/icons/arrow-right-01-stroke-rounded.svg"
                />
                <span>Blogs</span>
              </div>
            </div>
            <div className={styles.products}>
              <div>Products</div>
              <div>
                <div>
                  <img
                    alt="blog"
                    src="https://cdn.hugeicons.com/icons/arrow-right-01-stroke-rounded.svg"
                  />
                  <span>Talk to code</span>
                </div>
                <div>
                  <img
                    alt="blog"
                    src="https://cdn.hugeicons.com/icons/arrow-right-01-stroke-rounded.svg"
                  />
                  <span>InterviewGPT</span>
                </div>
                <div>
                  <img
                    alt="blog"
                    src="https://cdn.hugeicons.com/icons/arrow-right-01-stroke-rounded.svg"
                  />
                  <span>PrivacyDoc</span>
                </div>
                <div>
                  <img
                    alt="blog"
                    src="https://cdn.hugeicons.com/icons/arrow-right-01-stroke-rounded.svg"
                  />
                  <span>Sales Call Evaluator</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.icons}>
              <img
                alt="facebook"
                src="https://cdn.hugeicons.com/icons/facebook-02-stroke-rounded.svg"
              />
              <img
                alt="instagram"
                src="https://cdn.hugeicons.com/icons/instagram-stroke-rounded.svg"
              />
              <img
                alt="threads"
                src="https://cdn.hugeicons.com/icons/threads-stroke-rounded.svg"
              />
              <img
                alt="twitter"
                src="https://cdn.hugeicons.com/icons/twitter-stroke-rounded.svg"
              />
              <img
                alt="linkedin"
                src="https://cdn.hugeicons.com/icons/linkedin-02-stroke-rounded.svg"
              />
              <img
                alt="quora"
                src="https://cdn.hugeicons.com/icons/quora-stroke-rounded.svg"
              />
            </div>
            <div className={styles.copyRights}>
              2024{" "}
              <img
                alt="copy rights"
                src="https://cdn.hugeicons.com/icons/copyright-stroke-rounded.svg"
              />
              All rights reserved by Bluetick consultants LLP
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
