import React from "react";
import { Link, useNavigate, useParams, Outlet } from "react-router-dom";
import { Breadcrumb, Container } from "react-bootstrap";
import Detail from "../../../constants/DetailCourse";
import "./coursedetail.css";

const CourseDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <Container>
      <div className="course-detail-container">
        <div className="course-detail-area1">
          {" "}
          <img
            src={Detail[id - 1].image}
            alt="foto-1"
            className="course-cover-detail"
          />
        </div>
        <div className="course-detail-content">
          {" "}
          <div className="course-detail-course">
            <div className="course-detail-description-course">
              <h4 style={{ color: "#060F76", fontWeight: "700" }}>
                {Detail[id - 1].heading}
              </h4>
              <p>{Detail[id - 1].content_description}.</p>
              <h5 style={{ color: "#060F76", fontWeight: "700" }}>
                {Detail[id - 1].title_description}
              </h5>
              <p>{Detail[id - 1].content_description1}</p>
            </div>
          </div>
        </div>
        <div className="course-detail-link">
          {" "}
          <Breadcrumb className="detail-course-list">
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/fc">Course</Breadcrumb.Item>
            <Breadcrumb.Item active>{Detail[id - 1].heading}</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="course-detail-playlist">
          {" "}
          <div className="course-card-detail">
            <div className="course-detail-description">
              <p className="course-detail-title">
                <span style={{ fontWeight: "bold" }}>
                  {Detail[id - 1].heading}
                </span>
              </p>
              <p className="course-detail-description"></p>
              {/* <button
            className="course-button-detail"
            onClick={() => navigate(-1)}
          >
            BACK
          </button> */}
              <Link
                to={`/lesson`}
                type="button"
                className="course-button-detail"
                // onClick={() => {
                //   navigate(`/lesson`);
                // }}
              >
                Ambil Course
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CourseDetail;
