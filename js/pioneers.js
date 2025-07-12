// Women Pioneers in STEM - Data File
// This file contains profiles of women who have made significant contributions to STEM fields

const pioneers = [
  {
    name: "Ada Lovelace",
    photo: "./images/ada-lovelace.jpg",
    birthday: "1815–1852",
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
    lifespan: "1867–1934",
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
    lifespan: "1918–2020",
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
    lifespan: "1906–1992",
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
    lifespan: "1920–1958",
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
    lifespan: "1912–1997",
    country: "China/United States",
    fields: ["Physics"],
    roles: ["Experimental Physicist", "Professor"],
    quote: "There is only one thing worse than coming home from the lab to a sink full of dirty dishes, and that is not going to the lab at all.",
    summary: "Conducted the Wu experiment, disproving the law of conservation of parity in physics.",
    shortDescription: "Chien-Shiung Wu was a groundbreaking physicist who made discoveries that changed how we understand the universe. She led the famous 'Wu experiment,' which showed that nature isn't always symmetrical—a huge surprise in physics! As a Chinese-American woman, she broke barriers in science and inspired many to follow in her footsteps.",
    detailed_description: {
      early_life: "Born in 1912 near Shanghai, China, Chien-Shiung showed exceptional academic ability from an early age. Her father was a school principal who believed strongly in education for girls.",
      stem_journey: "Chien-Shiung earned a degree in physics in China, then moved to the United States in 1936 to pursue graduate studies at UC Berkeley. She earned her Ph.D. and began her research career.",
      challenges: "As a Chinese immigrant woman in American science, Chien-Shiung faced both racial and gender discrimination. She was often the only woman in her physics classes and research groups.",
      achievements: "Chien-Shiung conducted the famous 'Wu experiment,' which disproved the law of conservation of parity in physics. She became the first woman to serve as president of the American Physical Society.",
      legacy: "Known as the 'First Lady of Physics,' Chien-Shiung inspired generations of Asian American women to pursue careers in physics. Her work fundamentally changed our understanding of the universe."
    },
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
    fun_fact: "Nicknamed the 'Chinese Madame Curie'.",
    
    // High Priority - New Metadata
    career_path: {
      first_job: "Research assistant at University of California, Berkeley",
      career_highlights: ["Led groundbreaking physics experiments", "Became first female president of American Physical Society"],
      advice_for_students: "Don't let stereotypes or expectations limit you. Your abilities and hard work will open doors."
    },
    student_resources: {
      books_for_students: ["Queen of Physics: How Wu Chien Shiung Helped Unlock the Secrets of the Atom", "The Physics of the Manhattan Project"],
      websites: ["aps.org", "physicsgirl.org", "womeninphysics.org"],
      programs: ["Physics summer programs", "Women in Physics initiatives", "Nuclear physics workshops"],
      advice: "Develop strong mathematical skills and don't be afraid to ask questions in class."
    },
    challenges: {
      academic: ["Limited educational opportunities for women in China"],
      professional: ["Gender and racial discrimination in academia", "Being overlooked for promotions"],
      personal: ["Immigrating to a new country", "Balancing family and career"],
      how_overcame: "Focused on excellence in research and built strong professional relationships"
    },
    education_details: {
      high_school: "Excelled in mathematics and science",
      college_major: "Physics",
      graduate_school: "Ph.D. in Physics from University of California, Berkeley",
      key_courses: ["Physics", "Mathematics", "Nuclear Physics", "Experimental Methods"],
      study_tips: "Understand the fundamentals deeply and practice problem-solving regularly"
    },
    modern_impact: {
      current_applications: "Her experimental methods are used in particle physics research",
      companies_using_her_work: ["CERN", "Research institutions", "Particle physics labs"],
      future_implications: "Her work continues to advance our understanding of fundamental physics"
    },
    personal_info: {
      early_interests: ["Physics", "Mathematics", "Scientific experiments", "Problem-solving"],
      family_background: "Encouraged by parents to pursue education despite gender barriers",
      hobbies: ["Reading scientific literature", "Teaching", "Traveling"],
      personality_traits: ["Precise", "Determined", "Innovative", "Mentoring"]
    },
    cultural_background: {
      heritage: "Chinese intellectual and American immigrant traditions",
      cultural_influences: ["Chinese emphasis on education", "American scientific community", "Immigrant work ethic"],
      cultural_challenges: ["Anti-Asian discrimination", "Language barriers", "Gender barriers in both cultures", "Immigrant status in academia"],
      cultural_contributions: "Bridged Chinese educational values with American scientific innovation, showing how immigrant perspectives enrich science"
    }
  },
  // --- NEW MODERN & DIVERSE PIONEERS ---
  {
    name: "Dorothy Vaughan",
    photo: "./images/dorothy-vaughan.jpg",
    lifespan: "1910–2008",
    country: "United States",
    fields: ["Mathematics", "Computer Science"],
    roles: ["Mathematician", "Computer Programmer", "NASA Supervisor"],
    quote: "I changed what I could, and what I couldn't, I endured.",
    summary: "Trailblazing African-American mathematician and NASA's first Black supervisor, vital to early spaceflight.",
    shortDescription: "Dorothy Vaughan was a brilliant mathematician and one of NASA's first Black supervisors. She taught herself computer programming and led a team of women who calculated flight paths for early space missions. Dorothy's leadership and determination helped break down racial and gender barriers, and her story was featured in the movie 'Hidden Figures.'",
    detailed_description: {
      early_life: "Born in Missouri, excelled in mathematics and graduated college at 19.",
      stem_journey: "Joined NACA (later NASA) in 1943, became expert in FORTRAN and led the West Area Computers.",
      challenges: "Faced racial and gender segregation at NASA.",
      achievements: "First Black supervisor at NASA, key role in spaceflight calculations.",
      legacy: "Paved the way for women and minorities in STEM, featured in 'Hidden Figures'."
    },
    achievements: [
      "First Black supervisor at NASA",
      "Expert in FORTRAN programming",
      "Mentored many women in STEM"
    ],
    awards: ["Congressional Gold Medal (2019)"],
    publications: [],
    education: [
      { degree: "B.A.", field: "Mathematics", institution: "Wilberforce University" }
    ],
    timeline: [
      { year: 1943, event: "Joined NACA (NASA predecessor)" },
      { year: 1949, event: "Became NASA's first Black supervisor" }
    ],
    barriers: ["Racial and gender segregation in the workplace"],
    impact: "Role model for women and minorities in STEM.",
    media: [
      { type: "movie", title: "Hidden Figures", url: "https://www.imdb.com/title/tt4846340/" }
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dorothy_Vaughan" }
    ],
    mentorship: "Mentored many women at NASA.",
    fun_fact: "Self-taught computer programming in her 40s.",
    career_path: {
      first_job: "Math teacher",
      career_highlights: ["NASA supervisor", "FORTRAN expert"],
      advice_for_students: "Never stop learning and help others along the way."
    },
    student_resources: {
      books_for_students: ["Hidden Figures by Margot Lee Shetterly"],
      websites: ["nasa.gov", "blackgirlscode.org"],
      programs: ["NASA STEM programs"],
      advice: "Teamwork and persistence open doors."
    },
    challenges: {
      academic: ["Limited opportunities for Black women"],
      professional: ["Segregation at NASA"],
      personal: ["Balancing work and family"],
      how_overcame: "Excelled in her field and mentored others."
    },
    education_details: {
      high_school: "Valedictorian",
      college_major: "Mathematics",
      key_courses: ["Mathematics", "Programming"],
      study_tips: "Practice and help others learn."
    },
    modern_impact: {
      current_applications: "Diversity in tech and space programs",
      companies_using_her_work: ["NASA"],
      future_implications: "Inspiration for future generations."
    },
    personal_info: {
      early_interests: ["Math", "Teaching"],
      family_background: "Supportive family, strong work ethic",
      hobbies: ["Reading", "Mentoring"],
      personality_traits: ["Determined", "Supportive"]
    },
    cultural_background: {
      heritage: "African-American",
      cultural_influences: ["Civil Rights Era"],
      cultural_challenges: ["Segregation"],
      cultural_contributions: "Broke barriers for Black women in STEM."
    }
  },
  {
    name: "Mae Jemison",
    photo: "./images/mae-jemison.jpg",
    lifespan: "1956–",
    country: "United States",
    fields: ["Astronautics", "Medicine", "Engineering"],
    roles: ["Astronaut", "Physician", "Engineer"],
    quote: "Never be limited by other people's limited imaginations.",
    summary: "First Black woman in space, physician, engineer, and STEM advocate.",
    shortDescription: "Mae Jemison is a doctor, engineer, and the first Black woman to travel to space. She flew aboard the Space Shuttle Endeavour and later founded a company to inspire students in science and technology. Mae believes that everyone should dream big and that curiosity can take you anywhere—even to the stars!",
    detailed_description: {
      early_life: "Born in Alabama, inspired by Star Trek and science fiction.",
      stem_journey: "Earned degrees in engineering and medicine, joined NASA in 1987.",
      challenges: "Faced both racial and gender bias in STEM fields.",
      achievements: "Flew on Space Shuttle Endeavour in 1992.",
      legacy: "Role model for girls in STEM and advocate for science education."
    },
    achievements: [
      "First Black woman in space",
      "Medical doctor and engineer",
      "Founded STEM education foundation"
    ],
    awards: ["National Women's Hall of Fame (1993)"],
    publications: [],
    education: [
      { degree: "M.D.", field: "Medicine", institution: "Cornell University" },
      { degree: "B.S.", field: "Chemical Engineering", institution: "Stanford University" }
    ],
    timeline: [
      { year: 1992, event: "Flew on Space Shuttle Endeavour" }
    ],
    barriers: ["Racial and gender bias in STEM"],
    impact: "Inspires girls and minorities to pursue STEM careers.",
    media: [
      { type: "article", title: "Mae Jemison: First African American Woman in Space", url: "https://www.nasa.gov/audience/forstudents/k-4/stories/nasa-knows/who-was-mae-jemison-k4.html" }
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mae_Jemison" }
    ],
    mentorship: "Mentors students through her foundation.",
    fun_fact: "Appeared on Star Trek: The Next Generation.",
    career_path: {
      first_job: "Medical doctor",
      career_highlights: ["NASA astronaut", "Science educator"],
      advice_for_students: "Dream big and work hard."
    },
    student_resources: {
      books_for_students: ["Find Where the Wind Goes by Mae Jemison"],
      websites: ["jemisonfoundation.org", "nasa.gov"],
      programs: ["STEM camps"],
      advice: "Don't let anyone else define your limits."
    },
    challenges: {
      academic: ["Few role models in STEM"],
      professional: ["Bias in medicine and engineering"],
      personal: ["Breaking barriers as a woman of color"],
      how_overcame: "Persevered and excelled in multiple fields."
    },
    education_details: {
      high_school: "Graduated at 16",
      college_major: "Chemical Engineering",
      key_courses: ["Engineering", "Biology", "Medicine"],
      study_tips: "Stay curious and ask questions."
    },
    modern_impact: {
      current_applications: "STEM education and advocacy",
      companies_using_her_work: ["NASA", "Jemison Group"],
      future_implications: "Inspiring the next generation of explorers."
    },
    personal_info: {
      early_interests: ["Science fiction", "Space", "Medicine"],
      family_background: "Supportive parents, teachers",
      hobbies: ["Dancing", "Reading"],
      personality_traits: ["Curious", "Adventurous"]
    },
    cultural_background: {
      heritage: "African-American",
      cultural_influences: ["Civil Rights Movement"],
      cultural_challenges: ["Bias in STEM"],
      cultural_contributions: "First Black woman in space."
    }
  },
  {
    name: "Radia Perlman",
    photo: "./images/radia-perlman.jpg",
    lifespan: "1951–",
    country: "United States",
    fields: ["Computer Science", "Networking"],
    roles: ["Computer Scientist", "Engineer"],
    quote: "The world would be a better place if more people could see the beauty in logic.",
    summary: "Inventor of spanning tree protocol, known as the 'Mother of the Internet'.",
    shortDescription: "Radia Perlman is known as the 'Mother of the Internet' for inventing the spanning tree protocol, which makes modern computer networks possible. She loved solving puzzles and turned her passion for logic into technology that connects the world. Radia's work shows that creativity and persistence can change how we all communicate.",
    detailed_description: {
      early_life: "Grew up loving math and logic puzzles, inspired by her engineer parents.",
      stem_journey: "Studied math at MIT, became a leader in computer networking.",
      challenges: "Few women in computer science in the 1970s.",
      achievements: "Invented spanning tree protocol, enabling modern networks.",
      legacy: "Her work underpins the internet as we know it."
    },
    achievements: [
      "Invented spanning tree protocol",
      "Key contributor to network security",
      "Authored influential textbooks"
    ],
    awards: ["Internet Hall of Fame (2014)"],
    publications: [
      { title: "Interconnections: Bridges, Routers, Switches, and Internetworking Protocols", url: "https://www.pearson.com/en-us/subject-catalog/p/interconnections-bridges-routers-switches-and-internetworking-protocols/P200000003978/9780201634488" }
    ],
    education: [
      { degree: "Ph.D.", field: "Computer Science", institution: "MIT" }
    ],
    timeline: [
      { year: 1985, event: "Invented spanning tree protocol" }
    ],
    barriers: ["Gender imbalance in tech"],
    impact: "Her inventions make the internet possible.",
    media: [
      { type: "article", title: "Radia Perlman: Mother of the Internet", url: "https://www.internethalloffame.org/inductee/radia-perlman/" }
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Radia_Perlman" }
    ],
    mentorship: "Mentors young engineers and students.",
    fun_fact: "Wrote a poem to explain her protocol to engineers.",
    career_path: {
      first_job: "Software engineer",
      career_highlights: ["Inventor", "Author"],
      advice_for_students: "Find the beauty in logic and keep learning."
    },
    student_resources: {
      books_for_students: ["Interconnections by Radia Perlman"],
      websites: ["internethalloffame.org"],
      programs: ["Computer science clubs"],
      advice: "Don't be afraid to ask questions."
    },
    challenges: {
      academic: ["Few women in CS"],
      professional: ["Bias in tech"],
      personal: ["Balancing work and family"],
      how_overcame: "Focused on her passion for problem-solving."
    },
    education_details: {
      high_school: "Excelled in math and science",
      college_major: "Mathematics",
      key_courses: ["Computer Science", "Networking"],
      study_tips: "Practice by building and experimenting."
    },
    modern_impact: {
      current_applications: "Internet, cloud computing, cybersecurity",
      companies_using_her_work: ["Cisco", "Intel", "Google"],
      future_implications: "Secure, scalable networks for the future."
    },
    personal_info: {
      early_interests: ["Math", "Puzzles", "Programming"],
      family_background: "Engineer parents",
      hobbies: ["Writing", "Teaching"],
      personality_traits: ["Logical", "Creative"]
    },
    cultural_background: {
      heritage: "Jewish-American",
      cultural_influences: ["MIT culture"],
      cultural_challenges: ["Gender imbalance in tech"],
      cultural_contributions: "Pioneered diversity in networking."
    }
  },
  {
    name: "Tu Youyou",
    photo: "./images/tu-youyou.jpg",
    lifespan: "1930–",
    country: "China",
    fields: ["Chemistry", "Medicine"],
    roles: ["Pharmacologist", "Chemist"],
    quote: "Every scientist dreams of doing something that can help the world.",
    summary: "Discovered artemisinin, saving millions from malaria; first Chinese woman Nobel laureate.",
    shortDescription: "Tu Youyou is a Chinese scientist who discovered a life-saving medicine for malaria, a disease that affects millions. She combined traditional Chinese medicine with modern science to find a cure, saving countless lives. Tu Youyou's discovery earned her a Nobel Prize and showed the world the value of blending old and new ideas.",
    detailed_description: {
      early_life: "Born in Ningbo, China, inspired by traditional medicine.",
      stem_journey: "Studied pharmacology, led malaria research in 1970s.",
      challenges: "Worked during Cultural Revolution, limited resources.",
      achievements: "Discovered artemisinin, revolutionized malaria treatment.",
      legacy: "Her discovery has saved millions of lives."
    },
    achievements: [
      "Discovered artemisinin for malaria treatment",
      "First Chinese woman Nobel laureate",
      "Pioneered modern use of traditional medicine"
    ],
    awards: ["Nobel Prize in Physiology or Medicine (2015)"],
    publications: [],
    education: [
      { degree: "Pharmacology", field: "Pharmacology", institution: "Peking University" }
    ],
    timeline: [
      { year: 1972, event: "Discovered artemisinin" },
      { year: 2015, event: "Won Nobel Prize" }
    ],
    barriers: ["Limited resources, political turmoil"],
    impact: "Saved millions from malaria worldwide.",
    media: [
      { type: "article", title: "Tu Youyou: Nobel Laureate", url: "https://www.nobelprize.org/prizes/medicine/2015/tu/facts/" }
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Tu_Youyou" }
    ],
    mentorship: "Inspired young scientists in China.",
    fun_fact: "Her Nobel-winning work was inspired by ancient Chinese texts.",
    career_path: {
      first_job: "Pharmacologist",
      career_highlights: ["Nobel Prize winner"],
      advice_for_students: "Be persistent and open to new ideas."
    },
    student_resources: {
      books_for_students: ["Tu Youyou's Discovery"],
      websites: ["nobelprize.org"],
      programs: ["Science Olympiad"],
      advice: "Learn from both tradition and innovation."
    },
    challenges: {
      academic: ["Limited access to Western science"],
      professional: ["Political challenges"],
      personal: ["Balancing research and family"],
      how_overcame: "Combined traditional knowledge with modern science."
    },
    education_details: {
      high_school: "Excelled in science",
      college_major: "Pharmacology",
      key_courses: ["Chemistry", "Biology"],
      study_tips: "Be curious and persistent."
    },
    modern_impact: {
      current_applications: "Malaria treatment worldwide",
      companies_using_her_work: ["WHO", "Pharma companies"],
      future_implications: "New medicines from traditional sources."
    },
    personal_info: {
      early_interests: ["Medicine", "Chemistry"],
      family_background: "Traditional Chinese medicine",
      hobbies: ["Reading", "Research"],
      personality_traits: ["Persistent", "Innovative"]
    },
    cultural_background: {
      heritage: "Chinese",
      cultural_influences: ["Traditional medicine"],
      cultural_challenges: ["Cultural Revolution"],
      cultural_contributions: "Bridged traditional and modern science."
    }
  },
  {
    name: "Maryam Mirzakhani",
    photo: "./images/maryam-mirzakhani.jpg",
    lifespan: "1977–2017",
    country: "Iran",
    fields: ["Mathematics"],
    roles: ["Mathematician", "Professor"],
    quote: "The beauty of mathematics only shows itself to more patient followers.",
    summary: "First woman and first Iranian to win the Fields Medal in mathematics.",
    shortDescription: "Maryam Mirzakhani was a brilliant mathematician and the first woman to win the Fields Medal, the highest honor in math. She loved solving challenging problems and exploring the beauty of mathematics. Maryam's achievements inspired girls and women everywhere to pursue their passion for math and science.",
    detailed_description: {
      early_life: "Born in Tehran, loved reading and solving math problems.",
      stem_journey: "Won gold at International Math Olympiad, became a math professor at Stanford.",
      challenges: "Few women in advanced mathematics.",
      achievements: "Fields Medal for work on geometry and dynamics.",
      legacy: "Inspired women and Iranians in mathematics."
    },
    achievements: [
      "First woman to win the Fields Medal",
      "Gold medalist at International Math Olympiad",
      "Professor at Stanford University"
    ],
    awards: ["Fields Medal (2014)"],
    publications: [],
    education: [
      { degree: "Ph.D.", field: "Mathematics", institution: "Harvard University" }
    ],
    timeline: [
      { year: 2014, event: "Won Fields Medal" }
    ],
    barriers: ["Gender imbalance in mathematics"],
    impact: "Role model for women and Middle Eastern mathematicians.",
    media: [
      { type: "article", title: "Maryam Mirzakhani: Fields Medalist", url: "https://www.quantamagazine.org/maryam-mirzakhani-iranian-mathematician-dies-20170715/" }
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Maryam_Mirzakhani" }
    ],
    mentorship: "Inspired young mathematicians worldwide.",
    fun_fact: "Loved reading novels as a child.",
    career_path: {
      first_job: "Math researcher",
      career_highlights: ["Fields Medal winner"],
      advice_for_students: "Be patient and persistent."
    },
    student_resources: {
      books_for_students: ["Maryam's Magic: The Story of Mathematician Maryam Mirzakhani"],
      websites: ["mathunion.org"],
      programs: ["Math Olympiad"],
      advice: "Enjoy the process of discovery."
    },
    challenges: {
      academic: ["Few women in math"],
      professional: ["Bias in academia"],
      personal: ["Balancing research and family"],
      how_overcame: "Focused on her love of math."
    },
    education_details: {
      high_school: "Won national math competitions",
      college_major: "Mathematics",
      key_courses: ["Geometry", "Dynamics"],
      study_tips: "Practice and seek mentors."
    },
    modern_impact: {
      current_applications: "Geometry, dynamics, and math research",
      companies_using_her_work: ["Universities", "Research institutes"],
      future_implications: "More women in advanced mathematics."
    },
    personal_info: {
      early_interests: ["Math", "Reading"],
      family_background: "Supportive family",
      hobbies: ["Reading novels", "Math puzzles"],
      personality_traits: ["Patient", "Creative"]
    },
    cultural_background: {
      heritage: "Iranian",
      cultural_influences: ["Persian culture"],
      cultural_challenges: ["Gender imbalance"],
      cultural_contributions: "First Iranian and first woman Fields Medalist."
    }
  },
  {
    name: "Asima Chatterjee",
    photo: "./images/asima-chatterjee.jpg",
    lifespan: "1917–2006",
    country: "India",
    fields: ["Chemistry", "Medicine"],
    roles: ["Organic Chemist", "Professor"],
    quote: "Science is not just about discovery, but about making life better for humanity.",
    summary: "First Indian woman to earn a doctorate in science, pioneer in phytomedicine and anti-malarial drugs.",
    shortDescription: "Asima Chatterjee was a brilliant chemist from India who became the first Indian woman to earn a doctorate in science. She discovered important medicines from plants, including treatments for epilepsy and malaria. Her work showed how traditional knowledge and modern science can work together to help people.",
    detailed_description: {
      early_life: "Born in Kolkata, India, Asima showed early interest in chemistry and medicine. Her father encouraged her scientific pursuits.",
      stem_journey: "Earned her doctorate in organic chemistry in 1944, becoming the first Indian woman to achieve this milestone.",
      challenges: "Faced gender barriers in Indian academia and limited opportunities for women in science.",
      achievements: "Discovered vinca alkaloids and developed anti-epileptic and anti-malarial drugs from natural products.",
      legacy: "Pioneered phytomedicine research and opened doors for Indian women in science."
    },
    achievements: [
      "First Indian woman to earn a doctorate in science",
      "Discovered vinca alkaloids for cancer treatment",
      "Developed anti-epileptic and anti-malarial drugs",
      "Published over 400 scientific papers"
    ],
    awards: ["P.C. Ray Award", "First woman president of Indian Science Congress"],
    publications: [],
    education: [
      { degree: "Ph.D.", field: "Organic Chemistry", institution: "University of Calcutta" }
    ],
    timeline: [
      { year: 1944, event: "Earned doctorate in organic chemistry" },
      { year: 1975, event: "Became first woman president of Indian Science Congress" }
    ],
    barriers: ["Gender discrimination in Indian academia", "Limited research funding for women"],
    impact: "Pioneered phytomedicine research and inspired generations of Indian women scientists.",
    media: [],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Asima_Chatterjee" }
    ],
    mentorship: "Mentored many students and advocated for women in science.",
    fun_fact: "Published over 400 papers on medicinal plants.",
    career_path: {
      first_job: "Research chemist",
      career_highlights: ["Professor at University of Calcutta", "President of Indian Science Congress"],
      advice_for_students: "Persistence and passion can overcome any barrier. Science knows no gender."
    },
    student_resources: {
      books_for_students: ["Women in Science: 50 Fearless Pioneers"],
      websites: ["stemettes.org", "womeninscience.org"],
      programs: ["Chemistry summer camps", "Women in STEM programs"],
      advice: "Follow your curiosity and don't let stereotypes define your path."
    },
    challenges: {
      academic: ["Limited opportunities for women in higher education"],
      professional: ["Gender bias in Indian scientific community"],
      personal: ["Balancing research with family responsibilities"],
      how_overcame: "Focused on her research and built a strong scientific reputation"
    },
    education_details: {
      high_school: "Excelled in chemistry and mathematics",
      college_major: "Chemistry",
      graduate_school: "Ph.D. in Organic Chemistry",
      key_courses: ["Organic Chemistry", "Botany", "Pharmacology"],
      study_tips: "Connect theory with practical applications"
    },
    modern_impact: {
      current_applications: "Natural product drug discovery, cancer treatments",
      companies_using_her_work: ["Pharmaceutical companies", "Research institutions"],
      future_implications: "Continued development of plant-based medicines"
    },
    personal_info: {
      early_interests: ["Chemistry", "Medicine", "Plants"],
      family_background: "Supportive family encouraging education",
      hobbies: ["Reading scientific literature", "Teaching"],
      personality_traits: ["Dedicated", "Innovative", "Persistent"]
    },
    cultural_background: {
      heritage: "Indian Bengali",
      cultural_influences: ["Indian scientific tradition", "Bengali intellectual culture"],
      cultural_challenges: ["Traditional gender roles in India", "Colonial education system"],
      cultural_contributions: "Bridged traditional Indian medicine with modern chemistry"
    }
  },
  {
    name: "Mária Telkes",
    photo: "./images/maria-telkes.jpg",
    lifespan: "1900–1995",
    country: "Hungary/United States",
    fields: ["Physics", "Engineering"],
    roles: ["Biophysicist", "Engineer", "Inventor"],
    quote: "It is the things supposed to be impossible that interest me. I like to do things they say cannot be done.",
    summary: "Pioneer of solar energy technology, known as 'The Sun Queen' for her innovations in solar heating and power storage.",
    shortDescription: "Mária Telkes was a brilliant scientist who became known as 'The Sun Queen' for her groundbreaking work with solar energy. She invented solar-powered heating systems, solar ovens, and devices that could turn saltwater into drinking water using only sunlight. Her inventions helped soldiers during World War II and continue to help people around the world today.",
    detailed_description: {
      early_life: "Born in Budapest, Hungary, Mária was fascinated by chemistry from age 10. She made her own chemistry set and dreamed of harnessing solar energy.",
      stem_journey: "Earned her doctorate in physical chemistry, then moved to the United States to work on solar energy research at MIT.",
      challenges: "Faced skepticism about solar energy and gender discrimination in engineering fields.",
      achievements: "Invented solar heating systems, solar ovens, and solar water distillation devices. Held over 20 patents.",
      legacy: "Pioneered practical solar energy applications and inspired future renewable energy research."
    },
    achievements: [
      "Invented solar heating systems for homes",
      "Developed solar-powered water distillation",
      "Created portable solar ovens",
      "Held over 20 patents for solar technology"
    ],
    awards: ["Society of Women Engineers Achievement Award (1952)", "National Inventors Hall of Fame"],
    publications: [],
    education: [
      { degree: "Ph.D.", field: "Physical Chemistry", institution: "University of Budapest" }
    ],
    timeline: [
      { year: 1948, event: "Built the Dover Sun House" },
      { year: 1952, event: "First recipient of SWE Achievement Award" }
    ],
    barriers: ["Gender discrimination in engineering", "Skepticism about solar energy"],
    impact: "Pioneered practical solar energy applications that continue to benefit humanity.",
    media: [],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mária_Telkes" }
    ],
    mentorship: "Inspired generations of women engineers and solar energy researchers.",
    fun_fact: "Known as 'The Sun Queen' by her colleagues.",
    career_path: {
      first_job: "Biophysicist at Cleveland Clinic",
      career_highlights: ["MIT researcher", "Solar energy pioneer"],
      advice_for_students: "Don't be afraid to pursue what others think is impossible. Innovation requires persistence."
    },
    student_resources: {
      books_for_students: ["The Sun Queen: The Untold Story of Mária Telkes"],
      websites: ["swe.org", "solarhousehistory.com"],
      programs: ["Solar energy camps", "Engineering programs for girls"],
      advice: "Explore renewable energy and sustainable technology. The future needs innovative thinkers."
    },
    challenges: {
      academic: ["Limited opportunities for women in engineering"],
      professional: ["Skepticism about solar energy technology"],
      personal: ["Immigrating to a new country"],
      how_overcame: "Focused on practical applications and demonstrated results"
    },
    education_details: {
      high_school: "Excelled in chemistry and physics",
      college_major: "Physical Chemistry",
      graduate_school: "Ph.D. in Physical Chemistry",
      key_courses: ["Chemistry", "Physics", "Engineering"],
      study_tips: "Combine theoretical knowledge with practical experimentation"
    },
    modern_impact: {
      current_applications: "Solar heating, renewable energy, water purification",
      companies_using_her_work: ["Solar energy companies", "Environmental organizations"],
      future_implications: "Continued development of sustainable energy solutions"
    },
    personal_info: {
      early_interests: ["Chemistry", "Solar energy", "Innovation"],
      family_background: "Supportive family encouraging scientific exploration",
      hobbies: ["Scientific research", "Inventing"],
      personality_traits: ["Innovative", "Determined", "Visionary"]
    },
    cultural_background: {
      heritage: "Hungarian Jewish",
      cultural_influences: ["Hungarian scientific tradition", "American innovation culture"],
      cultural_challenges: ["Anti-Semitism in Europe", "Gender barriers in engineering"],
      cultural_contributions: "Bridged European scientific rigor with American practical innovation"
    }
  },
  {
    name: "Mariam Al-Astrulabi",
    photo: "./images/mariam-al-astrulabi.jpg",
    lifespan: "944–967",
    country: "Syria",
    fields: ["Astronomy", "Engineering"],
    roles: ["Astronomer", "Engineer", "Inventor"],
    quote: "The stars guide us not just in navigation, but in understanding our place in the universe.",
    summary: "10th-century Muslim astronomer and engineer who improved astrolabe design for navigation and timekeeping.",
    shortDescription: "Mariam Al-Astrulabi was a brilliant astronomer and engineer from 10th-century Syria who improved the design of astrolabes - ancient tools for navigation and timekeeping. Her work helped sailors navigate the seas and helped people tell time and find direction. Mariam showed that women have been contributing to science and engineering for centuries.",
    detailed_description: {
      early_life: "Born in Aleppo, Syria, Mariam came from a family of astronomers and engineers. Her father was an astrolabe maker.",
      stem_journey: "Learned astrolabe making from her father and became renowned for her improvements to the design.",
      challenges: "Few historical records of women scientists from this era, limited recognition of women's contributions.",
      achievements: "Improved astrolabe design for better accuracy in navigation and timekeeping, employed by the Emir of Aleppo.",
      legacy: "Demonstrated women's contributions to science throughout history and inspired modern Muslim women in STEM."
    },
    achievements: [
      "Improved astrolabe design for navigation",
      "Enhanced timekeeping accuracy",
      "Employed by the Emir of Aleppo",
      "Pioneered women's role in medieval astronomy"
    ],
    awards: ["Asteroid 7060 Al-'Ijliya named in her honor"],
    publications: [],
    education: [
      { degree: "Apprenticeship", field: "Astronomy and Engineering", institution: "Family workshop" }
    ],
    timeline: [
      { year: 944, event: "Born in Aleppo, Syria" },
      { year: 967, event: "Died, leaving legacy of improved astrolabes" }
    ],
    barriers: ["Limited historical recognition of women scientists", "Medieval gender roles"],
    impact: "Advanced navigation technology and demonstrated women's contributions to medieval science.",
    media: [],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mariam_al-Astrulabi" }
    ],
    mentorship: "Inspired future generations of Muslim women in science and engineering.",
    fun_fact: "An asteroid is named after her: 7060 Al-'Ijliya.",
    career_path: {
      first_job: "Astrolabe maker",
      career_highlights: ["Court astronomer for Emir of Aleppo"],
      advice_for_students: "Your contributions to science matter, regardless of when you lived or where you're from."
    },
    student_resources: {
      books_for_students: ["1001 Inventions: The Enduring Legacy of Muslim Civilization"],
      websites: ["1001inventions.com", "islamicscience.org"],
      programs: ["Islamic science history programs", "Astronomy clubs"],
      advice: "Learn about the rich history of science in different cultures and time periods."
    },
    challenges: {
      academic: ["Limited formal education opportunities for women"],
      professional: ["Medieval gender roles and expectations"],
      personal: ["Working in a male-dominated field"],
      how_overcame: "Demonstrated exceptional skill and innovation in her craft"
    },
    education_details: {
      high_school: "Learned from family workshop",
      college_major: "Apprenticeship in astronomy and engineering",
      key_courses: ["Astronomy", "Engineering", "Mathematics"],
      study_tips: "Learn from family traditions and combine with modern knowledge"
    },
    modern_impact: {
      current_applications: "Navigation technology, timekeeping devices",
      companies_using_her_work: ["Navigation companies", "Astronomical societies"],
      future_implications: "Continued recognition of historical women scientists"
    },
    personal_info: {
      early_interests: ["Astronomy", "Engineering", "Navigation"],
      family_background: "Family of astronomers and engineers",
      hobbies: ["Studying the stars", "Improving instruments"],
      personality_traits: ["Innovative", "Precise", "Dedicated"]
    },
    cultural_background: {
      heritage: "Syrian Muslim",
      cultural_influences: ["Islamic Golden Age", "Syrian scientific tradition"],
      cultural_challenges: ["Medieval gender roles", "Limited historical documentation"],
      cultural_contributions: "Contributed to Islamic Golden Age scientific achievements"
    }
  },
  {
    name: "Chien-Shiung Wu",
    photo: "./images/chien-shiung-wu.jpg",
    lifespan: "1912–1997",
    country: "China/United States",
    fields: ["Physics"],
    roles: ["Nuclear Physicist", "Professor"],
    quote: "There is only one thing worse than coming home from the lab to a sink full of dirty dishes, and that is not going to the lab at all.",
    summary: "Known as the 'First Lady of Physics' for her groundbreaking work in nuclear physics and the Manhattan Project.",
    shortDescription: "Chien-Shiung Wu was a brilliant physicist known as the 'First Lady of Physics.' She made important discoveries about how atoms work and helped develop the atomic bomb during World War II. Her experiments proved that nature doesn't always behave the same way when you look at it in a mirror - a discovery that changed how scientists understand the universe.",
    detailed_description: {
      early_life: "Born in China, Chien-Shiung showed exceptional talent in mathematics and physics from an early age. She was encouraged by her father to pursue education.",
      stem_journey: "Earned her doctorate in physics, then moved to the United States where she became a leading nuclear physicist.",
      challenges: "Faced discrimination as a Chinese woman in American physics and limited recognition for her contributions.",
      achievements: "Conducted the Wu experiment that disproved the law of conservation of parity, worked on the Manhattan Project.",
      legacy: "Pioneered nuclear physics research and inspired generations of women and Asian Americans in physics."
    },
    achievements: [
      "Conducted the Wu experiment disproving parity conservation",
      "Worked on the Manhattan Project",
      "First female president of American Physical Society",
      "Known as 'First Lady of Physics'"
    ],
    awards: ["National Medal of Science", "Wolf Prize in Physics"],
    publications: [],
    education: [
      { degree: "Ph.D.", field: "Physics", institution: "University of California, Berkeley" }
    ],
    timeline: [
      { year: 1956, event: "Conducted the Wu experiment" },
      { year: 1975, event: "First female president of American Physical Society" }
    ],
    barriers: ["Gender and racial discrimination in physics", "Limited recognition for contributions"],
    impact: "Revolutionized understanding of nuclear physics and inspired women in physics worldwide.",
    media: [],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Chien-Shiung_Wu" }
    ],
    mentorship: "Mentored many students and advocated for women in physics.",
    fun_fact: "Her experiment was called 'the most beautiful experiment in physics.'",
    career_path: {
      first_job: "Research physicist",
      career_highlights: ["Manhattan Project scientist", "Columbia University professor"],
      advice_for_students: "Pursue your passion with determination. Your background is your strength, not a limitation."
    },
    student_resources: {
      books_for_students: ["Queen of Physics: How Wu Chien Shiung Helped Unlock the Secrets of the Atom"],
      websites: ["aps.org", "physics.org"],
      programs: ["Physics summer camps", "Women in Physics programs"],
      advice: "Don't let stereotypes define your capabilities. Physics needs diverse perspectives."
    },
    challenges: {
      academic: ["Limited opportunities for women in physics"],
      professional: ["Gender and racial discrimination in academia"],
      personal: ["Balancing research with family life"],
      how_overcame: "Focused on her research and built a strong scientific reputation"
    },
    education_details: {
      high_school: "Excelled in mathematics and physics",
      college_major: "Physics",
      graduate_school: "Ph.D. in Physics",
      key_courses: ["Nuclear Physics", "Quantum Mechanics", "Mathematics"],
      study_tips: "Combine theoretical understanding with experimental skills"
    },
    modern_impact: {
      current_applications: "Nuclear physics, particle physics, medical imaging",
      companies_using_her_work: ["Research institutions", "Medical imaging companies"],
      future_implications: "Continued advances in nuclear and particle physics"
    },
    personal_info: {
      early_interests: ["Physics", "Mathematics", "Scientific research"],
      family_background: "Supportive family encouraging education",
      hobbies: ["Reading scientific literature", "Teaching"],
      personality_traits: ["Precise", "Determined", "Innovative"]
    },
    cultural_background: {
      heritage: "Chinese American",
      cultural_influences: ["Chinese educational tradition", "American scientific community"],
      cultural_challenges: ["Anti-Asian discrimination", "Gender barriers in physics"],
      cultural_contributions: "Bridged Chinese and American scientific traditions"
    }
  },
  {
    name: "Dorothy Vaughan",
    photo: "./images/dorothy-vaughan.jpg",
    lifespan: "1910–2008",
    country: "United States",
    fields: ["Mathematics", "Computer Science"],
    roles: ["Mathematician", "Computer Programmer"],
    quote: "I changed what I could, and what I couldn't, I endured.",
    summary: "NASA mathematician and computer programmer who led the West Area Computing Unit during the Space Race.",
    shortDescription: "Dorothy Vaughan was a brilliant mathematician who worked at NASA when 'computers' were people who did math by hand. She led a group of African American women mathematicians and later became one of the first computer programmers. Dorothy's work helped launch astronauts into space and showed that talent comes in all colors and genders.",
    detailed_description: {
      early_life: "Born in Kansas City, Missouri, Dorothy showed exceptional mathematical ability. She graduated high school at 15 and earned a mathematics degree.",
      stem_journey: "Became a teacher, then joined NASA in 1943 as a mathematician. Later learned computer programming.",
      challenges: "Faced racial and gender discrimination in the segregated South, limited opportunities for African American women.",
      achievements: "Led the West Area Computing Unit, became one of NASA's first computer programmers, contributed to space missions.",
      legacy: "Pioneered computer programming and inspired African American women in STEM fields."
    },
    achievements: [
      "Led NASA's West Area Computing Unit",
      "One of NASA's first computer programmers",
      "Contributed to space missions",
      "Mentored many African American women in STEM"
    ],
    awards: [],
    publications: [],
    education: [
      { degree: "Bachelor's", field: "Mathematics", institution: "Wilberforce University" }
    ],
    timeline: [
      { year: 1943, event: "Joined NASA as mathematician" },
      { year: 1958, event: "Became computer programmer" }
    ],
    barriers: ["Racial segregation", "Gender discrimination", "Limited opportunities for African American women"],
    impact: "Pioneered computer programming and opened doors for African American women in STEM.",
    media: [
      { type: "movie", title: "Hidden Figures", url: "https://www.imdb.com/title/tt4846340/" }
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dorothy_Vaughan" }
    ],
    mentorship: "Mentored many African American women mathematicians and programmers.",
    fun_fact: "Her story was featured in the movie 'Hidden Figures.'",
    career_path: {
      first_job: "Mathematics teacher",
      career_highlights: ["NASA mathematician", "Computer programming pioneer"],
      advice_for_students: "Education is your key to opportunity. Learn everything you can and be ready for change."
    },
    student_resources: {
      books_for_students: ["Hidden Figures: The American Dream and the Untold Story of the Black Women Mathematicians Who Helped Win the Space Race"],
      websites: ["nasa.gov", "blackgirlscode.org"],
      programs: ["Computer science programs for girls", "STEM mentorship programs"],
      advice: "Learn to adapt to new technologies. The future belongs to those who can learn and grow."
    },
    challenges: {
      academic: ["Limited educational opportunities for African Americans"],
      professional: ["Racial and gender discrimination in the workplace"],
      personal: ["Balancing work with family responsibilities"],
      how_overcame: "Focused on her work and adapted to new technologies"
    },
    education_details: {
      high_school: "Graduated at age 15",
      college_major: "Mathematics",
      key_courses: ["Mathematics", "Computer Programming"],
      study_tips: "Be adaptable and willing to learn new skills"
    },
    modern_impact: {
      current_applications: "Computer programming, space exploration, diversity in STEM",
      companies_using_her_work: ["NASA", "Technology companies"],
      future_implications: "Continued diversity and inclusion in STEM fields"
    },
    personal_info: {
      early_interests: ["Mathematics", "Problem-solving"],
      family_background: "Supportive family valuing education",
      hobbies: ["Reading", "Teaching"],
      personality_traits: ["Adaptable", "Determined", "Mentoring"]
    },
    cultural_background: {
      heritage: "African American",
      cultural_influences: ["Black educational tradition", "NASA culture"],
      cultural_challenges: ["Racial segregation", "Gender discrimination"],
      cultural_contributions: "Pioneered African American women's participation in STEM"
    }
  },
  {
    name: "Grace Hopper",
    photo: "./images/grace-hopper.jpg",
    lifespan: "1906–1992",
    country: "United States",
    fields: ["Computer Science", "Mathematics"],
    roles: ["Computer Scientist", "Navy Admiral"],
    quote: "The most dangerous phrase in the language is 'We've always done it this way.'",
    summary: "Pioneer of computer programming who developed the first compiler and popularized the term 'debugging.'",
    shortDescription: "Grace Hopper was a brilliant computer scientist and Navy admiral who helped invent modern computer programming. She created the first compiler - a program that translates human language into computer language - and found the first computer 'bug' (a real insect!). Grace's work made computers easier to use and helped create the software we use today.",
    detailed_description: {
      early_life: "Born in New York, Grace showed early interest in mathematics and mechanical devices. She loved taking things apart to see how they worked.",
      stem_journey: "Earned her Ph.D. in mathematics, joined the Navy during World War II, and became a pioneer in computer programming.",
      challenges: "Faced gender discrimination in the military and computer industry, was often the only woman in technical meetings.",
      achievements: "Developed the first compiler, popularized the term 'debugging,' became the first female admiral in the Navy.",
      legacy: "Pioneered computer programming and inspired generations of women in computer science."
    },
    achievements: [
      "Developed the first computer compiler",
      "Popularized the term 'debugging'",
      "First female admiral in the U.S. Navy",
      "Pioneered computer programming languages"
    ],
    awards: ["Presidential Medal of Freedom", "National Medal of Technology"],
    publications: [],
    education: [
      { degree: "Ph.D.", field: "Mathematics", institution: "Yale University" }
    ],
    timeline: [
      { year: 1944, event: "Joined the Navy" },
      { year: 1952, event: "Developed the first compiler" }
    ],
    barriers: ["Gender discrimination in military and technology", "Age restrictions in Navy"],
    impact: "Revolutionized computer programming and opened doors for women in technology.",
    media: [],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Grace_Hopper" }
    ],
    mentorship: "Mentored many women in computer science and technology.",
    fun_fact: "Found the first computer 'bug' - a real moth stuck in the computer!",
    career_path: {
      first_job: "Mathematics professor",
      career_highlights: ["Navy admiral", "Computer programming pioneer"],
      advice_for_students: "Don't be afraid to challenge the status quo. Innovation requires thinking differently."
    },
    student_resources: {
      books_for_students: ["Grace Hopper: Queen of Computer Code"],
      websites: ["code.org", "girlswhocode.com"],
      programs: ["Computer science camps", "Coding programs for girls"],
      advice: "Learn to program and don't be afraid to break things - that's how you learn!"
    },
    challenges: {
      academic: ["Few women in mathematics and computer science"],
      professional: ["Gender discrimination in military and technology"],
      personal: ["Balancing military career with personal life"],
      how_overcame: "Focused on her work and challenged gender stereotypes"
    },
    education_details: {
      high_school: "Excelled in mathematics",
      college_major: "Mathematics",
      graduate_school: "Ph.D. in Mathematics",
      key_courses: ["Mathematics", "Computer Science", "Programming"],
      study_tips: "Learn by doing and don't be afraid to experiment"
    },
    modern_impact: {
      current_applications: "Computer programming, software development, artificial intelligence",
      companies_using_her_work: ["All major technology companies", "Software companies"],
      future_implications: "Continued development of programming languages and software"
    },
    personal_info: {
      early_interests: ["Mathematics", "Mechanical devices", "Problem-solving"],
      family_background: "Supportive family encouraging education",
      hobbies: ["Taking things apart", "Teaching", "Military service"],
      personality_traits: ["Innovative", "Determined", "Mentoring"]
    },
    cultural_background: {
      heritage: "American",
      cultural_influences: ["American military tradition", "Early computer culture"],
      cultural_challenges: ["Gender barriers in military and technology"],
      cultural_contributions: "Pioneered women's participation in computer science and military technology"
    }
  },
  {
    name: "Katherine Johnson",
    photo: "./images/katherine-johnson.jpg",
    lifespan: "1918–2020",
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
      legacy: "Katherine opened doors for women and African Americans in STEM and inspired millions with her story of perseverance and excellence."
    },
    achievements: [
      "Calculated trajectories for first American space flights",
      "Verified computer calculations for John Glenn's orbital flight",
      "Contributed to Apollo 11 moon landing",
      "Received Presidential Medal of Freedom"
    ],
    awards: ["Presidential Medal of Freedom", "Congressional Gold Medal"],
    publications: [],
    education: [
      { degree: "Bachelor's", field: "Mathematics", institution: "West Virginia State University" }
    ],
    timeline: [
      { year: 1953, event: "Joined NASA" },
      { year: 1962, event: "Verified calculations for John Glenn's flight" }
    ],
    barriers: ["Racial segregation", "Gender discrimination in STEM"],
    impact: "Pioneered space exploration and inspired generations of women and African Americans in STEM.",
    media: [
      { type: "movie", title: "Hidden Figures", url: "https://www.imdb.com/title/tt4846340/" }
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Katherine_Johnson" }
    ],
    mentorship: "Mentored many young mathematicians and inspired women in STEM.",
    fun_fact: "Her story was featured in the movie 'Hidden Figures.'",
    career_path: {
      first_job: "Mathematics teacher",
      career_highlights: ["NASA mathematician", "Space flight calculations"],
      advice_for_students: "Find what you love and pursue it with passion. Don't let anyone tell you what you can't do."
    },
    student_resources: {
      books_for_students: ["Hidden Figures: The American Dream and the Untold Story of the Black Women Mathematicians Who Helped Win the Space Race"],
      websites: ["nasa.gov", "blackgirlscode.org"],
      programs: ["Mathematics programs for girls", "STEM mentorship programs"],
      advice: "Practice your math skills and don't be afraid to ask questions. Every question is a good question."
    },
    challenges: {
      academic: ["Limited educational opportunities for African Americans"],
      professional: ["Racial and gender discrimination in the workplace"],
      personal: ["Balancing work with family responsibilities"],
      how_overcame: "Focused on her work and demonstrated exceptional mathematical ability"
    },
    education_details: {
      high_school: "Graduated at age 14",
      college_major: "Mathematics",
      key_courses: ["Mathematics", "Physics", "Calculus"],
      study_tips: "Practice regularly and don't be afraid to make mistakes"
    },
    modern_impact: {
      current_applications: "Space exploration, satellite technology, mathematical modeling",
      companies_using_her_work: ["NASA", "Space companies"],
      future_implications: "Continued space exploration and mathematical innovation"
    },
    personal_info: {
      early_interests: ["Mathematics", "Problem-solving", "Space"],
      family_background: "Supportive family valuing education",
      hobbies: ["Reading", "Teaching", "Solving puzzles"],
      personality_traits: ["Precise", "Determined", "Mentoring"]
    },
    cultural_background: {
      heritage: "African American",
      cultural_influences: ["Black educational tradition", "NASA culture"],
      cultural_challenges: ["Racial segregation", "Gender discrimination"],
      cultural_contributions: "Pioneered African American women's participation in space exploration"
    }
  },
  {
    name: "Mae Jemison",
    photo: "./images/mae-jemison.jpg",
    lifespan: "1956–",
    country: "United States",
    fields: ["Engineering", "Medicine", "Astronomy"],
    roles: ["Astronaut", "Engineer", "Physician"],
    quote: "Never be limited by other people's limited imaginations.",
    summary: "First African American woman in space, physician, engineer, and advocate for science education.",
    shortDescription: "Mae Jemison was the first African American woman to travel in space! She's also a doctor, engineer, and dancer. Mae shows that you can be many things at once - she studied science and medicine, became an astronaut, and even appeared on Star Trek. Her journey inspires people to dream big and not let anyone limit what they can achieve.",
    detailed_description: {
      early_life: "Born in Alabama and raised in Chicago, Mae showed early interest in science and space. She was inspired by Star Trek and dreamed of becoming an astronaut.",
      stem_journey: "Earned degrees in chemical engineering and medicine, worked as a doctor, then became an astronaut with NASA.",
      challenges: "Faced racial and gender discrimination in STEM fields, limited opportunities for African American women in space program.",
      achievements: "Became the first African American woman in space, worked as a physician, founded a technology company.",
      legacy: "Inspired generations of women and African Americans to pursue careers in STEM and space exploration."
    },
    achievements: [
      "First African American woman in space",
      "Medical doctor and engineer",
      "Founded technology company",
      "Appeared on Star Trek: The Next Generation"
    ],
    awards: ["NASA Space Flight Medal", "National Women's Hall of Fame"],
    publications: [],
    education: [
      { degree: "M.D.", field: "Medicine", institution: "Cornell University" },
      { degree: "B.S.", field: "Chemical Engineering", institution: "Stanford University" }
    ],
    timeline: [
      { year: 1992, event: "Became first African American woman in space" },
      { year: 1993, event: "Appeared on Star Trek: The Next Generation" }
    ],
    barriers: ["Racial and gender discrimination in STEM", "Limited opportunities for African American women in space program"],
    impact: "Inspired generations to pursue careers in STEM and space exploration.",
    media: [
      { type: "TV", title: "Star Trek: The Next Generation", url: "https://www.imdb.com/title/tt0092455/" }
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mae_Jemison" }
    ],
    mentorship: "Advocates for science education and mentors young people in STEM.",
    fun_fact: "Appeared on an episode of Star Trek: The Next Generation!",
    career_path: {
      first_job: "Medical doctor",
      career_highlights: ["NASA astronaut", "Technology company founder"],
      advice_for_students: "Don't let anyone limit your dreams. You can be anything you want to be."
    },
    student_resources: {
      books_for_students: ["Find Where the Wind Goes: Moments from My Life"],
      websites: ["maejemison.com", "nasa.gov"],
      programs: ["Space camps", "STEM programs for girls"],
      advice: "Follow your interests and don't be afraid to try new things. You can have multiple careers!"
    },
    challenges: {
      academic: ["Limited opportunities for African American women in STEM"],
      professional: ["Racial and gender discrimination in space program"],
      personal: ["Balancing multiple careers and interests"],
      how_overcame: "Pursued her passions with determination and excellence"
    },
    education_details: {
      high_school: "Excelled in science and mathematics",
      college_major: "Chemical Engineering",
      graduate_school: "M.D. in Medicine",
      key_courses: ["Engineering", "Medicine", "Astronomy"],
      study_tips: "Follow your curiosity and don't limit yourself to one field"
    },
    modern_impact: {
      current_applications: "Space exploration, medical technology, science education",
      companies_using_her_work: ["NASA", "Technology companies"],
      future_implications: "Continued diversity in space exploration and STEM fields"
    },
    personal_info: {
      early_interests: ["Science", "Space", "Dance", "Medicine"],
      family_background: "Supportive family encouraging education",
      hobbies: ["Dancing", "Reading", "Teaching"],
      personality_traits: ["Multi-talented", "Determined", "Inspiring"]
    },
    cultural_background: {
      heritage: "African American",
      cultural_influences: ["Black educational tradition", "American space program"],
      cultural_challenges: ["Racial discrimination", "Gender barriers in STEM"],
      cultural_contributions: "Pioneered African American women's participation in space exploration"
    }
  },
  {
    name: "Radia Perlman",
    photo: "./images/radia-perlman.jpg",
    lifespan: "1951–",
    country: "United States",
    fields: ["Computer Science", "Engineering"],
    roles: ["Computer Scientist", "Engineer"],
    quote: "The world would be a better place if more engineers, like me, hated technology.",
    summary: "Known as the 'Mother of the Internet' for inventing the spanning tree protocol that made the internet possible.",
    shortDescription: "Radia Perlman is a computer scientist known as the 'Mother of the Internet' because she invented a way for computers to talk to each other safely. Her work made the internet work properly and helped create the network we use today. Radia shows that women can be leaders in technology and that good engineering makes technology work better for everyone.",
    detailed_description: {
      early_life: "Born in New Jersey, Radia showed early interest in mathematics and problem-solving. She loved puzzles and logical thinking.",
      stem_journey: "Earned degrees in mathematics and computer science, then worked on networking protocols that made the internet possible.",
      challenges: "Faced gender discrimination in computer science and engineering, often the only woman in technical meetings.",
      achievements: "Invented the spanning tree protocol, holds over 100 patents, known as 'Mother of the Internet.'",
      legacy: "Pioneered internet networking and inspired women in computer science and engineering."
    },
    achievements: [
      "Invented spanning tree protocol",
      "Holds over 100 patents",
      "Known as 'Mother of the Internet'",
      "Pioneered network security protocols"
    ],
    awards: ["National Inventors Hall of Fame", "Internet Hall of Fame"],
    publications: [],
    education: [
      { degree: "Ph.D.", field: "Computer Science", institution: "MIT" }
    ],
    timeline: [
      { year: 1985, event: "Invented spanning tree protocol" },
      { year: 2016, event: "Inducted into National Inventors Hall of Fame" }
    ],
    barriers: ["Gender discrimination in computer science", "Limited recognition for women's contributions"],
    impact: "Pioneered internet networking and opened doors for women in computer science.",
    media: [],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Radia_Perlman" }
    ],
    mentorship: "Advocates for women in computer science and mentors young engineers.",
    fun_fact: "Known as the 'Mother of the Internet' for her networking innovations.",
    career_path: {
      first_job: "Computer scientist",
      career_highlights: ["Internet pioneer", "Patent holder"],
      advice_for_students: "Focus on solving real problems and don't worry about being the only woman in the room."
    },
    student_resources: {
      books_for_students: ["Interconnections: Bridges, Routers, Switches, and Internetworking Protocols"],
      websites: ["code.org", "womenintechnology.org"],
      programs: ["Computer science camps", "Coding programs for girls"],
      advice: "Learn to program and understand how networks work. The internet needs diverse perspectives."
    },
    challenges: {
      academic: ["Few women in computer science and engineering"],
      professional: ["Gender discrimination in technology industry"],
      personal: ["Being the only woman in technical meetings"],
      how_overcame: "Focused on her work and built a strong technical reputation"
    },
    education_details: {
      high_school: "Excelled in mathematics",
      college_major: "Mathematics",
      graduate_school: "Ph.D. in Computer Science",
      key_courses: ["Computer Science", "Networking", "Mathematics"],
      study_tips: "Practice by building and experimenting"
    },
    modern_impact: {
      current_applications: "Internet, cloud computing, cybersecurity",
      companies_using_her_work: ["Cisco", "Intel", "Google"],
      future_implications: "Secure, scalable networks for the future"
    },
    personal_info: {
      early_interests: ["Mathematics", "Puzzles", "Programming"],
      family_background: "Engineer parents",
      hobbies: ["Writing", "Teaching"],
      personality_traits: ["Logical", "Creative"]
    },
    cultural_background: {
      heritage: "Jewish-American",
      cultural_influences: ["MIT culture"],
      cultural_challenges: ["Gender imbalance in tech"],
      cultural_contributions: "Pioneered diversity in networking"
    }
  },
  {
    name: "Ellen Ochoa",
    photo: "./images/ellen-ochoa.jpg",
    lifespan: "1958–",
    country: "United States",
    fields: ["Engineering", "Astronautics"],
    roles: ["Astronaut", "Engineer", "Director"],
    quote: "Don't be afraid to reach for the stars!",
    summary: "First Hispanic woman in space and former Director of Johnson Space Center.",
    shortDescription: "Ellen Ochoa is an engineer, astronaut, and the first Hispanic woman to go to space. She later became the Director of NASA's Johnson Space Center, inspiring countless young people to pursue STEM careers.",
    detailed_description: {
      early_life: "Born in Los Angeles, California, Ellen excelled in math and science from a young age.",
      stem_journey: "Earned a Ph.D. in electrical engineering, became a research engineer, and was selected as a NASA astronaut in 1990.",
      challenges: "Faced gender and ethnic barriers in engineering and space exploration.",
      achievements: "Flew on four space missions, logged nearly 1,000 hours in space, and became the first Hispanic director of Johnson Space Center.",
      legacy: "Paved the way for Hispanic women in STEM and space exploration."
    },
    achievements: [
      "First Hispanic woman in space",
      "Director of Johnson Space Center",
      "Flew on four space missions"
    ],
    awards: ["NASA Distinguished Service Medal", "Congressional Hispanic Caucus Medallion of Excellence"],
    publications: [],
    education: [
      { degree: "Ph.D.", field: "Electrical Engineering", institution: "Stanford University" }
    ],
    timeline: [
      { year: 1993, event: "First spaceflight on STS-56" },
      { year: 2013, event: "Became Director of Johnson Space Center" }
    ],
    barriers: ["Gender and ethnic barriers in STEM"],
    impact: "Inspired Hispanic and female students to pursue STEM careers.",
    media: [],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Ellen_Ochoa" }
    ],
    mentorship: "Mentors young women and minorities in STEM.",
    fun_fact: "Plays the flute and brought it to space!",
    career_path: {
      first_job: "Research engineer",
      career_highlights: ["NASA astronaut", "Director of Johnson Space Center"],
      advice_for_students: "Don't let anyone tell you what you can't do."
    },
    student_resources: {
      books_for_students: ["The Astronaut With a Song for the Stars"],
      websites: ["nasa.gov", "latinasinstem.com"],
      programs: ["Space camps", "STEM outreach for minorities"],
      advice: "Reach for the stars and work hard for your dreams."
    },
    challenges: {
      academic: ["Few Hispanic women in engineering"],
      professional: ["Breaking barriers at NASA"],
      personal: ["Balancing family and career"],
      how_overcame: "Persevered and sought mentors."
    },
    education_details: {
      high_school: "Excelled in math and science",
      college_major: "Physics",
      graduate_school: "Ph.D. in Electrical Engineering",
      key_courses: ["Physics", "Engineering", "Mathematics"],
      study_tips: "Practice problem-solving and seek help when needed."
    },
    modern_impact: {
      current_applications: "Space technology, STEM leadership",
      companies_using_her_work: ["NASA", "Aerospace companies"],
      future_implications: "More diversity in space exploration."
    },
    personal_info: {
      early_interests: ["Math", "Science", "Music"],
      family_background: "Mexican-American heritage",
      hobbies: ["Playing flute", "Reading"],
      personality_traits: ["Determined", "Inspiring"]
    },
    cultural_background: {
      heritage: "Mexican-American",
      cultural_influences: ["Latina heritage", "American STEM culture"],
      cultural_challenges: ["Underrepresentation in STEM"],
      cultural_contributions: "Role model for Latinas in science."
    }
  },
  {
    name: "Yvonne Brill",
    photo: "./images/yvonne-brill.jpg",
    lifespan: "1924–2013",
    country: "Canada/United States",
    fields: ["Engineering", "Rocket Science"],
    roles: ["Rocket Scientist", "Engineer"],
    quote: "If you have a good idea, pursue it.",
    summary: "Invented the hydrazine resistojet, a breakthrough in rocket propulsion.",
    shortDescription: "Yvonne Brill was a rocket scientist who invented a revolutionary propulsion system for satellites. Her work keeps satellites in orbit today.",
    detailed_description: {
      early_life: "Born in Canada, Yvonne was fascinated by science and math.",
      stem_journey: "Studied engineering, became one of the few women in rocket science in the 1950s.",
      challenges: "Faced gender discrimination in engineering.",
      achievements: "Invented the hydrazine resistojet, worked on major satellite projects.",
      legacy: "Her invention is still used in satellites today."
    },
    achievements: [
      "Invented hydrazine resistojet",
      "Worked on major satellite projects"
    ],
    awards: ["National Medal of Technology and Innovation"],
    publications: [],
    education: [
      { degree: "Bachelor's", field: "Engineering", institution: "University of Manitoba" }
    ],
    timeline: [
      { year: 1960, event: "Invented hydrazine resistojet" }
    ],
    barriers: ["Gender discrimination in engineering"],
    impact: "Enabled long-term satellite operation.",
    media: [],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Yvonne_Brill" }
    ],
    mentorship: "Mentored young engineers, especially women.",
    fun_fact: "Her son is a Nobel Prize-winning physicist.",
    career_path: {
      first_job: "Engineer",
      career_highlights: ["Inventor of resistojet", "Satellite propulsion expert"],
      advice_for_students: "Don't be afraid to be the only woman in the room."
    },
    student_resources: {
      books_for_students: ["Women in Space: 23 Stories of First Flights"],
      websites: ["nasa.gov", "engineergirl.org"],
      programs: ["Engineering camps", "Rocketry clubs"],
      advice: "Pursue your ideas and don't give up."
    },
    challenges: {
      academic: ["Few women in engineering"],
      professional: ["Gender bias in aerospace"],
      personal: ["Balancing work and family"],
      how_overcame: "Focused on her work and built a reputation for excellence."
    },
    education_details: {
      high_school: "Excelled in science",
      college_major: "Engineering",
      key_courses: ["Physics", "Engineering", "Mathematics"],
      study_tips: "Work hard and seek mentors."
    },
    modern_impact: {
      current_applications: "Satellite propulsion",
      companies_using_her_work: ["NASA", "Satellite companies"],
      future_implications: "Continued innovation in space technology."
    },
    personal_info: {
      early_interests: ["Science", "Math"],
      family_background: "Canadian immigrant family",
      hobbies: ["Reading", "Mentoring"],
      personality_traits: ["Inventive", "Persistent"]
    },
    cultural_background: {
      heritage: "Canadian-American",
      cultural_influences: ["North American engineering culture"],
      cultural_challenges: ["Gender roles in the 1950s"],
      cultural_contributions: "Paved the way for women in aerospace."
    }
  },
  {
    name: "Wang Zhenyi",
    photo: "./images/wang-zhenyi.jpg",
    lifespan: "1768–1797",
    country: "China",
    fields: ["Astronomy", "Mathematics"],
    roles: ["Astronomer", "Mathematician", "Poet"],
    quote: "It is difficult to be a woman and to be learned.",
    summary: "18th-century Chinese astronomer and mathematician who broke gender barriers.",
    shortDescription: "Wang Zhenyi was a pioneering Chinese astronomer and mathematician who explained eclipses and wrote books to make science accessible.",
    detailed_description: {
      early_life: "Born in Qing Dynasty China, Wang was educated by her grandfather and father.",
      stem_journey: "Studied astronomy, mathematics, and medicine, and published scientific works.",
      challenges: "Faced strict gender roles in 18th-century China.",
      achievements: "Explained lunar eclipses, simplified math texts, and promoted science for all.",
      legacy: "Inspired future generations of Chinese women in science."
    },
    achievements: [
      "Explained lunar eclipses",
      "Simplified math texts",
      "Promoted science education"
    ],
    awards: [],
    publications: [
      { title: "Dispute of the Procession of the Equinoxes", url: "https://en.wikipedia.org/wiki/Wang_Zhenyi" }
    ],
    education: [
      { degree: "Self-taught", field: "Astronomy, Mathematics", institution: "Family education" }
    ],
    timeline: [
      { year: 1790, event: "Published works on astronomy and math" }
    ],
    barriers: ["Strict gender roles in Qing Dynasty China"],
    impact: "Made science accessible in 18th-century China.",
    media: [],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Wang_Zhenyi" }
    ],
    mentorship: "Inspired women in science through her writings.",
    fun_fact: "Also wrote poetry and medicine texts.",
    career_path: {
      first_job: "Science writer",
      career_highlights: ["Published scientific books", "Explained eclipses"],
      advice_for_students: "Never stop learning, even if society says you shouldn't."
    },
    student_resources: {
      books_for_students: ["Women in Science: 50 Fearless Pioneers"],
      websites: ["womenofchina.cn"],
      programs: ["Astronomy clubs", "Math circles"],
      advice: "Ask questions and seek knowledge everywhere."
    },
    challenges: {
      academic: ["No formal schooling for girls"],
      professional: ["Lack of recognition for women scientists"],
      personal: ["Balancing family and scholarship"],
      how_overcame: "Used family resources and self-study."
    },
    education_details: {
      high_school: "Educated at home",
      college_major: "Self-taught",
      key_courses: ["Astronomy", "Mathematics", "Literature"],
      study_tips: "Read widely and experiment."
    },
    modern_impact: {
      current_applications: "Science education in China",
      companies_using_her_work: ["Chinese science academies"],
      future_implications: "More women in Chinese STEM fields."
    },
    personal_info: {
      early_interests: ["Astronomy", "Math", "Poetry"],
      family_background: "Scholarly family",
      hobbies: ["Writing", "Observing the sky"],
      personality_traits: ["Curious", "Resilient"]
    },
    cultural_background: {
      heritage: "Chinese",
      cultural_influences: ["Qing Dynasty scholarship"],
      cultural_challenges: ["Patriarchal society"],
      cultural_contributions: "Made science accessible to all."
    }
  },
  {
    name: "Janaki Ammal",
    photo: "./images/janaki-ammal.jpg",
    lifespan: "1897–1984",
    country: "India",
    fields: ["Botany", "Cytogenetics"],
    roles: ["Botanist", "Cytogeneticist"],
    quote: "Science is a universal language.",
    summary: "Indian botanist who made major contributions to plant genetics and biodiversity.",
    shortDescription: "Janaki Ammal was a pioneering Indian botanist who developed new plant varieties and worked to preserve India's biodiversity.",
    detailed_description: {
      early_life: "Born in Kerala, India, Janaki was passionate about plants from a young age.",
      stem_journey: "Earned a doctorate in botany, worked in India and the UK, and developed new sugarcane varieties.",
      challenges: "Faced gender and caste barriers in science.",
      achievements: "Developed hybrid sugarcane, worked on biodiversity conservation.",
      legacy: "Her work is foundational for Indian agriculture and conservation."
    },
    achievements: [
      "Developed hybrid sugarcane",
      "Worked on biodiversity conservation"
    ],
    awards: ["Padma Shri (India's fourth highest civilian award)"],
    publications: [],
    education: [
      { degree: "Ph.D.", field: "Botany", institution: "University of Michigan" }
    ],
    timeline: [
      { year: 1931, event: "Earned Ph.D. in Botany" }
    ],
    barriers: ["Gender and caste discrimination"],
    impact: "Improved Indian agriculture and conservation.",
    media: [],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Janaki_Ammal" }
    ],
    mentorship: "Mentored young botanists in India.",
    fun_fact: "A flower, Magnolia kobus janakiammal, is named after her.",
    career_path: {
      first_job: "Botanist",
      career_highlights: ["Developed new plant varieties", "Worked at Royal Horticultural Society"],
      advice_for_students: "Be curious and persistent."
    },
    student_resources: {
      books_for_students: ["Women in Science: 50 Fearless Pioneers"],
      websites: ["biodiversity.org"],
      programs: ["Botany clubs", "Science fairs"],
      advice: "Explore the natural world and ask questions."
    },
    challenges: {
      academic: ["Few women in science in early 20th-century India"],
      professional: ["Caste and gender bias"],
      personal: ["Working abroad as an Indian woman"],
      how_overcame: "Focused on research and built international collaborations."
    },
    education_details: {
      high_school: "Excelled in science",
      college_major: "Botany",
      graduate_school: "Ph.D. in Botany",
      key_courses: ["Botany", "Genetics", "Ecology"],
      study_tips: "Observe nature closely and keep a journal."
    },
    modern_impact: {
      current_applications: "Plant genetics, biodiversity conservation",
      companies_using_her_work: ["Agricultural research centers"],
      future_implications: "Sustainable agriculture and conservation."
    },
    personal_info: {
      early_interests: ["Plants", "Nature"],
      family_background: "Educated family in Kerala",
      hobbies: ["Gardening", "Traveling"],
      personality_traits: ["Curious", "Persistent"]
    },
    cultural_background: {
      heritage: "Indian",
      cultural_influences: ["Kerala's biodiversity"],
      cultural_challenges: ["Caste system", "Gender roles"],
      cultural_contributions: "Advanced plant science in India."
    }
  },
  {
    name: "Mary Golda Ross",
    photo: "./images/mary-golda-ross.jpg",
    lifespan: "1908–2008",
    country: "United States (Cherokee Nation)",
    fields: ["Engineering", "Mathematics", "Aerospace"],
    roles: ["Engineer", "Mathematician"],
    quote: "To function efficiently, any group of people must have faith in their leader.",
    summary: "First known Native American female engineer, worked on space and missile projects.",
    shortDescription: "Mary Golda Ross was a Cherokee engineer who helped design spacecraft and missiles for NASA and Lockheed.",
    detailed_description: {
      early_life: "Born in Oklahoma, Mary was proud of her Cherokee heritage and excelled in math.",
      stem_journey: "Became a math teacher, then an engineer at Lockheed, working on top-secret aerospace projects.",
      challenges: "Faced gender and racial barriers in engineering.",
      achievements: "Worked on Apollo and interplanetary missions, helped write NASA's Planetary Flight Handbook.",
      legacy: "Paved the way for Native Americans and women in engineering."
    },
    achievements: [
      "First Native American female engineer",
      "Worked on Apollo and interplanetary missions"
    ],
    awards: ["Society of Women Engineers Achievement Award"],
    publications: [],
    education: [
      { degree: "Master's", field: "Mathematics", institution: "Colorado State Teachers College" }
    ],
    timeline: [
      { year: 1942, event: "Joined Lockheed as engineer" }
    ],
    barriers: ["Gender and racial discrimination"],
    impact: "Inspired Native Americans and women to pursue engineering.",
    media: [],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mary_Golda_Ross" }
    ],
    mentorship: "Mentored Native American students in STEM.",
    fun_fact: "Helped write NASA's Planetary Flight Handbook.",
    career_path: {
      first_job: "Math teacher",
      career_highlights: ["Lockheed engineer", "Spacecraft designer"],
      advice_for_students: "Be proud of your heritage and pursue your dreams."
    },
    student_resources: {
      books_for_students: ["Classified: The Secret Career of Mary Golda Ross"],
      websites: ["swe.org", "nasa.gov"],
      programs: ["Engineering camps", "Native American STEM programs"],
      advice: "Seek mentors and support networks."
    },
    challenges: {
      academic: ["Few Native American women in engineering"],
      professional: ["Gender and racial bias"],
      personal: ["Working in secret programs"],
      how_overcame: "Excelled in her work and built strong professional relationships."
    },
    education_details: {
      high_school: "Excelled in math",
      college_major: "Mathematics",
      graduate_school: "Master's in Mathematics",
      key_courses: ["Mathematics", "Engineering", "Physics"],
      study_tips: "Work hard and ask questions."
    },
    modern_impact: {
      current_applications: "Aerospace engineering, space exploration",
      companies_using_her_work: ["NASA", "Lockheed Martin"],
      future_implications: "More Native Americans in STEM."
    },
    personal_info: {
      early_interests: ["Math", "Engineering"],
      family_background: "Cherokee Nation",
      hobbies: ["Reading", "Mentoring"],
      personality_traits: ["Proud", "Determined"]
    },
    cultural_background: {
      heritage: "Cherokee",
      cultural_influences: ["Cherokee values", "STEM education"],
      cultural_challenges: ["Underrepresentation in engineering"],
      cultural_contributions: "Role model for Native Americans in STEM."
    }
  },
  {
    name: "Tu Youyou",
    photo: "./images/tu-youyou.jpg",
    lifespan: "1930–",
    country: "China",
    fields: ["Chemistry", "Medicine"],
    roles: ["Pharmacologist", "Chemist"],
    quote: "Every scientist dreams of doing something that can help the world.",
    summary: "Discovered artemisinin, saving millions from malaria; first Chinese woman Nobel laureate.",
    shortDescription: "Tu Youyou is a Chinese scientist who discovered a life-saving medicine for malaria, a disease that affects millions. She combined traditional Chinese medicine with modern science to find a cure, saving countless lives. Tu Youyou's discovery earned her a Nobel Prize and showed the world the value of blending old and new ideas.",
    detailed_description: {
      early_life: "Born in Ningbo, China, inspired by traditional medicine.",
      stem_journey: "Studied pharmacology, led malaria research in 1970s.",
      challenges: "Worked during Cultural Revolution, limited resources.",
      achievements: "Discovered artemisinin, revolutionized malaria treatment.",
      legacy: "Her discovery has saved millions of lives."
    },
    achievements: [
      "Discovered artemisinin for malaria treatment",
      "First Chinese woman Nobel laureate",
      "Pioneered modern use of traditional medicine"
    ],
    awards: ["Nobel Prize in Physiology or Medicine (2015)"],
    publications: [],
    education: [
      { degree: "Pharmacology", field: "Pharmacology", institution: "Peking University" }
    ],
    timeline: [
      { year: 1972, event: "Discovered artemisinin" },
      { year: 2015, event: "Won Nobel Prize" }
    ],
    barriers: ["Limited resources, political turmoil"],
    impact: "Saved millions from malaria worldwide.",
    media: [
      { type: "article", title: "Tu Youyou: Nobel Laureate", url: "https://www.nobelprize.org/prizes/medicine/2015/tu/facts/" }
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Tu_Youyou" }
    ],
    mentorship: "Inspired young scientists in China.",
    fun_fact: "Her Nobel-winning work was inspired by ancient Chinese texts.",
    career_path: {
      first_job: "Pharmacologist",
      career_highlights: ["Nobel Prize winner"],
      advice_for_students: "Be persistent and open to new ideas."
    },
    student_resources: {
      books_for_students: ["Tu Youyou's Discovery"],
      websites: ["nobelprize.org"],
      programs: ["Science Olympiad"],
      advice: "Learn from both tradition and innovation."
    },
    challenges: {
      academic: ["Limited access to Western science"],
      professional: ["Political challenges"],
      personal: ["Balancing research and family"],
      how_overcame: "Combined traditional knowledge with modern science."
    },
    education_details: {
      high_school: "Excelled in science",
      college_major: "Pharmacology",
      key_courses: ["Chemistry", "Biology"],
      study_tips: "Be curious and persistent."
    },
    modern_impact: {
      current_applications: "Malaria treatment worldwide",
      companies_using_her_work: ["WHO", "Pharma companies"],
      future_implications: "New medicines from traditional sources."
    },
    personal_info: {
      early_interests: ["Medicine", "Chemistry"],
      family_background: "Traditional Chinese medicine",
      hobbies: ["Reading", "Research"],
      personality_traits: ["Persistent", "Innovative"]
    },
    cultural_background: {
      heritage: "Chinese",
      cultural_influences: ["Traditional medicine"],
      cultural_challenges: ["Cultural Revolution"],
      cultural_contributions: "Bridged traditional and modern science."
    }
  },
  {
    name: "Maryam Mirzakhani",
    photo: "./images/maryam-mirzakhani.jpg",
    lifespan: "1977–2017",
    country: "Iran",
    fields: ["Mathematics"],
    roles: ["Mathematician", "Professor"],
    quote: "The beauty of mathematics only shows itself to more patient followers.",
    summary: "First woman and first Iranian to win the Fields Medal in mathematics.",
    shortDescription: "Maryam Mirzakhani was a brilliant mathematician and the first woman to win the Fields Medal, the highest honor in math. She loved solving challenging problems and exploring the beauty of mathematics. Maryam's achievements inspired girls and women everywhere to pursue their passion for math and science.",
    detailed_description: {
      early_life: "Born in Tehran, loved reading and solving math problems.",
      stem_journey: "Won gold at International Math Olympiad, became a math professor at Stanford.",
      challenges: "Few women in advanced mathematics.",
      achievements: "Fields Medal for work on geometry and dynamics.",
      legacy: "Inspired women and Iranians in mathematics."
    },
    achievements: [
      "First woman to win the Fields Medal",
      "Gold medalist at International Math Olympiad",
      "Professor at Stanford University"
    ],
    awards: ["Fields Medal (2014)"],
    publications: [],
    education: [
      { degree: "Ph.D.", field: "Mathematics", institution: "Harvard University" }
    ],
    timeline: [
      { year: 2014, event: "Won Fields Medal" }
    ],
    barriers: ["Gender imbalance in mathematics"],
    impact: "Role model for women and Middle Eastern mathematicians.",
    media: [
      { type: "article", title: "Maryam Mirzakhani: Fields Medalist", url: "https://www.quantamagazine.org/maryam-mirzakhani-iranian-mathematician-dies-20170715/" }
    ],
    references: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Maryam_Mirzakhani" }
    ],
    mentorship: "Inspired young mathematicians worldwide.",
    fun_fact: "Loved reading novels as a child.",
    career_path: {
      first_job: "Math researcher",
      career_highlights: ["Fields Medal winner"],
      advice_for_students: "Be patient and persistent."
    },
    student_resources: {
      books_for_students: ["Maryam's Magic: The Story of Mathematician Maryam Mirzakhani"],
      websites: ["mathunion.org"],
      programs: ["Math Olympiad"],
      advice: "Enjoy the process of discovery."
    },
    challenges: {
      academic: ["Few women in math"],
      professional: ["Bias in academia"],
      personal: ["Balancing research and family"],
      how_overcame: "Focused on her love of math."
    },
    education_details: {
      high_school: "Won national math competitions",
      college_major: "Mathematics",
      key_courses: ["Geometry", "Dynamics"],
      study_tips: "Practice and seek mentors."
    },
    modern_impact: {
      current_applications: "Geometry, dynamics, and math research",
      companies_using_her_work: ["Universities", "Research institutes"],
      future_implications: "More women in advanced mathematics."
    },
    personal_info: {
      early_interests: ["Math", "Reading"],
      family_background: "Supportive family",
      hobbies: ["Reading novels", "Math puzzles"],
      personality_traits: ["Patient", "Creative"]
    },
    cultural_background: {
      heritage: "Iranian",
      cultural_influences: ["Persian culture"],
      cultural_challenges: ["Gender imbalance"],
      cultural_contributions: "First Iranian and first woman Fields Medalist."
    }
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