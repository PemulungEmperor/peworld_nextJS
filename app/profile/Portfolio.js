import Image from "next/image";

const Portfolio = ({ portfolio }) => {
  return (
    <div className="row m-3">
      {/* <h1>portfolio :{portfolio.company_name} </h1> */}
      {portfolio.map((p, i) => (
        <div key={i + 1} className="col-md-3 shadow me-auto position-relative" style={{ borderRadius: 10, width: "32%" }}>
          <Image
            alt=""
            src={`/asset/photohirejob/${p.photo_path}`}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto", borderRadius: 10, marginTop: 20 }} // optional
          />
          <div>
            <p className="m-3">{p.app_name}</p>
            {/* <i className="fa-solid fa-trash  m-2 position-absolute bottom-0 end-0"></i> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
