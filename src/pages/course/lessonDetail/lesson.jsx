import React from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import VideoPlayer from "../../../components/playlist/videoPlayer";
import { FaRegPauseCircle, FaRegPlayCircle } from "react-icons/fa";
import Card from "../../../components/Cards/Cards";
import DetailCourse from "../../../constants/DetailCourse";
import "./lesson.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";

const Lesson = () => {
  return (
    <Container className="container-lesson">
      <div className="container1-lesson">
        <div className="content-video">
          <div className="videoplayer">
            <div className="breadcrumb-list">
              <Breadcrumb className="list">
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/fc">Course</Breadcrumb.Item>
                <Breadcrumb.Item active>Course Lesson</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <VideoPlayer
              url={
                "https://youtu.be/D89Dgg32yLk?list=PLU9il4c3BBUXS1IsXq8FXx-UQFb22Kge5"
              }
              style={{ borderRadius: "1rem" }}
            />
            <div className="deskripsi-video">
              <h4 style={{ fontWeight: "bold" }}>
                Penggenalan konsep audit laporan
              </h4>
              <p>Auditing : Konsep Dasar Audit Laporan Keuangan</p>
              <details>
                <summary
                  style={{
                    // display: "block",
                    display: "inline",
                    backgroundColor: "#fafafa",
                    color: "#0C1EEE",
                    cursor: "pointer",
                  }}
                >
                  Deskripsi..
                </summary>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem exercitationem hic tempore ullam qui, molestias
                  perspiciatis sequi corporis at. A optio nobis rem. Quidem
                  repudiandae temporibus perferendis adipisci, similique
                  molestias in vel ullam aliquid, soluta corporis vero sit dolor
                  ex.
                </p>
              </details>
            </div>
          </div>
          <div className="playlist">
            <h4 style={{ color: "#030842", fontWeight: "bold" }}>
              Playlist Video Course
            </h4>
            <section class="video-playlist">
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
                  Dasar-dasar keuangan dengan semangat juangan dengan baik
                  semoga lekas
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
                <span className="duration-playlist">00.03.00</span>
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
                <span className="duration-playlist">00.43.00</span>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="cardlesson">
        <Swiper
          slidesPerView={3}
          spaceBetween={1}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          style={{ padding: "0rem 1rem 2rem 1rem" }}
        >
          {DetailCourse.map((DetailCourse) => (
            <SwiperSlide
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Card
                key={DetailCourse.id}
                image={DetailCourse.image}
                duration={DetailCourse.duration}
                video={DetailCourse.video}
                heading={DetailCourse.heading}
                description={DetailCourse.description}
                tingkatan={DetailCourse.tingkatan}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default Lesson;
