const pillars = [
  {
    icon: "🏆",
    title: "Mission",
    text: "To give every child in Accra a joyful, play-based start to their education — one where curiosity is nurtured, not rushed.",
  },
  {
    icon: "👁️",
    title: "Vision",
    text: "A generation of confident learners who see school as a place of discovery, not just instruction.",
  },
  {
    icon: "📜",
    title: "History",
    text: "Founded in 2014 in a single rented classroom, Eduvo has grown into a full early-years campus serving 320 families.",
  },
];

const testimonials = [
  {
    name: "Ama O., parent since 2023",
    quote:
      "My daughter used to be shy about speaking up. Six months at Eduvo and she narrates her whole day to us at dinner.",
  },
  {
    name: "Kwabena T., parent since 2022",
    quote:
      "The teachers actually know each child individually. That kind of attention is hard to find.",
  },
  {
    name: "Efua B., parent since 2024",
    quote:
      "We noticed smaller classes and calmer mornings right away. Best decision we made.",
  },
];

function About() {
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
            </div>
            <div className="row-media">
              <div className="media-box">
                <img
                  src="/images/About/children.jpg"
                  alt="Children gathered for building time"
                />
              </div>
            </div>
          </div>

          <div className="row-block">
            <div className="row-media">
              <div className="media-box">
                <img
                  src="/images/About/Boy.jpg"
                  alt="Child building with blocks"
                />
              </div>
            </div>
            <div className="row-text">
              <h2>A curriculum built for how children actually learn</h2>
              <p>
                Every lesson follows the Ghana Education Service framework,
                delivered through songs, stories, and guided play rather than
                worksheets alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pillars">
        <div className="container">
          <p className="eyebrow eyebrow--center">What Drives Us</p>
          <h2 className="section-title">Mission, vision &amp; history</h2>
          <div className="pillars-grid">
            {pillars.map((item) => (
              <div className="pillar-card" key={item.title}>
                <div className="pillar-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials testimonials--photo">
        <div className="container">
          <p className="eyebrow eyebrow--center">Parent Voices</p>
          <h2 className="section-title">What families in Accra are saying</h2>
          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <blockquote className="testimonial-card" key={t.name}>
                <p>"{t.quote}"</p>
                <footer>— {t.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
