import { AboutMeData } from "../assets/data/ContentData";

const AboutMe = () => {
  return (
    <section className="py-5 border-bottom wow fadeInUp" data-wow-delay="0.1s">
      <h1 className="title pb-3 mb-5">About Me</h1>
      <p>{AboutMeData.description}</p>
      <div className="row mb-4">
        <div className="col-sm-6 py-1">
          <span className="fw-medium text-primary">Name:</span>{" "}
          {AboutMeData.name}
        </div>
        <div className="col-sm-6 py-1">
          <span className="fw-medium text-primary">Birthday:</span>{" "}
          {AboutMeData.birthday}
        </div>
        <div className="col-sm-6 py-1">
          <span className="fw-medium text-primary">Degree:</span>{" "}
          {AboutMeData.degree}
        </div>
        <div className="col-sm-6 py-1">
          <span className="fw-medium text-primary">Experience:</span>{" "}
          {AboutMeData.experience}
        </div>
        <div className="col-sm-6 py-1">
          <span className="fw-medium text-primary">Phone:</span>{" "}
          <a
            href={"https://wa.me/6285715871769"}
            target="_blank"
            className="text-info"
            rel="noopener noreferrer"
          >
            {AboutMeData.phone}
          </a>
        </div>
        <div className="col-sm-6 py-1">
          <span className="fw-medium text-primary">Email:</span>{" "}
          <a
            href={`mailto:${AboutMeData.email}`}
            target="_blank"
            className="text-info"
            rel="noopener noreferrer"
          >
            {AboutMeData.email}
          </a>
        </div>
        <div className="col-sm-6 py-1">
          <span className="fw-medium text-primary">Address:</span>{" "}
          {AboutMeData.address}
        </div>
        <div className="col-sm-6 py-1">
          <span className="fw-medium text-primary">Status:</span>{" "}
          {AboutMeData.status}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
