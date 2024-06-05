import profilePic from "../assets/img/profile-ryan.jpg";

const MainSide = () => {
  const downloadCV = () => {
    fetch("CV_Ryan_Dwiky.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "CV_Ryan_Dwiky.pdf";
        alink.click();
      });
    });
  };

  return (
    <div className="col-lg-4 sticky-lg-top vh-100">
      <div className="d-flex flex-column h-100 text-center overflow-auto shadow">
        <img
          className="w-100 img-fluid mb-4"
          src={profilePic}
          alt="Ryan Dwiky"
        />
        <h1 className="text-primary mt-2">Ryan Dwiky</h1>
        <div className="mb-4" style={{ height: "22px" }}>
          <h4 className="typed-text-output d-inline-block text-light">
            Full Stack Web Developer
          </h4>
        </div>
        <div className="d-flex justify-content-center mt-auto mb-3">
          <a
            className="btn btn-secondary btn-square mx-1"
            href="https://github.com/nervmonk"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            className="btn btn-secondary btn-square mx-1"
            href="https://www.linkedin.com/in/dwikyryan/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <div className="d-flex align-items-end justify-content-between border-top">
          <button onClick={downloadCV} className="btn w-50 border-end">
            Download CV
          </button>
          <a
            href="https://wa.me/6285715871769"
            target="_blank"
            rel="noreferrer"
            className="btn w-50 btn-scroll"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainSide;
