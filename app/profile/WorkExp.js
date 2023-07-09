import Image from "next/image";

const WorkExp = ({ experiences }) => {
  return (
    <div>
      {experiences.map((exp, index) => (
        <div className="row m-3" key={index + 1}>
          <div className="col-md-2">
            <div className="mt-3">
              <Image className="ms-2" alt="" src={`/asset/photohirejob/${exp.logo_path}`} width={50} height={50} />
            </div>
          </div>
          <div className="col-md-10 me-auto mt-3">
            <div>
              <div className="fw-bold" style={{ fontSize: 20 }}>
                {exp.position}
              </div>

              <div className="text-dark" style={{ fontSize: 14 }}>
                {exp.company_name}
              </div>

              <div className="text-muted" style={{ fontSize: 14 }}>
                July 2019 - January 2020 <span className="ms-2">6 months</span>
              </div>

              <div className="text-muted mt-2" style={{ fontSize: 14 }}>
                {exp.experience_desc}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExp;
