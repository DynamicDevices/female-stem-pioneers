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
    roles: ["Experimental Physicist", "Professor"],
    quote: "There is only one thing worse than coming home from the lab to a sink full of dirty dishes, and that is not going to the lab at all.",
    summary: "Experimental physicist who made significant contributions to nuclear physics, including the Manhattan Project and the Wu experiment.",
    achievements: [
      "Conducted the Wu experiment disproving parity conservation",
      "Worked on the Manhattan Project",
      "First female president of the American Physical Society"
    ]
  },
  {
    name: "Tu Youyou",
    photo: "./images/tu-youyou.jpg",
    birthDate: "1930",
    deathDate: "",
    country: "China",
    fields: ["Pharmacology", "Chemistry"],
    roles: ["Pharmacologist", "Chemist"],
    quote: "Every scientist dreams of doing something that can help the world.",
    summary: "Discovered artemisinin, a groundbreaking treatment for malaria, saving millions of lives.",
    achievements: [
      "Discovered artemisinin for malaria treatment",
      "First Chinese woman to win a Nobel Prize in Physiology or Medicine"
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
    quote: "The beauty of mathematics only shows itself to more patient followers.",
    summary: "First woman and first Iranian to win the Fields Medal, the highest honor in mathematics.",
    achievements: [
      "Fields Medal in Mathematics (2014)",
      "Pioneering work in geometry and dynamical systems"
    ]
  },
  {
    name: "Asima Chatterjee",
    photo: "./images/asima-chatterjee.jpg",
    birthDate: "1917",
    deathDate: "2006",
    country: "India",
    fields: ["Chemistry", "Phytomedicine"],
    roles: ["Organic Chemist"],
    quote: "I wish to be remembered for my work, not for being a woman in science.",
    summary: "Pioneering Indian chemist known for her work in organic chemistry and anti-malarial drugs.",
    achievements: [
      "Developed anti-epileptic and anti-malarial drugs",
      "First woman to earn a Doctorate of Science from an Indian university"
    ]
  },
  {
    name: "Ellen Ochoa",
    photo: "./images/ellen-ochoa.jpg",
    birthDate: "1958",
    deathDate: "",
    country: "United States",
    fields: ["Astronautics", "Engineering"],
    roles: ["Astronaut", "Engineer"],
    quote: "Don't be afraid to reach for the stars.",
    summary: "First Hispanic woman in space and former Director of the Johnson Space Center.",
    achievements: [
      "First Hispanic woman in space",
      "Director of NASA's Johnson Space Center"
    ]
  },
  {
    name: "Yvonne Brill",
    photo: "./images/yvonne-brill.jpg",
    birthDate: "1924",
    deathDate: "2013",
    country: "Canada/United States",
    fields: ["Engineering", "Rocket Science"],
    roles: ["Rocket Scientist", "Engineer"],
    quote: "Take advantage of every opportunity; where there is none, make it for yourself.",
    summary: "Invented the propulsion system that keeps communications satellites in orbit.",
    achievements: [
      "Invented the hydrazine resistojet propulsion system",
      "Pioneered satellite propulsion technology"
    ]
  },
  {
    name: "Janaki Ammal",
    photo: "./images/janaki-ammal.jpg",
    birthDate: "1897",
    deathDate: "1984",
    country: "India",
    fields: ["Botany", "Cytogenetics"],
    roles: ["Botanist", "Cytogeneticist"],
    quote: "Science is a beautiful gift to humanity; we should not distort it.",
    summary: "Renowned botanist who made significant contributions to plant cytogenetics and biodiversity in India.",
    achievements: [
      "Developed high-yielding sugarcane varieties",
      "Contributed to plant cytogenetics and biodiversity conservation"
    ]
  },
  {
    name: "Wang Zhenyi",
    photo: "./images/wang-zhenyi.jpg",
    birthDate: "1768",
    deathDate: "1797",
    country: "China",
    fields: ["Astronomy", "Mathematics"],
    roles: ["Astronomer", "Mathematician", "Poet"],
    quote: "Among all the things in the universe, the stars are the most mysterious.",
    summary: "18th-century Chinese astronomer, mathematician, and poet who explained lunar eclipses and wrote influential works.",
    achievements: [
      "Explained and modeled lunar eclipses",
      "Wrote influential works on mathematics and astronomy"
    ]
  },
  {
    name: "Hypatia of Alexandria",
    photo: "./images/hypatia.jpg",
    birthDate: "c. 360",
    deathDate: "415",
    country: "Egypt (Roman Empire)",
    fields: ["Mathematics", "Astronomy", "Philosophy"],
    roles: ["Mathematician", "Astronomer", "Philosopher"],
    quote: "Reserve your right to think, for even to think wrongly is better than not to think at all.",
    summary: "One of the first known female mathematicians and philosophers, led the Neoplatonic school in Alexandria.",
    achievements: [
      "Head of the Neoplatonic school of Alexandria",
      "Contributed to mathematics, astronomy, and philosophy",
      "Symbol of learning and science in a turbulent era"
    ]
  },
  {
    name: "Mary Anning",
    photo: "./images/mary-anning.jpg",
    birthDate: "1799",
    deathDate: "1847",
    country: "United Kingdom",
    fields: ["Paleontology", "Geology"],
    roles: ["Fossil Collector", "Paleontologist"],
    quote: "The world has used me so unkindly, I fear it has made me suspicious of everyone.",
    summary: "Discovered Jurassic marine fossils; her work contributed to important changes in scientific thinking about prehistoric life.",
    achievements: [
      "Discovered the first complete Ichthyosaurus skeleton",
      "Pioneered paleontology as a science",
      "Contributed to the understanding of prehistoric life"
    ]
  },
  {
    name: "Emmy Noether",
    photo: "./images/emmy-noether.jpg",
    birthDate: "1882",
    deathDate: "1935",
    country: "Germany/United States",
    fields: ["Mathematics", "Physics"],
    roles: ["Mathematician", "Physicist", "Professor"],
    quote: "My methods are really methods of working and thinking; this is why they have crept in everywhere anonymously.",
    summary: "Revolutionary mathematician whose work on abstract algebra and theoretical physics laid the foundation for modern physics.",
    achievements: [
      "Noether's theorem connecting symmetries to conservation laws",
      "Pioneering work in abstract algebra",
      "Influenced Einstein's theory of relativity"
    ]
  },
  {
    name: "Sofia Kovalevskaya",
    photo: "./images/sofia-kovalevskaya.svg",
    birthDate: "1850",
    deathDate: "1891",
    country: "Russia/Sweden",
    fields: ["Mathematics"],
    roles: ["Mathematician", "Professor"],
    quote: "It is impossible to be a mathematician without being a poet in soul.",
    summary: "First woman to earn a doctorate in mathematics and first female professor of mathematics in Northern Europe.",
    achievements: [
      "First woman to earn a doctorate in mathematics",
      "First female professor of mathematics in Northern Europe",
      "Significant contributions to partial differential equations"
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
    summary: "Nobel Prize-winning chemist who pioneered protein crystallography and determined the structure of insulin.",
    achievements: [
      "Nobel Prize in Chemistry (1964)",
      "Determined the structure of insulin",
      "Pioneered protein crystallography techniques"
    ]
  },
  {
    name: "Barbara McClintock",
    photo: "./images/barbara-mcclintock.jpg",
    birthDate: "1902",
    deathDate: "1992",
    country: "United States",
    fields: ["Genetics", "Cytogenetics"],
    roles: ["Geneticist", "Cytogeneticist"],
    quote: "I was just so interested in what I was doing I could hardly wait to get up in the morning and get at it.",
    summary: "Nobel Prize-winning geneticist who discovered genetic transposition, revolutionizing our understanding of genetics.",
    achievements: [
      "Nobel Prize in Physiology or Medicine (1983)",
      "Discovered genetic transposition",
      "Pioneering work in maize genetics"
    ]
  },
  {
    name: "Rita Levi-Montalcini",
    photo: "./images/rita-levi-montalcini.jpg",
    birthDate: "1909",
    deathDate: "2012",
    country: "Italy/United States",
    fields: ["Neurobiology", "Medicine"],
    roles: ["Neurobiologist", "Nobel Laureate"],
    quote: "Above all, don't fear difficult moments. The best comes from them.",
    summary: "Nobel Prize-winning neurobiologist who discovered nerve growth factor, advancing our understanding of the nervous system.",
    achievements: [
      "Nobel Prize in Physiology or Medicine (1986)",
      "Discovered nerve growth factor",
      "Pioneered neurobiology research"
    ]
  },
  {
    name: "Gertrude Elion",
    photo: "./images/gertrude-elion.jpg",
    birthDate: "1918",
    deathDate: "1999",
    country: "United States",
    fields: ["Pharmacology", "Chemistry"],
    roles: ["Pharmacologist", "Chemist"],
    quote: "Don't let others tell you what you can't do. Don't let the lack of confidence in others discourage you.",
    summary: "Nobel Prize-winning pharmacologist who developed drugs for leukemia, herpes, and organ transplantation.",
    achievements: [
      "Nobel Prize in Physiology or Medicine (1988)",
      "Developed drugs for leukemia and herpes",
      "Pioneered rational drug design"
    ]
  },
  {
    name: "Maria Goeppert-Mayer",
    photo: "./images/maria-goeppert-mayer.jpg",
    birthDate: "1906",
    deathDate: "1972",
    country: "Germany/United States",
    fields: ["Physics"],
    roles: ["Physicist", "Nobel Laureate"],
    quote: "Mathematics began to seem too much like puzzle solving. Physics is puzzle solving, too, but of puzzles created by nature, not by the mind of man.",
    summary: "Nobel Prize-winning physicist who developed the nuclear shell model, explaining the structure of atomic nuclei.",
    achievements: [
      "Nobel Prize in Physics (1963)",
      "Developed the nuclear shell model",
      "Second woman to win the Nobel Prize in Physics"
    ]
  },
  {
    name: "Lise Meitner",
    photo: "./images/lise-meitner.jpg",
    birthDate: "1878",
    deathDate: "1968",
    country: "Austria/Sweden",
    fields: ["Physics", "Nuclear Physics"],
    roles: ["Physicist", "Nuclear Scientist"],
    quote: "Science makes people reach selflessly for truth and objectivity; it teaches people to accept reality, with wonder and admiration.",
    summary: "Pioneering physicist who discovered nuclear fission but was overlooked for the Nobel Prize due to gender discrimination.",
    achievements: [
      "Discovered nuclear fission with Otto Hahn",
      "Pioneered research in radioactivity",
      "Element 109 (Meitnerium) named in her honor"
    ]
  },
  {
    name: "Rosalyn Yalow",
    photo: "./images/rosalyn-yalow.jpg",
    birthDate: "1921",
    deathDate: "2011",
    country: "United States",
    fields: ["Medical Physics", "Biochemistry"],
    roles: ["Medical Physicist", "Nobel Laureate"],
    quote: "We cannot expect in the immediate future that all women who seek it will achieve full equality of opportunity and treatment.",
    summary: "Nobel Prize-winning medical physicist who co-developed radioimmunoassay, revolutionizing medical diagnostics.",
    achievements: [
      "Nobel Prize in Physiology or Medicine (1977)",
      "Co-developed radioimmunoassay",
      "First woman to win the Nobel Prize in Physiology or Medicine"
    ]
  },
  {
    name: "Elizabeth Blackburn",
    photo: "./images/elizabeth-blackburn.jpg",
    birthDate: "1948",
    deathDate: "",
    country: "Australia/United States",
    fields: ["Molecular Biology", "Biochemistry"],
    roles: ["Molecular Biologist", "Nobel Laureate"],
    quote: "I think it's very important to have role models who are women in science.",
    summary: "Nobel Prize-winning molecular biologist who discovered telomerase and its role in aging and cancer.",
    achievements: [
      "Nobel Prize in Physiology or Medicine (2009)",
      "Discovered telomerase enzyme",
      "Pioneered research on telomeres and aging"
    ]
  },
  {
    name: "Françoise Barré-Sinoussi",
    photo: "./images/francoise-barre-sinoussi.jpg",
    birthDate: "1947",
    deathDate: "",
    country: "France",
    fields: ["Virology", "Immunology"],
    roles: ["Virologist", "Nobel Laureate"],
    quote: "Science is not about being the first to publish. It's about being the first to discover.",
    summary: "Nobel Prize-winning virologist who co-discovered HIV, the virus that causes AIDS.",
    achievements: [
      "Nobel Prize in Physiology or Medicine (2008)",
      "Co-discovered HIV virus",
      "Pioneered AIDS research and treatment"
    ]
  },
  {
    name: "Mae Carol Jemison",
    photo: "./images/mae-jemison.jpg",
    birthDate: "1956",
    deathDate: "",
    country: "United States",
    fields: ["Astronautics", "Medicine", "Engineering"],
    roles: ["Astronaut", "Physician", "Engineer"],
    quote: "Never be limited by other people's limited imaginations.",
    summary: "First African American woman in space, physician, engineer, and advocate for science education.",
    achievements: [
      "First African American woman in space",
      "Founded technology research company",
      "Advocate for STEM education"
    ]
  },
  {
    name: "Annie Easley",
    photo: "./images/annie-easley.jpg",
    birthDate: "1933",
    deathDate: "2011",
    country: "United States",
    fields: ["Computer Science", "Mathematics", "Rocket Science"],
    roles: ["Computer Scientist", "Mathematician", "Rocket Scientist"],
    quote: "You're not going to change the world sitting around talking about it. You've got to get out and do it.",
    summary: "NASA computer scientist and mathematician who developed software for rocket launches.",
    achievements: [
      "Developed software for Centaur rocket",
      "Advocated for diversity at NASA"
    ]
  },
  {
    name: "Evelyn Boyd Granville",
    photo: "./images/evelyn-boyd-granville.jpg",
    birthDate: "1924",
    deathDate: "2023",
    country: "United States",
    fields: ["Mathematics", "Computer Science"],
    roles: ["Mathematician", "Educator"],
    quote: "I always smile when I hear that women cannot excel in mathematics.",
    summary: "Second African American woman to earn a Ph.D. in mathematics, contributed to NASA space programs.",
    achievements: [
      "Worked on Apollo and Vanguard programs",
      "Pioneered math education for women and minorities"
    ]
  },
  {
    name: "Kalpana Chawla",
    photo: "./images/kalpana-chawla.jpg",
    birthDate: "1962",
    deathDate: "2003",
    country: "India/United States",
    fields: ["Astronautics", "Engineering"],
    roles: ["Astronaut", "Engineer"],
    quote: "The path from dreams to success does exist.",
    summary: "First woman of Indian origin in space, flew on two Space Shuttle missions.",
    achievements: [
      "First Indian-born woman in space",
      "Flew on Space Shuttle Columbia"
    ]
  },
  {
    name: "Mary Jackson",
    photo: "./images/mary-jackson.jpg",
    birthDate: "1921",
    deathDate: "2005",
    country: "United States",
    fields: ["Mathematics", "Aerospace Engineering"],
    roles: ["Mathematician", "Aerospace Engineer"],
    quote: "We have to do the best we can with what we have.",
    summary: "NASA's first Black female engineer, broke barriers for women and minorities in engineering.",
    achievements: [
      "First Black female engineer at NASA",
      "Advocated for women in STEM"
    ]
  },
  {
    name: "Ada Yonath",
    photo: "./images/ada-yonath.jpg",
    birthDate: "1939",
    deathDate: "",
    country: "Israel",
    fields: ["Chemistry", "Crystallography"],
    roles: ["Crystallographer", "Professor"],
    quote: "Curiosity is the driving force for discovery.",
    summary: "Nobel Prize-winning crystallographer who revealed the structure of the ribosome.",
    achievements: [
      "Nobel Prize in Chemistry (2009)",
      "Determined ribosome structure"
    ]
  },
  {
    name: "Kimberly Bryant",
    photo: "./images/kimberly-bryant.jpg",
    birthDate: "1967",
    deathDate: "",
    country: "United States",
    fields: ["Engineering", "Computer Science"],
    roles: ["Engineer", "Nonprofit Founder"],
    quote: "You can't be what you can't see.",
    summary: "Founder of Black Girls Code, empowering girls of color in technology.",
    achievements: [
      "Founded Black Girls Code",
      "Advocate for diversity in tech"
    ]
  },
  {
    name: "Fabiola Gianotti",
    photo: "./images/fabiola-gianotti.jpg",
    birthDate: "1960",
    deathDate: "",
    country: "Italy",
    fields: ["Physics", "Particle Physics"],
    roles: ["Physicist", "CERN Director-General"],
    quote: "Science is a beautiful adventure.",
    summary: "Particle physicist and first woman Director-General of CERN, led the discovery of the Higgs boson.",
    achievements: [
      "Led ATLAS experiment at CERN",
      "First woman Director-General of CERN"
    ]
  }
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