// Women Pioneers in STEM - Data File
// This file contains profiles of women who have made significant contributions to STEM fields

const pioneers = [
  {
    name: "Ada Lovelace",
    photo: "images/ada_lovelace.jpg",
    lifespan: "1815–1852",
    country: "United Kingdom",
    fields: ["Mathematics", "Computing"],
    roles: ["Mathematician", "Writer"],
    quote: "That brain of mine is something more than merely mortal; as time will show.",
    summary: "Often regarded as the first computer programmer for her work on Babbage's Analytical Engine.",
    achievements: [
      "First computer programmer",
      "Worked on Charles Babbage's Analytical Engine",
      "Wrote the first algorithm intended for processing on a computer"
    ],
    awards: [],
    publications: [
      { title: "Notes on the Analytical Engine", url: "https://www.fourmilab.ch/babbage/sketch.html" }
    ],
    education: [
      { degree: "Private education", field: "Mathematics", institution: "Home/Private Tutors" }
    ],
    timeline: [
      { year: 1843, event: "Published notes on the Analytical Engine" }
    ],
    barriers: [
      "Faced societal expectations limiting women's roles in science and mathematics"
    ],
    impact: "Pioneered the concept of programming and inspired generations of women in computing.",
    media: [
      { type: "article", title: "Ada Lovelace: The First Computer Programmer", url: "https://www.britannica.com/biography/Ada-Lovelace" }
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Ada_Lovelace" },
      { title: "Biography.com", url: "https://www.biography.com/scientist/ada-lovelace" }
    ],
    mentorship: "Advocated for the potential of women in science and mathematics.",
    fun_fact: "Ada was the daughter of the poet Lord Byron."
  },
  {
    name: "Marie Curie",
    photo: "images/marie_curie.jpg",
    lifespan: "1867–1934",
    country: "Poland/France",
    fields: ["Physics", "Chemistry"],
    roles: ["Physicist", "Chemist", "Professor"],
    quote: "One never notices what has been done; one can only see what remains to be done.",
    summary: "First woman to win a Nobel Prize and the only person to win in two different sciences.",
    achievements: [
      "First woman to win a Nobel Prize",
      "First person to win Nobel Prizes in two different scientific fields",
      "Discovered radium and polonium",
      "Pioneered research on radioactivity"
    ],
    awards: [
      "Nobel Prize in Physics (1903)",
      "Nobel Prize in Chemistry (1911)"
    ],
    publications: [],
    education: [
      { degree: "Doctorate", field: "Physics", institution: "University of Paris" }
    ],
    timeline: [
      { year: 1898, event: "Discovered polonium and radium" },
      { year: 1903, event: "Won Nobel Prize in Physics" },
      { year: 1911, event: "Won Nobel Prize in Chemistry" }
    ],
    barriers: [
      "Faced gender discrimination in academia and research"
    ],
    impact: "Transformed the understanding of radioactivity and opened doors for women in science.",
    media: [
      { type: "movie", title: "Radioactive", url: "https://www.imdb.com/title/tt6017756/" }
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Marie_Curie" },
      { title: "Nobel Prize", url: "https://www.nobelprize.org/prizes/physics/1903/marie-curie/facts/" }
    ],
    mentorship: "Supported the scientific careers of her daughter Irène and other women.",
    fun_fact: "Her notebooks are still radioactive."
  },
  {
    name: "Katherine Johnson",
    photo: "images/katherine_johnson.jpg",
    lifespan: "1918–2020",
    country: "United States",
    fields: ["Mathematics", "Aerospace"],
    roles: ["Mathematician", "NASA Scientist"],
    quote: "Girls are capable of doing everything men are capable of doing.",
    summary: "Trailblazing NASA mathematician whose calculations enabled the first U.S. spaceflights.",
    achievements: [
      "Calculated trajectories for NASA space missions",
      "Worked on the Apollo 11 mission to the Moon",
      "Helped calculate the flight path for Alan Shepard's first space flight",
      "Received Presidential Medal of Freedom in 2015"
    ],
    awards: [
      "Presidential Medal of Freedom (2015)",
      "Congressional Gold Medal (2019)"
    ],
    publications: [],
    education: [
      { degree: "B.S.", field: "Mathematics", institution: "West Virginia State College" }
    ],
    timeline: [
      { year: 1953, event: "Joined NASA (then NACA)" },
      { year: 1962, event: "Calculated John Glenn's orbital trajectory" }
    ],
    barriers: [
      "Faced racial and gender discrimination in the workplace"
    ],
    impact: "Inspired generations of women and minorities to pursue STEM.",
    media: [
      { type: "movie", title: "Hidden Figures", url: "https://www.imdb.com/title/tt4846340/" }
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Katherine_Johnson" },
      { title: "NASA Biography", url: "https://www.nasa.gov/content/katherine-johnson-biography" }
    ],
    mentorship: "Advocated for women in STEM throughout her career.",
    fun_fact: "Graduated high school at 14."
  },
  {
    name: "Grace Hopper",
    photo: "images/grace_hopper.jpg",
    lifespan: "1906–1992",
    country: "United States",
    fields: ["Computer Science", "Mathematics"],
    roles: ["Computer Scientist", "Rear Admiral, U.S. Navy"],
    quote: "The most dangerous phrase in the language is, 'We've always done it this way.'",
    summary: "Developed the first compiler and popularized the term 'debugging' in computing.",
    achievements: [
      "Developed the first compiler for a computer programming language",
      "Popularized the term 'debugging' for fixing computer glitches",
      "One of the first programmers of the Harvard Mark I computer",
      "Rear Admiral in the U.S. Navy"
    ],
    awards: [
      "Presidential Medal of Freedom (posthumous, 2016)"
    ],
    publications: [],
    education: [
      { degree: "Ph.D.", field: "Mathematics", institution: "Yale University" }
    ],
    timeline: [
      { year: 1944, event: "Worked on Harvard Mark I computer" },
      { year: 1952, event: "Developed first compiler (A-0 system)" }
    ],
    barriers: [
      "Faced skepticism about the feasibility of high-level programming languages"
    ],
    impact: "Pioneered programming languages and inspired women in technology and the military.",
    media: [
      { type: "documentary", title: "The Queen of Code", url: "https://vimeo.com/146490153" }
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Grace_Hopper" },
      { title: "Biography.com", url: "https://www.biography.com/scientist/grace-hopper" }
    ],
    mentorship: "Mentored young programmers and advocated for computer science education.",
    fun_fact: "Had a clock in her office that ran backwards."
  },
  {
    name: "Rosalind Franklin",
    photo: "images/rosalind_franklin.jpg",
    lifespan: "1920–1958",
    country: "United Kingdom",
    fields: ["Chemistry", "Biology"],
    roles: ["Chemist", "X-ray Crystallographer"],
    quote: "Science and everyday life cannot and should not be separated.",
    summary: "Her X-ray diffraction work was key to understanding the structure of DNA.",
    achievements: [
      "Pioneered the use of X-ray diffraction to study DNA",
      "Produced the famous 'Photo 51' of DNA structure",
      "Made significant contributions to understanding virus structures",
      "Worked on the structure of coal and graphite"
    ],
    awards: [],
    publications: [],
    education: [
      { degree: "Ph.D.", field: "Physical Chemistry", institution: "University of Cambridge" }
    ],
    timeline: [
      { year: 1952, event: "Captured Photo 51 of DNA" }
    ],
    barriers: [
      "Faced gender bias and lack of recognition during her lifetime"
    ],
    impact: "Her data enabled the discovery of the DNA double helix structure.",
    media: [
      { type: "book", title: "Rosalind Franklin: The Dark Lady of DNA", url: "https://www.goodreads.com/book/show/124047.Rosalind_Franklin" }
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Rosalind_Franklin" },
      { title: "Biography.com", url: "https://www.biography.com/scientist/rosalind-franklin" }
    ],
    mentorship: "Supported and collaborated with other scientists, especially women.",
    fun_fact: "Enjoyed hiking and traveling."
  },
  {
    name: "Chien-Shiung Wu",
    photo: "images/chien_shiung_wu.jpg",
    lifespan: "1912–1997",
    country: "China/United States",
    fields: ["Physics"],
    roles: ["Experimental Physicist", "Professor"],
    quote: "There is only one thing worse than coming home from the lab to a sink full of dirty dishes, and that is not going to the lab at all.",
    summary: "Conducted the Wu experiment, disproving the law of conservation of parity in physics.",
    achievements: [
      "Known as the 'First Lady of Physics'",
      "Conducted the Wu experiment that disproved the law of conservation of parity",
      "Worked on the Manhattan Project",
      "First woman to serve as president of the American Physical Society"
    ],
    awards: [
      "Wolf Prize in Physics (1978)",
      "National Medal of Science (1975)"
    ],
    publications: [],
    education: [
      { degree: "Ph.D.", field: "Physics", institution: "University of California, Berkeley" }
    ],
    timeline: [
      { year: 1956, event: "Conducted the Wu experiment" }
    ],
    barriers: [
      "Faced gender and racial discrimination as an immigrant woman in science"
    ],
    impact: "Her work changed the understanding of fundamental laws in physics.",
    media: [
      { type: "biography", title: "Queen of Physics: How Wu Chien Shiung Helped Unlock the Secrets of the Atom", url: "https://www.goodreads.com/book/show/40538613-queen-of-physics" }
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Chien-Shiung_Wu" },
      { title: "Biography.com", url: "https://www.biography.com/scientist/chien-shiung-wu" }
    ],
    mentorship: "Mentored many students and advocated for women in science.",
    fun_fact: "Nicknamed the 'Chinese Madame Curie'."
  }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = pioneers;
}

// Make available globally for browser
if (typeof window !== 'undefined') {
  window.pioneers = pioneers;
} 