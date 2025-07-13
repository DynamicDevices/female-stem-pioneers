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
    quote: "That brain of mine is something more than merely mortal; as time will show.",
    summary: "Often regarded as the first computer programmer for her work on Babbage's Analytical Engine.",
    shortDescription: "Ada Lovelace is often called the world's first computer programmer. She worked with Charles Babbage on his Analytical Engine and wrote the first algorithm meant for a machine. Ada believed that computers could do more than just math—they could create music and art, too! Her creative ideas inspire people to combine technology and imagination.",
    detailed_description: {
      early_life: "Born in 1815 to the famous poet Lord Byron, Ada was encouraged by her mother to study mathematics and science. She showed exceptional talent from an early age and was tutored by leading scientists of the day.",
      stem_journey: "At age 17, Ada met Charles Babbage and became fascinated by his mechanical computer, the Analytical Engine. She translated an article about it and added her own notes, including the first computer program ever written.",
      challenges: "As a woman in 19th-century England, Ada faced expectations to focus on domestic roles rather than science. She also struggled with health issues throughout her life.",
      achievements: "Ada wrote the first computer program - an algorithm for calculating numbers. She also predicted that computers could create music and graphics, envisioning their creative potential long before others.",
      legacy: "Ada is considered the first computer programmer, and the programming language Ada is named in her honor. She inspires millions of women in computer science today."
    },
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
    fun_fact: "Ada was the daughter of the poet Lord Byron.",
    
    // High Priority - New Metadata
    career_path: {
      first_job: "Mathematical assistant to Charles Babbage",
      career_highlights: ["Collaborated with leading scientists", "Published influential mathematical papers"],
      advice_for_students: "Follow your curiosity and don't let anyone tell you what you can't do. Mathematics and computing are for everyone."
    },
    student_resources: {
      books_for_students: ["Ada's Algorithm: How Lord Byron's Daughter Launched the Digital Age", "The Innovators by Walter Isaacson"],
      websites: ["code.org", "girlswhocode.com", "ada-lovelace-day.com"],
      programs: ["Computer Science summer camps", "Women in STEM mentorship programs"],
      advice: "Start with what excites you most - whether it's math, science, or building things. The connections will follow."
    },
    challenges: {
      academic: ["Limited formal education opportunities for women"],
      professional: ["Societal expectations that women shouldn't pursue science"],
      personal: ["Health issues throughout her life"],
      how_overcame: "Found supportive mentors like Charles Babbage and focused on her mathematical talents"
    },
    education_details: {
      high_school: "Private tutoring in mathematics and science",
      college_major: "Self-taught in advanced mathematics",
      key_courses: ["Advanced Mathematics", "Scientific Writing", "Logic"],
      study_tips: "Connect abstract concepts to real-world applications"
    },
    modern_impact: {
      current_applications: "Her work forms the foundation of modern computer programming",
      companies_using_her_work: ["All major tech companies", "Universities worldwide"],
      future_implications: "AI and machine learning build on her algorithmic concepts"
    },
    personal_info: {
      early_interests: ["Mathematics", "Poetry", "Science", "Logic"],
      family_background: "Daughter of famous poet Lord Byron",
      hobbies: ["Writing poetry", "Studying mathematics", "Scientific correspondence"],
      personality_traits: ["Analytical", "Creative", "Determined", "Visionary"]
    },
    cultural_background: {
      heritage: "British aristocracy and intellectual elite",
      cultural_influences: ["Victorian era scientific circles", "Romantic poetry movement", "British mathematical tradition"],
      cultural_challenges: ["Victorian gender roles", "Aristocratic expectations vs. scientific pursuits"],
      cultural_contributions: "Bridged romantic poetry and mathematical logic, showing how creativity and logic can coexist"
    }
  },
  {
    name: "Marie Curie",
    photo: "./images/marie-curie.jpg",
    birthDate: "1867",
    deathDate: "1934",
    country: "Poland/France",
    fields: ["Physics", "Chemistry"],
    roles: ["Physicist", "Chemist", "Professor"],
    quote: "One never notices what has been done; one can only see what remains to be done.",
    summary: "First woman to win a Nobel Prize and the only person to win in two different sciences.",
    shortDescription: "Marie Curie was a brilliant scientist who discovered the elements polonium and radium. She was the first woman to win a Nobel Prize and the only person to win in two different sciences—Physics and Chemistry. Her research led to life-saving medical advances like X-rays and cancer treatments. Marie's determination and curiosity opened doors for women in science everywhere.",
    detailed_description: {
      early_life: "Born in Poland in 1867, Marie showed exceptional talent in school despite restrictions on Polish students. Her parents were teachers who emphasized education, and she worked as a governess to save money for university.",
      stem_journey: "Marie moved to Paris in 1891 to study at the Sorbonne, often going without food to afford her studies. She earned degrees in physics and mathematics, then began research with Pierre Curie, whom she married.",
      challenges: "Marie faced discrimination as a woman in science and was denied admission to the University of Warsaw because she was female. She worked in poverty and faced resistance from male colleagues throughout her career.",
      achievements: "Marie discovered two new elements - polonium and radium - and coined the term 'radioactivity.' She won Nobel Prizes in both Physics (1903) and Chemistry (1911), the first person to win in two different sciences.",
      legacy: "Marie opened doors for women in science worldwide. Her research led to X-ray technology and cancer treatments. She remains a symbol of scientific excellence and determination."
    },
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
    fun_fact: "Her notebooks are still radioactive.",
    
    // High Priority - New Metadata
    career_path: {
      first_job: "Research assistant at the University of Paris",
      career_highlights: ["Led groundbreaking radioactivity research", "Became the first female professor at the University of Paris"],
      advice_for_students: "Persistence is key in science. Don't be afraid to work hard and question everything. Your gender doesn't determine your abilities."
    },
    student_resources: {
      books_for_students: ["Radioactive: Marie & Pierre Curie", "Marie Curie: A Life by Susan Quinn"],
      websites: ["nobelprize.org", "sciencegirls.org", "curie-museum.org"],
      programs: ["Physics summer programs", "Women in Science initiatives"],
      advice: "Find what fascinates you and pursue it with passion. Science needs diverse perspectives."
    },
    challenges: {
      academic: ["Limited access to higher education for women in Poland"],
      professional: ["Gender discrimination in academia", "Lack of funding for women researchers"],
      personal: ["Working while raising children", "Health issues from radiation exposure"],
      how_overcame: "Focused on her research despite obstacles and built a supportive scientific community"
    },
    education_details: {
      high_school: "Excelled in mathematics and science",
      college_major: "Physics and Mathematics",
      graduate_school: "Ph.D. in Physics from University of Paris",
      key_courses: ["Physics", "Chemistry", "Mathematics", "Research Methods"],
      study_tips: "Combine theoretical knowledge with hands-on experimentation"
    },
    modern_impact: {
      current_applications: "Her discoveries led to medical treatments and nuclear technology",
      companies_using_her_work: ["Medical imaging companies", "Nuclear power plants", "Research institutions"],
      future_implications: "Radioactivity research continues in cancer treatment and clean energy"
    },
    personal_info: {
      early_interests: ["Physics", "Chemistry", "Mathematics", "Scientific research"],
      family_background: "First in family to pursue higher education",
      hobbies: ["Reading scientific literature", "Laboratory work", "Teaching"],
      personality_traits: ["Dedicated", "Curious", "Persistent", "Innovative"]
    },
    cultural_background: {
      heritage: "Polish Jewish and French intellectual traditions",
      cultural_influences: ["Polish resistance to Russian occupation", "French scientific community", "Jewish intellectual tradition"],
      cultural_challenges: ["Anti-Semitism in Europe", "Polish nationalism vs. French assimilation", "Gender barriers in both cultures"],
      cultural_contributions: "Brought Polish determination and French scientific rigor to her work, transcending national boundaries"
    }
  },
  {
    name: "Katherine Johnson",
    photo: "./images/katherine-johnson.jpg",
    birthDate: "1918",
    deathDate: "2020",
    country: "United States",
    fields: ["Mathematics", "Aerospace"],
    roles: ["Mathematician", "NASA Scientist"],
    quote: "Girls are capable of doing everything men are capable of doing.",
    summary: "Trailblazing NASA mathematician whose calculations enabled the first U.S. spaceflights.",
    shortDescription: "Katherine Johnson was a mathematician whose calculations helped launch the first American astronauts into space. She worked at NASA when 'computers' were people who did math by hand, and her work was so trusted that John Glenn asked her to double-check the numbers before his historic flight. Despite facing racial and gender barriers, Katherine's talent and perseverance made her a trailblazer for women and African Americans in STEM.",
    detailed_description: {
      early_life: "Born in 1918 in West Virginia, Katherine showed exceptional mathematical ability from childhood. She graduated high school at 14 and entered college at 15, where she excelled in mathematics.",
      stem_journey: "Katherine became a teacher after college, then joined NASA in 1953 as a 'computer' - someone who performed mathematical calculations. She quickly proved her abilities and became trusted with critical calculations.",
      challenges: "As an African American woman in the segregated South, Katherine faced both racial and gender discrimination. She was often the only woman in meetings and had to fight for recognition of her work.",
      achievements: "Katherine calculated trajectories for Alan Shepard's first space flight and John Glenn's orbital flight. Her calculations were so trusted that Glenn insisted she verify the computer's work before his flight.",
      legacy: "Katherine broke barriers for African American women in STEM and inspired generations of students. Her story was featured in 'Hidden Figures,' bringing her achievements to worldwide attention."
    },
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
    fun_fact: "Graduated high school at 14.",
    
    // High Priority - New Metadata
    career_path: {
      first_job: "Teacher at a segregated school",
      career_highlights: ["Joined NASA as a 'computer'", "Became a key figure in space missions", "Received Presidential Medal of Freedom"],
      advice_for_students: "Don't let anyone tell you that you can't do something because of who you are. Your abilities matter more than your background."
    },
    student_resources: {
      books_for_students: ["Hidden Figures by Margot Lee Shetterly", "Reaching for the Moon by Katherine Johnson"],
      websites: ["nasa.gov", "blackgirlscode.org", "mathcounts.org"],
      programs: ["NASA STEM programs", "Mathematics competitions", "Space camp"],
      advice: "Mathematics is everywhere - look for it in the world around you and practice every day."
    },
    challenges: {
      academic: ["Limited educational opportunities due to segregation"],
      professional: ["Racial and gender discrimination at NASA", "Being overlooked for promotions"],
      personal: ["Balancing work and family", "Being the only woman in many meetings"],
      how_overcame: "Focused on her mathematical abilities and proved her worth through excellent work"
    },
    education_details: {
      high_school: "Graduated at age 14 with highest honors",
      college_major: "Mathematics with French minor",
      graduate_school: "Completed graduate courses in mathematics",
      key_courses: ["Advanced Mathematics", "Calculus", "Analytical Geometry"],
      study_tips: "Practice problems daily and understand the 'why' behind formulas"
    },
    modern_impact: {
      current_applications: "Her calculations methods are still used in space missions",
      companies_using_her_work: ["NASA", "SpaceX", "Boeing", "Aerospace companies"],
      future_implications: "Her work continues to inspire space exploration and STEM education"
    },
    personal_info: {
      early_interests: ["Mathematics", "Numbers", "Space", "Problem-solving"],
      family_background: "Fourth of five children, parents emphasized education",
      hobbies: ["Reading", "Mathematics puzzles", "Teaching"],
      personality_traits: ["Precise", "Determined", "Humble", "Brilliant"]
    },
    cultural_background: {
      heritage: "African American community in segregated West Virginia",
      cultural_influences: ["Black church community", "Historically Black Colleges", "Civil Rights Movement"],
      cultural_challenges: ["Jim Crow segregation", "Limited educational opportunities", "Racial discrimination in STEM"],
      cultural_contributions: "Pioneered African American representation in space science and inspired generations of Black women in STEM"
    }
  },
  {
    name: "Grace Hopper",
    photo: "./images/grace-hopper.jpg",
    birthDate: "1906",
    deathDate: "1992",
    country: "United States",
    fields: ["Computer Science", "Mathematics"],
    roles: ["Computer Scientist", "Rear Admiral, U.S. Navy"],
    quote: "The most dangerous phrase in the language is, 'We've always done it this way.'",
    summary: "Developed the first compiler and popularized the term 'debugging' in computing.",
    shortDescription: "Grace Hopper was a computer scientist and Navy Rear Admiral who helped invent the first computer compiler, making it possible for people to write programs in English-like languages. She loved solving problems and wasn't afraid to challenge the status quo—she even found the first real computer 'bug'! Grace's work made computers easier for everyone to use, and she inspired generations of women in technology and the military.",
    detailed_description: {
      early_life: "Born in 1906 in New York City, Grace showed curiosity about how things worked from an early age. Her parents believed in equal education for boys and girls, which was unusual for the time.",
      stem_journey: "Grace earned degrees in mathematics and physics from Vassar College, then a Ph.D. from Yale. During World War II, she joined the Navy and was assigned to work on the Harvard Mark I computer.",
      challenges: "Grace faced challenges as a woman in both the military and the emerging field of computer science. She was often the only woman in technical meetings and had to prove herself repeatedly.",
      achievements: "Grace developed the first compiler, which translated high-level programming languages into machine code. She popularized the term 'debugging' and led the development of COBOL, one of the first programming languages.",
      legacy: "Grace is known as the 'Queen of Code' and made computers accessible to non-specialists. The Grace Hopper Celebration of Women in Computing is named in her honor."
    },
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
    fun_fact: "Had a clock in her office that ran backwards.",
    
    // High Priority - New Metadata
    career_path: {
      first_job: "Mathematics professor at Vassar College",
      career_highlights: ["Joined the Navy during WWII", "Developed the first compiler", "Became Rear Admiral"],
      advice_for_students: "Don't be afraid to try new things and think differently. The best innovations often come from asking 'why not?'"
    },
    student_resources: {
      books_for_students: ["Grace Hopper and the Invention of the Information Age", "The Computer and the Brain by John von Neumann"],
      websites: ["code.org", "girlswhocode.com", "gracehopper.org"],
      programs: ["Computer Science summer camps", "Navy STEM programs", "Coding bootcamps"],
      advice: "Learn to code early and often. Programming is a language that opens doors to countless opportunities."
    },
    challenges: {
      academic: ["Being one of few women in mathematics"],
      professional: ["Gender barriers in military and technology", "Skepticism about high-level programming"],
      personal: ["Balancing military career with personal life"],
      how_overcame: "Proved her ideas through demonstration and built strong professional networks"
    },
    education_details: {
      high_school: "Excelled in mathematics and science",
      college_major: "Mathematics and Physics",
      graduate_school: "Ph.D. in Mathematics from Yale University",
      key_courses: ["Mathematics", "Physics", "Computer Science", "Military Science"],
      study_tips: "Learn the fundamentals thoroughly - they're the foundation for everything else"
    },
    modern_impact: {
      current_applications: "Her compiler concepts are used in all modern programming languages",
      companies_using_her_work: ["All software companies", "Universities", "Government agencies"],
      future_implications: "Her work enables AI, machine learning, and all modern software development"
    },
    personal_info: {
      early_interests: ["Mathematics", "Mechanical devices", "Problem-solving", "Military service"],
      family_background: "Encouraged to pursue education and independence",
      hobbies: ["Sailing", "Teaching", "Military history"],
      personality_traits: ["Innovative", "Determined", "Practical", "Leadership-oriented"]
    },
    cultural_background: {
      heritage: "American Protestant and military traditions",
      cultural_influences: ["American individualism", "Military discipline and service", "Yale University academic culture"],
      cultural_challenges: ["Gender barriers in military", "Academic elitism", "Traditional gender roles in 1940s America"],
      cultural_contributions: "Broke barriers for women in both military and technology, showing American innovation and determination"
    }
  },
  {
    name: "Rosalind Franklin",
    photo: "./images/rosalind-franklin.png",
    birthDate: "1920",
    deathDate: "1958",
    country: "United Kingdom",
    fields: ["Chemistry", "Biology"],
    roles: ["Chemist", "X-ray Crystallographer"],
    quote: "Science and everyday life cannot and should not be separated.",
    summary: "Her X-ray diffraction work was key to understanding the structure of DNA.",
    shortDescription: "Rosalind Franklin was a chemist whose X-ray photographs revealed the structure of DNA, the molecule that carries our genetic code. Her famous 'Photo 51' was key to understanding how DNA works. Even though she faced challenges and wasn't fully recognized during her lifetime, Rosalind's careful research changed science forever and paved the way for discoveries in genetics and medicine.",
    detailed_description: {
      early_life: "Born in 1920 in London to a wealthy Jewish family, Rosalind showed exceptional academic ability from an early age. Her family encouraged her education, and she attended St. Paul's Girls' School.",
      stem_journey: "Rosalind earned a degree in chemistry from Cambridge University, then a Ph.D. in physical chemistry. She worked on coal structures before moving to Paris to study X-ray crystallography.",
      challenges: "Rosalind faced gender discrimination in science during the 1950s. She was often excluded from important meetings and her work was sometimes overlooked or attributed to male colleagues.",
      achievements: "Rosalind produced the famous 'Photo 51,' which showed the helical structure of DNA. Her work provided the key evidence that led to the discovery of the double helix structure.",
      legacy: "Though not fully recognized during her lifetime, Rosalind is now recognized as a pioneer in structural biology. Her story highlights the importance of recognizing women's contributions in science."
    },
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
    fun_fact: "Enjoyed hiking and traveling.",
    
    // High Priority - New Metadata
    career_path: {
      first_job: "Research scientist at the British Coal Utilization Research Association",
      career_highlights: ["Pioneered X-ray crystallography techniques", "Made crucial contributions to DNA structure discovery"],
      advice_for_students: "Focus on the quality of your work rather than seeking recognition. Good science speaks for itself."
    },
    student_resources: {
      books_for_students: ["Rosalind Franklin: The Dark Lady of DNA", "The Double Helix by James Watson"],
      websites: ["dnaftb.org", "sciencegirls.org", "crystallography.org"],
      programs: ["Chemistry summer programs", "Women in Science initiatives", "X-ray crystallography workshops"],
      advice: "Develop strong technical skills and maintain high standards in your research."
    },
    challenges: {
      academic: ["Gender bias in scientific institutions"],
      professional: ["Lack of recognition for her contributions", "Competitive and sometimes hostile work environment"],
      personal: ["Working in male-dominated field", "Health issues later in life"],
      how_overcame: "Maintained focus on scientific excellence and built collaborative relationships"
    },
    education_details: {
      high_school: "Excelled in science and mathematics",
      college_major: "Physical Chemistry",
      graduate_school: "Ph.D. in Physical Chemistry from Cambridge University",
      key_courses: ["Chemistry", "Physics", "Mathematics", "X-ray Crystallography"],
      study_tips: "Master the technical skills and understand the underlying principles"
    },
    modern_impact: {
      current_applications: "Her X-ray techniques are used in drug discovery and materials science",
      companies_using_her_work: ["Pharmaceutical companies", "Research institutions", "Biotech firms"],
      future_implications: "Her methods continue to advance structural biology and drug development"
    },
    personal_info: {
      early_interests: ["Chemistry", "Physics", "Mathematics", "Scientific research"],
      family_background: "Well-educated family that supported her scientific interests",
      hobbies: ["Hiking", "Traveling", "Reading scientific literature"],
      personality_traits: ["Precise", "Independent", "Thorough", "Dedicated"]
    },
    cultural_background: {
      heritage: "British Jewish intellectual and scientific community",
      cultural_influences: ["British scientific tradition", "Jewish intellectual heritage", "Cambridge University culture"],
      cultural_challenges: ["Anti-Semitism in British society", "Gender barriers in British academia", "Class distinctions in British science"],
      cultural_contributions: "Brought Jewish intellectual rigor and British scientific precision to her groundbreaking research"
    }
  },
  {
    name: "Chien-Shiung Wu",
    photo: "./images/chien-shiung-wu.jpg",
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
    ]
  },
  {
    name: "Rachel Carson",
    photo: "./images/rachel-carson.svg",
    birthDate: "1907",
    deathDate: "1964",
    country: "United States",
    fields: ["Biology", "Environmental Science"],
    roles: ["Marine Biologist", "Environmentalist", "Writer"],
    quote: "The more clearly we can focus our attention on the wonders and realities of the universe about us, the less taste we shall have for destruction.",
    summary: "Marine biologist and conservationist whose book 'Silent Spring' launched the environmental movement.",
    shortDescription: "Rachel Carson was a marine biologist who became one of the most important environmentalists of the 20th century. Her book 'Silent Spring' warned about the dangers of pesticides and helped start the environmental protection movement. Rachel showed how science writing could change the world and protect our planet.",
    achievements: [
      "Wrote 'Silent Spring' which launched the environmental movement",
      "Worked as a marine biologist for the U.S. government",
      "Helped ban harmful pesticides like DDT",
      "Pioneered environmental science communication"
    ],
    awards: [
      "National Book Award",
      "Presidential Medal of Freedom (posthumous)"
    ],
    publications: [
      { title: "Silent Spring", year: 1962 },
      { title: "The Sea Around Us", year: 1951 }
    ],
    education: [
      { degree: "Master's", field: "Zoology", institution: "Johns Hopkins University" }
    ],
    timeline: [
      { year: 1951, event: "Published 'The Sea Around Us'" },
      { year: 1962, event: "Published 'Silent Spring'" },
      { year: 1972, event: "DDT banned in the United States" }
    ],
    barriers: [
      "Faced criticism from chemical industry",
      "Gender discrimination in science"
    ],
    impact: "Launched the environmental movement and changed how we think about protecting our planet.",
    media: [
      { type: "book", title: "Silent Spring", url: "https://www.rachelcarson.org/" }
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Rachel_Carson" },
      { title: "Rachel Carson Council", url: "https://rachelcarsoncouncil.org/" }
    ],
    mentorship: "Inspired generations of environmental scientists and activists.",
    fun_fact: "Rachel originally wanted to be a writer but fell in love with biology."
  },
  {
    name: "Hedy Lamarr",
    photo: "./images/hedy-lamarr.svg",
    birthDate: "1914",
    deathDate: "2000",
    country: "Austria/United States",
    fields: ["Engineering", "Technology"],
    roles: ["Inventor", "Actress"],
    quote: "The brains of people are more interesting than the looks, I think.",
    summary: "Hollywood actress and brilliant inventor who developed frequency-hopping technology used in modern wireless communications.",
    shortDescription: "Hedy Lamarr was a famous Hollywood actress who was also a brilliant inventor! She co-invented frequency-hopping technology that helps keep wireless communications secure. This technology is now used in WiFi, Bluetooth, and GPS. Hedy proved that beauty and brains can go together, and her invention helps protect our privacy every day.",
    achievements: [
      "Co-invented frequency-hopping spread spectrum technology",
      "Technology now used in WiFi, Bluetooth, and GPS",
      "Successful Hollywood actress",
      "Pioneered secure wireless communications"
    ],
    awards: [
      "National Inventors Hall of Fame (2014, posthumous)"
    ],
    publications: [],
    education: [
      { degree: "Self-taught", field: "Engineering", institution: "Independent study" }
    ],
    timeline: [
      { year: 1942, event: "Patented frequency-hopping technology" },
      { year: 2014, event: "Inducted into National Inventors Hall of Fame" }
    ],
    barriers: [
      "Stereotypes about actresses not being serious inventors",
      "Gender discrimination in engineering"
    ],
    impact: "Her invention revolutionized wireless communications and is used in billions of devices today.",
    media: [
      { type: "documentary", title: "Bombshell: The Hedy Lamarr Story", url: "https://www.imdb.com/title/tt7282468/" }
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Hedy_Lamarr" },
      { title: "National Inventors Hall of Fame", url: "https://www.invent.org/inductees/hedy-lamarr" }
    ],
    mentorship: "Inspired women to pursue both artistic and scientific careers.",
    fun_fact: "Hedy was called 'the most beautiful woman in the world' but preferred to be known for her inventions."
  },
  {
    name: "Shirley Ann Jackson",
    photo: "./images/shirley-ann-jackson.svg",
    birthDate: "1946",
    country: "United States",
    fields: ["Physics", "Engineering"],
    roles: ["Physicist", "University President", "Regulator"],
    quote: "You have to be prepared to work hard and to be persistent and to be focused.",
    summary: "First African American woman to earn a Ph.D. from MIT and first woman to chair the U.S. Nuclear Regulatory Commission.",
    shortDescription: "Shirley Ann Jackson is a brilliant physicist who broke many barriers. She was the first African American woman to earn a Ph.D. from MIT and later became the first woman to lead the U.S. Nuclear Regulatory Commission. Now she's the president of Rensselaer Polytechnic Institute, one of the top engineering schools in the country. Shirley shows that with hard work and determination, you can achieve anything in STEM.",
    achievements: [
      "First African American woman to earn a Ph.D. from MIT",
      "First woman to chair the U.S. Nuclear Regulatory Commission",
      "President of Rensselaer Polytechnic Institute",
      "Pioneering research in theoretical physics"
    ],
    awards: [
      "National Medal of Science",
      "Vannevar Bush Award",
      "Elected to National Academy of Engineering"
    ],
    publications: [
      { title: "Theoretical Physics Research", field: "Physics" }
    ],
    education: [
      { degree: "Ph.D.", field: "Physics", institution: "Massachusetts Institute of Technology" }
    ],
    timeline: [
      { year: 1968, event: "Earned bachelor's degree from MIT" },
      { year: 1973, event: "First African American woman to earn Ph.D. from MIT" },
      { year: 1995, event: "Became chair of U.S. Nuclear Regulatory Commission" },
      { year: 1999, event: "Became president of Rensselaer Polytechnic Institute" }
    ],
    barriers: [
      "Racial discrimination in academia",
      "Gender discrimination in physics",
      "Being one of few African American women in her field"
    ],
    impact: "Opened doors for women and minorities in physics and engineering, leading major institutions.",
    media: [
      { type: "article", title: "Shirley Ann Jackson: A Trailblazer in Physics", url: "https://www.aps.org/publications/apsnews/201904/jackson.cfm" }
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Shirley_Ann_Jackson" },
      { title: "RPI President", url: "https://president.rpi.edu/" }
    ],
    mentorship: "Mentors countless students and advocates for diversity in STEM.",
    fun_fact: "Shirley was one of only two African American students in her MIT graduating class."
  },
  {
    name: "Caroline Keep",
    photo: "./images/caroline-keep.svg",
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
    ]
  },
  {
    name: "Princy Johnson",
    photo: "./images/princy-johnson.svg",
    birthDate: "1990",
    country: "India",
    fields: ["Engineering", "Robotics"],
    roles: ["Engineer", "Robotics Researcher"],
    quote: "Innovation is seeing what everybody has seen and thinking what nobody has thought.",
    summary: "Robotics engineer and researcher advancing automation and AI in India.",
    achievements: [
      "Developed low-cost robotics solutions for education",
      "Published research on AI and automation",
      "Mentors young women in engineering"
    ]
  },
  {
    name: "Maryam Mirzakhani",
    photo: "./images/maryam-mirzakhani.svg",
    birthDate: "1977",
    deathDate: "2017",
    country: "Iran",
    fields: ["Mathematics"],
    roles: ["Mathematician", "Professor"],
    quote: "The beauty of mathematics only shows itself to more patient followers.",
    summary: "First woman to win the Fields Medal, the highest honor in mathematics.",
    achievements: [
      "First woman and first Iranian to win the Fields Medal",
      "Pioneered research in geometry and dynamical systems",
      "Professor at Stanford University"
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
    summary: "Discovered artemisinin, saving millions from malaria; Nobel Prize winner.",
    achievements: [
      "Discovered artemisinin for malaria treatment",
      "First Chinese woman to win a Nobel Prize in Physiology or Medicine",
      "Transformed global malaria treatment"
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
      "Advocate for science education"
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
    quote: "If you know you are on the right track, if you have this inner knowledge, then nobody can turn you off... no matter what they say.",
    summary: "Nobel Prize-winning geneticist who discovered transposable elements (jumping genes).",
    achievements: [
      "Discovered genetic transposition",
      "First woman to win an unshared Nobel Prize in Physiology or Medicine",
      "Pioneered maize cytogenetics"
    ]
  },
  {
    name: "Lise Meitner",
    photo: "./images/lise-meitner.svg",
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
      "Paved the way for women in computing"
    ]
  },
  {
    name: "Ellen Ochoa",
    photo: "./images/ellen-ochoa.svg",
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
    summary: "Nobel Prize-winning crystallographer who revealed the structure of ribosomes.",
    achievements: [
      "First woman in 45 years to win Nobel Prize in Chemistry",
      "Solved structure of ribosomes",
      "Advanced antibiotic research"
    ]
  },
  {
    name: "Valentina Tereshkova",
    photo: "./images/valentina-tereshkova.svg",
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
    ]
  },
  {
    name: "Radia Perlman",
    photo: "./images/radia-perlman.jpg",
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
    summary: "First woman to earn a doctorate in any field in Germany; contributed to calculus and analysis.",
    achievements: [
      "First woman to earn a doctorate in Germany",
      "Published influential mathematics textbooks",
      "Advanced the field of calculus"
    ]
  },
  {
    name: "Mildred Dresselhaus",
    photo: "./images/mildred-dresselhaus.svg",
    birthDate: "1930",
    deathDate: "2017",
    country: "United States",
    fields: ["Physics", "Engineering"],
    roles: ["Physicist", "Engineer"],
    quote: "My advice is: work hard, have fun, and make history.",
    summary: "Known as the 'Queen of Carbon Science' for her pioneering work in nanotechnology.",
    achievements: [
      "Pioneered research in carbon nanostructures",
      "First female Institute Professor at MIT",
      "National Medal of Science recipient"
    ]
  },
  {
    name: "Flossie Wong-Staal",
    photo: "./images/flossie-wong-staal.svg",
    birthDate: "1947",
    deathDate: "2020",
    country: "China/United States",
    fields: ["Biology", "Virology"],
    roles: ["Virologist", "Molecular Biologist"],
    quote: "Science is a way of thinking much more than it is a body of knowledge.",
    summary: "First to clone HIV and determine its gene functions, advancing AIDS research.",
    achievements: [
      "First to clone HIV",
      "Mapped HIV gene functions",
      "Leader in AIDS research"
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
    quote: "Algebra is but written geometry and geometry is but written algebra.",
    summary: "Pioneered elasticity theory and made contributions to number theory despite facing gender barriers.",
    achievements: [
      "Pioneered elasticity theory",
      "Contributed to Fermat's Last Theorem",
      "First woman to win a prize from the Paris Academy of Sciences"
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
    summary: "Ancient Chinese inventor credited with the creation of the mechanical loom.",
    achievements: [
      "Invented the mechanical loom",
      "Advanced textile technology in ancient China",
      "Role model for women inventors"
    ]
  },
  {
    name: "Mary Golda Ross",
    photo: "./images/mary-golda-ross.svg",
    birthDate: "1908",
    deathDate: "2008",
    country: "United States",
    fields: ["Engineering", "Mathematics"],
    roles: ["Engineer", "Mathematician"],
    quote: "To function efficiently, any group of people must have faith in their leader.",
    summary: "First Native American female engineer; worked on NASA's space program.",
    achievements: [
      "First Native American female engineer",
      "Helped develop interplanetary space probes",
      "Pioneer in aerospace engineering"
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
      "Advanced bacterial genetics"
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
    summary: "Her work on satellite geodesy was crucial to the development of GPS.",
    achievements: [
      "Developed mathematical modeling for GPS",
      "Pioneered satellite geodesy",
      "Inducted into the Air Force Space and Missile Pioneers Hall of Fame"
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
    quote: "My methods are really methods of working and thinking; this is why they have crept in everywhere anonymously.",
    summary: "Revolutionary mathematician whose work on abstract algebra and theoretical physics transformed modern mathematics.",
    achievements: [
      "Developed Noether's theorem linking symmetry and conservation laws",
      "Founded abstract algebra",
      "First woman to receive habilitation in Germany"
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
    quote: "I am not afraid of difficulties, and I will not be discouraged by failures.",
    summary: "Qing dynasty astronomer and mathematician who made significant contributions to lunar eclipse calculations.",
    achievements: [
      "Calculated lunar and solar eclipses",
      "Wrote mathematical treatises",
      "Pioneered women's education in science"
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
    summary: "Self-taught paleontologist who discovered the first complete ichthyosaur skeleton and revolutionized fossil hunting.",
    achievements: [
      "Discovered first complete ichthyosaur skeleton",
      "Found first complete plesiosaur",
      "Pioneered fossil hunting techniques"
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
    quote: "Science is not a luxury but a necessity for the progress of humanity.",
    summary: "First Indian woman to receive a Doctor of Science degree and pioneer in medicinal chemistry.",
    achievements: [
      "First Indian woman to receive Doctor of Science",
      "Discovered anti-malarial compounds",
      "Pioneered research in medicinal plants"
    ]
  },
  {
    name: "Dorothy Hodgkin",
    photo: "./images/dorothy-hodgkin.svg",
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
    ]
  },
  {
    name: "Sofia Kovalevskaya",
    photo: "./images/sofia-kovalevskaya.svg",
    birthDate: "1850",
    deathDate: "1891",
    country: "Russia",
    fields: ["Mathematics", "Physics"],
    roles: ["Mathematician", "Professor"],
    quote: "It is impossible to be a mathematician without being a poet in soul.",
    summary: "First woman to earn a doctorate in mathematics and first female professor in Northern Europe.",
    achievements: [
      "First woman to earn mathematics doctorate",
      "First female professor in Northern Europe",
      "Pioneered research in partial differential equations"
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
    quote: "When people have their biases and prejudices, yes, I am aware. My head is not in the sand. But my thing is, if I can't work with you, I will work around you.",
    summary: "NASA computer scientist and mathematician who developed software for rocket launches and energy systems.",
    achievements: [
      "Developed software for Centaur rocket",
      "Pioneered energy storage systems",
      "Helped develop hybrid vehicle technology"
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
    summary: "Second African American woman to earn a Ph.D. in mathematics and pioneer in computer programming.",
    achievements: [
      "Second African American woman with math Ph.D.",
      "Worked on NASA space programs",
      "Pioneered computer programming education"
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
    quote: "The path from dreams to success does exist. May you have the vision to find it, the courage to get on to it, and the perseverance to follow it.",
    summary: "First Indian-born woman in space and aerospace engineer who inspired millions worldwide.",
    achievements: [
      "First Indian-born woman in space",
      "Mission specialist on Space Shuttle Columbia",
      "Pioneered aerospace engineering research"
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
    summary: "First African American female engineer at NASA and advocate for women in STEM.",
    achievements: [
      "First African American female engineer at NASA",
      "Worked on supersonic flight research",
      "Advocated for women and minorities in STEM"
    ]
  },
  {
    name: "Rita Levi-Montalcini",
    photo: "./images/rita-levi-montalcini.svg",
    birthDate: "1909",
    deathDate: "2012",
    country: "Italy",
    fields: ["Biology", "Neuroscience"],
    roles: ["Neurobiologist", "Professor"],
    quote: "Above all, don't fear difficult moments. The best comes from them.",
    summary: "Nobel Prize-winning neurobiologist who discovered nerve growth factor.",
    achievements: [
      "Nobel Prize in Physiology or Medicine (1986)",
      "Discovered nerve growth factor",
      "Pioneered research in neurobiology"
    ]
  },
  {
    name: "Gertrude Elion",
    photo: "./images/gertrude-elion.svg",
    birthDate: "1918",
    deathDate: "1999",
    country: "United States",
    fields: ["Chemistry", "Pharmacology"],
    roles: ["Chemist", "Pharmacologist"],
    quote: "Don't let others discourage you or tell you that you can't do it.",
    summary: "Nobel Prize-winning chemist who developed drugs for leukemia, herpes, and organ transplants.",
    achievements: [
      "Nobel Prize in Physiology or Medicine (1988)",
      "Developed drugs for leukemia and herpes",
      "Pioneered rational drug design"
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
    summary: "Nobel Prize-winning physicist who developed the nuclear shell model.",
    achievements: [
      "Nobel Prize in Physics (1963)",
      "Developed nuclear shell model",
      "Second woman to win Nobel Prize in Physics"
    ]
  },
  {
    name: "Rosalyn Yalow",
    photo: "./images/rosalyn-yalow.svg",
    birthDate: "1921",
    deathDate: "2011",
    country: "United States",
    fields: ["Physics", "Medicine"],
    roles: ["Medical Physicist", "Researcher"],
    quote: "The world cannot afford the loss of the talents of half its people if we are to solve the many problems which beset us.",
    summary: "Nobel Prize-winning medical physicist who developed radioimmunoassay.",
    achievements: [
      "Nobel Prize in Physiology or Medicine (1977)",
      "Developed radioimmunoassay technique",
      "Pioneered nuclear medicine"
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
    summary: "Nobel Prize-winning molecular biologist who discovered telomerase.",
    achievements: [
      "Nobel Prize in Physiology or Medicine (2009)",
      "Discovered telomerase enzyme",
      "Pioneered telomere research"
    ]
  },
  {
    name: "Françoise Barré-Sinoussi",
    photo: "./images/francoise-barre-sinoussi.svg",
    birthDate: "1947",
    country: "France",
    fields: ["Virology", "Biology"],
    roles: ["Virologist", "Researcher"],
    quote: "Science is not about being the first to discover something, but about being the first to understand it.",
    summary: "Nobel Prize-winning virologist who co-discovered HIV.",
    achievements: [
      "Nobel Prize in Physiology or Medicine (2008)",
      "Co-discovered HIV virus",
      "Pioneered AIDS research"
    ]
  },
  {
    name: "Kimberly Bryant",
    photo: "./images/kimberly-bryant.jpg",
    birthDate: "1967",
    country: "United States",
    fields: ["Computer Science", "Technology"],
    roles: ["Engineer", "Entrepreneur"],
    quote: "I want to create opportunities for girls to see themselves as creators, not just consumers of technology.",
    summary: "Founder of Black Girls Code, empowering young women of color in technology.",
    achievements: [
      "Founded Black Girls Code",
      "Advocated for diversity in tech",
      "Inspired thousands of young women"
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
      "Pioneered particle physics research"
    ]
  },
  {
    name: "Sally Ride",
    photo: "./images/sally-ride.svg",
    birthDate: "1951",
    deathDate: "2012",
    country: "United States",
    fields: ["Physics", "Astronomy"],
    roles: ["Astronaut", "Physicist"],
    quote: "Science is fun. Science is curiosity. We all have natural curiosity.",
    summary: "First American woman in space and advocate for science education.",
    achievements: [
      "First American woman in space",
      "Youngest American astronaut",
      "Founded Sally Ride Science"
    ]
  },
  {
    name: "Hypatia",
    photo: "./images/hypatia.svg",
    birthDate: "350",
    deathDate: "415",
    country: "Egypt",
    fields: ["Mathematics", "Astronomy", "Philosophy"],
    roles: ["Mathematician", "Astronomer", "Philosopher"],
    quote: "Reserve your right to think, for even to think wrongly is better than not to think at all.",
    summary: "Ancient Greek mathematician, astronomer, and philosopher who headed the Neoplatonic school in Alexandria.",
    achievements: [
      "First documented female mathematician",
      "Edited and commented on mathematical texts",
      "Pioneered astronomical observations"
    ]
  },
  {
    name: "Caroline Herschel",
    photo: "./images/caroline-herschel.svg",
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
    quote: "We especially need imagination in science. It is not all mathematics, nor all logic, but it is somewhat beauty and poetry.",
    summary: "First American woman to work as a professional astronomer and discover a comet.",
    achievements: [
      "First American woman astronomer",
      "Discovered 'Miss Mitchell's Comet'",
      "First woman elected to American Academy of Arts and Sciences"
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
    quote: "Science is a way of thinking much more than it is a body of knowledge.",
    summary: "Revolutionary astronomer who transformed our understanding of galaxy evolution and cosmology.",
    achievements: [
      "Pioneered galaxy evolution theory",
      "Revolutionized cosmology",
      "First woman to receive American Astronomical Society's highest award"
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
    summary: "Pioneering astronomer whose work on galaxy rotation curves provided evidence for dark matter.",
    achievements: [
      "Provided evidence for dark matter",
      "Studied galaxy rotation curves",
      "First woman to receive Royal Astronomical Society's Gold Medal"
    ]
  },
  {
    name: "Jocelyn Bell Burnell",
    photo: "./images/jocelyn-bell-burnell.svg",
    birthDate: "1943",
    country: "United Kingdom",
    fields: ["Astronomy", "Physics"],
    roles: ["Astrophysicist", "Professor"],
    quote: "I am not myself a believer, but I feel that if God is anywhere, he is in the stars.",
    summary: "Discovered pulsars as a graduate student, though Nobel Prize went to her supervisor.",
    achievements: [
      "Discovered first pulsar",
      "Pioneered radio astronomy",
      "Advocate for women in physics"
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
    quote: "The more I study the heavens, the more I am convinced that they are the work of a supreme intelligence.",
    summary: "Discovered the period-luminosity relationship for Cepheid variables, enabling measurement of cosmic distances.",
    achievements: [
      "Discovered Cepheid variable period-luminosity relationship",
      "Enabled measurement of cosmic distances",
      "Work led to discovery of universe expansion"
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
    quote: "I am the only person, man or woman, who has ever done this kind of work.",
    summary: "Pioneering astronomer who classified hundreds of thousands of stars and developed the stellar classification system.",
    achievements: [
      "Classified over 350,000 stars",
      "Developed stellar classification system",
      "First woman to receive honorary doctorate from Oxford"
    ]
  },
  {
    name: "Cecilia Payne-Gaposchkin",
    photo: "./images/cecilia-payne-gaposchkin.svg",
    birthDate: "1900",
    deathDate: "1979",
    country: "United Kingdom/United States",
    fields: ["Astronomy", "Physics"],
    roles: ["Astronomer", "Professor"],
    quote: "The reward of the young scientist is the emotional thrill of being the first person in the history of the world to see something or to understand something.",
    summary: "First person to discover that stars are made primarily of hydrogen and helium.",
    achievements: [
      "Discovered stars are made of hydrogen and helium",
      "First woman to head Harvard astronomy department",
      "Pioneered stellar spectroscopy"
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
    quote: "I was told that women could not be astronomers. I found that hard to believe.",
    summary: "Pioneering astronomer who discovered how elements are formed in stars and fought for women's access to telescopes.",
    achievements: [
      "Discovered stellar nucleosynthesis",
      "Fought for women's telescope access",
      "First woman to serve as American Astronomical Society president"
    ]
  },
  {
    name: "Katherine Freese",
    photo: "./images/katherine-freese.svg",
    birthDate: "1957",
    country: "United States",
    fields: ["Physics", "Astronomy"],
    roles: ["Physicist", "Professor"],
    quote: "The universe is full of mysteries, and dark matter is one of the biggest.",
    summary: "Leading theoretical physicist who pioneered research on dark matter and the early universe.",
    achievements: [
      "Pioneered dark matter research",
      "Studied early universe physics",
      "Advocate for women in physics"
    ]
  },
  {
    name: "Alice Ball",
    photo: "./images/alice-ball.svg",
    birthDate: "1892",
    deathDate: "1916",
    country: "United States",
    fields: ["Chemistry", "Medicine"],
    roles: ["Chemist", "Researcher"],
    quote: "I have always tried to do what I could to help others.",
    summary: "First African American woman to receive a master's degree from University of Hawaii and developed treatment for leprosy.",
    achievements: [
      "Developed leprosy treatment",
      "First African American woman with master's from UH",
      "Pioneered chaulmoogra oil extraction"
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
    quote: "I was fortunate that I was working under a man who was very much interested in making new discoveries.",
    summary: "Invented Kevlar, the lightweight, bullet-resistant fiber used in protective gear and many other applications.",
    achievements: [
      "Invented Kevlar fiber",
      "Developed bullet-resistant materials",
      "Inducted into National Inventors Hall of Fame"
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
    summary: "Nobel Prize-winning physicist who developed the nuclear shell model.",
    achievements: [
      "Nobel Prize in Physics (1963)",
      "Developed nuclear shell model",
      "Second woman to win Nobel Prize in Physics"
    ]
  },
  {
    name: "Rita Levi-Montalcini",
    photo: "./images/rita-levi-montalcini.svg",
    birthDate: "1909",
    deathDate: "2012",
    country: "Italy",
    fields: ["Biology", "Neuroscience"],
    roles: ["Neurobiologist", "Professor"],
    quote: "Above all, don't fear difficult moments. The best comes from them.",
    summary: "Nobel Prize-winning neurobiologist who discovered nerve growth factor.",
    achievements: [
      "Nobel Prize in Physiology or Medicine (1986)",
      "Discovered nerve growth factor",
      "Pioneered research in neurobiology"
    ]
  },
  {
    name: "Jocelyn Bell Burnell",
    photo: "./images/jocelyn-bell-burnell.svg",
    birthDate: "1943",
    country: "United Kingdom",
    fields: ["Astronomy", "Physics"],
    roles: ["Astrophysicist", "Professor"],
    quote: "I am not myself a believer, but I feel that if God is anywhere, he is in the stars.",
    summary: "Discovered pulsars as a graduate student, though Nobel Prize went to her supervisor.",
    achievements: [
      "Discovered first pulsar",
      "Pioneered radio astronomy",
      "Advocate for women in physics"
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
    quote: "The more I study the heavens, the more I am convinced that they are the work of a supreme intelligence.",
    summary: "Discovered the period-luminosity relationship for Cepheid variables, enabling measurement of cosmic distances.",
    achievements: [
      "Discovered Cepheid variable period-luminosity relationship",
      "Enabled measurement of cosmic distances",
      "Work led to discovery of universe expansion"
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
    quote: "I am the only person, man or woman, who has ever done this kind of work.",
    summary: "Pioneering astronomer who classified hundreds of thousands of stars and developed the stellar classification system.",
    achievements: [
      "Classified over 350,000 stars",
      "Developed stellar classification system",
      "First woman to receive honorary doctorate from Oxford"
    ]
  },
  {
    name: "Cecilia Payne-Gaposchkin",
    photo: "./images/cecilia-payne-gaposchkin.svg",
    birthDate: "1900",
    deathDate: "1979",
    country: "United Kingdom/United States",
    fields: ["Astronomy", "Physics"],
    roles: ["Astronomer", "Professor"],
    quote: "The reward of the young scientist is the emotional thrill of being the first person in the history of the world to see something or to understand something.",
    summary: "First person to discover that stars are made primarily of hydrogen and helium.",
    achievements: [
      "Discovered stars are made of hydrogen and helium",
      "First woman to head Harvard astronomy department",
      "Pioneered stellar spectroscopy"
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
    quote: "I was told that women could not be astronomers. I found that hard to believe.",
    summary: "Pioneering astronomer who discovered how elements are formed in stars and fought for women's access to telescopes.",
    achievements: [
      "Discovered stellar nucleosynthesis",
      "Fought for women's telescope access",
      "First woman to serve as American Astronomical Society president"
    ]
  },
];

// Remove duplicates by name
const seen = new Set();
const uniquePioneers = pioneers.filter(p => {
  if (seen.has(p.name)) return false;
  seen.add(p.name);
  return true;
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = uniquePioneers;
}

// Make available globally for browser
if (typeof window !== 'undefined') {
  window.pioneers = uniquePioneers;
} 