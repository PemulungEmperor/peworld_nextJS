/* eslint-disable react/no-unescaped-entities */
"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import LandingLeftSide from "../../components/LandingLeftSide";

const Page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/company/login", {
        email: email,
        password: password,
      });
      const data = res.data.username;
      if (data) {
        localStorage.setItem("localToken", res.data.accessToken);
        setEmail("");
        setPassword("");
        alert("Login Successful");
        router.push("/");
      } else {
        alert("Login failed, Check your credentials");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container p-3 my-3">
      <div className="row">
        <div className="col-md-6">
          <LandingLeftSide></LandingLeftSide>
        </div>

        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="row mx-3">
            <div className="header title">
              <h3 className="mt-3">Halo, Company</h3>
              <p>Welcome back to the Peworld, please login to continue to your dashboard </p>
              <small className="text-muted">
                (You want to login as employee?{" "}
                <a onClick={() => router.push("/login")} style={{ color: "#FBB017", cursor: "pointer" }}>
                  go here
                </a>
                )
              </small>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group text-gray-600">
                <label htmlFor="email" className="mb-2 mt-3">
                  Email
                </label>
                <input id="email" type="email" className="form-control" autoComplete="email" autoFocus required placeholder="Enter your email " style={{ height: 50 }} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="form-group text-gray-600">
                <label htmlFor="password" className="mb-2 mt-3">
                  Password
                </label>
                <input id="password" type="text" className="form-control" autoComplete="password" autoFocus required placeholder="Enter your password" style={{ height: 50 }} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="mt-4 text-muted text-end">
                <p>Forgot Password?</p>
              </div>
              <div className="row d-flex justify-content-center align-items-center mt-3" style={{ margin: 0 }}>
                <button type="submit" className="btn btn-oval" style={{ backgroundColor: "#EFC81A", color: "white" }}>
                  Log in
                </button>
              </div>
              <p className="mt-4 text-center">
                Don't have an accont?{" "}
                <a onClick={() => router.push("/register/company")} style={{ color: "#FBB017", cursor: "pointer" }}>
                  Sign up here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
