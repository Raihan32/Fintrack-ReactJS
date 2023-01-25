import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";
import Cover from "../isiartikel/img/coverisi.png";
import "./isiartikel.css";
import { BsArrowRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const Isiartikel = () => {
  // const navigate = useNavigate();
  // const { id } = useParams();
  // const artikel = artikels.find((artikel) => artikel.id === id);

  // const {
  //   image,
  //   heading,
  //   description,
  //   content_description,
  //   title_description,
  // } = artikel;
  // const [artikels, setArtikels] = useState([]);

  // async function DataArtikels() {
  //   try {
  //     const response = await axios.get(
  //       "https://apigenerator.dronahq.com/api/jq3eOc4d/artikeldata"
  //     );
  //     setArtikels(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   DataArtikels();
  // }, []);

  return (
    <div>
      <Helmet>
        <title>Fintrack | Artikel</title>
      </Helmet>
      <div className="container">
        <figure className="mb-4">
          <img className="img-fluid rounded" src={Cover} alt="cover1" />
        </figure>
        <div className="row">
          <div className="col-lg-8">
            <article>
              <header className="mb-4">
                <h1 className="fw-bolder mb-2" style={{ color: "#060F76" }}>
                  Mengenal Istilah-Istilah Audit Pada Laporan Keuangan
                  Perusahaan
                </h1>

                <div className="text-muted fst-italic mb-2">
                  Posted on January 1, 2022 by
                  <a
                    href={
                      "https://www.jurnal.id/id/blog/mengenal-istilah-istilah-audit-pada-laporan-keuangan-perusahaan/"
                    }
                  >
                    Jurnal Entrepreneur
                  </a>
                </div>

                <a
                  className="badge bg-primary text-decoration-none link-light mx-1"
                  href="/"
                >
                  Keuangan
                </a>
                <a
                  className="badge bg-primary text-decoration-none link-light mx-1"
                  href="/"
                >
                  Akuntasi
                </a>
              </header>
              <figure className="mb-4">
                <img
                  className="img-fluid rounded"
                  src={
                    "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGZpbmFuY2V8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
                  }
                  alt="cover1"
                />
              </figure>
              <section className="mb-5 text-black">
                <p className="fs-5 mb-4">
                  Laporan keuangan perusahaan akan diaudit oleh auditor pada
                  akhir periode akuntansi. Tujuannya yakni untuk melihat
                  bagaimana pelaku usaha atau perusahaan menjalankan ketentuan
                  yang ada.
                </p>
                <p className="fs-5 mb-4">
                  Di sisi lain audit laporan keuangan perusahaan juga memiliki
                  manfaat seperti menambah kredibilitas atas posisi keuangan
                  yang dilaporkan, meningkatkan nilai dan kinerja perusahaan
                  pada periode tersebut, membantu pengambilan keputusan
                  selanjutnya dan masih banyak manfaat lainnya.
                </p>
                <p className="fs-5 mb-4">
                  Itulah salah satu alasan mengapa banyak perusahaan melakukan
                  audit laporan keuangan, meskipun biaya yang dibutuhkan tidak
                  sedikit. Karenanya penting untuk Anda sebagai pemilik usaha
                  ataupun stakeholder untuk dapat membaca audit laporan keuangan
                  dengan memahami istilah istilah audit yang ada.
                </p>
                <h2
                  className="fw-bolder mb-4 mt-5"
                  style={{ color: "#060F76" }}
                >
                  Mari Mengenal Istilah Istilah Audit Dalam Laporan Keuangan
                  Perusahaan!
                </h2>
                <p className="fs-5 mb-4">
                  Manajemen audit, merupakan kegiatan evaluasi efektivitas dan
                  efisiensi kinerja operasional perusahaan untuk dapat
                  dipertanggungjawabkan kepada pihak yang memiliki wewenang yang
                  lebih tinggi dalam suatu perusahaan.
                </p>
                <p className="fs-5 mb-4">
                  Independen atau eksternal auditor, biasanya berasal dari
                  kantor akuntan publik dan memberikan jasa audit kepada klien.
                </p>
              </section>
            </article>
          </div>

          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-header">
                Mengenal Istilah-Istilah Audit Pada Laporan Keuangan Perusahaan
              </div>
              <div className="card-body">
                Laporan keuangan perusahaan akan diaudit oleh auditor pada akhir
                periode akuntansi. Tujuannya yakni untuk melihat bagaimana
                pelaku usaha atau perusahaan menjalankan ketentuan yang ada.
              </div>
            </div>
            <div className="card mb-4">
              <div className="card-header">
                Cara Kelola Keuangan Saat Terjadi Resesi, Ada Rahasianya
              </div>
              <figure className="mx-1 mt-2">
                <img
                  className="img-fluid rounded"
                  src={
                    "https://images.unsplash.com/photo-1642000387873-145c73177207?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGZpbmFuY2V8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  }
                  alt="cover1"
                />
              </figure>
              <div className="card-body">
                Apa yang menjadi 'ketakutan' Presiden Joko Widodo Jokowi menjadi
                kenyataan. Suka tidak suka, Badai besar yang berasal dari
                dinamika perekonomian global akhirnya datang
              </div>
              <Link to={"/opps!"} className="card-footer text-decoration-none">
                Read More <BsArrowRightCircle />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Isiartikel;
