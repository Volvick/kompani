import Card from './Card';

const SectionBox = ({ title, cards }) => (
  <section className="section-box">
    <div>
      <h1 className="title">{title}</h1>
    </div>
    <div className="card-section">
      {cards.map((card, idx) => (
        <Card key={idx} {...card} />
      ))}
    </div>
  </section>
);

export default SectionBox;
