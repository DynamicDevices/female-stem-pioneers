// Women Pioneers in STEM - Data File
// This file contains profiles of women who have made significant contributions to STEM fields

const pioneers = [
  {
    name: "Ada Lovelace",
    photo: "./images/ada-lovelace.jpg",
    birthDate: "1815",
    deathDate: "1852",
    country: "United Kingdom",
    fields: ["Mathematics", "Computing"],
    roles: ["Mathematician", "Writer"],
    quote:
      "That brain of mine is something more than merely mortal; as time will show.",
    summary:
      "Often regarded as the first computer programmer for her work on Babbage's Analytical Engine.",
    shortDescription:
      "Ada Lovelace is often called the world's first computer programmer. She worked with Charles Babbage on his Analytical Engine and wrote the first algorithm meant for a machine. Ada believed that computers could do more than just math—they could create music and art, too! Her creative ideas inspire people to combine technology and imagination.",
    detailed_description: {
      early_life:
        "Born in 1815 to the famous poet Lord Byron, Ada was encouraged by her mother to study mathematics and science. She showed exceptional talent from an early age and was tutored by leading scientists of the day.",
      stem_journey:
        "At age 17, Ada met Charles Babbage and became fascinated by his mechanical computer, the Analytical Engine. She translated an article about it and added her own notes, including the first computer program ever written.",
      challenges:
        "As a woman in 19th-century England, Ada faced expectations to focus on domestic roles rather than science. She also struggled with health issues throughout her life.",
      achievements:
        "Ada wrote the first computer program - an algorithm for calculating numbers. She also predicted that computers could create music and graphics, envisioning their creative potential long before others.",
      legacy:
        "Ada is considered the first computer programmer, and the programming language Ada is named in her honor. She inspires millions of women in computer science today.",
    },
    achievements: [
      "First computer programmer",
      "Worked on Charles Babbage's Analytical Engine",
      "Wrote the first algorithm intended for processing on a computer",
    ],
    awards: [],
    publications: [
      {
        title: "Notes on the Analytical Engine",
        url: "https://www.fourmilab.ch/babbage/sketch.html",
      },
    ],
    education: [
      {
        degree: "Private education",
        field: "Mathematics",
        institution: "Home/Private Tutors",
      },
    ],
    timeline: [
      { year: 1843, event: "Published notes on the Analytical Engine" },
    ],
    barriers: [
      "Faced societal expectations limiting women's roles in science and mathematics",
    ],
    impact:
      "Pioneered the concept of programming and inspired generations of women in computing.",
    media: [
      {
        type: "article",
        title: "Ada Lovelace: The First Computer Programmer",
        url: "https://www.britannica.com/biography/Ada-Lovelace",
      },
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Ada_Lovelace" },
      {
        title: "Biography.com",
        url: "https://www.biography.com/scientist/ada-lovelace",
      },
    ],
    mentorship:
      "Advocated for the potential of women in science and mathematics.",
    fun_fact: "Ada was the daughter of the poet Lord Byron.",

    // High Priority - New Metadata
    career_path: {
      first_job: "Mathematical assistant to Charles Babbage",
      career_highlights: [
        "Collaborated with leading scientists",
        "Published influential mathematical papers",
      ],
      advice_for_students:
        "Follow your curiosity and don't let anyone tell you what you can't do. Mathematics and computing are for everyone.",
    },
    student_resources: {
      books_for_students: [
        "Ada's Algorithm: How Lord Byron's Daughter Launched the Digital Age",
        "The Innovators by Walter Isaacson",
      ],
      websites: ["code.org", "girlswhocode.com", "ada-lovelace-day.com"],
      programs: [
        "Computer Science summer camps",
        "Women in STEM mentorship programs",
      ],
      advice:
        "Start with what excites you most - whether it's math, science, or building things. The connections will follow.",
    },
    challenges: {
      academic: ["Limited formal education opportunities for women"],
      professional: [
        "Societal expectations that women shouldn't pursue science",
      ],
      personal: ["Health issues throughout her life"],
      how_overcame:
        "Found supportive mentors like Charles Babbage and focused on her mathematical talents",
    },
    education_details: {
      high_school: "Private tutoring in mathematics and science",
      college_major: "Self-taught in advanced mathematics",
      key_courses: ["Advanced Mathematics", "Scientific Writing", "Logic"],
      study_tips: "Connect abstract concepts to real-world applications",
    },
    modern_impact: {
      current_applications:
        "Her work forms the foundation of modern computer programming",
      companies_using_her_work: [
        "All major tech companies",
        "Universities worldwide",
      ],
      future_implications:
        "AI and machine learning build on her algorithmic concepts",
    },
    personal_info: {
      early_interests: ["Mathematics", "Poetry", "Science", "Logic"],
      family_background: "Daughter of famous poet Lord Byron",
      hobbies: [
        "Writing poetry",
        "Studying mathematics",
        "Scientific correspondence",
      ],
      personality_traits: ["Analytical", "Creative", "Determined", "Visionary"],
    },
    cultural_background: {
      heritage: "British aristocracy and intellectual elite",
      cultural_influences: [
        "Victorian era scientific circles",
        "Romantic poetry movement",
        "British mathematical tradition",
      ],
      cultural_challenges: [
        "Victorian gender roles",
        "Aristocratic expectations vs. scientific pursuits",
      ],
      cultural_contributions:
        "Bridged romantic poetry and mathematical logic, showing how creativity and logic can coexist",
    },
  },
  {
    name: "Marie Curie",
    photo: "./images/marie-curie.jpg",
    birthDate: "1867",
    deathDate: "1934",
    country: "Poland/France",
    fields: ["Physics", "Chemistry"],
    roles: ["Physicist", "Chemist", "Professor"],
    quote:
      "One never notices what has been done; one can only see what remains to be done.",
    summary:
      "First woman to win a Nobel Prize and the only person to win in two different sciences.",
    shortDescription:
      "Marie Curie was a brilliant scientist who discovered the elements polonium and radium. She was the first woman to win a Nobel Prize and the only person to win in two different sciences—Physics and Chemistry. Her research led to life-saving medical advances like X-rays and cancer treatments. Marie's determination and curiosity opened doors for women in science everywhere.",
    detailed_description: {
      early_life:
        "Born in Poland in 1867, Marie showed exceptional talent in school despite restrictions on Polish students. Her parents were teachers who emphasized education, and she worked as a governess to save money for university.",
      stem_journey:
        "Marie moved to Paris in 1891 to study at the Sorbonne, often going without food to afford her studies. She earned degrees in physics and mathematics, then began research with Pierre Curie, whom she married.",
      challenges:
        "Marie faced discrimination as a woman in science and was denied admission to the University of Warsaw because she was female. She worked in poverty and faced resistance from male colleagues throughout her career.",
      achievements:
        "Marie discovered two new elements - polonium and radium - and coined the term 'radioactivity.' She won Nobel Prizes in both Physics (1903) and Chemistry (1911), the first person to win in two different sciences.",
      legacy:
        "Marie opened doors for women in science worldwide. Her research led to X-ray technology and cancer treatments. She remains a symbol of scientific excellence and determination.",
    },
    achievements: [
      "First woman to win a Nobel Prize",
      "First person to win Nobel Prizes in two different scientific fields",
      "Discovered radium and polonium",
      "Pioneered research on radioactivity",
    ],
    awards: [
      "Nobel Prize in Physics (1903)",
      "Nobel Prize in Chemistry (1911)",
    ],
    publications: [],
    education: [
      {
        degree: "Doctorate",
        field: "Physics",
        institution: "University of Paris",
      },
    ],
    timeline: [
      { year: 1898, event: "Discovered polonium and radium" },
      { year: 1903, event: "Won Nobel Prize in Physics" },
      { year: 1911, event: "Won Nobel Prize in Chemistry" },
    ],
    barriers: ["Faced gender discrimination in academia and research"],
    impact:
      "Transformed the understanding of radioactivity and opened doors for women in science.",
    media: [
      {
        type: "movie",
        title: "Radioactive",
        url: "https://www.imdb.com/title/tt6017756/",
      },
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Marie_Curie" },
      {
        title: "Nobel Prize",
        url: "https://www.nobelprize.org/prizes/physics/1903/marie-curie/facts/",
      },
    ],
    mentorship:
      "Supported the scientific careers of her daughter Irène and other women.",
    fun_fact: "Her notebooks are still radioactive.",

    // High Priority - New Metadata
    career_path: {
      first_job: "Research assistant at the University of Paris",
      career_highlights: [
        "Led groundbreaking radioactivity research",
        "Became the first female professor at the University of Paris",
      ],
      advice_for_students:
        "Persistence is key in science. Don't be afraid to work hard and question everything. Your gender doesn't determine your abilities.",
    },
    student_resources: {
      books_for_students: [
        "Radioactive: Marie & Pierre Curie",
        "Marie Curie: A Life by Susan Quinn",
      ],
      websites: ["nobelprize.org", "sciencegirls.org", "curie-museum.org"],
      programs: ["Physics summer programs", "Women in Science initiatives"],
      advice:
        "Find what fascinates you and pursue it with passion. Science needs diverse perspectives.",
    },
    challenges: {
      academic: ["Limited access to higher education for women in Poland"],
      professional: [
        "Gender discrimination in academia",
        "Lack of funding for women researchers",
      ],
      personal: [
        "Working while raising children",
        "Health issues from radiation exposure",
      ],
      how_overcame:
        "Focused on her research despite obstacles and built a supportive scientific community",
    },
    education_details: {
      high_school: "Excelled in mathematics and science",
      college_major: "Physics and Mathematics",
      graduate_school: "Ph.D. in Physics from University of Paris",
      key_courses: ["Physics", "Chemistry", "Mathematics", "Research Methods"],
      study_tips: "Combine theoretical knowledge with hands-on experimentation",
    },
    modern_impact: {
      current_applications:
        "Her discoveries led to medical treatments and nuclear technology",
      companies_using_her_work: [
        "Medical imaging companies",
        "Nuclear power plants",
        "Research institutions",
      ],
      future_implications:
        "Radioactivity research continues in cancer treatment and clean energy",
    },
    personal_info: {
      early_interests: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "Scientific research",
      ],
      family_background: "First in family to pursue higher education",
      hobbies: ["Reading scientific literature", "Laboratory work", "Teaching"],
      personality_traits: ["Dedicated", "Curious", "Persistent", "Innovative"],
    },
    cultural_background: {
      heritage: "Polish Jewish and French intellectual traditions",
      cultural_influences: [
        "Polish resistance to Russian occupation",
        "French scientific community",
        "Jewish intellectual tradition",
      ],
      cultural_challenges: [
        "Anti-Semitism in Europe",
        "Polish nationalism vs. French assimilation",
        "Gender barriers in both cultures",
      ],
      cultural_contributions:
        "Brought Polish determination and French scientific rigor to her work, transcending national boundaries",
    },
  },
  {
    name: "Katherine Johnson",
    photo: "./images/placeholder.jpg",
    birthDate: "1918",
    deathDate: "2020",
    country: "United States",
    fields: ["Mathematics", "Computing"],
    roles: ["Mathematician", "Computer Scientist"],
    quote: "I counted everything. I counted the steps to the road, the steps up to church, the number of dishes and silverware I washed... anything that could be counted, I did.",
    summary: "NASA mathematician whose calculations were critical to the success of early space missions, featured in 'Hidden Figures'.",
    achievements: [
      "Calculated trajectories for Apollo 11 moon landing",
      "First African American woman to work as a NASA scientist",
      "Received Presidential Medal of Freedom"
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Katherine_Johnson" }
    ]
  },
  {
    name: "Grace Hopper",
    photo: "./images/placeholder.jpg",
    birthDate: "1906",
    deathDate: "1992",
    country: "United States",
    fields: ["Computer Science", "Mathematics"],
    roles: ["Computer Scientist", "Navy Admiral"],
    quote: "The most damaging phrase in the language is 'We've always done it this way!'",
    summary: "Pioneering computer scientist who developed the first compiler and popularized the term 'debugging'.",
    achievements: [
      "Developed first computer compiler",
      "Invented COBOL programming language",
      "First woman to receive National Medal of Technology"
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Grace_Hopper" }
    ]
  },
  {
    name: "Rosalind Franklin",
    photo: "./images/placeholder.jpg",
    birthDate: "1920",
    deathDate: "1958",
    country: "United Kingdom",
    fields: ["Chemistry", "Biology"],
    roles: ["Chemist", "Crystallographer"],
    quote: "Science and everyday life cannot and should not be separated.",
    summary: "Chemist whose X-ray diffraction images of DNA were crucial to understanding its double helix structure.",
    achievements: [
      "Produced X-ray diffraction images of DNA",
      "Discovered molecular structure of viruses",
      "Pioneered crystallography techniques"
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Rosalind_Franklin" }
    ]
  },
  {
    name: "Hedy Lamarr",
    photo: "./images/placeholder.jpg",
    birthDate: "1914",
    deathDate: "2000",
    country: "Austria/United States",
    fields: ["Engineering", "Invention"],
    roles: ["Inventor", "Actress"],
    quote: "The brains of people are more interesting than the looks I think.",
    summary: "Hollywood actress and inventor who co-developed frequency-hopping spread spectrum technology used in modern wireless communications.",
    achievements: [
      "Co-invented frequency-hopping spread spectrum",
      "Technology used in Bluetooth and WiFi",
      "Inducted into National Inventors Hall of Fame"
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Hedy_Lamarr" }
    ]
  },
  {
    name: "Shirley Ann Jackson",
    photo: "./images/placeholder.jpg",
    birthDate: "1946",
    country: "United States",
    fields: ["Physics", "Engineering"],
    roles: ["Physicist", "University President"],
    quote: "The best way to predict the future is to invent it.",
    summary: "First African American woman to earn a doctorate from MIT and first woman to lead a top-ranked research university.",
    achievements: [
      "First African American woman with MIT physics PhD",
      "President of Rensselaer Polytechnic Institute",
      "Chair of Nuclear Regulatory Commission"
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Shirley_Ann_Jackson" }
    ]
  },
  {
    name: "Rachel Carson",
    photo: "./images/placeholder.jpg",
    birthDate: "1907",
    deathDate: "1964",
    country: "United States",
    fields: ["Biology", "Environmental Science"],
    roles: ["Marine Biologist", "Environmentalist"],
    quote: "The more clearly we can focus our attention on the wonders and realities of the universe about us, the less taste we shall have for destruction.",
    summary: "Marine biologist and conservationist whose book 'Silent Spring' launched the global environmental movement.",
    achievements: [
      "Wrote 'Silent Spring' launching environmental movement",
      "Pioneered marine biology research",
      "Received Presidential Medal of Freedom"
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Rachel_Carson" }
    ]
  },
  {
    name: "Ada Lovelace",
    photo: "./images/placeholder.jpg",
    birthDate: "1815",
    deathDate: "1852",
    country: "United Kingdom",
    fields: ["Mathematics", "Computing"],
    roles: ["Mathematician", "Computer Pioneer"],
    quote: "The Analytical Engine weaves algebraic patterns just as the Jacquard loom weaves flowers and leaves.",
    summary: "First computer programmer who wrote the first algorithm intended to be processed by a machine.",
    achievements: [
      "First computer programmer",
      "Wrote first algorithm for mechanical computer",
      "Pioneered computer science concepts"
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Ada_Lovelace" }
    ]
  },
  {
    name: "Marie Curie",
    photo: "./images/placeholder.jpg",
    birthDate: "1867",
    deathDate: "1934",
    country: "Poland/France",
    fields: ["Physics", "Chemistry"],
    roles: ["Physicist", "Chemist"],
    quote: "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
    summary: "First woman to win a Nobel Prize and the only person to win Nobel Prizes in two different scientific fields.",
    achievements: [
      "First woman to win Nobel Prize",
      "Only person with Nobel Prizes in two sciences",
      "Discovered radium and polonium"
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Marie_Curie" }
    ]
  },
  {
    name: "Chien-Shiung Wu",
    photo: "./images/placeholder.jpg",
    birthDate: "1912",
    deathDate: "1997",
    country: "China/United States",
    fields: ["Physics"],
    roles: ["Physicist", "Professor"],
    quote: "There is only one thing worse than coming home from the lab to a sink full of dirty dishes, and that is not going to the lab at all.",
    summary: "Experimental physicist known as the 'First Lady of Physics' for her work on the Manhattan Project and parity violation.",
    achievements: [
      "Conducted the Wu experiment proving parity violation",
      "Worked on the Manhattan Project",
      "Called the 'First Lady of Physics'"
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Chien-Shiung_Wu" }
    ]
  },
  {
    name: "Caroline Keep",
    photo: "./images/placeholder.jpg",
    birthDate: "1980",
    country: "United Kingdom",
    fields: ["Education", "Technology"],
    roles: ["Educator", "STEM Advocate"],
    quote: "Education is the most powerful tool for changing the world.",
    summary: "Award-winning educator and advocate for makerspaces and STEM education in schools.",
    achievements: [
      "Winner of the TES New Teacher of the Year Award",
      "Founded makerspaces in UK schools",
      "Promotes STEM and digital skills for girls"
    ],
    references: [
      { title: "TES Awards", url: "https://www.tes.com/awards" }
    ]
  },
  {
    name: "Princy Johnson",
          photo: "./images/princy-johnson.jpg",
    birthDate: "1990",
    country: "India",
    fields: ["Engineering", "Robotics"],
    roles: ["Engineer", "Robotics Researcher"],
    quote:
      "Innovation is seeing what everybody has seen and thinking what nobody has thought.",
    summary:
      "Robotics engineer and researcher advancing automation and AI in India.",
    achievements: [
      "Developed low-cost robotics solutions for education",
      "Published research on AI and automation",
      "Mentors young women in engineering",
    ],
    references: [
      { title: "LinkedIn", url: "https://www.linkedin.com/in/princy-johnson" }
    ]
  },
  {
    name: "Maryam Mirzakhani",
          photo: "./images/maryam-mirzakhani.jpg",
    birthDate: "1977",
    deathDate: "2017",
    country: "Iran",
    fields: ["Mathematics"],
    roles: ["Mathematician", "Professor"],
    quote:
      "The beauty of mathematics only shows itself to more patient followers.",
    summary:
      "First woman to win the Fields Medal, the highest honor in mathematics.",
    achievements: [
      "First woman and first Iranian to win the Fields Medal",
      "Pioneered research in geometry and dynamical systems",
      "Professor at Stanford University",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Maryam_Mirzakhani" }
    ]
  },
  {
    name: "Tu Youyou",
    photo: "./images/tu-youyou.svg",
    birthDate: "1930",
    country: "China",
    fields: ["Medicine", "Pharmacology"],
    roles: ["Pharmacologist", "Scientist"],
    quote: "Every scientist dreams of doing something that can help the world.",
    summary:
      "Discovered artemisinin, saving millions from malaria; Nobel Prize winner.",
    achievements: [
      "Discovered artemisinin for malaria treatment",
      "Nobel Prize in Physiology or Medicine (2015)",
      "Transformed global malaria treatment",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Tu_Youyou" }
    ]
  },
  {
    name: "Mae Jemison",
    photo: "./images/mae-jemison.jpg",
    birthDate: "1956",
    country: "United States",
    fields: ["Astronomy", "Medicine"],
    roles: ["Astronaut", "Physician"],
    quote: "Never be limited by other people's limited imaginations.",
    summary: "First African American woman in space; physician and engineer.",
    achievements: [
      "First African American woman to travel in space",
      "Mission specialist on Space Shuttle Endeavour",
      "Advocate for science education",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mae_Jemison" }
    ]
  },
  {
    name: "Barbara McClintock",
    photo: "./images/barbara-mcclintock.svg",
    birthDate: "1902",
    deathDate: "1992",
    country: "United States",
    fields: ["Biology", "Genetics"],
    roles: ["Geneticist", "Scientist"],
    quote:
      "If you know you are on the right track, if you have this inner knowledge, then nobody can turn you off... no matter what they say.",
    summary:
      "Nobel Prize-winning geneticist who discovered transposable elements (jumping genes).",
    achievements: [
      "Discovered genetic transposition",
      "Nobel Prize in Physiology or Medicine (1983)",
      "Pioneered maize cytogenetics",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Barbara_McClintock" }
    ]
  },
  {
    name: "Lise Meitner",
          photo: "./images/lise-meitner.jpg",
    birthDate: "1878",
    deathDate: "1968",
    country: "Austria/Germany/Sweden",
    fields: ["Physics"],
    roles: ["Physicist"],
    quote: "Science makes people reach selflessly for truth and objectivity.",
    summary:
      "Co-discovered nuclear fission; element Meitnerium named in her honor.",
    achievements: [
      "Co-discovered nuclear fission",
      "First woman full professor of physics in Germany",
      "Element 109 (Meitnerium) named after her",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Lise_Meitner" }
    ]
  },
  {
    name: "Dorothy Vaughan",
    photo: "./images/dorothy-vaughan.jpg",
    birthDate: "1910",
    deathDate: "2008",
    country: "United States",
    fields: ["Mathematics", "Computing"],
    roles: ["Mathematician", "Computer Programmer"],
    quote: "I changed what I could, and what I couldn't, I endured.",
    summary: "NASA mathematician and supervisor, featured in 'Hidden Figures'.",
    achievements: [
      "First African American supervisor at NASA",
      "Expert in FORTRAN programming",
      "Paved the way for women in computing",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dorothy_Vaughan" }
    ]
  },
  {
    name: "Ellen Ochoa",
          photo: "./images/ellen-ochoa.jpg",
    birthDate: "1958",
    country: "United States",
    fields: ["Astronomy", "Engineering"],
    roles: ["Astronaut", "Engineer"],
    quote: "Don't be afraid to reach for the stars.",
    summary:
      "First Hispanic woman in space and former director of Johnson Space Center.",
    achievements: [
      "First Hispanic woman in space",
      "Director of NASA Johnson Space Center",
      "Inventor with multiple patents",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Ellen_Ochoa" }
    ]
  },
  {
    name: "Ada Yonath",
    photo: "./images/ada-yonath.jpg",
    birthDate: "1939",
    country: "Israel",
    fields: ["Chemistry", "Biology"],
    roles: ["Crystallographer", "Professor"],
    quote: "Curiosity is the driving force for discovery.",
    summary:
      "Nobel Prize-winning crystallographer who revealed the structure of ribosomes.",
    achievements: [
      "First woman in 45 years to win Nobel Prize in Chemistry",
      "Solved structure of ribosomes",
      "Advanced antibiotic research",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Ada_Yonath" }
    ]
  },
  {
    name: "Valentina Tereshkova",
    photo: "./images/valentina-tereshkova.svg",
    birthDate: "1937",
    country: "Russia",
    fields: ["Astronomy", "Engineering"],
    roles: ["Cosmonaut", "Engineer"],
    quote:
      "Once you've been in space, you appreciate how small and fragile the Earth is.",
    summary: "First woman to fly in space, piloting Vostok 6 in 1963.",
    achievements: [
      "First woman in space",
      "Orbited Earth 48 times",
      "Role model for women in STEM worldwide",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Valentina_Tereshkova" }
    ]
  },
  {
    name: "Radia Perlman",
    photo: "./images/radia-perlman.jpg",
    birthDate: "1951",
    country: "United States",
    fields: ["Computer Science", "Engineering"],
    roles: ["Computer Scientist", "Engineer"],
    quote:
      "I never thought of myself as a woman in science. I just thought of myself as a person who loves science.",
    summary:
      "Inventor of the spanning-tree protocol, known as the 'Mother of the Internet'.",
    achievements: [
      "Invented the spanning-tree protocol",
      "Pioneered network design and security",
      "Inducted into the Internet Hall of Fame",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Radia_Perlman" }
    ]
  },
  {
    name: "Grace Chisholm Young",
    photo: "./images/grace-chisholm-young.svg",
    birthDate: "1868",
    deathDate: "1944",
    country: "United Kingdom",
    fields: ["Mathematics"],
    roles: ["Mathematician"],
    quote: "Mathematics is a creative art.",
    summary:
      "First woman to earn a doctorate in any field in Germany; contributed to calculus and analysis.",
    achievements: [
      "First woman to earn a doctorate in Germany",
      "Published influential mathematics textbooks",
      "Advanced the field of calculus",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Grace_Chisholm_Young" }
    ]
  },
  {
    name: "Mildred Dresselhaus",
          photo: "./images/mildred-dresselhaus.jpg",
    birthDate: "1930",
    deathDate: "2017",
    country: "United States",
    fields: ["Physics", "Engineering"],
    roles: ["Physicist", "Engineer"],
    quote: "My advice is: work hard, have fun, and make history.",
    summary:
      "Known as the 'Queen of Carbon Science' for her pioneering work in nanotechnology.",
    achievements: [
      "Pioneered research in carbon nanostructures",
      "First female Institute Professor at MIT",
      "National Medal of Science recipient",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mildred_Dresselhaus" }
    ]
  },
  {
    name: "Flossie Wong-Staal",
          photo: "./images/flossie-wong-staal.jpg",
    birthDate: "1947",
    deathDate: "2020",
    country: "China/United States",
    fields: ["Biology", "Virology"],
    roles: ["Virologist", "Molecular Biologist"],
    quote:
      "Science is a way of thinking much more than it is a body of knowledge.",
    summary:
      "First to clone HIV and determine its gene functions, advancing AIDS research.",
    achievements: [
      "First to clone HIV",
      "Mapped HIV gene functions",
      "Leader in AIDS research",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flossie_Wong-Staal" }
    ]
  },
  {
    name: "Sophie Germain",
    photo: "./images/sophie-germain.svg",
    birthDate: "1776",
    deathDate: "1831",
    country: "France",
    fields: ["Mathematics", "Physics"],
    roles: ["Mathematician", "Physicist"],
    quote:
      "Algebra is but written geometry and geometry is but written algebra.",
    summary:
      "Pioneered elasticity theory and made contributions to number theory despite facing gender barriers.",
    achievements: [
      "Pioneered elasticity theory",
      "Contributed to Fermat's Last Theorem",
      "First woman to win a prize from the Paris Academy of Sciences",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Sophie_Germain" }
    ]
  },
  {
    name: "Chieng Shih",
    photo: "./images/chieng-shih.svg",
    birthDate: "180",
    country: "China",
    fields: ["Engineering", "Invention"],
    roles: ["Inventor", "Engineer"],
    quote: "Innovation is the soul of progress.",
    summary:
      "Ancient Chinese inventor credited with the creation of the mechanical loom.",
    achievements: [
      "Invented the mechanical loom",
      "Advanced textile technology in ancient China",
      "Role model for women inventors",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Han_Dynasty_inventions#Textile_technology" }
    ]
  },
  {
    name: "Mary Golda Ross",
    photo: "./images/mary-golda-ross.svg",
    birthDate: "1908",
    deathDate: "2008",
    country: "United States",
    fields: ["Engineering", "Aerospace"],
    roles: ["Engineer", "Mathematician"],
    quote:
      "To function efficiently, any group of people must have faith in their leader.",
    summary:
      "First Native American female engineer; worked on NASA's space program.",
    achievements: [
      "First Native American female engineer",
      "Helped develop interplanetary space probes",
      "Pioneer in aerospace engineering",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mary_Golda_Ross" }
    ]
  },
  {
    name: "Esther Lederberg",
    photo: "./images/esther-lederberg.svg",
    birthDate: "1922",
    deathDate: "2006",
    country: "United States",
    fields: ["Biology", "Microbiology"],
    roles: ["Microbiologist", "Professor"],
    quote: "Science is a way of life. Science is a perspective.",
    summary: "Pioneered bacterial genetics and discovered the lambda phage.",
    achievements: [
      "Discovered the lambda phage",
      "Developed replica plating technique",
      "Advanced bacterial genetics",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Esther_Lederberg" }
    ]
  },
  {
    name: "Gladys West",
    photo: "./images/gladys-west.svg",
    birthDate: "1930",
    country: "United States",
    fields: ["Mathematics", "Geodesy"],
    roles: ["Mathematician", "Programmer"],
    quote: "I never set out to be a pioneer. I just wanted to do my job well.",
    summary:
      "Her work on satellite geodesy was crucial to the development of GPS.",
    achievements: [
      "Developed mathematical modeling for GPS",
      "Pioneered satellite geodesy",
      "Inducted into the Air Force Space and Missile Pioneers Hall of Fame",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Gladys_West" }
    ]
  },
  {
    name: "Emmy Noether",
    photo: "./images/emmy-noether.jpg",
    birthDate: "1882",
    deathDate: "1935",
    country: "Germany",
    fields: ["Mathematics", "Physics"],
    roles: ["Mathematician", "Professor"],
    quote:
      "My methods are really methods of working and thinking; this is why they have crept in everywhere anonymously.",
    summary:
      "Revolutionary mathematician whose work on abstract algebra and theoretical physics transformed modern mathematics.",
    achievements: [
      "Developed Noether's theorem linking symmetry and conservation laws",
      "Founded abstract algebra",
      "First woman to receive habilitation in Germany",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Emmy_Noether" }
    ]
  },
  {
    name: "Wang Zhenyi",
    photo: "./images/wang-zhenyi.jpg",
    birthDate: "1768",
    deathDate: "1797",
    country: "China",
    fields: ["Astronomy", "Mathematics"],
    roles: ["Astronomer", "Mathematician"],
    quote:
      "I am not afraid of difficulties, and I will not be discouraged by failures.",
    summary:
      "Qing dynasty astronomer and mathematician who made significant contributions to lunar eclipse calculations.",
    achievements: [
      "Calculated lunar and solar eclipses",
      "Wrote mathematical treatises",
      "Pioneered women's education in science",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Wang_Zhenyi" }
    ]
  },
  {
    name: "Mary Anning",
    photo: "./images/mary-anning.jpg",
    birthDate: "1799",
    deathDate: "1847",
    country: "United Kingdom",
    fields: ["Paleontology", "Geology"],
    roles: ["Fossil Hunter", "Paleontologist"],
    quote: "I am well known throughout the whole of Europe.",
    summary:
      "Self-taught paleontologist who discovered the first complete ichthyosaur skeleton and revolutionized fossil hunting.",
    achievements: [
      "Discovered first complete ichthyosaur skeleton",
      "Found first complete plesiosaur",
      "Pioneered fossil hunting techniques",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mary_Anning" }
    ]
  },
  {
    name: "Asima Chatterjee",
    photo: "./images/asima-chatterjee.jpg",
    birthDate: "1917",
    deathDate: "2006",
    country: "India",
    fields: ["Chemistry", "Phytomedicine"],
    roles: ["Chemist", "Professor"],
    quote:
      "Science is not a luxury but a necessity for the progress of humanity.",
    summary:
      "First Indian woman to receive a Doctor of Science degree and pioneer in medicinal chemistry.",
    achievements: [
      "First Indian woman to receive Doctor of Science",
      "Discovered anti-malarial compounds",
      "Pioneered research in medicinal plants",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Asima_Chatterjee" }
    ]
  },
      {
      name: "Dorothy Hodgkin",
      photo: "./images/dorothy-hodgkin.jpg",
    birthDate: "1910",
    deathDate: "1994",
    country: "United Kingdom",
    fields: ["Chemistry", "Crystallography"],
    roles: ["Chemist", "Crystallographer"],
    quote: "I was captured for life by chemistry and by crystals.",
    summary:
      "Nobel Prize-winning chemist who determined the structure of penicillin and vitamin B12 using X-ray crystallography.",
    achievements: [
      "Nobel Prize in Chemistry (1964)",
      "Determined structure of penicillin",
      "Solved structure of vitamin B12",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dorothy_Hodgkin" }
    ]
  },
  {
    name: "Sofia Kovalevskaya",
          photo: "./images/sofia-kovalevskaya.jpg",
    birthDate: "1850",
    deathDate: "1891",
    country: "Russia",
    fields: ["Mathematics", "Physics"],
    roles: ["Mathematician", "Professor"],
    quote:
      "It is impossible to be a mathematician without being a poet in soul.",
    summary:
      "First woman to earn a doctorate in mathematics and first female professor in Northern Europe.",
    achievements: [
      "First woman to earn mathematics doctorate",
      "First female professor in Northern Europe",
      "Pioneered research in partial differential equations",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Sofia_Kovalevskaya" }
    ]
  },
  {
    name: "Annie Easley",
    photo: "./images/annie-easley.jpg",
    birthDate: "1933",
    deathDate: "2011",
    country: "United States",
    fields: ["Computer Science", "Mathematics"],
    roles: ["Computer Scientist", "Mathematician"],
    quote:
      "When people have their biases and prejudices, yes, I am aware. My head is not in the sand. But my thing is, if I can't work with you, I will work around you.",
    summary:
      "NASA computer scientist and mathematician who developed software for rocket launches and energy systems.",
    achievements: [
      "Developed software for Centaur rocket",
      "Pioneered energy storage systems",
      "Helped develop hybrid vehicle technology",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Annie_Easley" }
    ]
  },
  {
    name: "Evelyn Boyd Granville",
    photo: "./images/evelyn-boyd-granville.jpg",
    birthDate: "1924",
    deathDate: "2023",
    country: "United States",
    fields: ["Mathematics", "Computer Science"],
    roles: ["Mathematician", "Computer Scientist"],
    quote: "Mathematics is the language of science.",
    summary:
      "Second African American woman to earn a Ph.D. in mathematics and pioneer in computer programming.",
    achievements: [
      "Second African American woman with math Ph.D.",
      "Worked on NASA space programs",
      "Pioneered computer programming education",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Evelyn_Boyd_Granville" }
    ]
  },
  {
    name: "Kalpana Chawla",
    photo: "./images/kalpana-chawla.jpg",
    birthDate: "1962",
    deathDate: "2003",
    country: "India/United States",
    fields: ["Engineering", "Astronomy"],
    roles: ["Astronaut", "Engineer"],
    quote:
      "The path from dreams to success does exist. May you have the vision to find it, the courage to get on to it, and the perseverance to follow it.",
    summary:
      "First Indian-born woman in space and aerospace engineer who inspired millions worldwide.",
    achievements: [
      "First Indian-born woman in space",
      "Mission specialist on Space Shuttle Columbia",
      "Pioneered aerospace engineering research",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kalpana_Chawla" }
    ]
  },
  {
    name: "Mary Jackson",
    photo: "./images/mary-jackson.jpg",
    birthDate: "1921",
    deathDate: "2005",
    country: "United States",
    fields: ["Engineering", "Mathematics"],
    roles: ["Engineer", "Mathematician"],
    quote: "I am a mathematician and I am proud of it.",
    summary:
      "First African American female engineer at NASA and advocate for women in STEM.",
    achievements: [
      "First African American female engineer at NASA",
      "Worked on supersonic flight research",
      "Advocated for women and minorities in STEM",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mary_Jackson_(engineer)" }
    ]
  },
  {
    name: "Rita Levi-Montalcini",
          photo: "./images/rita-levi-montalcini.jpg",
    birthDate: "1909",
    deathDate: "2012",
    country: "Italy",
    fields: ["Biology", "Neuroscience"],
    roles: ["Neurobiologist", "Professor"],
    quote: "Above all, don't fear difficult moments. The best comes from them.",
    summary:
      "Nobel Prize-winning neurobiologist who discovered nerve growth factor.",
    achievements: [
      "Nobel Prize in Physiology or Medicine (1986)",
      "Discovered nerve growth factor",
      "Pioneered research in neurobiology",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Rita_Levi-Montalcini" }
    ]
  },
  {
    name: "Gertrude Elion",
          photo: "./images/gertrude-elion.jpg",
    birthDate: "1918",
    deathDate: "1999",
    country: "United States",
    fields: ["Chemistry", "Pharmacology"],
    roles: ["Chemist", "Pharmacologist"],
    quote: "Don't let others discourage you or tell you that you can't do it.",
    summary:
      "Nobel Prize-winning chemist who developed drugs for leukemia, herpes, and organ transplants.",
    achievements: [
      "Nobel Prize in Physiology or Medicine (1988)",
      "Developed drugs for leukemia and herpes",
      "Pioneered rational drug design",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Gertrude_Elion" }
    ]
  },
  {
    name: "Maria Goeppert-Mayer",
    photo: "./images/maria-goeppert-mayer.svg",
    birthDate: "1906",
    deathDate: "1972",
    country: "Germany/United States",
    fields: ["Physics"],
    roles: ["Physicist", "Professor"],
    quote: "Mathematics began to seem too much like puzzle solving.",
    summary:
      "Nobel Prize-winning physicist who developed the nuclear shell model.",
    achievements: [
      "Nobel Prize in Physics (1963)",
      "Developed nuclear shell model",
      "Second woman to win Nobel Prize in Physics",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Maria_Goeppert-Mayer" }
    ]
  },
  {
    name: "Rosalyn Yalow",
          photo: "./images/rosalyn-yalow.jpg",
    birthDate: "1921",
    deathDate: "2011",
    country: "United States",
    fields: ["Physics", "Medicine"],
    roles: ["Medical Physicist", "Researcher"],
    quote:
      "The world cannot afford the loss of the talents of half its people if we are to solve the many problems which beset us.",
    summary:
      "Nobel Prize-winning medical physicist who developed radioimmunoassay.",
    achievements: [
      "Nobel Prize in Physiology or Medicine (1977)",
      "Developed radioimmunoassay technique",
      "Pioneered nuclear medicine",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Rosalyn_Yalow" }
    ]
  },
  {
    name: "Elizabeth Blackburn",
    photo: "./images/elizabeth-blackburn.svg",
    birthDate: "1948",
    country: "Australia/United States",
    fields: ["Biology", "Molecular Biology"],
    roles: ["Molecular Biologist", "Professor"],
    quote: "Science is curiosity in action.",
    summary:
      "Nobel Prize-winning molecular biologist who discovered telomerase.",
    achievements: [
      "Nobel Prize in Physiology or Medicine (2009)",
      "Discovered telomerase enzyme",
      "Pioneered telomere research",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Elizabeth_Blackburn" }
    ]
  },
  {
    name: "Françoise Barré-Sinoussi",
          photo: "./images/francoise-barre-sinoussi.jpg",
    birthDate: "1947",
    country: "France",
    fields: ["Virology", "Biology"],
    roles: ["Virologist", "Researcher"],
    quote:
      "Science is not about being the first to discover something, but about being the first to understand it.",
    summary: "Nobel Prize-winning virologist who co-discovered HIV.",
    achievements: [
      "Nobel Prize in Physiology or Medicine (2008)",
      "Co-discovered HIV virus",
      "Pioneered AIDS research",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Fran%C3%A7oise_Barr%C3%A9-Sinoussi" }
    ]
  },
  {
    name: "Kimberly Bryant",
    photo: "./images/kimberly-bryant.jpg",
    birthDate: "1967",
    country: "United States",
    fields: ["Computer Science", "Technology"],
    roles: ["Engineer", "Entrepreneur"],
    quote:
      "I want to create opportunities for girls to see themselves as creators, not just consumers of technology.",
    summary:
      "Founder of Black Girls Code, empowering young women of color in technology.",
    achievements: [
      "Founded Black Girls Code",
      "Advocated for diversity in tech",
      "Inspired thousands of young women",
    ],
    references: [
      { title: "Black Girls Code", url: "https://www.blackgirlscode.com/" }
    ]
  },
  {
    name: "Fabiola Gianotti",
    photo: "./images/fabiola-gianotti.jpg",
    birthDate: "1960",
    country: "Italy",
    fields: ["Physics", "Particle Physics"],
    roles: ["Physicist", "Director"],
    quote: "Science is a human endeavor, and diversity makes it stronger.",
    summary: "First female Director-General of CERN and particle physicist.",
    achievements: [
      "First female Director-General of CERN",
      "Led Higgs boson discovery team",
      "Pioneered particle physics research",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Fabiola_Gianotti" }
    ]
  },
  {
    name: "Sally Ride",
          photo: "./images/sally-ride.jpg",
    birthDate: "1951",
    deathDate: "2012",
    country: "United States",
    fields: ["Physics", "Astronomy"],
    roles: ["Astronaut", "Physicist"],
    quote:
      "Science is fun. Science is curiosity. We all have natural curiosity.",
    summary:
      "First American woman in space and advocate for science education.",
    achievements: [
      "First American woman in space",
      "Youngest American astronaut",
      "Founded Sally Ride Science",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Sally_Ride" }
    ]
  },
  {
    name: "Hypatia",
          photo: "./images/hypatia.jpg",
    birthDate: "350",
    deathDate: "415",
    country: "Egypt",
    fields: ["Mathematics", "Astronomy", "Philosophy"],
    roles: ["Mathematician", "Astronomer", "Philosopher"],
    quote:
      "Reserve your right to think, for even to think wrongly is better than not to think at all.",
    summary:
      "Ancient Greek mathematician, astronomer, and philosopher who headed the Neoplatonic school in Alexandria.",
    achievements: [
      "First documented female mathematician",
      "Edited and commented on mathematical texts",
      "Pioneered astronomical observations",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Hypatia" }
    ]
  },
  {
    name: "Caroline Herschel",
          photo: "./images/caroline-herschel.jpg",
    birthDate: "1750",
    deathDate: "1848",
    country: "Germany/United Kingdom",
    fields: ["Astronomy"],
    roles: ["Astronomer", "Scientist"],
    quote: "I found I was to be trained as an assistant to my brother.",
    summary:
      "First woman to discover a comet and receive a salary for scientific work.",
    achievements: [
      "First woman to discover a comet",
      "Discovered 8 comets total",
      "First woman to receive salary for scientific work",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Caroline_Herschel" }
    ]
  },
  {
    name: "Maria Mitchell",
    photo: "./images/maria-mitchell.svg",
    birthDate: "1818",
    deathDate: "1889",
    country: "United States",
    fields: ["Astronomy"],
    roles: ["Astronomer", "Professor"],
    quote:
      "We especially need imagination in science. It is not all mathematics, nor all logic, but it is somewhat beauty and poetry.",
    summary:
      "First American woman to work as a professional astronomer and discover a comet.",
    achievements: [
      "First American woman astronomer",
      "Discovered 'Miss Mitchell's Comet'",
      "First woman elected to American Academy of Arts and Sciences",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Maria_Mitchell" }
    ]
  },
  {
    name: "Beatrice Tinsley",
    photo: "./images/beatrice-tinsley.svg",
    birthDate: "1941",
    deathDate: "1981",
    country: "New Zealand/United States",
    fields: ["Astronomy", "Physics"],
    roles: ["Astronomer", "Cosmologist"],
    quote:
      "Science is a way of thinking much more than it is a body of knowledge.",
    summary:
      "Revolutionary astronomer who transformed our understanding of galaxy evolution and cosmology.",
    achievements: [
      "Pioneered galaxy evolution theory",
      "Revolutionized cosmology",
      "First woman to receive American Astronomical Society's highest award",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Beatrice_Tinsley" }
    ]
  },
  {
    name: "Vera Rubin",
    photo: "./images/vera-rubin.svg",
    birthDate: "1928",
    deathDate: "2016",
    country: "United States",
    fields: ["Astronomy", "Physics"],
    roles: ["Astronomer", "Physicist"],
    quote: "Worldwide, half of all brains are in women.",
    summary:
      "Pioneering astronomer whose work on galaxy rotation curves provided evidence for dark matter.",
    achievements: [
      "Provided evidence for dark matter",
      "Studied galaxy rotation curves",
      "First woman to receive Royal Astronomical Society's Gold Medal",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Vera_Rubin" }
    ]
  },
  {
    name: "Jocelyn Bell Burnell",
    photo: "./images/jocelyn-bell-burnell.svg",
    birthDate: "1943",
    country: "United Kingdom",
    fields: ["Astronomy", "Physics"],
    roles: ["Astrophysicist", "Professor"],
    quote:
      "I am not myself a believer, but I feel that if God is anywhere, he is in the stars.",
    summary:
      "Discovered pulsars as a graduate student, though Nobel Prize went to her supervisor.",
    achievements: [
      "Discovered first pulsar",
      "Pioneered radio astronomy",
      "Advocate for women in physics",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Jocelyn_Bell_Burnell" }
    ]
  },
  {
    name: "Henrietta Swan Leavitt",
    photo: "./images/henrietta-leavitt.svg",
    birthDate: "1868",
    deathDate: "1921",
    country: "United States",
    fields: ["Astronomy"],
    roles: ["Astronomer", "Scientist"],
    quote:
      "The more I study the heavens, the more I am convinced that they are the work of a supreme intelligence.",
    summary:
      "Discovered the period-luminosity relationship for Cepheid variables, enabling measurement of cosmic distances.",
    achievements: [
      "Discovered Cepheid variable period-luminosity relationship",
      "Enabled measurement of cosmic distances",
      "Work led to discovery of universe expansion",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Henrietta_Swan_Leavitt" }
    ]
  },
  {
    name: "Annie Jump Cannon",
    photo: "./images/annie-jump-cannon.svg",
    birthDate: "1863",
    deathDate: "1941",
    country: "United States",
    fields: ["Astronomy"],
    roles: ["Astronomer", "Scientist"],
    quote:
      "I am the only person, man or woman, who has ever done this kind of work.",
    summary:
      "Pioneering astronomer who classified hundreds of thousands of stars and developed the stellar classification system.",
    achievements: [
      "Classified over 350,000 stars",
      "Developed stellar classification system",
      "First woman to receive honorary doctorate from Oxford",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Annie_Jump_Cannon" }
    ]
  },
  {
    name: "Cecilia Payne-Gaposchkin",
          photo: "./images/cecilia-payne-gaposchkin.jpg",
    birthDate: "1900",
    deathDate: "1979",
    country: "United Kingdom/United States",
    fields: ["Astronomy", "Physics"],
    roles: ["Astronomer", "Professor"],
    quote:
      "The reward of the young scientist is the emotional thrill of being the first person in the history of the world to see something or to understand something.",
    summary:
      "First person to discover that stars are made primarily of hydrogen and helium.",
    achievements: [
      "Discovered stars are made of hydrogen and helium",
      "First woman to head Harvard astronomy department",
      "Pioneered stellar spectroscopy",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Cecilia_Payne-Gaposchkin" }
    ]
  },
  {
    name: "Margaret Burbidge",
    photo: "./images/margaret-burbidge.svg",
    birthDate: "1919",
    deathDate: "2020",
    country: "United Kingdom/United States",
    fields: ["Astronomy", "Physics"],
    roles: ["Astronomer", "Professor"],
    quote:
      "I was told that women could not be astronomers. I found that hard to believe.",
    summary:
      "Pioneering astronomer who discovered how elements are formed in stars and fought for women's access to telescopes.",
    achievements: [
      "Discovered stellar nucleosynthesis",
      "Fought for women's telescope access",
      "First woman to serve as American Astronomical Society president",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Margaret_Burbidge" }
    ]
  },
  {
    name: "Katherine Freese",
    photo: "./images/katherine-freese.svg",
    birthDate: "1957",
    country: "United States",
    fields: ["Physics", "Astronomy"],
    roles: ["Physicist", "Professor"],
    quote:
      "The universe is full of mysteries, and dark matter is one of the biggest.",
    summary:
      "Leading theoretical physicist who pioneered research on dark matter and the early universe.",
    achievements: [
      "Pioneered dark matter research",
      "Studied early universe physics",
      "Advocate for women in physics",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Katherine_Freese" }
    ]
  },
      {
      name: "Alice Ball",
      photo: "./images/alice-ball.jpg",
    birthDate: "1892",
    deathDate: "1916",
    country: "United States",
    fields: ["Chemistry", "Medicine"],
    roles: ["Chemist", "Researcher"],
    quote: "I have always tried to do what I could to help others.",
    summary:
      "Developed the first successful treatment for leprosy and was the first African American woman to earn a master's from the University of Hawaii.",
    achievements: [
      "Developed leprosy treatment",
      "First African American woman with master's from UH",
      "Pioneered chaulmoogra oil extraction",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Alice_Ball" }
    ]
  },
  {
    name: "Stephanie Kwolek",
    photo: "./images/stephanie-kwolek.svg",
    birthDate: "1923",
    deathDate: "2014",
    country: "United States",
    fields: ["Chemistry", "Engineering"],
    roles: ["Chemist", "Inventor"],
    quote:
      "I was fortunate that I was working under a man who was very much interested in making new discoveries.",
    summary:
      "Invented Kevlar, the lightweight, bullet-resistant fiber used in protective gear and many other applications.",
    achievements: [
      "Invented Kevlar fiber",
      "Developed bullet-resistant materials",
      "Inducted into National Inventors Hall of Fame",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Stephanie_Kwolek" }
    ]
  },
  {
    name: "Mina Rees",
          photo: "./images/mina-rees.jpg",
    birthDate: "1902",
    deathDate: "1997",
    country: "United States",
    fields: ["Mathematics", "Administration"],
    roles: ["Mathematician", "Administrator"],
    quote:
      "Mathematics is a living subject, growing and changing. It is not a finished book to be read and put aside.",
    summary:
      "Pioneering mathematician and first president of the Graduate Center at CUNY, championed women in mathematics.",
    achievements: [
      "First president of CUNY Graduate Center",
      "Promoted women in mathematics",
      "Led mathematical research for the U.S. Navy",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mina_Rees" }
    ]
  },
  {
    name: "Mary Cartwright",
    photo: "./images/mary-cartwright.svg",
    birthDate: "1900",
    deathDate: "1998",
    country: "United Kingdom",
    fields: ["Mathematics"],
    roles: ["Mathematician", "Professor"],
    quote: "Mathematics is a creative art.",
    summary:
      "Mathematician who made major contributions to chaos theory and nonlinear dynamics.",
    achievements: [
      "Pioneered chaos theory",
      "First female president of the London Mathematical Society",
      "Advanced nonlinear dynamics",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mary_Cartwright" }
    ]
  },
  {
    name: "Ida Noddack",
          photo: "./images/ida-noddack.jpg",
    birthDate: "1896",
    deathDate: "1978",
    country: "Germany",
    fields: ["Chemistry", "Physics"],
    roles: ["Chemist", "Physicist"],
    quote: "Science is not a closed book, but a field for new discoveries.",
    summary: "Co-discovered rhenium and first proposed nuclear fission.",
    achievements: [
      "Co-discovered rhenium",
      "First to suggest nuclear fission",
      "Pioneered analytical chemistry",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Ida_Noddack" }
    ]
  },
  {
    name: "Ynes Mexia",
          photo: "./images/ynes-mexia.jpg",
    birthDate: "1870",
    deathDate: "1938",
    country: "United States/Mexico",
    fields: ["Botany", "Exploration"],
    roles: ["Botanist", "Explorer"],
    quote: "I have a job to do, and I do it with all my might.",
    summary:
      "Mexican-American botanist who discovered hundreds of new plant species in the Americas.",
    achievements: [
      "Discovered 500+ new plant species",
      "Explored remote regions of the Americas",
      "Promoted women in field science",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Ynes_Mexia" }
    ]
  },
  {
    name: "Ellen Swallow Richards",
          photo: "./images/ellen-swallow-richards.jpg",
    birthDate: "1842",
    deathDate: "1911",
    country: "United States",
    fields: ["Chemistry", "Environmental Science"],
    roles: ["Chemist", "Environmental Scientist"],
    quote:
      "The environment that people live in is the environment that they learn to live in, respond to, and perpetuate.",
    summary:
      "First female student at MIT, founder of home economics, and pioneer in environmental chemistry.",
    achievements: [
      "First female student at MIT",
      "Founded home economics",
      "Pioneered water quality research",
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Ellen_Swallow_Richards" }
    ]
  },
  {
    name: "Susan Solomon",
    photo: "./images/susan-solomon.svg",
    birthDate: "1956",
    country: "United States",
    fields: ["Atmospheric Science", "Chemistry"],
    roles: ["Atmospheric Chemist", "Professor"],
    quote:
      "Science is a way of thinking much more than it is a body of knowledge.",
    summary:
      "Atmospheric chemist who explained the cause of the Antarctic ozone hole.",
    achievements: [
      "Explained Antarctic ozone hole",
      "Pioneered atmospheric chemistry",
      "Awarded National Medal of Science",
    ],
  },
  {
    name: "Margarita Salas",
          photo: "./images/margarita-salas.jpg",
    birthDate: "1938",
    deathDate: "2019",
    country: "Spain",
    fields: ["Molecular Biology"],
    roles: ["Molecular Biologist", "Researcher"],
    quote: "Science is the engine of progress.",
    summary:
      "Spanish molecular biologist who discovered key mechanisms of DNA replication.",
    achievements: [
      "Discovered phi29 DNA polymerase",
      "Advanced DNA replication research",
      "Promoted women in science in Spain",
    ],
  },
  {
    name: "Chieng Shih",
    photo: "./images/chieng-shih.svg",
    birthDate: "1768",
    deathDate: "1820",
    country: "China",
    fields: ["Engineering", "Invention"],
    roles: ["Inventor", "Engineer"],
    quote: "Innovation is the soul of progress.",
    summary: "Chinese inventor credited with creating the mechanical loom.",
    achievements: [
      "Invented the mechanical loom",
      "Pioneered textile technology in ancient China",
      "Inspired future inventors",
    ],
  },
  {
    name: "Mary Golda Ross",
    photo: "./images/mary-golda-ross.svg",
    birthDate: "1908",
    deathDate: "2008",
    country: "United States (Cherokee Nation)",
    fields: ["Engineering", "Aerospace"],
    roles: ["Engineer", "Mathematician"],
    quote:
      "To function efficiently, any group of people must have faith in their leader.",
    summary:
      "First Native American female engineer; worked on NASA's space program.",
    achievements: [
      "First Native American female engineer",
      "Worked on NASA space programs",
      "Pioneered aerospace engineering research",
    ],
  },
  {
    name: "Asima Chatterjee",
    photo: "./images/asima-chatterjee.jpg",
    birthDate: "1917",
    deathDate: "2006",
    country: "India",
    fields: ["Chemistry", "Phytomedicine"],
    roles: ["Chemist", "Professor"],
    quote:
      "Science is not a luxury but a necessity for the progress of humanity.",
    summary:
      "Indian chemist who pioneered research in medicinal plants and anti-malarial drugs.",
    achievements: [
      "Pioneered research in medicinal plants",
      "Developed anti-malarial drugs",
      "First Indian woman to receive Doctor of Science",
    ],
  },
  {
    name: "Alice Augusta Ball",
    photo: "./images/alice-ball.svg",
    birthDate: "1892",
    deathDate: "1916",
    country: "United States",
    fields: ["Chemistry", "Medicine"],
    roles: ["Chemist", "Researcher"],
    quote: "I have always tried to do what I could to help others.",
    summary:
      "Developed the first successful treatment for leprosy and was the first African American woman to earn a master's from the University of Hawaii.",
    achievements: [
      "Developed leprosy treatment",
      "First African American woman with master's from UH",
      "Pioneered chaulmoogra oil extraction",
    ],
  },
  {
    name: "Mary Somerville",
    photo: "./images/mary-somerville.svg",
    birthDate: "1780",
    deathDate: "1872",
    country: "United Kingdom",
    fields: ["Mathematics", "Astronomy"],
    roles: ["Mathematician", "Science Writer"],
    quote:
      "Nothing has afforded me so convincing a proof of the unity of the Deity as these purely mental conceptions of numerical and mathematical science.",
    summary:
      "Popularized science and mathematics, and her work led to the discovery of Neptune.",
    achievements: [
      "Popularized science and mathematics",
      "Work led to discovery of Neptune",
      "First female member of the Royal Astronomical Society",
    ],
  },
  {
    name: "Gerty Cori",
    photo: "./images/gerty-cori.svg",
    birthDate: "1896",
    deathDate: "1957",
    country: "Czech Republic/United States",
    fields: ["Biochemistry", "Medicine"],
    roles: ["Biochemist", "Professor"],
    quote:
      "The love for and dedication to one's work is the foundation of all happiness.",
    summary:
      "First woman to win the Nobel Prize in Physiology or Medicine for her work on carbohydrate metabolism.",
    achievements: [
      "Nobel Prize in Physiology or Medicine (1947)",
      "Discovered the Cori cycle",
      "Pioneered research in biochemistry",
    ],
  },
  {
    name: "Inge Lehmann",
          photo: "./images/inge-lehmann.jpg",
    birthDate: "1888",
    deathDate: "1993",
    country: "Denmark",
    fields: ["Geophysics", "Seismology"],
    roles: ["Geophysicist", "Seismologist"],
    quote:
      "You should know how many incompetent men I had to compete with—in vain.",
    summary:
      "Discovered the Earth's inner core, revolutionizing our understanding of the planet's structure.",
    achievements: [
      "Discovered Earth's inner core",
      "Pioneered seismology",
      "First woman to receive the William Bowie Medal",
    ],
  },
  {
    name: "Dorothy Mary Crowfoot Hodgkin",
    photo: "./images/dorothy-hodgkin.svg",
    birthDate: "1910",
    deathDate: "1994",
    country: "United Kingdom",
    fields: ["Chemistry", "Crystallography"],
    roles: ["Chemist", "Crystallographer"],
    quote: "I was captured for life by chemistry and by crystals.",
    summary:
      "Nobel Prize-winning chemist who determined the structure of penicillin and vitamin B12 using X-ray crystallography.",
    achievements: [
      "Nobel Prize in Chemistry (1964)",
      "Determined structure of penicillin",
      "Solved structure of vitamin B12",
    ],
  },
  {
    name: "Jane Goodall",
          photo: "./images/jane-goodall.jpg",
    birthDate: "1934",
    country: "United Kingdom",
    fields: ["Primatology", "Anthropology"],
    roles: ["Primatologist", "Anthropologist"],
    quote:
      "What you do makes a difference, and you have to decide what kind of difference you want to make.",
    summary:
      "World-renowned primatologist who transformed our understanding of chimpanzees and animal behavior.",
    achievements: [
      "Transformed primatology",
      "Founded the Jane Goodall Institute",
      "UN Messenger of Peace",
    ],
  },
  {
    name: "Mae Jemison",
    photo: "./images/mae-jemison.jpg",
    birthDate: "1956",
    country: "United States",
    fields: ["Engineering", "Medicine", "Astronautics"],
    roles: ["Engineer", "Physician", "Astronaut"],
    quote: "Never be limited by other people's limited imaginations.",
    summary: "First African American woman in space, physician, and engineer.",
    achievements: [
      "First African American woman in space",
      "Mission specialist on Space Shuttle Endeavour",
      "Advocate for science education",
    ],
  },
  {
    name: "Tu Youyou",
    photo: "./images/tu-youyou.svg",
    birthDate: "1930",
    country: "China",
    fields: ["Chemistry", "Phytomedicine"],
    roles: ["Pharmacologist", "Chemist"],
    quote: "Every scientist dreams of doing something that can help the world.",
    summary:
      "Discovered artemisinin, saving millions from malaria; Nobel Prize winner.",
    achievements: [
      "Discovered artemisinin for malaria treatment",
      "Nobel Prize in Physiology or Medicine (2015)",
      "Transformed global malaria treatment",
    ],
  },
  {
    name: "Gladys West",
    photo: "./images/gladys-west.svg",
    birthDate: "1930",
    country: "United States",
    fields: ["Mathematics", "Geodesy"],
    roles: ["Mathematician", "Geodesist"],
    quote: "I never set out to be a pioneer. I just wanted to do my job well.",
    summary:
      "Mathematician whose work on satellite geodesy was crucial to the development of GPS.",
    achievements: [
      "Pioneered satellite geodesy",
      "Developed mathematical modeling for GPS",
      "Inducted into the Air Force Space and Missile Pioneers Hall of Fame",
    ],
  },
  {
    name: "Barbara McClintock",
    photo: "./images/barbara-mcclintock.svg",
    birthDate: "1902",
    deathDate: "1992",
    country: "United States",
    fields: ["Genetics", "Cytogenetics"],
    roles: ["Geneticist", "Cytogeneticist"],
    quote:
      "If you know you are on the right track, if you have this inner knowledge, then nobody can turn you off... no matter what they say.",
    summary:
      "Nobel Prize-winning geneticist who discovered transposable elements (jumping genes).",
    achievements: [
      "Discovered genetic transposition",
      "Nobel Prize in Physiology or Medicine (1983)",
      "Pioneered maize cytogenetics",
    ],
  },
  {
    name: "Mary Golda Ross",
    photo: "./images/placeholder.jpg",
    birthDate: "1908",
    deathDate: "2008",
    country: "United States",
    fields: ["Engineering", "Aerospace"],
    roles: ["Engineer", "Mathematician"],
    quote: "To function efficiently, any group of people must have faith in their leader.",
    summary: "First known Native American female engineer, contributed to early spaceflight and missile design at Lockheed.",
    achievements: [
      "First Native American female engineer",
      "Worked on top-secret aerospace projects at Lockheed",
      "Pioneered work on interplanetary space travel and ballistic missiles"
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mary_Golda_Ross" }
    ]
  },
  {
    name: "Tu Youyou",
    photo: "./images/placeholder.jpg",
    birthDate: "1930",
    country: "China",
    fields: ["Pharmacology", "Chemistry"],
    roles: ["Pharmacologist", "Chemist"],
    quote: "Every scientist dreams of doing something that can help the world.",
    summary: "Discovered artemisinin, a groundbreaking malaria treatment, saving millions of lives.",
    achievements: [
      "Discovered artemisinin for malaria treatment",
      "First Chinese woman to win a Nobel Prize in Physiology or Medicine"
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Tu_Youyou" }
    ]
  },
  {
    name: "Barbara McClintock",
    photo: "./images/placeholder.jpg",
    birthDate: "1902",
    deathDate: "1992",
    country: "United States",
    fields: ["Genetics", "Biology"],
    roles: ["Geneticist", "Cytogeneticist"],
    quote: "If you know you are on the right track, if you have this inner knowledge, then nobody can turn you off... no matter what they say.",
    summary: "Nobel Prize-winning geneticist who discovered transposable elements (jumping genes) in maize.",
    achievements: [
      "Discovered transposable elements in DNA",
      "Nobel Prize in Physiology or Medicine (1983)"
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Barbara_McClintock" }
    ]
  },
  {
    name: "Chieng Shih",
    photo: "./images/placeholder.jpg",
    birthDate: "180",
    country: "China",
    fields: ["Engineering", "Invention"],
    roles: ["Inventor", "Engineer"],
    quote: "Inventiveness is the mother of progress.",
    summary: "Ancient Chinese inventor credited with creating the first mechanical loom.",
    achievements: [
      "Invented the mechanical loom (drawloom)",
      "Pioneered textile engineering in ancient China"
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Han_Dynasty_inventions#Textile_technology" }
    ]
  },
  {
    name: "Mary Cartwright",
    photo: "./images/placeholder.jpg",
    birthDate: "1900",
    deathDate: "1998",
    country: "United Kingdom",
    fields: ["Mathematics"],
    roles: ["Mathematician"],
    quote: "Mathematics is a creative art.",
    summary: "Pioneering mathematician in chaos theory and nonlinear differential equations.",
    achievements: [
      "Major contributions to chaos theory",
      "First female president of the London Mathematical Society"
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mary_Cartwright" }
    ]
  },
  {
    name: "Grace Chisholm Young",
    photo: "./images/placeholder.jpg",
    birthDate: "1868",
    deathDate: "1944",
    country: "United Kingdom",
    fields: ["Mathematics"],
    roles: ["Mathematician"],
    quote: "I was determined to study mathematics, no matter what.",
    summary: "First woman to receive a doctorate in any field from a German university, contributed to calculus and set theory.",
    achievements: [
      "First woman to earn a doctorate from a German university",
      "Contributions to calculus and set theory"
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Grace_Chisholm_Young" }
    ]
  },
  {
    name: "Sophie Germain",
    photo: "./images/placeholder.jpg",
    birthDate: "1776",
    deathDate: "1831",
    country: "France",
    fields: ["Mathematics", "Physics"],
    roles: ["Mathematician", "Physicist"],
    quote: "Algebra is but written geometry and geometry is but written algebra.",
    summary: "Self-taught mathematician who made foundational contributions to number theory and elasticity theory.",
    achievements: [
      "Contributions to number theory and elasticity theory",
      "First woman to win a prize from the Paris Academy of Sciences"
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Sophie_Germain" }
    ]
  },
  {
    name: "Rachel Carson",
    photo: "./images/placeholder.jpg",
    birthDate: "1907",
    deathDate: "1964",
    country: "United States",
    fields: ["Biology", "Environmental Science"],
    roles: ["Biologist", "Writer"],
    quote: "The more clearly we can focus our attention on the wonders and realities of the universe about us, the less taste we shall have for destruction.",
    summary: "Marine biologist and conservationist whose book 'Silent Spring' launched the global environmental movement.",
    achievements: [
      "Author of 'Silent Spring'",
      "Pioneered the environmental movement"
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Rachel_Carson" }
    ]
  },
  {
    name: "Alice Ball",
    photo: "./images/placeholder.jpg",
    birthDate: "1892",
    deathDate: "1916",
    country: "United States",
    fields: ["Chemistry", "Pharmacy"],
    roles: ["Chemist", "Pharmacist"],
    quote: "I work for the benefit of suffering humanity.",
    summary: "Developed the first successful treatment for leprosy (the Ball Method).",
    achievements: [
      "Developed the Ball Method for leprosy treatment",
      "First woman and first African American to earn a master's from University of Hawaii"
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Alice_Ball" }
    ]
  },
  {
    name: "Caroline Herschel",
    photo: "./images/placeholder.jpg",
    birthDate: "1750",
    deathDate: "1848",
    country: "Germany/United Kingdom",
    fields: ["Astronomy"],
    roles: ["Astronomer", "Scientist"],
    quote: "I found I was to be trained as an assistant to my brother.",
    summary: "First woman to discover a comet and receive a salary for scientific work.",
    achievements: [
      "First woman to discover a comet",
      "Discovered 8 comets total",
      "First woman to receive salary for scientific work"
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Caroline_Herschel" }
    ]
  },
  {
    name: "Maria Telkes",
    photo: "./images/placeholder.jpg",
    birthDate: "1900",
    deathDate: "1995",
    country: "Hungary/United States",
    fields: ["Engineering", "Physics"],
    roles: ["Engineer", "Inventor"],
    quote: "The sun is the only source of energy that will last as long as the earth itself.",
    summary: "Pioneering solar energy researcher who developed the first solar-powered heating system for homes.",
    achievements: [
      "Developed first solar-powered heating system",
      "Invented solar distillation process",
      "Pioneered solar thermal energy storage"
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Maria_Telkes" }
    ]
  },
  {
    name: "Mariam Al-Astrulabi",
    photo: "./images/placeholder.jpg",
    birthDate: "950",
    deathDate: "1000",
    country: "Syria",
    fields: ["Astronomy", "Engineering"],
    roles: ["Astronomer", "Instrument Maker"],
    quote: "The stars guide us to knowledge beyond our earthly bounds.",
    summary: "Medieval astronomer and instrument maker who created sophisticated astrolabes for celestial navigation.",
    achievements: [
      "Created advanced astrolabes for navigation",
      "Pioneered astronomical instrument making",
      "Contributed to Islamic Golden Age astronomy"
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mariam_al-Astrulabi" }
    ]
  },
  {
    name: "Janaki Ammal",
    photo: "./images/placeholder.jpg",
    birthDate: "1897",
    deathDate: "1984",
    country: "India",
    fields: ["Botany", "Genetics"],
    roles: ["Botanist", "Cytogeneticist"],
    quote: "Plants are the foundation of life on earth.",
    summary: "Pioneering botanist and cytogeneticist who made significant contributions to plant breeding and conservation.",
    achievements: [
      "Pioneered plant cytogenetics in India",
      "Developed hybrid sugarcane varieties",
      "Established botanical gardens and conservation programs"
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Janaki_Ammal" }
    ]
  },
  {
    name: "Yvonne Brill",
    photo: "./images/placeholder.jpg",
    birthDate: "1924",
    deathDate: "2013",
    country: "Canada/United States",
    fields: ["Engineering", "Aerospace"],
    roles: ["Engineer", "Inventor"],
    quote: "Engineering is about solving problems and making things work better.",
    summary: "Aerospace engineer who invented the hydrazine resistojet propulsion system used in satellites.",
    achievements: [
      "Invented hydrazine resistojet propulsion system",
      "Developed propulsion systems for satellites",
      "First woman to receive National Medal of Technology and Innovation"
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Yvonne_Brill" }
    ]
  },
  {
    name: "Susan Solomon",
    photo: "./images/placeholder.jpg",
    birthDate: "1956",
    country: "United States",
    fields: ["Chemistry", "Atmospheric Science"],
    roles: ["Atmospheric Chemist", "Professor"],
    quote: "Science is about asking the right questions and being persistent in finding answers.",
    summary: "Atmospheric chemist who identified the cause of the Antarctic ozone hole and led international ozone research.",
    achievements: [
      "Identified cause of Antarctic ozone hole",
      "Led international ozone research teams",
      "Received National Medal of Science"
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Susan_Solomon" }
    ]
  },
  {
    name: "Margarita Salas",
    photo: "./images/placeholder.jpg",
    birthDate: "1938",
    deathDate: "2019",
    country: "Spain",
    fields: ["Biochemistry", "Molecular Biology"],
    roles: ["Biochemist", "Professor"],
    quote: "Science is a way of life that requires passion and dedication.",
    summary: "Pioneering Spanish biochemist who discovered DNA polymerase and advanced molecular biology research.",
    achievements: [
      "Discovered DNA polymerase from bacteriophage φ29",
      "Pioneered molecular biology in Spain",
      "Founded Spanish Society of Biochemistry"
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Margarita_Salas" }
    ]
  },
  {
    name: "Mary Somerville",
    photo: "./images/placeholder.jpg",
    birthDate: "1780",
    deathDate: "1872",
    country: "Scotland",
    fields: ["Mathematics", "Astronomy"],
    roles: ["Mathematician", "Astronomer"],
    quote: "Mathematics is the language of nature.",
    summary: "Self-taught mathematician and astronomer who wrote influential scientific books and was called 'the queen of science'.",
    achievements: [
      "Wrote influential scientific books for general audiences",
      "First person to be called 'scientist'",
      "Pioneered science communication"
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mary_Somerville" }
    ]
  },
  {
    name: "Gerty Cori",
    photo: "./images/placeholder.jpg",
    birthDate: "1896",
    deathDate: "1957",
    country: "Czechoslovakia/United States",
    fields: ["Biochemistry", "Medicine"],
    roles: ["Biochemist", "Professor"],
    quote: "The love for and dedication to one's work is the foundation of all happiness.",
    summary: "First woman to win the Nobel Prize in Physiology or Medicine for her work on carbohydrate metabolism.",
    achievements: [
      "Nobel Prize in Physiology or Medicine (1947)",
      "Discovered the Cori cycle",
      "Pioneered research in biochemistry"
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Gerty_Cori" }
    ]
  },
  {
    name: "Dorothy Mary Crowfoot Hodgkin",
    photo: "./images/placeholder.jpg",
    birthDate: "1910",
    deathDate: "1994",
    country: "United Kingdom",
    fields: ["Chemistry", "Crystallography"],
    roles: ["Chemist", "Crystallographer"],
    quote: "I was captured for life by chemistry and by crystals.",
    summary: "Nobel Prize-winning chemist who determined the structure of penicillin and vitamin B12 using X-ray crystallography.",
    achievements: [
      "Nobel Prize in Chemistry (1964)",
      "Determined structure of penicillin",
      "Solved structure of vitamin B12"
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dorothy_Hodgkin" }
    ]
  },
  {
    name: "Jane Goodall",
    photo: "./images/placeholder.jpg",
    birthDate: "1934",
    country: "United Kingdom",
    fields: ["Primatology", "Anthropology"],
    roles: ["Primatologist", "Anthropologist"],
    quote: "What you do makes a difference, and you have to decide what kind of difference you want to make.",
    summary: "World-renowned primatologist who transformed our understanding of chimpanzees and animal behavior.",
    achievements: [
      "Transformed primatology",
      "Founded the Jane Goodall Institute",
      "UN Messenger of Peace"
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Jane_Goodall" }
    ]
  },
  {
    name: "Emilie du Châtelet",
    photo: "./images/placeholder.jpg",
    birthDate: "1706",
    deathDate: "1749",
    country: "France",
    fields: ["Physics", "Mathematics"],
    roles: ["Physicist", "Mathematician"],
    quote: "The study of mathematics is the foundation of all exact knowledge of natural phenomena.",
    summary: "French mathematician and physicist who translated and commented on Newton's Principia, advancing physics in Europe.",
    achievements: [
      "Translated Newton's Principia into French",
      "Advanced understanding of kinetic energy",
      "Pioneered women's participation in science"
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/%C3%89milie_du_Ch%C3%A2telet" }
    ]
  },
  {
    name: "Agnes Pockels",
    photo: "./images/placeholder.jpg",
    birthDate: "1862",
    deathDate: "1935",
    country: "Germany",
    fields: ["Chemistry", "Physics"],
    roles: ["Chemist", "Physicist"],
    quote: "Science is not limited by gender, only by curiosity and determination.",
    summary: "Self-taught chemist who pioneered surface chemistry and invented the surface film balance.",
    achievements: [
      "Invented surface film balance",
      "Pioneered surface chemistry",
      "Published over 20 scientific papers"
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Agnes_Pockels" }
    ]
  },
  {
    name: "Hertha Ayrton",
    photo: "./images/placeholder.jpg",
    birthDate: "1854",
    deathDate: "1923",
    country: "United Kingdom",
    fields: ["Physics", "Engineering"],
    roles: ["Physicist", "Engineer"],
    quote: "An error that ascribes to a man what was actually the work of a woman has more lives than a cat.",
    summary: "British physicist and engineer who studied electric arcs and was the first woman to read a paper before the Royal Society.",
    achievements: [
      "First woman to read paper before Royal Society",
      "Studied electric arcs and sand ripples",
      "Held 26 patents for inventions"
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Hertha_Ayrton" }
    ]
  },
  {
    name: "Lise Meitner",
    photo: "./images/placeholder.jpg",
    birthDate: "1878",
    deathDate: "1968",
    country: "Austria/Germany/Sweden",
    fields: ["Physics"],
    roles: ["Physicist"],
    quote: "Science makes people reach selflessly for truth and objectivity.",
    summary: "Co-discovered nuclear fission; element Meitnerium named in her honor.",
    achievements: [
      "Co-discovered nuclear fission",
      "First woman full professor of physics in Germany",
      "Element 109 (Meitnerium) named after her"
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Lise_Meitner" }
    ]
  },
  {
    name: "Dorothy Vaughan",
    photo: "./images/placeholder.jpg",
    birthDate: "1910",
    deathDate: "2008",
    country: "United States",
    fields: ["Mathematics", "Computing"],
    roles: ["Mathematician", "Computer Programmer"],
    quote: "I changed what I could, and what I couldn't, I endured.",
    summary: "NASA mathematician and supervisor, featured in 'Hidden Figures'.",
    achievements: [
      "First African American supervisor at NASA",
      "Expert in FORTRAN programming",
      "Paved the way for women in computing"
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dorothy_Vaughan" }
    ]
  },
  {
    name: "Ellen Ochoa",
    photo: "./images/placeholder.jpg",
    birthDate: "1958",
    country: "United States",
    fields: ["Astronomy", "Engineering"],
    roles: ["Astronaut", "Engineer"],
    quote: "Don't be afraid to reach for the stars.",
    summary: "First Hispanic woman in space and former director of Johnson Space Center.",
    achievements: [
      "First Hispanic woman in space",
      "Director of NASA Johnson Space Center",
      "Inventor with multiple patents"
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Ellen_Ochoa" }
    ]
  },
  {
    name: "Ada Yonath",
    photo: "./images/placeholder.jpg",
    birthDate: "1939",
    country: "Israel",
    fields: ["Chemistry", "Biology"],
    roles: ["Crystallographer", "Professor"],
    quote: "Curiosity is the driving force for discovery.",
    summary: "Nobel Prize-winning crystallographer who revealed the structure of ribosomes.",
    achievements: [
      "First woman in 45 years to win Nobel Prize in Chemistry",
      "Solved structure of ribosomes",
      "Advanced antibiotic research"
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Ada_Yonath" }
    ]
  },
  {
    name: "Valentina Tereshkova",
    photo: "./images/placeholder.jpg",
    birthDate: "1937",
    country: "Russia",
    fields: ["Astronomy", "Engineering"],
    roles: ["Cosmonaut", "Engineer"],
    quote: "Once you've been in space, you appreciate how small and fragile the Earth is.",
    summary: "First woman to fly in space, piloting Vostok 6 in 1963.",
    achievements: [
      "First woman in space",
      "Orbited Earth 48 times",
      "Role model for women in STEM worldwide"
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Valentina_Tereshkova" }
    ]
  },
  {
    name: "Radia Perlman",
    photo: "./images/placeholder.jpg",
    birthDate: "1951",
    country: "United States",
    fields: ["Computer Science", "Engineering"],
    roles: ["Computer Scientist", "Engineer"],
    quote: "I never thought of myself as a woman in science. I just thought of myself as a person who loves science.",
    summary: "Inventor of the spanning-tree protocol, known as the 'Mother of the Internet'.",
    achievements: [
      "Invented the spanning-tree protocol",
      "Pioneered network design and security",
      "Inducted into the Internet Hall of Fame"
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Radia_Perlman" }
    ]
  }
];

// Remove duplicates by name
const seen = new Set();
const uniquePioneers = pioneers.filter((p) => {
  if (seen.has(p.name)) return false;
  seen.add(p.name);
  return true;
});

// Export for use in other files
if (typeof module !== "undefined" && module.exports) {
  module.exports = uniquePioneers;
}

// Make available globally for browser
if (typeof window !== "undefined") {
  window.pioneers = uniquePioneers;
}
