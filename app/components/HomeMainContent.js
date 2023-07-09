"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

const HomeMainContent = () => {
  const router = useRouter();

  return (
    <div className="container p-0 mt-5 ">
      <div className="row d-flex justify-content-between mx-5">
        <div className="col-md-6 d-flex align-items-center">
          <div>
            <h1>The country's top talent for revolution 4.0 change</h1>
            <p className="mt-4">The industrial revolution 4.0 encourages us to prepare a better working environment as well as fast and precise human resources.</p>
            <button type="button" className="btn btn-lg w-50 text-white p-3 mt-4" style={{ backgroundColor: "#5E50A1", fontSize: 16 }} onClick={() => router.push("/home")}>
              Start From Now
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <Image alt="" src="/asset/photohirejob/group1.png" width={0} height={0} sizes="100vw" placeholder="blur" blurDataURL={"/asset/photohirejob/group1.png"} style={{ width: "100%", height: "auto" }} />
        </div>
      </div>

      <div className="d-flex justify-content-between mx-5 mt-5">
        <div className="row d-flex align-items-center">
          <div className="col-md-6">
            <Image alt="" src="/asset/photohirejob/group2.png" width={0} height={0} sizes="100vw" style={{ width: "85%", height: "auto" }} />
          </div>
          <div className="col-md-6">
            <h1>Why look for talent at peworld?</h1>
            <div className="mt-4">
              <i className="fa-solid fa-circle-check me-3" style={{ color: "#5E50A1" }} />
              Extensive Network Talent
            </div>

            <div className="mt-2">
              <i className="fa-solid fa-circle-check me-3" style={{ color: "#5E50A1" }} />
              Proven Track Record
            </div>

            <div className="mt-2">
              <i className="fa-solid fa-circle-check me-3" style={{ color: "#5E50A1" }} />
              Customized Selection
            </div>

            <div className="mt-2">
              <i className="fa-solid fa-circle-check me-3" style={{ color: "#5E50A1" }} />
              Continuous Support
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between mx-5 mt-5">
        <div className="row w-100">
          <div className="col-md-6">
            <div className="row p-4 ms-5">
              <h2>Skill Talent</h2>
              <p>Talented programmers who have a unique set of capabilities that allow them to write clean, efficient, and robust code while tackling complex challenges. Various skills such as:.</p>
              <div className="row w-100">
                <div className="col-md-5">
                  <div className="mt-2">
                    <i className="fa-solid fa-circle-check me-3" style={{ color: "#FBB017" }} />
                    Java
                  </div>
                  <div className="mt-2">
                    <i className="fa-solid fa-circle-check me-3" style={{ color: "#FBB017" }} />
                    Kotlin
                  </div>
                  <div className="mt-2">
                    <i className="fa-solid fa-circle-check me-3" style={{ color: "#FBB017" }} />
                    PHP
                  </div>
                  <div className="mt-2">
                    <i className="fa-solid fa-circle-check me-3" style={{ color: "#FBB017" }} />
                    JavaScript
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="mt-2">
                    <i className="fa-solid fa-circle-check me-3" style={{ color: "#FBB017" }} />
                    Golang
                  </div>
                  <div className="mt-2">
                    <i className="fa-solid fa-circle-check me-3" style={{ color: "#FBB017" }} />
                    C++
                  </div>
                  <div className="mt-2">
                    <i className="fa-solid fa-circle-check me-3" style={{ color: "#FBB017" }} />
                    Ruby
                  </div>
                  <div className="mt-2">
                    <i className="fa-solid fa-circle-check me-3" style={{ color: "#FBB017" }} />
                    10+ Bahasa lainnya
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <Image alt="" src="/asset/photohirejob/group3.png" width={0} height={0} sizes="100vw" style={{ width: "85%", height: "auto" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMainContent;
