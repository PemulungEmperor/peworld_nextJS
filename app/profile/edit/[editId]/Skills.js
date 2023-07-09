"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

const Skills = ({ id }) => {
  const router = useRouter();
  const [skill, setSkill] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/employee/" + id, {
        skill,
      });
      setSkill("");
      router.refresh();
      alert("Succesfully added");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="row">
      <h5 className="  p-3">Skill</h5>

      <form onSubmit={handleSubmit}>
        <div className="form-group text-gray-600  ">
          <div className="input-group">
            <input value={skill} id="skill" type="text" className="form-control" autoComplete="skill" autoFocus required placeholder="Java" style={{ height: 50 }} onChange={(e) => setSkill(e.target.value)} />
            <button type="submit" className="btn btn-md text-white" style={{ backgroundColor: "#FBB017" }}>
              Simpan
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Skills;
