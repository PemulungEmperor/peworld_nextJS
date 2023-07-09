/* eslint-disable react/no-unescaped-entities */
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Image from "next/image";

const page = () => {
  return (
    <div style={{ height: "30vh", width: "100%", backgroundColor: "#5E50A1" }}>
      <Header />
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          {/* Profile Side */}
          <div className="col-md-4 shadow p-2 pb-4 mx-2" style={{ backgroundColor: "white", borderRadius: 10 }}>
            <div className="text-center mt-3">
              <Image alt="" src="/asset/photohirejob/m1.jpg" width={120} height={120} style={{ borderRadius: 100, marginLeft: 20 }} />
            </div>
            <div className="row ms-2">
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

              <div className="row mt-2 mb-2">
                <div className="col-md text-muted" style={{ fontSize: 14 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis mattis dolor nec finibus. Curabitur placerat tellus ultrices turpis faucibus, id maximus felis ornare.
                </div>
              </div>

              <span className="text-muted mt-3" style={{ fontSize: 14 }}>
                <i className="fa-regular fa-envelope me-3" />
                mencaricinta@gmail.com
              </span>
              <span className="text-muted mt-3" style={{ fontSize: 14 }}>
                <i className="fa-brands fa-instagram me-3" />
                @mencariCinta99
              </span>
              <span className="text-muted mt-3" style={{ fontSize: 14 }}>
                <i className="fa-solid fa-phone me-3" />
                0821- xxx1 - xxx3
              </span>
              <span className="text-muted mt-3" style={{ fontSize: 14 }}>
                <i className="fa-brands fa-linkedin me-3" />
                Mencari Cinta Sejati
              </span>
            </div>
          </div>
          {/* Edit Form Company */}
          <div className="col-md-6 shadow pb-3" style={{ backgroundColor: "white", borderRadius: 10 }}>
            <div className="row">
              <h5 className=" mt-3 p-3">Company Data</h5>
              <hr />
              <form>
                <div className="form-group text-gray-600  ">
                  <label htmlFor="companyName" className="text-muted" style={{ fontSize: 12 }}>
                    Company's Name
                  </label>
                  <input id="companyName" type="text" className="form-control" autoComplete="companyName" autoFocus required placeholder="Enter company's name" style={{ height: 50 }} />
                </div>
                <div className="form-group text-gray-600 mt-3 ">
                  <label htmlFor="field" className="text-muted" style={{ fontSize: 12 }}>
                    Company's Field
                  </label>
                  <input id="field" type="text" className="form-control" autoComplete="field" autoFocus required placeholder="Enter company's field" style={{ height: 50 }} />
                </div>
                <div className="form-group text-gray-600 mt-3 ">
                  <label htmlFor="city" className="text-muted" style={{ fontSize: 12 }}>
                    City
                  </label>
                  <input id="city" type="text" className="form-control" autoComplete="city" autoFocus required placeholder="Enter city" style={{ height: 50 }} />
                </div>

                <div className="form-group text-gray-600 mt-3 ">
                  <label htmlFor="description" className="text-muted" style={{ fontSize: 12 }}>
                    Brief description
                  </label>
                  <textarea id="description" name="description" className="form-control" autoComplete="description" autoFocus required placeholder="Enter description" style={{ height: 150 }} />
                </div>

                <div className="form-group text-gray-600 mt-3 ">
                  <label htmlFor="email" className="text-muted" style={{ fontSize: 12 }}>
                    Email
                  </label>
                  <input id="email" type="text" className="form-control" autoComplete="email" autoFocus required placeholder="Enter email" style={{ height: 50 }} />
                </div>
                <div className="form-group text-gray-600 mt-3 ">
                  <label htmlFor="instagram" className="text-muted" style={{ fontSize: 12 }}>
                    Instagram
                  </label>
                  <input id="instagram" type="text" className="form-control" autoComplete="instagram" autoFocus required placeholder="Enter Instagram" style={{ height: 50 }} />
                </div>
                <div className="form-group text-gray-600 mt-3 ">
                  <label htmlFor="phone" className="text-muted" style={{ fontSize: 12 }}>
                    Phone Number
                  </label>
                  <input id="phone" type="text" className="form-control" autoComplete="phone" autoFocus required placeholder="Enter phone number" style={{ height: 50 }} />
                </div>
                <div className="form-group text-gray-600 mt-3 ">
                  <label htmlFor="linkedin" className="text-muted" style={{ fontSize: 12 }}>
                    Linkedin
                  </label>
                  <input id="linkedin" type="text" className="form-control" autoComplete="linkedin" autoFocus required placeholder="Enter Linkedin" style={{ height: 50 }} />
                </div>

                <div className="text-center mt-3">
                  <button type="button" className="btn btn-md w-100 text-white" style={{ backgroundColor: "#5E50A1" }}>
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
