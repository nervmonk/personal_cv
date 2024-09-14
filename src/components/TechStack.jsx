import { TechLogo } from "../assets/data/ContentData";

const TechStack = () => {
  const content = TechLogo.map((data) => {
    return (
      <div className="col-sm-4 mb-4" key={data.id}>
        <div className="d-flex justify-content-center">
          <i className={data.logo}></i>
        </div>
      </div>
    );
  });
  return (
    <section className="py-5 border-bottom wow fadeInUp" data-wow-delay="0.1s">
      <h1 className="title pb-3 mb-3">Tech Stack</h1>
      <div className="row justify-content-center">{content}</div>
    </section>
  );
};

export default TechStack;
