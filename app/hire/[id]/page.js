/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Profile from "../../components/Profile";
import { prisma } from "../../config/db";

const page = async ({ params }) => {
  const id = parseInt(params.id);

  // Render Data Employee
  const getEmployee = async () => {
    const res = await prisma.employee.findUnique({ where: { id: id } });
    return res;
  };

  const employee = await getEmployee();

  return (
    <div style={{ backgroundColor: "#F6F7F8", height: "100%" }}>
      <Header />
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <Profile employee={employee} id={id} />
          {/* Edit Form Company */}
          <div className="col-md-6 pb-3" style={{ backgroundColor: "#F6F7F8", height: "100%" }}>
            <div className="row">
              <h3 className=" mt-3 p-3">Hubungi David T Green</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis mattis dolor nec finibus.</p>
              <form>
                <div className="form-group text-gray-600  ">
                  <label htmlFor="jobtype" className="text-muted" style={{ fontSize: 12 }}>
                    Purpose of this message
                  </label>
                  <select className="form-select" aria-label="Default select example">
                    <option selected>Open to select</option>
                    <option value="Freelance">Freelance</option>
                    <option value="Full Time">Full Time</option>
                  </select>
                </div>
                <div className="form-group text-gray-600 mt-3 ">
                  <label htmlFor="name" className="text-muted" style={{ fontSize: 12 }}>
                    Name
                  </label>
                  <input id="name" type="text" className="form-control" autoComplete="name" autoFocus required placeholder="Enter name" style={{ height: 50 }} />
                </div>
                <div className="form-group text-gray-600 mt-3 ">
                  <label htmlFor="email" className="text-muted" style={{ fontSize: 12 }}>
                    Email
                  </label>
                  <input id="email" type="text" className="form-control" autoComplete="email" autoFocus required placeholder="Enter email" style={{ height: 50 }} />
                </div>
                <div className="form-group text-gray-600 mt-3 ">
                  <label htmlFor="phone" className="text-muted" style={{ fontSize: 12 }}>
                    Phone number
                  </label>
                  <input id="phone" type="text" className="form-control" autoComplete="phone" autoFocus required placeholder="Enter phone number" style={{ height: 50 }} />
                </div>

                <div className="form-group text-gray-600 mt-3 ">
                  <label htmlFor="description" className="text-muted" style={{ fontSize: 12 }}>
                    Brief description
                  </label>
                  <textarea id="description" name="description" className="form-control" autoComplete="description" autoFocus required placeholder="Enter description" style={{ height: 150 }} />
                </div>

                <div className="text-center mt-3">
                  <button type="button" className="btn btn-md w-100 text-white" style={{ backgroundColor: "#FBB017" }}>
                    Hire
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
