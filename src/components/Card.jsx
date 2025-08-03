import { Link } from "react-router-dom";

const Card = ({ title, imgSrc, isPro }) => {
  const id = title.toLowerCase().replace(/\s+/g, "-");

  return (

    <div className="card">
      <Link to={`/preview/${id}`} className="copybtn">


      <div className="img-container">
        <Link to={`/preview/${id}`} className="copybtn">
          View
        </Link>

        <img src={imgSrc} alt={title} className="card-img" />
      </div>
      <div className="card-detail">
        <div className="detail-left">
          <p className="card-title">{title}</p>
          <img
            src="/assets/tailwind.png"
            alt="Tailwind Icon"
            className="assect-icon"
          />
          <p className="time">
            <img src="/assets/christmas-stars.png" alt="New" /> New
          </p>
        </div>
        <div>
          <p className={`price ${isPro ? "paid" : "free"}`}>
            {isPro && <img src="/assets/diamond.png" alt="Pro" />}{" "}
            {isPro ? "Pro" : "Free"}
          </p>
        </div>
      </div>
       </Link>
    </div>
  );
};

export default Card;
