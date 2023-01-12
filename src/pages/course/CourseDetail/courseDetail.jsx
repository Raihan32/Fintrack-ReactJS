import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import Detail from "../../../constants/DetailCourse";
import "../CourseDetail/coursedetail.css";

const CourseDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <Container className="container-course-detail">
      <div className="course-detail">
        <img
          src={Detail[id - 1].image}
          alt="foto-1"
          className="course-cover-detail"
        />
        <div className="course-card-detail">
          <div className="course-detail-description">
            <p className="course-detail-title">
              <span style={{ fontWeight: "bold" }}>
                {Detail[id - 1].heading}
              </span>
            </p>
            <p className="course-detail-description"></p>
            <button
              className="course-button-detail"
              onClick={() => navigate(-1)}
            >
              BACK
            </button>
            <Link
              to={`/fc`}
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

      <div className="course-detail-course">
        <div className="course-detail-description-course">
          <h4 style={{ color: "#060F76", fontWeight: "700" }}>
            Auditing : Konsep Dasar Audit Laporan Keuangan
          </h4>
          <p>{Detail[id - 1].content_description}.</p>
          <h5 style={{ color: "#060F76", fontWeight: "700" }}>
            {Detail[id - 1].title_description}
          </h5>
          <p>{Detail[id - 1].content_description1}</p>
        </div>
      </div>
    </Container>
  );
};

export default CourseDetail;
