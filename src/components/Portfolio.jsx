import portfolio1 from "../assets/img/portfolio-1.jpg";
import portfolio2 from "../assets/img/portfolio-2.jpg";

const Portfolio = () => {
  return (
    <section className="py-5 border-bottom wow fadeInUp" data-wow-delay="0.1s">
      <h1 className="title pb-3 mb-5">Freelance Portfolio</h1>
      <div className="row">
        <div className="col-12">
          {/* <div className="row">
            <div className="col-12 text-center mb-2">
              <ul className="list-inline mb-4" id="portfolio-flters">
                <li className="btn btn-secondary active" data-filter="*">
                  <i className="fa fa-star me-2"></i>All
                </li>
                <li className="btn btn-secondary" data-filter=".first">
                  <i className="fa fa-laptop-code me-2"></i>Web Development
                </li>
                <li className="btn btn-secondary" data-filter=".second">
                  <i className="fa fa-solid fa-newspaper me-2"></i>Journalism
                </li>
              </ul>
            </div>
          </div> */}
          <div className="row portfolio-container">
            <div className="col-md-6 mb-4 portfolio-item first">
              <div className="position-relative mb-2 ">
                <img
                  className="img-fluid w-100 card-img"
                  src={portfolio1}
                  alt=""
                  style={{ opacity: "0.5", height: "290px" }}
                />
                <div className="card-img-overlay text-center mt-5">
                  <h5 className="card-title">Okay Gallery Design</h5>
                  <a
                    href="https://okaygallerydesign.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Live Site
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4 portfolio-item second">
              <div className="position-relative mb-2">
                <img
                  className="img-fluid w-100 card-img"
                  src={portfolio2}
                  alt=""
                  style={{ opacity: "0.5", height: "290px" }}
                />
                <div className="card-img-overlay text-center mt-5">
                  <h5 className="card-title">Azea Studio</h5>
                  <a
                    href="https://byazea.online/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Live Site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
