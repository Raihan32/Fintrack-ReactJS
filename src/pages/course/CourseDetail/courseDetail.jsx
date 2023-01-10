import React from "react";
import { Container } from "react-bootstrap";
import "../CourseDetail/coursedetail.css";

const courseDetail = () => {
  return (
    <Container className="container-course">
      <div className="course_detail">
        <img
          src={
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          }
          alt="foto-1"
          className="cover-course"
        />
        <div className="card-detail">
          <div className="description">
            <p className="title-detail">
              <span style={{ fontWeight: "bold" }}>Auditing : </span>Konsep
              Dasar Audit Laporan Keuangan
            </p>
            <p className="description-detail">
              Pahami cara tepat mengelola proyek untuk mencapai target
              penyelesaian proyek secara efektif dan efisien.
            </p>
            <button type="button" className="button-detail">
              Ambil Course
            </button>
          </div>
        </div>
      </div>

      <div className="course-detail">
        <div className="description-course">
          <h4 style={{ color: "#060F76", fontWeight: "700" }}>
            Auditing : Konsep Dasar Audit Laporan Keuangan
          </h4>
          <p>
            Disini peran seorang auditor menjadi penting! Setelah dilakukannya
            proses audit, auditor akan memberikan laporan dalam bentuk temuan
            dan rekomendasi atau opini audit. Nah laporan ini akan digunakan
            oleh pihak-pihak seperti perusahaan itu sendiri (klien),
            stakeholders atau investor perusahaan, dan bahkan oleh badan
            pemerintah. Dengan tanggung jawab yang sangat besar tersebut,
            penting bagi seorang auditor untuk memahami segala proses kerja yang
            ia akan lakukan, dimulai dari perencanaan, eksekusi, sampai
            pembuatan laporan.
          </p>
          <h5 style={{ color: "#060F76", fontWeight: "700" }}>
            Apa itu laporan auditing?
          </h5>
          <p>
            Audit laporan keuangan merupakan proses dalam mengumpulkan dan
            mengevaluasi bukti – bukti temuan atas informasi yang didapat dalam
            proses pemeriksaan, agar dapat menentukan apakah informasi tersebut
            telah sesuai dengan apa yang sesungguhnya terjadi dan sesuai dengan
            kriteria yang berlaku. Tujuan dari audit laporan keuangan adalah
            untuk memberi keyakinan kepada pengguna laporan keuangan untuk
            mengambil keputusan.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default courseDetail;
