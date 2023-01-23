import React from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate, useParams, Outlet } from "react-router-dom";
import { Breadcrumb, Container } from "react-bootstrap";
import Detail from "../../../constants/DetailCourse";
import VideoPlayer from "../../../components/playlist/videoPlayer";
import { FaRegPauseCircle, FaRegPlayCircle } from "react-icons/fa";
import "./coursedetail.css";

const CourseDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <Container>
      <Helmet>
        <title>Fintrack | Course</title>
      </Helmet>
      <div class="fc-detail-container">
        <div class="fc-body-video">
          {" "}
          <VideoPlayer
            url={Detail[id - 1].url_video}
            light={Detail[id - 1].image}
            className="course-cover-detail"
          />
        </div>
        <div class="fc-body-playlist">
          {" "}
          <section class="course-video-playlist">
            <div className="list-lesson">
              <span>
                <FaRegPlayCircle
                  style={{
                    fontSize: "26px",
                    color: "#8F97F9",
                  }}
                />
              </span>
              <span className="title-playlist">
                Penggenalan konsep audit laporan
              </span>
              <span className="duration-playlist">10.43.00</span>
            </div>
            <div className="list-lesson">
              <span>
                <FaRegPlayCircle
                  style={{
                    fontSize: "26px",
                    color: "#8F97F9",
                  }}
                />
              </span>
              <span className="title-playlist">
                Penggenalan konsep audit laporan
              </span>
              <span className="duration-playlist">10.43.00</span>
            </div>
            <div className="list-lesson">
              <span>
                <FaRegPauseCircle
                  style={{
                    fontSize: "26px",
                    color: "#8F97F9",
                  }}
                />
              </span>
              <span className="title-playlist">
                Dasar-dasar keuangan dengan semangat juangan dengan baik semoga
                lekas
              </span>
              <span className="duration-playlist">10.43.00</span>
            </div>
            <div className="list-lesson">
              <span>
                <FaRegPauseCircle
                  style={{
                    fontSize: "26px",
                    color: "#8F97F9",
                  }}
                />
              </span>
              <span className="title-playlist">
                Penggenalan konsep audit laporan
              </span>
              <span className="duration-playlist">10.43.00</span>
            </div>
            <div className="list-lesson">
              <span>
                <FaRegPauseCircle
                  style={{
                    fontSize: "26px",
                    color: "#8F97F9",
                  }}
                />
              </span>
              <span className="title-playlist">Dasar-dasar keuangan</span>
              <span className="duration-playlist">10.43.00</span>
            </div>
            <div className="list-lesson">
              <span>
                <FaRegPauseCircle
                  style={{
                    fontSize: "26px",
                    color: "#8F97F9",
                  }}
                />
              </span>
              <span className="title-playlist">
                Penggenalan konsep audit laporan
              </span>
              <span className="duration-playlist">10.43.00</span>
            </div>
            <div className="list-lesson">
              <span>
                <FaRegPauseCircle
                  style={{
                    fontSize: "26px",
                    color: "#8F97F9",
                  }}
                />
              </span>
              <span className="title-playlist">Dasar-dasar keuangan</span>
              <span className="duration-playlist">10.43.00</span>
            </div>
          </section>
        </div>
        <div class="fc-body-link">
          {" "}
          <Breadcrumb className="detail-course-list">
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/fc">Course</Breadcrumb.Item>
            <Breadcrumb.Item active>{Detail[id - 1].heading}</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div class="fc-body-content">
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
        <div class="fc-card-content">
          {" "}
          <div className="course-card-detail">
            <div className="course-detail-description">
              <p className="course-detail-title">
                <span style={{ fontWeight: "bold" }}>
                  {Detail[id - 1].heading}
                </span>
              </p>
              <p className="course-detail-description">
                {Detail[id - 1].description}
              </p>
              <Link
                type="button"
                className="course-button-detail"
                onClick={() => navigate(-1)}
              >
                Back Course
              </Link>
            </div>
          </div>
        </div>
        <div class="fc-card-rekomendasi"></div>
      </div>
    </Container>
  );
};

export default CourseDetail;
