import Image from "next/image";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Profile from "../../components/Profile";
import UserFullPortofolio from "../UserFullPortofolio";
import { prisma } from "../../config/db";

const Page = async ({ params }) => {
  const profileId = parseInt(params.profileId);

  // Render Data Employee
  const getEmployee = async () => {
    const res = await prisma.employee.findUnique({ where: { id: profileId } });
    return res;
  };
  const getEmployeeExperience = async () => {
    const res = await prisma.experience.findMany({ where: { employee_id: profileId } });

    return res;
  };

  const getEmployeePortfolio = async () => {
    const res = await prisma.portfolio.findMany({ where: { employee_id: profileId } });

    return res;
  };
  // End Rendering Data Employee

  const employee = await getEmployee();
  const portfolio = await getEmployeePortfolio();
  const experiences = await getEmployeeExperience();

  return (
    <div style={{ height: "30vh", width: "100%", backgroundColor: "#5E50A1" }}>
      <Header />
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          {/* Profile Component */}
          <Profile employee={employee} id={profileId} />
          <UserFullPortofolio portfolio={portfolio} experiences={experiences} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
