import { API_URL } from "./config";
const teachers = [
  {
    photo: "/images/teachers/Abena.jpg",
    initials: "AB",
    name: "Abena Boateng",
    role: "Lead Teacher, Kindergarten 2",
    bio: "8 years in early-years education, specializing in phonics and reading readiness.",
  },
  {
    photo: "/images/teachers/Kwame.jpg",
    initials: "KM",
    name: "Kwame Mensah",
    role: "Lead Teacher, Kindergarten 1",
    bio: "Trained in the GES kindergarten framework, with a focus on hands-on maths.",
  },
  {
    photo: "/images/teachers/Efua.jpg",
    initials: "EA",
    name: "Efua Asante",
    role: "Lead Teacher, Nursery",
    bio: "Believes every child learns best through song, story, and structured play.",
  },
  {
    photo: "/images/teachers/Teddy.jpg",
    initials: "TK",
    name: "Teddy Kwarteng",
    role: "Creche Coordinator",
    bio: "Gentle, routine-based care for our youngest learners, ages 2 to 3.",
  },
  {
    photo: "/images/teachers/Mariam.jpg",
    initials: "MA",
    name: "Mariam Aba",
    role: "Lead Teacher, Kindergarten 2",
    bio: "8 years in early-years education, specializing in phonics and reading readiness.",
  },
  {
    photo: "/images/teachers/Alexandra.jpeg",
    initials: "AS",
    name: "Alexandra Sowah",
    role: "Lead Teacher, Kindergarten 1",
    bio: "Passionate about creating engaging learning experiences for young children.",
  },
  {
    photo: "/images/teachers/Gerald.jpg",
    initials: "GK",
    name: "Gerald Kofi",
    role: "Lead Teacher, Nursery",
    bio: "Dedicated to fostering a love of learning in our youngest students.",
  },
  {
    photo: "/images/teachers/Sophia.jpg",
    initials: "SP",
    name: "Sophia Poku",
    role: "Lead Teacher, Kindergarten 2",
    bio: "Enthusiastic about nurturing creativity and critical thinking in young minds.",
  },
];

function Teachers() {
  return (
    <>
      <section className="page-title-banner">
        <div className="container">
          <p className="eyebrow eyebrow--center">Our Teachers</p>
          <h1>The people behind every lesson</h1>
        </div>
      </section>

      <section className="teachers">
        <div className="container">
          <div className="teachers-grid">
            {teachers.map((person) => (
              <article className="teacher-card" key={person.name}>
                <img
                  src={person.photo}
                  alt={person.name}
                  className="teacher-avatar"
                />
                <h3>{person.name}</h3>
                <p className="teacher-role">{person.role}</p>
                <p>{person.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Teachers;
