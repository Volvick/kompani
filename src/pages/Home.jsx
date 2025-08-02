import Header from '../components/Header';
import SectionBox from '../components/SectionBox';

const heroCards = [
  { title: 'Hero/001', imgSrc: 'https://framerusercontent.com/images/oPa33aEsxjeZ83D2mXPavFcS8HI.png', isPro: false },
  { title: 'Hero/002', imgSrc: 'https://framerusercontent.com/images/qlGqHmd7TeR8AbbVrw1GhpEMU4.png', isPro: false },
  { title: 'Hero/003', imgSrc: 'https://framerusercontent.com/images/RAHiDfKJpHQdKHtVm7w9bQc9sVY.png', isPro: true },
  // Add more cards as needed
];

const cardDesigns = [
  { title: 'Card/001', imgSrc: '/assets/Card/card3.png', isPro: false },
  { title: 'Card/002', imgSrc: '/assets/Card/card8.png', isPro: false },
  { title: 'Card/003', imgSrc: '/assets/Card/card4.png', isPro: true },
  // Add more cards as needed
];

const Home = () => (
  <>
    <Header />
    <div className="template-section">
      <SectionBox title="Hero Section" cards={heroCards} />
      <SectionBox title="Card design" cards={cardDesigns} />
    </div>
  </>
);

export default Home;
