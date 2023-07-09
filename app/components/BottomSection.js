"use client";
import { useRouter } from "next/navigation";
const BottomSection = () => {
  const router = useRouter();
  return (
    <div className="container px-5 ">
      <div className="row g-1" style={{ backgroundColor: "#5E50A1", borderTopLeftRadius: 30, borderTopRightRadius: 5, borderBottomLeftRadius: 5, borderBottomRightRadius: 30 }}>
        <div className="col-md-6">
          <h4 className="p-4 w-100 text-white ms-2">Let's find your needs</h4>
        </div>
        <div className="col-md-5 d-flex align-items-center justify-content-end me-1">
          <button type="button" className="btn btn-md p-3 m-3" style={{ fontSize: 14, fontWeight: "bold", backgroundColor: "#ffffff", color: "#5E50A1" }} onClick={() => router.push("/home")}>
            Start From Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
