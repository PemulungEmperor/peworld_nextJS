/* eslint-disable react/no-unescaped-entities */
"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LandingLeftSide from "../../components/LandingLeftSide";
import axios from "axios";

const Page = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return alert("password does not match");
    }
    await axios.post("/api/company/register", {
      username: username,
      email: email,
      company_name: company,
      position_company: position,
      phone: phone,
      password: password,
    });
    setUsername("");
    setEmail("");
    setPosition("");
    setCompany("");
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

        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="row mx-3">
            <div className="header title">
              <h3 className="mt-3">Halo, Company</h3>
              <p>Welcome back to the Peworld, please register to access all features</p>
              <small className="text-muted">
                (You want to register as employee?{" "}
                <a onClick={() => router.push("/register")} style={{ color: "#FBB017", cursor: "pointer" }}>
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
                <input value={username} id="usernane" type="text" className="form-control" autoComplete="username" autoFocus required placeholder="Enter your name" style={{ height: 50 }} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="form-group text-gray-600">
                <label htmlFor="email" className="mb-2 mt-3">
                  Email
                </label>
                <input value={email} id="email" type="email" className="form-control" autoComplete="email" autoFocus required placeholder="Enter your email" style={{ height: 50 }} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="form-group text-gray-600">
                <label htmlFor="company" className="mb-2 mt-3">
                  Company's Name
                </label>
                <input value={company} id="company" type="company" className="form-control" autoComplete="company" autoFocus required placeholder="Enter company's name" style={{ height: 50 }} onChange={(e) => setCompany(e.target.value)} />
              </div>
              <div className="form-group text-gray-600">
                <label htmlFor="position" className="mb-2 mt-3">
                  position in company
                </label>
                <input value={position} id="position" type="position" className="form-control" autoComplete="position" autoFocus required placeholder="Enter position" style={{ height: 50 }} onChange={(e) => setPosition(e.target.value)} />
              </div>
              <div className="form-group text-gray-600">
                <label htmlFor="handphone" className="mb-2 mt-3">
                  Phone number
                </label>
                <input value={phone} id="phone" type="text" className="form-control" autoComplete="phone" autoFocus required placeholder="Enter your phone number" style={{ height: 50 }} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div className="form-group text-gray-600">
                <label htmlFor="password" className="mb-2 mt-3">
                  Password
                </label>
                <input value={password} id="password" type="text" className="form-control" autoComplete="password" autoFocus required placeholder="Enter your password" style={{ height: 50 }} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="form-group text-gray-600">
                <label htmlFor="confirmPassword" className="mb-2 mt-3">
                  Confirm Password
                </label>
                <input
                  value={confirmPassword}
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
