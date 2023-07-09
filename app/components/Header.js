"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { deleteCookie } from "cookies-next";

const Header = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState("");
  const [role, setRole] = useState("");
  const [userId, setUserId] = useState("");

  const logout = async () => {
    localStorage.removeItem("localToken");
    deleteCookie("cookies");
    setIsLoggedIn(false);
    alert("You are logged out");
    router.push("/login");
  };

  const alreadyLoggedIn = async () => {
    const token = localStorage.getItem("localToken");
    if (token) {
      setIsLoggedIn(true);
      const decode = jwt_decode(token);
      setUserId(decode.id);
      setRole(decode.role);
    }
  };

  useEffect(() => {
    alreadyLoggedIn();
  }, []);
  return (
    <div className="container-fluid" style={{ backgroundColor: "white" }}>
      <div className="container p-2 mt-3">
        <div className=" d-flex justify-content-between mx-4">
          <div className="img-fluid" onClick={() => router.push("/")}>
            <Image alt="" src="/asset/logo/logo3.png" width={110} height={30} priority />
          </div>
          <div className="action">
            {isLoggedIn ? (
              <>
                <button className="btn">
                  <i className="fa-sharp fa-regular fa-bell"></i>
                </button>
                <button className="btn">
                  <i className="fa-regular fa-envelope"></i>
                </button>
                <button className="btn" onClick={logout}>
                  <i className="fa-solid fa-arrow-right-from-bracket"></i>
                </button>
                {role === 1 ? (
                  <>
                    {" "}
                    <button type="button" className="btn" onClick={() => router.push("/profile/" + userId)}>
                      <i className="fa-regular fa-circle-user" style={{ fontSize: 24 }}></i>
                    </button>
                  </>
                ) : (
                  <>
                    {" "}
                    <button className="btn">
                      <i className="fa-regular fa-circle-user" style={{ fontSize: 24 }} onClick={() => router.push("/company/" + userId)}></i>
                    </button>
                  </>
                )}
              </>
            ) : (
              <>
                <button onClick={() => router.push("/login")} type="button" className="btn btn-md " style={{ color: "#5E50A1", backgroundColor: "white", border: "1px solid #5E50A1" }}>
                  Sign In
                </button>
                <button onClick={() => router.push("/register")} type="button" className="btn btn-md ms-3 text-white" style={{ backgroundColor: "#5E50A1" }}>
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
