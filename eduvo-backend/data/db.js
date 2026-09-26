const wards = {
  "Kojo Mensah": {
    pin: "4821",
    class: "Kindergarten 2",
    assignments: [
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
    ],
    grades: [
      { subject: "Literacy", score: "B+" },
      { subject: "Numeracy", score: "A" },
      { subject: "Creative Arts", score: "A-" },
    ],
    fees: { term: "Term 1, 2026", amount: "GHS 1,200", status: "Paid" },
    comments: [
      {
        from: "Ms. Boateng",
        text: "Kojo has been very engaged in group reading time this week.",
      },
    ],
    chat: [
      {
        sender: "teacher",
        name: "Ms. Boateng",
        text: "Good afternoon! Kojo did great in today's reading circle.",
      },
    ],
  },
  "Abena Owusu": {
    pin: "7734",
    class: "Nursery 1",
    assignments: [
      { title: "Color matching activity", due: "Sept 21", status: "Pending" },
    ],
    grades: [
      { subject: "Literacy", score: "A-" },
      { subject: "Numeracy", score: "B+" },
    ],
    fees: { term: "Term 1, 2026", amount: "GHS 950", status: "Outstanding" },
    comments: [
      {
        from: "Mr. Mensah",
        text: "Abena is settling in well and making new friends.",
      },
    ],
    chat: [
      {
        sender: "teacher",
        name: "Mr. Mensah",
        text: "Hi! Just a note that Abena needs an extra water bottle for outdoor play.",
      },
    ],
  },
};

const classes = [
  {
    age: "Ages 2–3",
    title: "Creche",
    text: "Gentle routines, sensory play, and lots of one-on-one attention for our youngest learners.",
  },
  {
    age: "Ages 3–4",
    title: "Nursery 1 & 2",
    text: "Early language, numbers, and social skills built through songs, stories, and guided play.",
  },
  {
    age: "Ages 4–5",
    title: "Kindergarten 1",
    text: "Letters, early phonics, and simple problem-solving, introduced through hands-on projects.",
  },
  {
    age: "Ages 5–6",
    title: "Kindergarten 2",
    text: "Reading, writing, and basic maths, preparing every child for a confident start to primary school.",
  },
];

const teachers = [
  {
    initials: "AB",
    name: "Abena Boateng",
    role: "Lead Teacher, Kindergarten 2",
    bio: "8 years in early-years education, specializing in phonics and reading readiness.",
  },
  {
    initials: "KM",
    name: "Kwame Mensah",
    role: "Lead Teacher, Kindergarten 1",
    bio: "Trained in the GES kindergarten framework, with a focus on hands-on maths.",
  },
  {
    initials: "EA",
    name: "Efua Asante",
    role: "Lead Teacher, Nursery",
    bio: "Believes every child learns best through song, story, and structured play.",
  },
  {
    initials: "YO",
    name: "Yaa Owusu",
    role: "Creche Coordinator",
    bio: "Gentle, routine-based care for our youngest learners, ages 2 to 3.",
  },
];

const gallery = [
  { emoji: "📚", caption: "Story time in Kindergarten 1" },
  { emoji: "🎨", caption: "Art class, Nursery 2" },
  { emoji: "🧩", caption: "Building blocks, Creche" },
  { emoji: "🌱", caption: "Garden classroom" },
  { emoji: "🎵", caption: "Music session" },
  { emoji: "⚽", caption: "Outdoor play" },
  { emoji: "🔬", caption: "Discovery corner" },
  { emoji: "🍎", caption: "Snack time" },
];

const about = {
  pillars: [
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
  ],
  testimonials: [
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
  ],
};

module.exports = { wards, classes, teachers, gallery, about };
