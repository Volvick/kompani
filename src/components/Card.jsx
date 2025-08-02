const Card = ({ title, imgSrc, isPro }) => (
  <div className="card">
    <div className="img-container">
      <button className="copybtn">
        View <i className="fa-solid fa-arrow-right"></i>
      </button>
      <img src={imgSrc} alt={title} className="card-img" />
    </div>
    <div className="card-detail">
      <div className="detail-left">
        <p className="card-title">{title}</p>
        <img src="/assets/tailwind.jpeg" alt="Tailwind Icon" className="assect-icon" />
        <p className="time">
          <img src="/assets/christmas-stars.png" alt="New" /> New
        </p>
      </div>
      <div>
        <p className={`price ${isPro ? 'paid' : 'free'}`}>
          {isPro && <img src="/assets/diamond.png" alt="Pro" />} {isPro ? 'Pro' : 'Free'}
        </p>
      </div>
    </div>
  </div>
);

export default Card;
