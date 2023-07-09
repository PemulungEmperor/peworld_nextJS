import Image from "next/image";
import BG from "../../public/asset/photohirejob/bg.jpg";

const LandingLeftSide = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BG.src})`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <div className="overlay" style={{ position: "absolute", width: "100%", height: "100%", backgroundColor: "#5E50A1", opacity: "0.65" }} />

      {/* Logo */}
      <Image alt="logo" src="/asset/logo/logo1.png" width={75} height={22} style={{ position: "absolute", margin: 30 }} />

      <div className="d-flex h-100 justify-content-center align-items-center text-white position-absolute">
        <h2 className="w-75">Find the best & most talented developers in various fields of expertise</h2>
      </div>
    </div>
  );
};

export default LandingLeftSide;
