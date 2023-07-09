"use client";
import { useRouter } from "next/navigation";

const ButtonEmployee = ({ id }) => {
  const router = useRouter();
  return (
    <button onClick={() => router.push("/profile/" + id)} type="button" className="btn btn-md text-white" style={{ backgroundColor: "#5E50A1" }}>
      Lihat Profile
    </button>
  );
};

export default ButtonEmployee;
