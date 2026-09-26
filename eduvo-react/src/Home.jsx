import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="eyebrow">Kids Learning Center, Accra</p>
          <h1>
            A new approach
            <br />
            to kids
            <br />
            education
          </h1>
          <p className="lead">
            Eduvo blends a Ghana Education Service-aligned curriculum with
            play-based learning, so every child leaves each day a little more
            curious, a little more confident, and always ready for tomorrow.
          </p>
          <div className="hero-cta-row">
            <a href="/about" className="btn btn-dark">
              Learn More
            </a>
            <Link to="/appointment" className="btn btn-primary btn-large">
              Book a Visit →
            </Link>
          </div>
        </div>

        <div className="hero__art">
          <div className="blob-frame">
            <img
              src="/images/About page.jpg"
              alt="Children learning at Eduvo"
              className="hero-photo"
            />
          </div>
          <div className="stat-chip stat-chip--1">
            <strong>10+</strong>
            <span>Years in Accra</span>
          </div>
          <div className="stat-chip stat-chip--2">
            <strong>320</strong>
            <span>Happy families</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
