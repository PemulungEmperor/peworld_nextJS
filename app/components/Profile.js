"use client";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

const Profile = ({ id, employee }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [newAvatar, setnewAvatar] = useState(null);
  const [previewImage, setPreviewImage] = useState("");

  const [role, setRole] = useState();

  const userInfo = async () => {
    const token = localStorage.getItem("localToken");
    if (token) {
      const decode = jwt_decode(token);
      setRole(decode.role);
    }
  };

  //photo preview
  const handleUploadChange = (e) => {
    let uploaded = e.target.files[0];
    if (e.target.files.length !== 0) {
      if (uploaded.size > 2097152) {
        alert("Maximum size is 2mb!");
      } else {
        setPreviewImage(URL.createObjectURL(uploaded));
        setnewAvatar(uploaded);
      }
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      let formData = new FormData();
      formData.append("file", newAvatar);

      await fetch("/api/employee/photo/" + id, {
        method: "PATCH",
        body: formData,
      }).then((response) => {
        if (response.status === 200) {
          alert("Success Update Photo!");
          window.location.reload();
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      if (confirm(`Are you sure you want to delete this skill?`)) {
        await axios.post("/api/skill/" + id, {
          skill: e.target.value,
        });
        router.refresh();
        alert(`Success delete ${e.target.value} skill!`);
      } else {
        console.log("Cancel delete.");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userInfo();
  }, []);
  return (
    <div className="col-md-4 shadow p-2 pb-4 mx-2" style={{ backgroundColor: "white", borderRadius: 10 }}>
      <div className="text-center mt-3 position-relative">
        <Image alt="" src={employee.photo_path ? employee.photo_path : ""} width={120} height={120} style={{ borderRadius: 100, marginLeft: 20 }} />
        <button type="button" className="position-absolute bottom-0 btn btn-md" style={{ border: 0, backgroundColor: "white" }} data-bs-toggle="modal" data-bs-target="#exampleModal">
          <i className="fa-regular fa-pen-to-square " style={{ marginLeft: "-20px", fontSize: "18px" }}></i>
        </button>
      </div>
      <div className="row ms-2">
        <div className="row mt-3">
          <div className="col-md fw-bold" style={{ fontSize: 20 }}>
            {employee.username ? employee.username : "-"}
          </div>
        </div>
        <div className="row ">
          <div className="col-md " style={{ fontSize: 14 }}>
            {employee.profession ? employee.profession : "Ur Profession"}
          </div>
        </div>
        <div className="row mt-2">
          {employee.location ? (
            <>
              <span className="text-muted">
                <i className="fa-solid fa-location-dot me-2 text-muted"></i>
                {employee.location}
              </span>
            </>
          ) : (
            <>
              <span className="text-muted">
                <i className="fa-solid fa-location-dot me-2 text-muted"></i>
                location not yet added
              </span>
            </>
          )}
        </div>
        <div className="row mt-2">
          <div className="col-md text-muted" style={{ fontSize: 14 }}>
            {employee.job_title ? employee.job_title : "-"}
          </div>
        </div>
        <div className="row mt-2 mb-2">
          <div className="col-md text-muted" style={{ fontSize: 14 }}>
            {employee.employee_desc ? employee.employee_desc : "-"}
          </div>
        </div>
        <div className="row text-center mt-2">
          {pathname === "/profile/" + id && role === 1 ? (
            <>
              <button type="button" className="btn btn-md text-white" style={{ backgroundColor: "#5E50A1" }} onClick={() => router.push("/profile/edit/" + id)}>
                Edit Profile
              </button>
            </>
          ) : pathname === "/profile/edit/" + id && role === 1 ? (
            <>
              <button type="button" className="btn btn-md text-white" style={{ backgroundColor: "#5E50A1" }} onClick={() => router.push("/profile/" + id)}>
                See Portfolio
              </button>
            </>
          ) : pathname === "/profile/" + id && role === 0 ? (
            <>
              <button type="button" className="btn btn-md text-white" style={{ backgroundColor: "#5E50A1" }} onClick={() => router.push("/hire/" + id)}>
                Hire
              </button>
            </>
          ) : (
            <>
              <button type="button" className="btn btn-md text-white" style={{ backgroundColor: "#5E50A1" }} onClick={() => router.push("/profile/" + id)}>
                See Portfolio
              </button>
            </>
          )}
        </div>

        <div className="row mt-3 p-1">
          <p style={{ fontSize: 18, fontWeight: "bold" }}>Skill</p>
        </div>
        <div className="row">
          <div className="col-md-auto ">
            {employee.skill.map((s, i) => (
              <button key={i + 1} className="btn btn-md text-white p-2 ms-2 mt-2" style={{ borderRadius: 5, fontSize: 12, backgroundColor: "#FDD074" }} value={s} onClick={handleDelete}>
                {s}
              </button>
            ))}
          </div>
        </div>
        <span className="text-muted mt-5" style={{ fontSize: 14 }}>
          <i className="fa-regular fa-envelope me-3" />
          {employee.email}
        </span>
        <span className="text-muted mt-3" style={{ fontSize: 14 }}>
          <i className="fa-brands fa-instagram me-3" />
          {employee.ig ? employee.ig : "-"}
        </span>
        <span className="text-muted mt-3" style={{ fontSize: 14 }}>
          <i className="fa-brands fa-github me-3" />
          {employee.github ? employee.github : "-"}
        </span>
        <span className="text-muted mt-3" style={{ fontSize: 14 }}>
          <i className="fa-brands fa-gitlab me-3" />
          {employee.gitlab ? employee.gitlab : "-"}
        </span>
      </div>
      <>
        {/* Modal */}
        <form onSubmit={handleUpload}>
          <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Edit Profile Picture
                  </h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                  <div>
                    <label className="mb-2">Upload New Photo Profile : </label>
                    <div className="input-group mb-3">
                      <input type="file" name="photo" className="form-control" onChange={handleUploadChange} />
                    </div>
                    <div className="d-flex justify-content-center mt-5">
                      <Image className="img-fluid" src={previewImage ? previewImage : employee.photo_path ? employee.photo_path : ""} alt="" width={120} height={120} style={{ borderRadius: "100%" }} />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </>
    </div>
  );
};

export default Profile;
