import { TrainingData } from "../assets/data/ContentData";

const Training = () => {
  const content = TrainingData.map((data) => {
    return (
      <div className="position-relative mb-4" key={data.id}>
        <span
          className="bi bi-arrow-right fs-4 text-light position-absolute"
          style={{ top: "-5px", left: "-50px" }}
        ></span>
        <h5 className="mb-1">{data.title}</h5>
        <p className="mb-2">
          {data.school} | <small>{data.period}</small>
        </p>
        <p>{data.description}</p>
      </div>
    );
  });
  return (
    <section className="py-5 wow fadeInUp" data-wow-delay="0.1s">
      <h1 className="title pb-3 mb-5">Training</h1>
      <div className="border-start border-2 border-light pt-2 ps-5">
        {content}
      </div>
    </section>
  );
};

export default Training;
