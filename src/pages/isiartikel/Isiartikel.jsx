import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";
import Cover from "../isiartikel/img/coverisi.png";
import "./isiartikel.css";

const Isiartikel = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const artikel = artikels.find((artikel) => artikel.id === id);

  const {
    image,
    heading,
    description,
    content_description,
    title_description,
  } = artikel;

  const [artikels, setArtikels] = useState([]);

  async function DataArtikels() {
    try {
      const response = await axios.get(
        "https://apigenerator.dronahq.com/api/jq3eOc4d/artikeldata"
      );
      setArtikels(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    DataArtikels();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Fintrack | Artikel</title>
      </Helmet>
      <div className="coverisiartikel">
        <img src={Cover} alt="Cover" className="isiartikel-coverisi" />
      </div>

      <div className="artikeldes">
        <div className="isiartikel-des">
          <p>{heading}</p>
          <div className="isiartikel-desc">
            <p>{description}</p>
          </div>
          <div className="isiartikel-des1">
            <p>{content_description}</p>
            <div className="isiartikel-desc">
              <p>{title_description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Isiartikel;
