import "./ContactForm.css";

const ContactForm = () => {

  return (
    <section className="contact">
      <form action="https://formsubmit.co/d0efbf0985f7ab5fda2749acf845732b" method="POST">
        <div className="contactForm">
          <div className="input-box">
            <label>Full Name</label>
            <input type="text" name="_honey" className="honey"/>
            <input type="hidden" name="_captcha" value="false"/>
            <input
              type="text"
              name="name"
              className="field"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="input-box">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="field"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-box">
            <label>Message</label>
            <textarea
              name="comments, questions"
              className="field message"
              placeholder="Enter your message"
              required
            />
          </div>
            <button type="submit">Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
