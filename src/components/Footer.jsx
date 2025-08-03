const Footer = () => {
  return (
    <div className="footer">
      <p>
        New components added daily <br />
        <a
          target="_blank"
          title="Click
"
          className="cta"
          href="https://x.com/volvickode"
        >
          Stay tuned
        </a>{" "}
        &{" "}
        <span
          className="bookmark"
          title="Click
"
          onClick={() =>
            alert("Press Ctrl+D (or Cmd+D) to bookmark this page.")
          }
        >
          {" "}
          bookmark{" "}
        </span>{" "}
        Komponi!
      </p>
    </div>
  );
};

export default Footer;
