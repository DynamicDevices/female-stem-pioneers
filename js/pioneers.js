// Women Pioneers in STEM - Data File
// This file contains profiles of women who have made significant contributions to STEM fields

const pioneers = [
  {
    name: "Ada Lovelace",
    photo: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Ada_lovelace.jpg",
    lifespan: "1815–1852",
    country: "United Kingdom",
    fields: ["Mathematics", "Computing"],
    roles: ["Mathematician", "Writer"],
    quote: "That brain of mine is something more than merely mortal; as time will show.",
    summary: "Often regarded as the first computer programmer for her work on Babbage's Analytical Engine.",
    detailed_description: {
      early_life: "Ada Lovelace was born in 1815 to the famous poet Lord Byron and mathematician Anne Isabella Milbanke. Her mother, fearing Ada would inherit her father's 'poetic madness,' insisted on a rigorous education in mathematics and science. From an early age, Ada showed exceptional mathematical talent and was tutored by some of the leading scientists of the day, including Mary Somerville and Augustus De Morgan.",
      stem_journey: "Ada's journey into STEM began through her mother's insistence on mathematical education. At age 17, she met Charles Babbage, who was working on his Difference Engine. Fascinated by his work, she became deeply involved in his later project, the Analytical Engine. She translated an Italian article about the machine and added extensive notes that included the first algorithm designed specifically for computer processing.",
      challenges: "Ada faced significant challenges as a woman in 19th-century England. Women were expected to focus on domestic roles, and scientific pursuits were considered inappropriate. She also struggled with health issues throughout her life, including severe headaches and paralysis. Additionally, her family's aristocratic background created both opportunities and expectations that were difficult to navigate.",
      achievements: "Ada's most significant achievement was writing the first computer program - an algorithm for calculating Bernoulli numbers on the Analytical Engine. She also envisioned the potential of computers beyond mere calculation, predicting they could create music, graphics, and even artificial intelligence. Her notes were three times longer than the original article and included detailed explanations of how the machine could be programmed.",
      legacy: "Ada Lovelace's legacy is profound and far-reaching. She is considered the first computer programmer, and the programming language Ada is named in her honor. Her vision of computers as creative tools rather than just calculators was revolutionary. Today, she inspires millions of women in computer science, and her story demonstrates how mathematical thinking can be combined with creative imagination."
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
    photo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Marie_Curie_c1920.jpg",
    lifespan: "1867–1934",
    country: "Poland/France",
    fields: ["Physics", "Chemistry"],
    roles: ["Physicist", "Chemist", "Professor"],
    quote: "One never notices what has been done; one can only see what remains to be done.",
    summary: "First woman to win a Nobel Prize and the only person to win in two different sciences.",
    detailed_description: {
      early_life: "Marie Curie was born Maria Sklodowska in 1867 in Warsaw, Poland, which was then under Russian rule. Her parents were teachers who emphasized education, and she excelled in school despite the restrictions placed on Polish students. Her mother died when she was 10, and her father was fired from his teaching position for his Polish nationalism. Despite these hardships, Marie and her sisters worked as governesses to support their education.",
      stem_journey: "Marie's journey into STEM began with her determination to study at university, which was nearly impossible for women in Poland. She worked as a governess for several years to save money, then moved to Paris in 1891 to study at the Sorbonne. She lived in poverty, often going without food to afford her studies. She earned degrees in physics and mathematics, then began research with Pierre Curie, whom she married in 1895.",
      challenges: "Marie faced enormous challenges as a woman in science. She was denied admission to the University of Warsaw because she was female. In Paris, she faced poverty and discrimination. After Pierre's death in 1906, she faced even more resistance as a widow in science. She was denied membership in the French Academy of Sciences because she was a woman, and her Nobel Prize nominations faced opposition from male colleagues.",
      achievements: "Marie's achievements revolutionized science. She discovered two new elements - polonium and radium - and coined the term 'radioactivity.' She won Nobel Prizes in both Physics (1903) and Chemistry (1911), the first person to win in two different sciences. She established the Curie Institutes in Paris and Warsaw, and her research laid the foundation for nuclear physics and medical treatments.",
      legacy: "Marie Curie's legacy is immense. She opened doors for women in science worldwide. Her research led to X-ray technology and cancer treatments. The Curie Institutes continue her work, and she remains a symbol of scientific excellence and determination. Her story inspires women to pursue science despite obstacles, and her methods are still used in laboratories today."
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
    photo: "https://upload.wikimedia.org/wikipedia/commons/6/68/Katherine_Johnson_at_NASA%2C_in_1966.jpg",
    lifespan: "1918–2020",
    country: "United States",
    fields: ["Mathematics", "Aerospace"],
    roles: ["Mathematician", "NASA Scientist"],
    quote: "Girls are capable of doing everything men are capable of doing.",
    summary: "Trailblazing NASA mathematician whose calculations enabled the first U.S. spaceflights.",
    detailed_description: {
      early_life: "Katherine Johnson was born in 1918 in White Sulphur Springs, West Virginia, to a family that valued education highly. Her father was a farmer and handyman who could solve complex math problems in his head, and her mother was a teacher. From an early age, Katherine showed exceptional mathematical ability, counting everything and solving math problems for fun. She graduated high school at age 14 and entered college at 15.",
      stem_journey: "Katherine's journey into STEM began with her natural mathematical talent and her family's emphasis on education. She attended West Virginia State College, where she excelled in mathematics and was mentored by W.W. Schieffelin Claytor, one of the first African Americans to earn a Ph.D. in mathematics. After graduating, she became a teacher, then joined NASA (then NACA) in 1953 as a 'computer' - someone who performed mathematical calculations.",
      challenges: "Katherine faced significant challenges as an African American woman in the segregated South and in a male-dominated field. She experienced both racial and gender discrimination throughout her career. She was often the only woman in meetings and had to fight for recognition of her work. She also balanced her career with raising three daughters, often working late hours to complete calculations.",
      achievements: "Katherine's achievements were crucial to the success of the U.S. space program. She calculated the trajectory for Alan Shepard's first space flight, verified the calculations for John Glenn's orbital flight, and worked on the Apollo 11 mission to the Moon. Her calculations were so trusted that John Glenn insisted she verify the computer's calculations before his flight. She received the Presidential Medal of Freedom in 2015.",
      legacy: "Katherine Johnson's legacy is profound. She broke barriers for African American women in STEM and inspired generations of students. Her story was featured in the movie 'Hidden Figures,' bringing her achievements to worldwide attention. She continues to inspire women and minorities to pursue careers in mathematics and science, showing that talent and determination can overcome any obstacle."
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
    photo: "https://upload.wikimedia.org/wikipedia/commons/3/37/Grace_Hopper_and_UNIVAC.jpg",
    lifespan: "1906–1992",
    country: "United States",
    fields: ["Computer Science", "Mathematics"],
    roles: ["Computer Scientist", "Rear Admiral, U.S. Navy"],
    quote: "The most dangerous phrase in the language is, 'We've always done it this way.'",
    summary: "Developed the first compiler and popularized the term 'debugging' in computing.",
    detailed_description: {
      early_life: "Grace Hopper was born in 1906 in New York City to a family that encouraged education and independence. Her parents believed in equal education for boys and girls, which was unusual for the time. From an early age, Grace showed curiosity about how things worked, often taking apart household items to understand their mechanisms. She attended Vassar College, where she excelled in mathematics and physics.",
      stem_journey: "Grace's journey into STEM began with her education at Vassar College, where she earned a degree in mathematics and physics. She then earned a master's degree and Ph.D. in mathematics from Yale University. During World War II, she joined the U.S. Navy and was assigned to work on the Harvard Mark I computer. This marked the beginning of her revolutionary work in computer science.",
      challenges: "Grace faced challenges as a woman in both the military and the emerging field of computer science. She was often the only woman in technical meetings and had to prove herself repeatedly. She also faced skepticism about her ideas for high-level programming languages, as many believed computers should only be programmed in machine code. Additionally, she had to balance her military career with her civilian work.",
      achievements: "Grace's achievements revolutionized computing. She developed the first compiler, which translated high-level programming languages into machine code. She popularized the term 'debugging' after an actual bug (a moth) was found in a computer. She led the development of COBOL, one of the first high-level programming languages. She became a Rear Admiral in the U.S. Navy and received numerous awards.",
      legacy: "Grace Hopper's legacy is foundational to modern computing. Her work on compilers and programming languages made computers accessible to non-specialists. She is known as the 'Queen of Code' and inspired generations of women in technology. The Grace Hopper Celebration of Women in Computing is named in her honor, and she remains a symbol of innovation and leadership in computer science."
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
    photo: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Rosalind_Franklin.jpg",
    lifespan: "1920–1958",
    country: "United Kingdom",
    fields: ["Chemistry", "Biology"],
    roles: ["Chemist", "X-ray Crystallographer"],
    quote: "Science and everyday life cannot and should not be separated.",
    summary: "Her X-ray diffraction work was key to understanding the structure of DNA.",
    detailed_description: {
      early_life: "Rosalind Franklin was born in 1920 in London to a wealthy Jewish family that valued education and intellectual pursuits. She showed exceptional academic ability from an early age, particularly in science and mathematics. Her family encouraged her education, and she attended St. Paul's Girls' School, one of the few schools that taught science to girls. She went on to study chemistry at Cambridge University.",
      stem_journey: "Rosalind's journey into STEM began with her education at Cambridge University, where she earned a degree in chemistry. She then earned a Ph.D. in physical chemistry from Cambridge. She worked on coal and graphite structures before moving to Paris to study X-ray crystallography. In 1951, she joined King's College London, where she began her groundbreaking work on DNA structure using X-ray diffraction.",
      challenges: "Rosalind faced significant challenges as a woman in science during the 1950s. She experienced gender discrimination and was often excluded from important meetings and discussions. Her work was sometimes overlooked or attributed to male colleagues. She also faced the challenge of working in a competitive and sometimes hostile environment, where her meticulous approach was sometimes misunderstood.",
      achievements: "Rosalind's achievements were crucial to understanding the structure of DNA. She produced the famous 'Photo 51,' which showed the helical structure of DNA. Her work provided the key evidence that led to the discovery of the double helix structure. She also made significant contributions to understanding the structure of viruses, particularly tobacco mosaic virus. Her methods and techniques are still used in structural biology today.",
      legacy: "Rosalind Franklin's legacy is profound, though it was not fully recognized during her lifetime. Her work was essential to the discovery of DNA's structure, though she was not included in the Nobel Prize awarded for this discovery. Today, she is recognized as a pioneer in structural biology, and her story highlights the importance of recognizing women's contributions in science. She inspires women to pursue careers in molecular biology and structural science."
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
    photo: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Chien-Shiung_Wu.jpg",
    lifespan: "1912–1997",
    country: "China/United States",
    fields: ["Physics"],
    roles: ["Experimental Physicist", "Professor"],
    quote: "There is only one thing worse than coming home from the lab to a sink full of dirty dishes, and that is not going to the lab at all.",
    summary: "Conducted the Wu experiment, disproving the law of conservation of parity in physics.",
    detailed_description: {
      early_life: "Chien-Shiung Wu was born in 1912 in a small town near Shanghai, China. Her father was a school principal who believed strongly in education for girls, which was unusual in China at that time. She showed exceptional academic ability from an early age and was encouraged by her family to pursue her education. She attended a girls' school in Shanghai and then went to National Central University in Nanjing.",
      stem_journey: "Chien-Shiung's journey into STEM began with her education in China, where she earned a degree in physics. She then moved to the United States in 1936 to pursue graduate studies at the University of California, Berkeley. She earned her Ph.D. in physics and began her research career. During World War II, she worked on the Manhattan Project, and later joined Columbia University where she conducted her most famous experiments.",
      challenges: "Chien-Shiung faced multiple challenges as a Chinese immigrant woman in American science. She experienced both racial and gender discrimination throughout her career. She was often the only woman in her physics classes and research groups. She also faced language barriers and cultural differences. Additionally, she had to balance her career with family responsibilities, as she was married and had a son.",
      achievements: "Chien-Shiung's most famous achievement was the 'Wu experiment,' which disproved the law of conservation of parity in physics. This discovery earned her colleagues the Nobel Prize, though she was controversially excluded. She also made significant contributions to nuclear physics and was the first woman to serve as president of the American Physical Society. She received numerous awards and honors for her work.",
      legacy: "Chien-Shiung Wu's legacy is profound in both physics and for women in science. Her work fundamentally changed our understanding of the universe and earned her the nickname 'The First Lady of Physics.' She inspired generations of Asian American women to pursue careers in physics and science. Her story demonstrates the importance of recognizing women's contributions in science and the value of diverse perspectives in research."
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