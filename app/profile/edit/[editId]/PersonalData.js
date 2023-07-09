"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

const PersonalData = ({ id }) => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [jobDesk, setJobDesk] = useState("");
  const [domicile, setDomicile] = useState("");
  const [jobtype, setJobType] = useState("");
  const [ig, setIg] = useState("");
  const [github, setGithub] = useState("");
  const [gitlab, setGitlab] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch("/api/employee/" + id, {
        username: name,
        profession: jobDesk,
        location: domicile,
        job_title: jobtype,
        ig,
        github,
        gitlab,
        employee_desc: description,
      });

      setName("");
      setJobDesk("");
      setDomicile("");
      setIg("");
      setGithub("");
      setGitlab("");
      setJobType("");
      setDescription("");

      router.refresh();
      alert("Updated Successful");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div className="row">
        <h5 className=" mt-3 p-3">Personal Data</h5>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="form-group text-gray-600  ">
            <label htmlFor="name" className="text-muted" style={{ fontSize: 12 }}>
              Name
            </label>
            <input value={name} id="name" type="text" className="form-control" autoComplete="name" autoFocus required placeholder="Enter Name" style={{ height: 50 }} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group text-gray-600 mt-3 ">
            <label htmlFor="jobDesk" className="text-muted" style={{ fontSize: 12 }}>
              Job Desk
            </label>
            <input value={jobDesk} id="jobDesk" type="text" className="form-control" autoComplete="jobDesk" autoFocus required placeholder="Enter job desk" style={{ height: 50 }} onChange={(e) => setJobDesk(e.target.value)} />
          </div>
          <div className="form-group text-gray-600 mt-3 ">
            <label htmlFor="domicile" className="text-muted" style={{ fontSize: 12 }}>
              Domicile
            </label>
            <input value={domicile} id="domicile" type="text" className="form-control" autoComplete="domicile" autoFocus required placeholder="Enter domicile" style={{ height: 50 }} onChange={(e) => setDomicile(e.target.value)} />
          </div>
          <div className="form-group text-gray-600 mt-3 ">
            <label htmlFor="jobtype" className="text-muted" style={{ fontSize: 12 }}>
              Job Type
            </label>
            <input value={jobtype} id="jobtype" type="text" className="form-control" autoComplete="jobtype" autoFocus required placeholder="Enter Name" style={{ height: 50 }} onChange={(e) => setJobType(e.target.value)} />
          </div>
          <div className="form-group text-gray-600 mt-3 ">
            <label htmlFor="ig" className="text-muted" style={{ fontSize: 12 }}>
              Instagram
            </label>
            <input value={ig} id="ig" type="text" className="form-control" autoComplete="ig" autoFocus required placeholder="Enter ur instagram @" style={{ height: 50 }} onChange={(e) => setIg(e.target.value)} />
          </div>
          <div className="form-group text-gray-600 mt-3 ">
            <label htmlFor="github" className="text-muted" style={{ fontSize: 12 }}>
              Github
            </label>
            <input value={github} id="github" type="text" className="form-control" autoComplete="github" autoFocus required placeholder="Enter ur github @" style={{ height: 50 }} onChange={(e) => setGithub(e.target.value)} />
          </div>
          <div className="form-group text-gray-600 mt-3 ">
            <label htmlFor="gitlab" className="text-muted" style={{ fontSize: 12 }}>
              Gitlab
            </label>
            <input value={gitlab} id="gitlab" type="text" className="form-control" autoComplete="gitlab" autoFocus required placeholder="Enter ir gitlab @" style={{ height: 50 }} onChange={(e) => setGitlab(e.target.value)} />
          </div>
          <div className="form-group text-gray-600 mt-3 ">
            <label htmlFor="description" className="text-muted" style={{ fontSize: 12 }}>
              Brief description
            </label>
            <textarea
              value={description}
              type="text"
              id="description"
              name="description"
              className="form-control"
              autoComplete="description"
              autoFocus
              required
              placeholder="Enter description"
              style={{ height: 150 }}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-md w-100 mt-3" style={{ backgroundColor: "#FFFFFF", color: "#FBB017", fontWeight: "bold", border: "1px solid #FBB017" }}>
              Edit Personal Data
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalData;
