import React from "react";
import styles from "./form.module.css";
function Form() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.line}></div>
        <div className={styles.caption}>LET'S CONNECT</div>
        <div className={styles.text}>
          Contact our support team or make an appointment with our experts.
        </div>
        <form>
          <div className={styles.fromContainer}>
            <div className={styles.feild}>
              <label>
                Full Name <sup>*</sup>
              </label>
              <br />
              <input type="text" required name="fullName" />
            </div>
            <div className={styles.feild}>
              <label>
                Email <sup>*</sup>
              </label>
              <br />
              <input type="email" required name="email" />
            </div>
            <div className={styles.feild}>
              <label>
                Contact Number <sup>*</sup>
              </label>
              <br />
              <input
                type="text"
                maxLength={"10"}
                minLength={"10"}
                required
                name="contact"
              />
            </div>
            <div className={styles.feild}>
              <label>
                Subject <sup>*</sup>
              </label>
              <br />
              <input type="text" required name="subject" />
            </div>
            <div className={styles.feild}>
              <label>
                Message <sup>*</sup>
              </label>
              <br />
              <textarea name="message" required rows="4"></textarea>
            </div>
            <button className={styles.btn} type="submit">
              Submit form
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
