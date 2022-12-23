import { SkillsData } from "../assets/data/ContentData";

const Skills = () => {
  const Content = SkillsData.map((skill) => {
    return (
      <div className="col-sm-6 mb-4" key={skill.id}>
        <div className="d-flex justify-content-between">
          <p className="mb-2">{skill.skill}</p>
          <p className="mb-2">{skill.proficiency}</p>
        </div>
        <div className="progress">
          <div
            className={
              parseInt(skill.proficiency) <= 75
                ? "progress-bar bg-warning"
                : "progress-bar bg-info"
            }
            style={{ width: skill.proficiency }}
          ></div>
        </div>
      </div>
    );
  });
  return (
    <section className="py-5 border-bottom wow fadeInUp" data-wow-delay="0.1s">
      <h1 className="title pb-3 mb-3">Web Development Skills</h1>
      <p>* Progress chart based on my personal judgment</p>
      <div className="row">{Content}</div>
    </section>
  );
};

export default Skills;
