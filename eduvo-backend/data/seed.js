// eduvo-backend/data/seed.js
const bcrypt = require("bcryptjs");
const db = require("./database");

const wardCount = db.prepare("SELECT COUNT(*) AS count FROM wards").get().count;

if (wardCount === 0) {
  console.log("Seeding database with starter data…");

  const insertWard = db.prepare(`
    INSERT INTO wards (name, pin, class, assignments, grades, fees, comments)
    VALUES (@name, @pin, @class, @assignments, @grades, @fees, @comments)
  `);

  insertWard.run({
    name: "Kojo Mensah",
    pin: bcrypt.hashSync("4821", 10),
    class: "Kindergarten 2",
    assignments: JSON.stringify([
      {
        title: "Alphabet tracing worksheet",
        due: "Sept 22",
        status: "Pending",
      },
      {
        title: "Counting 1–20 workbook page",
        due: "Sept 19",
        status: "Submitted",
      },
    ]),
    grades: JSON.stringify([
      { subject: "Literacy", score: "B+" },
      { subject: "Numeracy", score: "A" },
      { subject: "Creative Arts", score: "A-" },
    ]),
    fees: JSON.stringify({
      term: "Term 1, 2026",
      amount: "GHS 1,200",
      status: "Paid",
    }),
    comments: JSON.stringify([
      {
        from: "Ms. Boateng",
        text: "Kojo has been very engaged in group reading time this week.",
      },
    ]),
  });

  insertWard.run({
    name: "Abena Owusu",
    pin: bcrypt.hashSync("7734", 10),
    class: "Nursery 1",
    assignments: JSON.stringify([
      { title: "Color matching activity", due: "Sept 21", status: "Pending" },
    ]),
    grades: JSON.stringify([
      { subject: "Literacy", score: "A-" },
      { subject: "Numeracy", score: "B+" },
    ]),
    fees: JSON.stringify({
      term: "Term 1, 2026",
      amount: "GHS 950",
      status: "Outstanding",
    }),
    comments: JSON.stringify([
      {
        from: "Mr. Mensah",
        text: "Abena is settling in well and making new friends.",
      },
    ]),
  });

  const seedChat = db.prepare(
    "INSERT INTO chat_messages (ward_name, sender, sender_name, text) VALUES (?, ?, ?, ?)",
  );
  seedChat.run(
    "Kojo Mensah",
    "teacher",
    "Ms. Boateng",
    "Good afternoon! Kojo did great in today's reading circle.",
  );
  seedChat.run(
    "Abena Owusu",
    "teacher",
    "Mr. Mensah",
    "Hi! Just a note that Abena needs an extra water bottle for outdoor play.",
  );

  const insertClass = db.prepare(
    "INSERT INTO classes (age, title, text) VALUES (?, ?, ?)",
  );
  insertClass.run(
    "Ages 2–3",
    "Creche",
    "Gentle routines, sensory play, and lots of one-on-one attention for our youngest learners.",
  );
  insertClass.run(
    "Ages 3–4",
    "Nursery 1 & 2",
    "Early language, numbers, and social skills built through songs, stories, and guided play.",
  );
  insertClass.run(
    "Ages 4–5",
    "Kindergarten 1",
    "Letters, early phonics, and simple problem-solving, introduced through hands-on projects.",
  );
  insertClass.run(
    "Ages 5–6",
    "Kindergarten 2",
    "Reading, writing, and basic maths, preparing every child for a confident start to primary school.",
  );

  const insertTeacher = db.prepare(
    "INSERT INTO teachers (initials, name, role, bio) VALUES (?, ?, ?, ?)",
  );
  insertTeacher.run(
    "AB",
    "Abena Boateng",
    "Lead Teacher, Kindergarten 2",
    "8 years in early-years education, specializing in phonics and reading readiness.",
  );
  insertTeacher.run(
    "KM",
    "Kwame Mensah",
    "Lead Teacher, Kindergarten 1",
    "Trained in the GES kindergarten framework, with a focus on hands-on maths.",
  );
  insertTeacher.run(
    "EA",
    "Efua Asante",
    "Lead Teacher, Nursery",
    "Believes every child learns best through song, story, and structured play.",
  );
  insertTeacher.run(
    "YO",
    "Yaa Owusu",
    "Creche Coordinator",
    "Gentle, routine-based care for our youngest learners, ages 2 to 3.",
  );

  const insertPhoto = db.prepare(
    "INSERT INTO gallery (emoji, caption) VALUES (?, ?)",
  );
  const photos = [
    ["📚", "Story time in Kindergarten 1"],
    ["🎨", "Art class, Nursery 2"],
    ["🧩", "Building blocks, Creche"],
    ["🌱", "Garden classroom"],
    ["🎵", "Music session"],
    ["⚽", "Outdoor play"],
    ["🔬", "Discovery corner"],
    ["🍎", "Snack time"],
  ];
  photos.forEach(([emoji, caption]) => insertPhoto.run(emoji, caption));

  const insertPillar = db.prepare(
    "INSERT INTO pillars (icon, title, text) VALUES (?, ?, ?)",
  );
  insertPillar.run(
    "🏆",
    "Mission",
    "To give every child in Accra a joyful, play-based start to their education — one where curiosity is nurtured, not rushed.",
  );
  insertPillar.run(
    "👁️",
    "Vision",
    "A generation of confident learners who see school as a place of discovery, not just instruction.",
  );
  insertPillar.run(
    "📜",
    "History",
    "Founded in 2014 in a single rented classroom, Eduvo has grown into a full early-years campus serving 320 families.",
  );

  const insertTestimonial = db.prepare(
    "INSERT INTO testimonials (name, quote) VALUES (?, ?)",
  );
  insertTestimonial.run(
    "Ama O., parent since 2023",
    "My daughter used to be shy about speaking up. Six months at Eduvo and she narrates her whole day to us at dinner.",
  );
  insertTestimonial.run(
    "Kwabena T., parent since 2022",
    "The teachers actually know each child individually. That kind of attention is hard to find.",
  );
  insertTestimonial.run(
    "Efua B., parent since 2024",
    "We noticed smaller classes and calmer mornings right away. Best decision we made.",
  );

  console.log("Seeding complete.");
} else {
  console.log("Database already has data — skipping seed.");
}
