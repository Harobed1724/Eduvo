import { useState, useEffect } from "react";

function About() {
  const [pillars, setPillars] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/api/about")
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setPillars(result.data.pillars);
          setTestimonials(result.data.testimonials);
        }
        setLoading(false);
      });
  }, []);

  return (
    <>
      <section className="page-title-banner">
        <div className="container">
          <p className="eyebrow eyebrow--center">About Us</p>
          <h1>Getting to know Eduvo</h1>
        </div>
      </section>

      <section className="overview">
        <div className="container">
          <div className="row-block">
            <div className="row-text">
              <p className="eyebrow">Est. 2014, Accra</p>
              <h2>Award-winning early years support</h2>
              <p>
                Eduvo started in one rented classroom with a simple idea: young
                children learn best through play, story, and hands-on discovery
                — not rote memorization.
              </p>
              <a href="#" className="btn btn-dark">
                Learn More
              </a>
            </div>
            <div className="row-media">
              <div className="media-box">📚</div>
            </div>
          </div>

          <div className="row-block">
            <div className="row-media">
              <div className="media-box">🧩</div>
            </div>
            <div className="row-text">
              <h2>A curriculum built for how children actually learn</h2>
              <p>
                Every lesson follows the Ghana Education Service framework,
                delivered through songs, stories, and guided play rather than
                worksheets alone.
              </p>
              <a href="#" className="btn btn-dark">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="pillars">
        <div className="container">
          <p className="eyebrow eyebrow--center">What Drives Us</p>
          <h2 className="section-title">Mission, vision &amp; history</h2>
          {loading ? (
            <p style={{ textAlign: "center" }}>Loading…</p>
          ) : (
            <div className="pillars-grid">
              {pillars.map((item) => (
                <div className="pillar-card" key={item.title}>
                  <div className="pillar-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="testimonials testimonials--photo">
        <div className="container">
          <p className="eyebrow eyebrow--center">Parent Voices</p>
          <h2 className="section-title">What families in Accra are saying</h2>
          {loading ? (
            <p style={{ textAlign: "center", color: "white" }}>Loading…</p>
          ) : (
            <div className="testimonials-grid">
              {testimonials.map((t) => (
                <blockquote className="testimonial-card" key={t.name}>
                  <p>"{t.quote}"</p>
                  <footer>— {t.name}</footer>
                </blockquote>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default About;
