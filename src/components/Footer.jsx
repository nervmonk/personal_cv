const Footer = () => {
  return (
    <section className="wow fadeIn" data-wow-delay="0.1s">
      <div className="bg-secondary text-light text-center p-5">
        <div className="d-flex justify-content-center mb-5">
          <a
            className="btn btn-dark btn-square mx-1"
            href="https://github.com/nervmonk"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            className="btn btn-dark btn-square mx-1"
            href="https://www.linkedin.com/in/dwikyryan/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <p className="m-0">Ryan Dwiky Curriculum Vitae</p>
        <p className="m-0">Last Updated on July 2023</p>
      </div>
    </section>
  );
};

export default Footer;
