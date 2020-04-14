import React from "react";
import "./contactStyle.css";

function Contact() {
  return (
    <div>
      <h3>
        You can contact me via email at phillipwwd@gmail.com
      </h3>
      <h3>
        I'm also on Indeed at <a href="https://www.linkedin.com/in/phillip-dunham-90a00319a/" target="blank">Indeed.com</a>
      </h3>
      <h3>
        View my <a href="https://github.com/phillipwd" target="blank">github.com</a> profile
      </h3>
      <h3>
        View my <a href="https://drive.google.com/file/d/1gevqDT3UC6K1uO1em7m8QeUlpCxj5Rv4/view?usp=sharing" target="blank" >resume</a>
      </h3>
    </div>
    // <div className="contactForm">
    //   <form
    //     id="fs-frm"
    //     name="simple-contact-form"
    //     accept-charset="utf-8"
    //     action="https://formspree.io/phillipwwd@gmail.com"
    //     method="post"
    //   >
    //     <fieldset id="fs-frm-inputs">
    //       <label for="full-name">Full Name</label>
    //       <input
    //         type="text"
    //         name="name"
    //         id="full-name"
    //         placeholder="First and Last"
    //         required=""
    //       />
    //       <label for="email-address">Email Address</label>
    //       <input
    //         type="email"
    //         name="_replyto"
    //         id="email-address"
    //         placeholder="email@domain.tld"
    //         required=""
    //       />
    //       <label for="message">Message</label>
    //       <textarea
    //         rows="5"
    //         name="message"
    //         id="message"
    //         placeholder="I'd like to hear from you."
    //         required=""
    //       ></textarea>
    //       <input
    //         type="hidden"
    //         name="_subject"
    //         id="email-subject"
    //         value="Contact Form Submission"
    //       />
    //     </fieldset>
    //     <input type="submit" value="Submit" />
    //   </form>
    // </div>
  );
}

export default Contact;
