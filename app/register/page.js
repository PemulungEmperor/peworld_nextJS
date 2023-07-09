"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LandingLeftSide from "../components/LandingLeftSide";
import axios from "axios";

const Page = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return alert("password does not match");
    }
    await axios.post("/api/employee/register", {
      username: username,
      email: email,
      phone: phone,
      password: password,
    });
    setUsername("");
    setEmail("");
    setPhone("");
    setPassword("");
    setConfirmPassword("");
    alert("Registration successful");
    router.push("/login");
  };

  return (
    <div className="container p-3 my-3">
      <div className="row">
        <div className="col-md-6">
          <LandingLeftSide></LandingLeftSide>
        </div>

        <div className="col-md-6 d-flex justify-content-center align-items-center mt-4">
          <div className="row mx-3">
            <div className="header title">
              <h3 className="mt-4">Halo, Employee</h3>
              <p>Welcome back to the Peworld, please register to access all features </p>
              <small className="text-muted">
                (You want to register as company?{" "}
                <a onClick={() => router.push("/register/company")} style={{ color: "#FBB017", cursor: "pointer" }}>
                  go here
                </a>
                )
              </small>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group text-gray-600">
                <label htmlFor="name" className="mb-2 mt-3">
                  Name
                </label>
                <input id="name" type="text" className="form-control" autoComplete="name" autoFocus required placeholder="Enter your name" style={{ height: 50 }} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="form-group text-gray-600">
                <label htmlFor="email" className="mb-2 mt-3">
                  Email
                </label>
                <input id="email" type="email" className="form-control" autoComplete="email" autoFocus required placeholder="Enter your email " style={{ height: 50 }} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="form-group text-gray-600">
                <label htmlFor="hanphone" className="mb-2 mt-3">
                  Phone number
                </label>
                <input id="handphone" type="text" className="form-control" autoComplete="hanphone" autoFocus required placeholder="Enter your phone number" style={{ height: 50 }} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div className="form-group text-gray-600">
                <label htmlFor="password" className="mb-2 mt-3">
                  Password
                </label>
                <input id="password" type="text" className="form-control" autoComplete="password" autoFocus required placeholder="Enter your password" style={{ height: 50 }} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="form-group text-gray-600">
                <label htmlFor="confirmPassword" className="mb-2 mt-3">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="text"
                  className="form-control"
                  autoComplete="confirmPassword"
                  autoFocus
                  required
                  placeholder="Enter confirm password"
                  style={{ height: 50 }}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="row d-flex justify-content-center align-items-center mt-3" style={{ margin: 0 }}>
                <button type="submit" className="btn btn-oval" style={{ backgroundColor: "#EFC81A", color: "white" }}>
                  Sign up
                </button>
              </div>
              <p className="mt-4 text-center">
                Already have an account?{" "}
                <a onClick={() => router.push("/login")} style={{ color: "#FBB017", cursor: "pointer" }}>
                  Log in here
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
