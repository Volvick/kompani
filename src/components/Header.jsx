const Header = () => (
  <header className="header">
    <div className="logo">
      <img src="/public/assets/headericon.png" alt="Logo" />
    </div>
    <div className="header-text">
      <h1>Komponi - Tailwind Components</h1>
      <p>
        Build fast. Ship clean. With Tailwind components -{" "}
        <a
          target="_blank"
          title="Click
"
          className="cta"
          href="https://x.com/volvickode"
        >
          {" "}
          Volvick
        </a>
      </p>
    </div>
  </header>
);

export default Header;
