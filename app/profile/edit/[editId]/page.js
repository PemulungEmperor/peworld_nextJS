import Image from "next/image";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Profile from "../../../components/Profile";
import PersonalData from "./PersonalData";
import Skills from "./Skills";
import { prisma } from "../../../config/db";

const page = async ({ params }) => {
  const editId = parseInt(params.editId);

  // Render Data Employee
  const getEmployee = async () => {
    const res = await prisma.employee.findUnique({ where: { id: editId } });
    return res;
  };

  const employee = await getEmployee();

  return (
    <div>
      <div style={{ height: "30vh", width: "100%", backgroundColor: "#5E50A1" }}>
        <Header />
        <div className="container my-5">
          <div className="row d-flex justify-content-center">
            {/* Profile Component */}
            <Profile employee={employee} id={editId} />

            {/* Edit Form */}
            <div className="col-md-6 shadow pb-3" style={{ backgroundColor: "white", borderRadius: 10 }}>
              {/* Personal Data */}
              <PersonalData id={editId} />
              {/* Skills */}
              <hr />
              <Skills id={editId} />
              {/* Work Exp */}
              <hr />
              <div className="row">
                <h5 className="  p-3">Work Experience</h5>

                <form>
                  <div className="form-group text-gray-600  ">
                    <label htmlFor="position" className="text-muted" style={{ fontSize: 12 }}>
                      Position
                    </label>
                    <input id="position" type="text" className="form-control" autoComplete="position" autoFocus required placeholder="Enter position" style={{ height: 50 }} />
                  </div>
                  <div className="row form-group text-gray-600 mt-3">
                    <div className="col-md">
                      <label htmlFor="company" className="text-muted" style={{ fontSize: 12 }}>
                        Company Name
                      </label>
                      <input id="company" type="text" className="form-control" autoComplete="company" autoFocus required placeholder="Enter company" style={{ height: 50 }} />
                    </div>
                    <div className="col-md">
                      <label htmlFor="date" className="text-muted" style={{ fontSize: 12 }}>
                        Month/Year
                      </label>
                      <input id="date" type="text" className="form-control" autoComplete="date" autoFocus required placeholder="Enter month/year" style={{ height: 50 }} />
                    </div>
                  </div>
                  <div className="form-group text-gray-600 mt-3 ">
                    <label htmlFor="description2" className="text-muted" style={{ fontSize: 12 }}>
                      Brief description
                    </label>
                    <textarea id="description2" name="description2" className="form-control" autoComplete="description2" autoFocus required placeholder="Enter description" style={{ height: 150 }} />
                  </div>
                  <hr />
                  <div className="text-center">
                    <button type="button" className="btn btn-md w-100" style={{ backgroundColor: "#FFFFFF", color: "#FBB017", fontWeight: "bold", border: "1px solid #FBB017" }}>
                      Add work experience
                    </button>
                  </div>
                </form>
              </div>

              {/* Portfolio */}
              <hr />
              <div className="row">
                <h5 className="p-3">Portfolio</h5>

                <form>
                  <div className="form-group text-gray-600 ">
                    <label htmlFor="appName" className="text-muted" style={{ fontSize: 12 }}>
                      Application Name
                    </label>
                    <input id="appName" type="text" className="form-control" autoComplete="appName" autoFocus required placeholder="Enter Aplication Name" style={{ height: 50 }} />
                  </div>

                  <div className="form-group text-gray-600 mt-3  mb-3">
                    <label htmlFor="repoLink" className="text-muted" style={{ fontSize: 12 }}>
                      Repository Link
                    </label>
                    <input id="repoLink" type="text" className="form-control" autoComplete="repoLink" autoFocus required placeholder="Enter repository link" style={{ height: 50 }} />
                  </div>

                  <div className="form-check form-check-inline ">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="mobApp" />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      Aplikasi Mobile
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="webApp" />
                    <label className="form-check-label" htmlFor="inlineRadio2">
                      Aplikasi Web
                    </label>
                  </div>

                  {/* Upload Gambar */}
                  <div className="d-flex justify-content-center">
                    <input id="files" type="file" className="form-control mt-3" style={{ display: "none", backgroundColor: "#F6F5F4", height: "300px", maxWidth: "900px" }} name="file" />
                    <input id="" type="" className="form-control mt-3" style={{ backgrounColor: "#F6F5F4", height: "300px", maxWidth: "900px", border: "2px dashed grey" }} />

                    <div className="" style={{ position: "absolute", marginTop: "25vh" }}>
                      <Image htmlFor="fles" alt="" src="/asset/photohirejob/img.png" width={50} height={50} />
                    </div>
                    {/* <div className="" style={{ position: "absolute", marginTop: "7vh" }}>
                      <Image htmlFor="fles" alt="" src="/asset/photohirejob/m1.jpg" width={100} height={100} style={{ borderRadius: 100, marginLeft: 20 }} />
                    </div> */}
                    <div className="" style={{ position: "absolute", marginTop: "35vh" }}>
                      <label htmlFor="files">Add Application Photo</label>
                    </div>
                  </div>

                  <hr />
                  <div className="text-center">
                    <button type="button" className="btn btn-md w-100" style={{ backgroundColor: "#FFFFFF", color: "#FBB017", fontWeight: "bold", border: "1px solid #FBB017" }}>
                      Add portfolio
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default page;
