const Card = ({ title, imgSrc, isPro }) => (
  <div className="card">
    <div className="img-container">
      <button className="copybtn">
        View
      </button>
      <img src={imgSrc} alt={title} className="card-img" />
    </div>
    <div className="card-detail">
      <div className="detail-left">
        <p className="card-title">{title}</p>
        <img src="/public/assets/tailwind.png" alt="Tailwind Icon" className="assect-icon" />
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
