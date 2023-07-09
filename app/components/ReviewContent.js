/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const ReviewContent = () => {
  return (
    <div className="container p-0 mt-5">
      <h2 className="text-center">Their opinion about peworld</h2>
      <div className="row mx-5 my-5">
        <div className="col-md-4">
          <div className="card shadow" style={{ width: "18rem", border: "none" }}>
            <div className="text-center mt-4">
              <Image alt="" src="/asset/photohirejob/m1.jpg" width={0} height={0} sizes="100vw" style={{ width: "40%", height: "auto", borderRadius: "100%" }} />
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">David T Green</h5>
              <p className="text-muted">Talent acquisition</p>
              <p className="card-text">The talent scout project surpassed my expectations in finding top-notch programming talent. Their extensive network provided access to a diverse pool of skilled programmers.</p>
            </div>
            {/* <div className="d-flex bottom-50 position-absolute" style={{ marginLeft: -20 }}>
              <i className="fa-solid fa-circle-chevron-left me-2" style={{ fontSize: 40, color: "#5E50A1", position: "absolute" }} />
            </div> */}
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow" style={{ width: "18rem", border: "none" }}>
            <div className="text-center mt-4">
              <Image alt="" src="/asset/photohirejob/f1.jpg" width={0} height={0} sizes="100vw" style={{ width: "40%", height: "auto", borderRadius: "100%" }} />
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">Sylvia Bonny Kepler</h5>
              <p className="text-muted">Human Resource</p>
              <p className="card-text">Got good talent here!, Their expertise and knowledge in the industry shines when they recommend programmers with the right skills and experience to our company</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow" style={{ width: "18rem", border: "none" }}>
            <div className="text-center mt-4">
              <Image alt="" src="/asset/photohirejob/m2.jpg" width={0} height={0} sizes="100vw" style={{ width: "40%", height: "auto", borderRadius: "100%" }} />
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">Fu Xuan</h5>
              <p className="text-muted">Web Developer</p>
              <p className="card-text">Using peworld has been a great experience. Their extensive network and industry expertise provide me with an exciting opportunity to showcase my programming skills.</p>
            </div>
            {/* <div className="d-flex bottom-50 position-absolute">
              <i className="fa-solid fa-circle-chevron-left me-2" style={{ fontSize: 40, color: "#5E50A1", position: "absolute" }} />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewContent;
