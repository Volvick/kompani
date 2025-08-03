import Card from "./Card";

const SectionBox = ({ title, cards }) => (
  <section className="section-box">
    <div className="section-box-heading">
      <h1 className="title">{title}</h1>
      <a href="#" className="view-more-btn">
        <button
          title="Coming soon"
        >
          View more
        </button>
      </a>
    </div>
    <div className="card-section">
      {cards.map((card, idx) => (
        <Card key={idx} {...card} />
      ))}
    </div>
  </section>
);

export default SectionBox;
