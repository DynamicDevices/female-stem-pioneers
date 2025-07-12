// Women Pioneers in STEM - Data File
// This file contains profiles of women who have made significant contributions to STEM fields

const pioneers = [
  {
    name: "Ada Lovelace",
    field: "Mathematics, Computing",
    country: "United Kingdom",
    era: "19th Century",
    achievements: [
      "First computer programmer",
      "Worked on Charles Babbage's Analytical Engine",
      "Wrote the first algorithm intended for processing on a computer"
    ],
    bio: "Ada Lovelace is often regarded as the first computer programmer for her work on Charles Babbage's early mechanical general-purpose computer, the Analytical Engine. Her notes on the engine include what is recognized as the first algorithm intended to be carried out by a machine.",
    image: "images/ada_lovelace.jpg",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Ada_Lovelace" },
      { label: "Biography", url: "https://www.biography.com/scientist/ada-lovelace" }
    ]
  },
  {
    name: "Marie Curie",
    field: "Physics, Chemistry",
    country: "Poland/France",
    era: "19th-20th Century",
    achievements: [
      "First woman to win a Nobel Prize",
      "First person to win Nobel Prizes in two different scientific fields",
      "Discovered radium and polonium",
      "Pioneered research on radioactivity"
    ],
    bio: "Marie Curie was a physicist and chemist who conducted pioneering research on radioactivity. She was the first woman to win a Nobel Prize, the first person and only woman to win the Nobel Prize twice, and the only person to win the Nobel Prize in two different scientific fields.",
    image: "images/marie_curie.jpg",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Marie_Curie" },
      { label: "Nobel Prize", url: "https://www.nobelprize.org/prizes/physics/1903/marie-curie/facts/" }
    ]
  },
  {
    name: "Katherine Johnson",
    field: "Mathematics, Aerospace",
    country: "United States",
    era: "20th Century",
    achievements: [
      "Calculated trajectories for NASA space missions",
      "Worked on the Apollo 11 mission to the Moon",
      "Helped calculate the flight path for Alan Shepard's first space flight",
      "Received Presidential Medal of Freedom in 2015"
    ],
    bio: "Katherine Johnson was a mathematician whose calculations of orbital mechanics were critical to the success of the first and subsequent U.S. crewed spaceflights. Her work helped NASA astronauts go to the Moon and return safely to Earth.",
    image: "images/katherine_johnson.jpg",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Katherine_Johnson" },
      { label: "NASA", url: "https://www.nasa.gov/content/katherine-johnson-biography" }
    ]
  },
  {
    name: "Grace Hopper",
    field: "Computer Science, Mathematics",
    country: "United States",
    era: "20th Century",
    achievements: [
      "Developed the first compiler for a computer programming language",
      "Popularized the term 'debugging' for fixing computer glitches",
      "One of the first programmers of the Harvard Mark I computer",
      "Rear Admiral in the U.S. Navy"
    ],
    bio: "Grace Hopper was a computer scientist and United States Navy rear admiral. She was one of the first programmers of the Harvard Mark I computer and developed the first compiler for a computer programming language.",
    image: "images/grace_hopper.jpg",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Grace_Hopper" },
      { label: "Biography", url: "https://www.biography.com/scientist/grace-hopper" }
    ]
  },
  {
    name: "Rosalind Franklin",
    field: "Chemistry, Biology",
    country: "United Kingdom",
    era: "20th Century",
    achievements: [
      "Pioneered the use of X-ray diffraction to study DNA",
      "Produced the famous 'Photo 51' of DNA structure",
      "Made significant contributions to understanding virus structures",
      "Worked on the structure of coal and graphite"
    ],
    bio: "Rosalind Franklin was a chemist and X-ray crystallographer whose work was central to the understanding of the molecular structures of DNA, RNA, viruses, coal, and graphite. Her data was used to formulate the Watson-Crick model of DNA structure.",
    image: "images/rosalind_franklin.jpg",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Rosalind_Franklin" },
      { label: "Biography", url: "https://www.biography.com/scientist/rosalind-franklin" }
    ]
  },
  {
    name: "Chien-Shiung Wu",
    field: "Physics",
    country: "China/United States",
    era: "20th Century",
    achievements: [
      "Known as the 'First Lady of Physics'",
      "Conducted the Wu experiment that disproved the law of conservation of parity",
      "Worked on the Manhattan Project",
      "First woman to serve as president of the American Physical Society"
    ],
    bio: "Chien-Shiung Wu was a Chinese-American experimental physicist who made significant contributions in the field of nuclear physics. She worked on the Manhattan Project and is best known for conducting the Wu experiment, which contradicted the law of conservation of parity.",
    image: "images/chien_shiung_wu.jpg",
    links: [
      { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Chien-Shiung_Wu" },
      { label: "Biography", url: "https://www.biography.com/scientist/chien-shiung-wu" }
    ]
  }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = pioneers;
} 