"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import useSWR from "swr";

import ButtonSkills from "../home/ButtonSkills";
import ButtonGoToProfile from "../home/ButtonGoToProfile";
import Pagination from "../components/Pagination";

const fetchEmployees = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch employees");
  }

  return response.json();
};

const Page = () => {
  const search = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  const searchQuery = search ? search.get("q") : null;
  const encodeSearchQuery = encodeURI(searchQuery || "");

  const sortOption = search ? search.get("sort") : null;
  const encodeSortOption = encodeURI(sortOption || "");

  const { data, isLoading } = useSWR(`/api/home?q=${encodeSearchQuery}&sort=${encodeSortOption}`, fetchEmployees);

  if (!data?.employees) {
    return null;
  }

  //pagination support variables

  const postPerPage = 6;
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = data.employees.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
      {currentPost.map((emp, index) => (
        <div key={index + 1}>
          <div className="row">
            <div className="col-md-auto">
              <div>
                <Image className="ms-2" alt="" src={emp.photo_path ? emp.photo_path : "/asset/photohirejob/m1.jpg"} width={100} height={100} style={{ borderRadius: 100 }} />
              </div>
            </div>
            <div className="col-md-auto me-auto mt-3">
              <div>
                <div className="fw-bold" style={{ fontSize: 20 }}>
                  {emp.username}
                </div>

                <div className="text-muted" style={{ fontSize: 14 }}>
                  {emp.profession}
                </div>

                <div className="text-muted" style={{ fontSize: 14 }}>
                  <span>
                    <i className="fa-solid fa-location-dot me-3"></i>
                    {emp.location}
                  </span>
                </div>

                <div className="mt-3">
                  {emp.skill.map((skill, index) => (
                    <ButtonSkills key={index + 1} skill={skill} id={emp.id} />
                  ))}
                </div>
              </div>
            </div>

            <div className="col-md-auto d-flex align-items-center me-5 mt-3">
              <div>
                <ButtonGoToProfile id={emp.id} />
              </div>
            </div>
          </div>
          <hr />
        </div>
      ))}
      <Pagination totalPosts={data.employees.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </div>
  );
};

export default Page;
