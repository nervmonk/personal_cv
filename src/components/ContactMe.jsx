const ContactMe = () => {
  return (
    <section className="py-5 wow fadeInUp" data-wow-delay="0.1s" id="contact">
      <h1 className="title pb-3 mb-5">Contact Me</h1>
      <p className="mb-4">
        If you want to use my services or you're looking for employees and feel
        that my profile matches with what you're looking for, please do not
        hesitate to contact me via the form below. I will definitely receive
        your message and will reach you back.
      </p>
      <form>
        <div className="row g-3">
          <div className="col-md-6">
            <div className="form-floating">
              <input
                type="text"
                className="form-control border-0 bg-secondary"
                id="name"
                placeholder="Your Name"
              />
              <label htmlFor="name">Your Name</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating">
              <input
                type="email"
                className="form-control border-0 bg-secondary"
                id="email"
                placeholder="Your Email"
              />
              <label htmlFor="email">Your Email</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-floating">
              <input
                type="text"
                className="form-control border-0 bg-secondary"
                id="subject"
                placeholder="Subject"
              />
              <label htmlFor="subject">Subject</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-floating">
              <textarea
                className="form-control border-0 bg-secondary"
                placeholder="Leave a message here"
                id="message"
                style={{ height: "200px" }}
              ></textarea>
              <label htmlFor="message">Message</label>
            </div>
          </div>
          <div className="col-12">
            <button className="btn btn-primary w-100 py-3" type="submit">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactMe;
