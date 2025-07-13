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

// Remove Node.js fs code - this should be handled statically in the data

// Short descriptions should be added statically to the data, not generated at runtime


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
