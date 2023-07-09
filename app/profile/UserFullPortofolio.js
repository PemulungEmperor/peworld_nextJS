"use client";
import { useState } from "react";
import Portfolio from "./Portfolio";
import WorkExp from "./WorkExp";

const UserFullPortofolio = ({ portfolio, experiences }) => {
  const [tab, setTab] = useState("Portfolio");
  return (
    <div className="col-md-6 shadow" style={{ backgroundColor: "white", borderRadius: 10 }}>
      {/* Header right side */}
      <div className="row m-3">
        <div className="col-md-auto mt-2">
          {tab === "Portfolio" ? (
            <>
              <button type="btn" className="btn btn-md" style={{ fontWeight: "bold", border: "none", borderBottom: "2px solid #5E50A1", borderRadius: 2 }} onClick={() => setTab("Portfolio")}>
                Portfolio
              </button>
            </>
          ) : (
            <button type="btn" className="btn btn-md" onClick={() => setTab("Portfolio")}>
              Portfolio
            </button>
          )}
        </div>

        {tab === "Experience" ? (
          <>
            <div className="col-md-auto mt-2">
              <button type="btn" className="btn btn-md" style={{ fontWeight: "bold", border: "none", borderBottom: "2px solid #5E50A1", borderRadius: 2 }} onClick={() => setTab("Experience")}>
                Work Experience
              </button>
            </div>
          </>
        ) : (
          <div className="col-md-auto mt-2">
            <button type="btn" className="btn btn-md" onClick={() => setTab("Experience")}>
              Work Experience
            </button>
          </div>
        )}
      </div>

      {/* Portfolio / Work Exp */}
      {tab === "Portfolio" && <Portfolio portfolio={portfolio} />}
      {tab === "Experience" && <WorkExp experiences={experiences} />}
    </div>
  );
};

export default UserFullPortofolio;
