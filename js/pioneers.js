// Women Pioneers in STEM - Data File
// This file contains profiles of women who have made significant contributions to STEM fields

const pioneers = [
  {
    name: "Ada Lovelace",
    photo: "./images/ada-lovelace.jpg",
    lifespan: "1815–1852",
    country: "United Kingdom",
    fields: ["Mathematics", "Computing"],
    roles: ["Mathematician", "Writer"],
    quote: "That brain of mine is something more than merely mortal; as time will show.",
    summary: "Often regarded as the first computer programmer for her work on Babbage's Analytical Engine.",
    shortDescription: "Ada Lovelace is often called the world’s first computer programmer. She worked with Charles Babbage on his Analytical Engine and wrote the first algorithm meant for a machine. Ada believed that computers could do more than just math—they could create music and art, too! Her creative ideas inspire people to combine technology and imagination.",
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
    shortDescription: "Marie Curie was a brilliant scientist who discovered the elements polonium and radium. She was the first woman to win a Nobel Prize and the only person to win in two different sciences—Physics and Chemistry. Her research led to life-saving medical advances like X-rays and cancer treatments. Marie’s determination and curiosity opened doors for women in science everywhere.",
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
    shortDescription: "Katherine Johnson was a mathematician whose calculations helped launch the first American astronauts into space. She worked at NASA when ‘computers’ were people who did math by hand, and her work was so trusted that John Glenn asked her to double-check the numbers before his historic flight. Despite facing racial and gender barriers, Katherine’s talent and perseverance made her a trailblazer for women and African Americans in STEM.",
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
    shortDescription: "Grace Hopper was a computer scientist and Navy Rear Admiral who helped invent the first computer compiler, making it possible for people to write programs in English-like languages. She loved solving problems and wasn’t afraid to challenge the status quo—she even found the first real computer ‘bug’! Grace’s work made computers easier for everyone to use, and she inspired generations of women in technology and the military.",
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
    shortDescription: "Rosalind Franklin was a chemist whose X-ray photographs revealed the structure of DNA, the molecule that carries our genetic code. Her famous ‘Photo 51’ was key to understanding how DNA works. Even though she faced challenges and wasn’t fully recognized during her lifetime, Rosalind’s careful research changed science forever and paved the way for discoveries in genetics and medicine.",
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
    shortDescription: "Chien-Shiung Wu was a groundbreaking physicist who made discoveries that changed how we understand the universe. She led the famous ‘Wu experiment,’ which showed that nature isn’t always symmetrical—a huge surprise in physics! As a Chinese-American woman, she broke barriers in science and inspired many to follow in her footsteps.",
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
    shortDescription: "Dorothy Vaughan was a brilliant mathematician and one of NASA’s first Black supervisors. She taught herself computer programming and led a team of women who calculated flight paths for early space missions. Dorothy’s leadership and determination helped break down racial and gender barriers, and her story was featured in the movie ‘Hidden Figures.’",
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
    quote: "Never be limited by other people’s limited imaginations.",
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
    shortDescription: "Radia Perlman is known as the ‘Mother of the Internet’ for inventing the spanning tree protocol, which makes modern computer networks possible. She loved solving puzzles and turned her passion for logic into technology that connects the world. Radia’s work shows that creativity and persistence can change how we all communicate.",
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
    shortDescription: "Tu Youyou is a Chinese scientist who discovered a life-saving medicine for malaria, a disease that affects millions. She combined traditional Chinese medicine with modern science to find a cure, saving countless lives. Tu Youyou’s discovery earned her a Nobel Prize and showed the world the value of blending old and new ideas.",
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
    shortDescription: "Maryam Mirzakhani was a brilliant mathematician and the first woman to win the Fields Medal, the highest honor in math. She loved solving challenging problems and exploring the beauty of mathematics. Maryam’s achievements inspired girls and women everywhere to pursue their passion for math and science.",
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