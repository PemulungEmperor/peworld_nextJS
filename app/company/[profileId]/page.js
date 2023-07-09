"use client";
import Image from "next/image";
import Header from "../../components/Header";
import BG from "../../../public/asset/photohirejob/bg.jpg";
import Footer from "../../components/Footer";
import { useRouter } from "next/navigation";

const page = ({ params }) => {
  const router = useRouter();
  const id = params.profileId;
  return (
    <div style={{ backgroundColor: "#F6F7F8", height: "100%" }}>
      <Header />
      <div className="row d-flex justify-content-center mt-5 ">
        <div className="col-md-9 shadow p-0 pb-5" style={{ backgroundColor: "white", borderRadius: 10 }}>
          <div
            className="text-center"
            style={{
              backgroundImage: `url(${BG.src})`,
              height: "30vh",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              position: "relative",
            }}
          >
            <div className="position-absolute bottom-0 end-0">
              <button type="button" className="btn btn-md text-white m-3" style={{ backgroundColor: "#5E50A1", fontSize: 12 }}>
                <i className="fa-regular fa-pen-to-square"></i> Edit Background
              </button>
            </div>
          </div>
          <div style={{ marginTop: "-50px", position: "relative" }}>
            <div className="text-center mt-3">
              <Image alt="" src="/asset/photohirejob/m1.jpg" width={120} height={120} style={{ borderRadius: 100, marginLeft: 20 }} />
            </div>
            <div className="row ms-2 text-center ">
              <div className="row mt-3">
                <div className="col-md fw-bold" style={{ fontSize: 20 }}>
                  PT. Mencari Cinta Sejati
                </div>
              </div>
              <div className="row ">
                <div className="col-md " style={{ fontSize: 14 }}>
                  Financial
                </div>
              </div>
              <div className="row mt-2">
                <span className="text-muted">
                  <i className="fa-solid fa-location-dot me-2 text-muted"></i>Jakarta
                </span>
              </div>

              <div className="row mt-2 mb-2  d-flex justify-content-center">
                <div className="col-md-6 text-muted" style={{ fontSize: 14 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis mattis dolor nec finibus. Curabitur placerat tellus ultrices turpis faucibus, id maximus felis ornare.
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-12">
                  <button onClick={() => router.push("/company/edit/" + id)} type="button" className="btn btn-md w-25 text-white" style={{ backgroundColor: "#5E50A1" }}>
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>

            <div className="row w-25 m-auto">
              <div>
                <div className="text-muted mt-4" style={{ fontSize: 14 }}>
                  <i className="fa-regular fa-envelope me-3" />
                  mencaricinta@gmail.com
                </div>
                <div className="text-muted mt-3" style={{ fontSize: 14 }}>
                  <i className="fa-brands fa-instagram me-3" />
                  @mencariCinta99
                </div>
                <div className="text-muted mt-3" style={{ fontSize: 14 }}>
                  <i className="fa-solid fa-phone me-3" />
                  0821- xxx1 - xxx3
                </div>
                <div className="text-muted mt-3" style={{ fontSize: 14 }}>
                  <i className="fa-brands fa-linkedin me-3" />
                  Mencari Cinta Sejati
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
