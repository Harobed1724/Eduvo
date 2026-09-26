import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "./config";

function Classes() {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL + "/api/classes")
      .then((res) => res.json())
      .then((result) => {
        if (result.success) setClasses(result.data);
        setLoading(false);
      });
  }, []); // empty array = run once, when the page first loads

  return (
    <>
      <section className="page-title-banner">
        <div className="container">
          <p className="eyebrow eyebrow--center">Our Classes</p>
          <h1>A class for every stage</h1>
        </div>
      </section>

      <section className="programs">
        <div className="container">
          {loading ? (
            <p style={{ textAlign: "center" }}>Loading classes…</p>
          ) : (
            <div className="programs-grid">
              {classes.map((item) => (
                <article className="program-card" key={item.title}>
                  <span className="program-age">{item.age}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <div>
            <h2>Not sure which class fits your child?</h2>
            <p>
              Book a short visit and we'll help you figure out the right fit.
            </p>
          </div>
          <Link to="/appointment" className="btn btn-primary btn-large">
            Schedule a Visit
          </Link>
        </div>
      </section>
    </>
  );
}

export default Classes;
