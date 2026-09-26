import { useState } from "react";

function Appointment() {
  const [form, setForm] = useState({
    parentName: "",
    childName: "",
    phone: "",
    preferredDate: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // For now this just confirms on-screen. Wiring this to the backend
    // (e.g. POST /api/appointments, saved to the database, or emailed to
    // the school) is a natural next step once you're ready for it.
    setSubmitted(true);
  }

  return (
    <>
      <section className="page-title-banner">
        <div className="container">
          <p className="eyebrow eyebrow--center">Visit Eduvo</p>
          <h1>Schedule a Visit</h1>
        </div>
      </section>

      <section className="login-section">
        <div className="container login-container">
          <div className="login-card">
            {submitted ? (
              <>
                <p className="eyebrow eyebrow--center">Request Received</p>
                <h1>Thank you, {form.parentName.split(" ")[0] || "there"}!</h1>
                <p className="login-sub">
                  We've received your visit request for{" "}
                  {form.preferredDate || "your preferred date"}. Our team will
                  call you at {form.phone} to confirm a time.
                </p>
              </>
            ) : (
              <>
                <p className="eyebrow eyebrow--center">Book a Visit</p>
                <h1>Come see a classroom in action</h1>
                <p className="login-sub">
                  Tell us a bit about your family and when works best — we'll
                  follow up to confirm.
                </p>

                <form onSubmit={handleSubmit} className="login-form">
                  <label htmlFor="parentName">Your full name</label>
                  <input
                    id="parentName"
                    name="parentName"
                    type="text"
                    value={form.parentName}
                    onChange={handleChange}
                    placeholder="e.g. Ama Owusu"
                    required
                  />

                  <label htmlFor="childName">Child's name</label>
                  <input
                    id="childName"
                    name="childName"
                    type="text"
                    value={form.childName}
                    onChange={handleChange}
                    placeholder="e.g. Kojo Owusu"
                    required
                  />

                  <label htmlFor="phone">Phone number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="e.g. 024 000 0000"
                    required
                  />

                  <label htmlFor="preferredDate">Preferred visit date</label>
                  <input
                    id="preferredDate"
                    name="preferredDate"
                    type="date"
                    value={form.preferredDate}
                    onChange={handleChange}
                    required
                  />

                  <label htmlFor="message">
                    Anything we should know? (optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="e.g. My child's age, questions you have…"
                  />

                  <button type="submit" className="btn btn-primary btn-large">
                    Request a Visit
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Appointment;
