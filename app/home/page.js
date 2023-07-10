"use client";
import { useState } from "react";
// import { prisma } from "../config/db";
import { useRouter, useSearchParams } from "next/navigation";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TopJobs from "./TopJobs";
import SearchPage from "../search/page";

// prisma

const Page = () => {
  const router = useRouter();
  const search = useSearchParams();
  const option = ["▼ Sort", "username", "location"];
  const [searchQuery, setSearchQuery] = useState(search ? search.get("q") : null);
  const [sortOption, setSortOption] = useState(search ? search.get("sort") : null);

  // search
  const onSearch = (e) => {
    e.preventDefault();

    const encodeSearchQuery = encodeURI(searchQuery || "");
    const encodeSortOption = encodeURI(sortOption || "username");
    router.push(`/home?q=${encodeSearchQuery}&sort=${encodeSortOption}`);
  };

  return (
    <div style={{ backgroundColor: "#F6F7F8", height: "100%" }}>
      <Header />
      <TopJobs />
      {/* Search */}
      <div className="container mt-5">
        <form onSubmit={onSearch}>
          <div className="row mt-5">
            <div className="input-group" style={{ height: 50 }}>
              <input value={searchQuery || ""} onChange={(e) => setSearchQuery(e.target.value)} className="w-auto form-control border-end-0 border" type="search" placeholder="search..." id="example-search-input" />
              <span className="input-group-append d-flex align-items-center">
                <button className="btn btn-outline-secondary bg-white border-start-0 border-bottom-0 border-top-0 border-end-0" type="button" style={{ marginLeft: -50 }}>
                  <i className="fa fa-search"></i>
                </button>
              </span>
              <select className="form-select" value={sortOption ? sortOption : "username"} onChange={(e) => setSortOption(e.target.value)}>
                {option.map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
              </select>
              <button className="btn btn-sm text-white" type="submit" style={{ backgroundColor: "#5E50A1" }}>
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* end search */}

      {/* main content */}
      <div className="container shadow p-3 my-5" style={{ backgroundColor: "white", borderRadius: 10 }}>
        <SearchPage />
      </div>
      {/* End Main Content */}
      <Footer />
    </div>
  );
};

export default Page;
