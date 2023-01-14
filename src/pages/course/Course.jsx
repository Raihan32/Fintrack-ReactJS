import { useEffect, useState } from "react";
// import axios from "axios";
import { Container, Breadcrumb } from "react-bootstrap";
// import { First } from "react-bootstrap/esm/PageItem";

import Search from "../../components/filter/Search";
import LevelCourse from "../../components/filter/LevelCourse";
import FilterCourse from "../../components/filter/FilterCourse";
import Pagination from "../../components/filter/Pagination";
import Card from "../../components/Cards/Cards";
import items from "../../constants/DetailCourse";
import "./course.css";

const Course = () => {
  // filter kategori
  const allKategori = ["All", ...new Set(items.map((item) => item.kategori))];

  console.log(allKategori);

  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setButtons] = useState(allKategori);

  const filterKategori = (button) => {
    if (button === "All") {
      setMenuItem(items);
      return;
    }

    const filteredData = items.filter((item) => item.kategori === button);
    setMenuItem(filteredData);
  };
  // akhir filter

  //filter level
  const [menuItemLevel, setMenuItemLevel] = useState(items);
  const filterLevel = (buttonLevel) => {
    const menuItemLevel = items.filter((item) => item.level === buttonLevel);
    setMenuItemLevel(menuItemLevel);
    console.log(menuItemLevel);
  };
  //akhir filter level

  // filter search
  const [query, setQuery] = useState("");
  console.log(query);
  // akhir search

  //filter pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = menuItem.slice(firstPostIndex, lastPostIndex);
  //akhir pagination

  return (
    <Container fluid className="content">
      <div className="filter">
        <Breadcrumb breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Detail Course</Breadcrumb.Item>
        </Breadcrumb>
        <form className="navigation">
          <div className="btn-filter">
            Filter
            <input
              type="reset"
              value="Reset"
              style={{
                color: "#848586",
                border: "none",
                backgroundColor: "transparent",
                fontSize: "14px",
              }}
            />
          </div>
          <Search setQuery={(query) => setQuery(query)} />
          <LevelCourse filterLevel={filterLevel} />
          <FilterCourse button={buttons} filterKategori={filterKategori} />
        </form>
      </div>

      <div className="container-course">
        <div  className="cards-course">
          <h1  className="title-course">
            Kembangkan kemampuan anda dalam memehami keuangan di Fintrech
          </h1>
          <Card  menuItem={currentPosts} query={query} />
        </div>
        <Pagination
          totalPosts={menuItem.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </Container>
  );
};

export default Course;
