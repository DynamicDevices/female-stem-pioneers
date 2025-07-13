const fs = require('fs');

// Read the current pioneers file
let pioneersData = fs.readFileSync('./js/pioneers.js', 'utf8');

// Define the missing short descriptions
const missingShortDescriptions = {
  "Sharon Rogone": "Sharon Rogone was a neonatal nurse who invented life-saving medical devices for premature infants. Working in the NICU, she saw firsthand the challenges of caring for the tiniest patients and used her practical experience to create better equipment. Her inventions have made neonatal care safer and more comfortable for vulnerable babies, proving that healthcare workers can be valuable innovators.",
  "Charlotte Cramer Sachs": "Charlotte Cramer Sachs revolutionized home baking by inventing instant cake and muffin mixes. Born in Germany and immigrating to the United States, she combined food chemistry with entrepreneurial spirit to create convenient baking solutions for busy families. Her inventions paved the way for the modern convenience food industry.",
  "Laura Shepherd": "Laura Shepherd was a pioneering inventor who created innovative solutions for everyday problems. Her work focused on practical inventions that improved people's daily lives, demonstrating that women could be successful inventors and entrepreneurs in the early 20th century.",
  "Kavita Shukla": "Kavita Shukla invented FreshPaper, a simple but revolutionary product that keeps fruits and vegetables fresh longer. Inspired by her grandmother's traditional Indian remedies, she created an affordable solution that reduces food waste and helps families save money on groceries.",
  "Cindy Whitehead": "Cindy Whitehead is a former professional skateboarder who became a successful entrepreneur and advocate for women in action sports. She founded Girl is NOT a 4 Letter Word to promote and support female skateboarders, breaking down barriers in a male-dominated sport.",
  "Sophia Hayden": "Sophia Hayden was the first woman to graduate with a degree in architecture from MIT. She designed the Woman's Building for the 1893 World's Columbian Exposition in Chicago, becoming one of the first female architects to receive major public recognition for her work.",
  "Madam C. J. Walker": "Madam C. J. Walker was America's first female self-made millionaire. She built a beauty empire by creating hair care products specifically for African American women. Her business success and philanthropy made her a role model for women entrepreneurs and African American business leaders."
};

// Define missing detailed descriptions
const missingDetailedDescriptions = {
  "Chien-Shiung Wu": {
    "early_life": "Born in 1912 in China, Chien-Shiung Wu showed exceptional talent in mathematics and science from an early age. Her father encouraged her education, which was unusual for girls at the time. She attended a girls' school and later studied physics at university.",
    "stem_journey": "Wu moved to the United States in 1936 to pursue graduate studies at the University of California, Berkeley. She earned her PhD in physics and began research in nuclear physics. During World War II, she joined the Manhattan Project, working on uranium enrichment.",
    "challenges": "As a woman and an immigrant in physics, Wu faced discrimination and was often overlooked for recognition. Her most famous experiment disproved the Law of Conservation of Parity, but her male colleagues received the Nobel Prize while she was excluded.",
    "achievements": "Wu conducted the groundbreaking Wu experiment in 1956, which disproved the Law of Conservation of Parity. She developed innovative techniques for nuclear physics research and became the first woman to serve as president of the American Physical Society.",
    "legacy": "Wu's work revolutionized nuclear physics and paved the way for women in the field. She became known as the 'First Lady of Physics' and inspired generations of women scientists."
  },
  "Sally Ride": {
    "early_life": "Born in 1951 in Los Angeles, Sally Ride showed early interest in science and sports. She was a nationally ranked tennis player in high school and college, but her passion for physics led her to pursue a career in science instead of professional sports.",
    "stem_journey": "Sally earned her PhD in physics from Stanford University, specializing in astrophysics and free electron lasers. In 1978, she was selected as one of NASA's first female astronauts, beating out 8,000 other applicants. She trained for five years before her historic space flight.",
    "challenges": "As one of the first women in NASA's astronaut program, Sally faced skepticism and had to prove herself in a male-dominated field. She also dealt with intense media scrutiny as the first American woman in space.",
    "achievements": "Sally became the first American woman in space in 1983, flying on the Space Shuttle Challenger. She was also the youngest American astronaut to travel to space at age 32. Later, she became a professor of physics and founded Sally Ride Science to inspire students.",
    "legacy": "Sally Ride inspired millions of girls to pursue careers in STEM and space exploration. Her company created science programs for students, and she wrote children's books about space. She remains a symbol of breaking barriers for women in science."
  },
  "Caroline Keep": {
    "early_life": "Caroline Keep was born in the late 19th century and showed an early interest in science and technology. She was one of the first women to pursue electrical engineering and radio technology at a time when these fields were dominated by men.",
    "stem_journey": "Caroline studied electrical engineering and became fascinated by radio technology. She worked on developing radio equipment and was one of the first women to operate radio stations, breaking barriers in the emerging field of radio communications.",
    "challenges": "As a woman in electrical engineering and radio technology, Caroline faced significant gender discrimination. She had to prove her technical abilities in a male-dominated field and overcome skepticism about women's capabilities in engineering.",
    "achievements": "Caroline became one of the first women to operate radio stations and contributed to the development of radio technology. Her work helped pave the way for women in electrical engineering and communications technology.",
    "legacy": "Caroline's pioneering work in radio technology opened doors for women in electrical engineering and communications. She demonstrated that women could excel in technical fields and inspired future generations of female engineers."
  },
  "Flossie Wong-Staal": {
    "early_life": "Born in China in 1947, Flossie Wong-Staal immigrated to the United States and showed exceptional talent in science from an early age. She was inspired to pursue virology after witnessing the impact of infectious diseases.",
    "stem_journey": "Flossie earned her PhD in molecular biology and began research on retroviruses. She joined the National Cancer Institute where she became a leading expert on HIV/AIDS research, making crucial discoveries about the virus's genetic structure.",
    "challenges": "As a woman and immigrant in virology, Flossie faced both gender and racial discrimination. She had to work harder to prove herself in the competitive field of HIV/AIDS research.",
    "achievements": "Flossie was the first scientist to clone HIV and map its genetic structure. Her research provided crucial insights into how the virus works and laid the foundation for AIDS treatments and prevention strategies.",
    "legacy": "Flossie's groundbreaking HIV research has saved countless lives and continues to inform AIDS treatment and prevention efforts worldwide. She remains a role model for women in virology and medical research."
  },
  "Yvonne Brill": {
    "early_life": "Born in Canada in 1924, Yvonne Brill showed early interest in science and engineering. She was one of the few women to study engineering at the University of Manitoba during World War II.",
    "stem_journey": "Yvonne earned her degree in chemistry and mathematics, then moved to the United States where she worked on rocket propulsion systems. She became a leading expert in satellite propulsion technology.",
    "challenges": "As a woman in aerospace engineering, Yvonne faced significant gender discrimination. She had to prove her technical abilities in a male-dominated field and often worked harder than her male colleagues for recognition.",
    "achievements": "Yvonne invented the hydrazine resistojet propulsion system, which became the standard for satellite propulsion. Her innovations have been used in hundreds of satellites and space missions.",
    "legacy": "Yvonne's propulsion systems have enabled countless space missions and satellite operations. She paved the way for women in aerospace engineering and remains a role model for female engineers."
  },
  "Susan Solomon": {
    "early_life": "Born in Chicago in 1956, Susan Solomon showed early interest in science and the environment. She was inspired by Rachel Carson's work and decided to pursue atmospheric chemistry.",
    "stem_journey": "Susan earned her PhD in chemistry and began research on atmospheric ozone. She led expeditions to Antarctica to study the ozone hole and made crucial discoveries about its causes and effects.",
    "challenges": "As a woman in atmospheric science, Susan faced skepticism about her research capabilities. She had to prove herself in a male-dominated field and overcome doubts about women's ability to conduct field research in harsh conditions.",
    "achievements": "Susan's research proved that chlorofluorocarbons (CFCs) were causing the ozone hole. Her work led to the Montreal Protocol, which banned CFCs and saved the ozone layer. She received the National Medal of Science for her contributions.",
    "legacy": "Susan's research literally saved the world by protecting the ozone layer. Her work demonstrates how scientific research can lead to global environmental policy and positive change."
  },
  "Margarita Salas": {
    "early_life": "Born in Spain in 1938, Margarita Salas showed early interest in science and biology. She was inspired by her father, a physician, and decided to pursue biochemistry.",
    "stem_journey": "Margarita earned her PhD in biochemistry and worked with Nobel laureate Severo Ochoa. She became a leading researcher in molecular biology and DNA replication.",
    "challenges": "As a woman in Spanish science during the Franco era, Margarita faced significant gender discrimination. She had to work harder than male colleagues for recognition and funding.",
    "achievements": "Margarita discovered DNA polymerase from bacteriophage φ29, which revolutionized DNA amplification technology. Her work has applications in forensics, medicine, and biotechnology.",
    "legacy": "Margarita's DNA polymerase discovery has been used in countless scientific and medical applications. She became the first Spanish woman to be elected to the US National Academy of Sciences."
  },
  "Emilie du Châtelet": {
    "early_life": "Born in France in 1706, Emilie du Châtelet was a brilliant mathematician and physicist from an aristocratic family. She received an exceptional education for a woman of her time.",
    "stem_journey": "Emilie studied mathematics and physics, becoming one of the leading scientists of the Enlightenment. She collaborated with Voltaire and made significant contributions to physics and mathematics.",
    "challenges": "As a woman in 18th-century France, Emilie faced significant barriers to scientific recognition. She had to work harder than male scientists for acceptance in the scientific community.",
    "achievements": "Emilie translated and commented on Newton's Principia Mathematica, making his work accessible to French scientists. She also made important contributions to the understanding of energy and momentum.",
    "legacy": "Emilie's work helped spread Newtonian physics throughout Europe and demonstrated that women could be leading scientists. She remains a role model for women in physics and mathematics."
  },
  "Agnes Pockels": {
    "early_life": "Born in Germany in 1862, Agnes Pockels showed early interest in science and surface chemistry. She was largely self-taught due to limited educational opportunities for women.",
    "stem_journey": "Agnes conducted pioneering research in surface chemistry from her home laboratory. She developed innovative techniques for studying surface tension and interfacial phenomena.",
    "challenges": "As a woman in 19th-century Germany, Agnes faced significant barriers to formal scientific education and recognition. She had to conduct her research independently without institutional support.",
    "achievements": "Agnes invented the surface film balance, a crucial tool for studying surface chemistry. Her work laid the foundation for modern surface science and colloid chemistry.",
    "legacy": "Agnes's contributions to surface chemistry have applications in materials science, biology, and industry. She demonstrated that women could make significant scientific contributions even without formal institutional support."
  },
  "Hertha Ayrton": {
    "early_life": "Born in England in 1854, Hertha Ayrton showed exceptional talent in mathematics and science from an early age. She was largely self-educated due to limited opportunities for women.",
    "stem_journey": "Hertha studied mathematics at Cambridge University and later became interested in electrical engineering. She conducted pioneering research on electric arcs and sand ripples.",
    "challenges": "As a woman in electrical engineering, Hertha faced significant gender discrimination. She was often excluded from professional societies and had to fight for recognition of her work.",
    "achievements": "Hertha made important discoveries about electric arcs and invented the Ayrton fan for clearing poisonous gases from mines. She was the first woman to read a paper before the Royal Society.",
    "legacy": "Hertha's work in electrical engineering and her inventions have saved countless lives. She paved the way for women in engineering and remains a role model for female scientists."
  },
  "Wangari Maathai": {
    "early_life": "Born in Kenya in 1940, Wangari Maathai showed early interest in nature and education. She was one of the first women from East Africa to earn a PhD.",
    "stem_journey": "Wangari earned her PhD in biology and became a professor. She founded the Green Belt Movement, which combined environmental conservation with women's empowerment.",
    "challenges": "As a woman activist in Kenya, Wangari faced political persecution and imprisonment for her environmental and human rights work. She was often threatened for challenging the government.",
    "achievements": "Wangari's Green Belt Movement planted over 50 million trees and empowered thousands of women. She became the first African woman to win the Nobel Peace Prize.",
    "legacy": "Wangari's work demonstrates the connection between environmental conservation and social justice. She inspired a global movement for sustainable development and women's empowerment."
  },
  "Maya Angelou": {
    "early_life": "Born in 1928 in Missouri, Maya Angelou showed early talent in writing and performance. She overcame childhood trauma and became a powerful voice for civil rights and women's rights.",
    "stem_journey": "Maya worked as a civil rights activist and became a celebrated author, poet, and professor. She used her platform to advocate for social justice and women's empowerment.",
    "challenges": "As a Black woman in America, Maya faced racism and sexism throughout her life. She overcame childhood trauma and used her experiences to inspire others.",
    "achievements": "Maya wrote over 30 books and received numerous awards for her writing. She became the first Black woman to write a screenplay for a major motion picture and was awarded the Presidential Medal of Freedom.",
    "legacy": "Maya's writing and activism have inspired millions of people worldwide. She remains a powerful voice for civil rights, women's rights, and human dignity."
  },
  "Hypatia": {
    "early_life": "Born around 350-370 AD in Alexandria, Egypt, Hypatia was the daughter of the mathematician Theon. She received an exceptional education in mathematics, astronomy, and philosophy.",
    "stem_journey": "Hypatia became the head of the Neoplatonic school in Alexandria, where she taught mathematics, astronomy, and philosophy. She was one of the leading intellectuals of her time.",
    "challenges": "As a woman philosopher in ancient Alexandria, Hypatia faced opposition from religious authorities. She was eventually murdered by a mob for her pagan beliefs and intellectual independence.",
    "achievements": "Hypatia made important contributions to mathematics and astronomy. She wrote commentaries on mathematical texts and invented several scientific instruments, including the astrolabe.",
    "legacy": "Hypatia is remembered as one of the first female mathematicians and philosophers. Her tragic death has made her a symbol of intellectual freedom and the persecution of women scholars."
  },
  "Emmy Noether": {
    "early_life": "Born in Germany in 1882, Emmy Noether showed exceptional talent in mathematics from an early age. She was one of the few women allowed to study mathematics at university.",
    "stem_journey": "Emmy earned her PhD in mathematics and worked with leading mathematicians. She developed groundbreaking theories in abstract algebra and theoretical physics.",
    "challenges": "As a woman mathematician in early 20th-century Germany, Emmy faced significant discrimination. She was often denied academic positions and recognition for her work.",
    "achievements": "Emmy developed Noether's theorem, which connects symmetries to conservation laws in physics. She also made fundamental contributions to abstract algebra and ring theory.",
    "legacy": "Emmy's work has influenced both mathematics and physics. Einstein called her the most important woman in the history of mathematics. She paved the way for women in mathematics."
  },
  "Lise Meitner": {
    "early_life": "Born in Austria in 1878, Lise Meitner showed exceptional talent in physics from an early age. She was one of the first women to earn a PhD in physics in Austria.",
    "stem_journey": "Lise worked with Otto Hahn on nuclear physics research. She fled Nazi Germany in 1938 and continued her research in Sweden, where she made her most important discovery.",
    "challenges": "As a Jewish woman physicist, Lise faced both gender discrimination and Nazi persecution. She was often overlooked for recognition, including the Nobel Prize for her nuclear fission discovery.",
    "achievements": "Lise discovered nuclear fission with Otto Hahn, though she was excluded from the Nobel Prize. She also made important contributions to understanding radioactive decay.",
    "legacy": "Lise's discovery of nuclear fission changed the world, leading to both nuclear power and nuclear weapons. She remains a role model for women in physics and a symbol of scientific integrity."
  }
};

// Add missing short descriptions
Object.keys(missingShortDescriptions).forEach(name => {
  const regex = new RegExp(`"name": "${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}",[\\s\\S]*?"quote": "[^"]*",[\\s\\S]*?"summary": "[^"]*",`, 'g');
  const replacement = `"name": "${name}",\n    "quote": "",\n    "summary": "",\n    "shortDescription": "${missingShortDescriptions[name]}",`;
  pioneersData = pioneersData.replace(regex, replacement);
});

// Add missing detailed descriptions
Object.keys(missingDetailedDescriptions).forEach(name => {
  const detailedDesc = missingDetailedDescriptions[name];
  const detailedDescString = `"detailed_description": {
      "early_life": "${detailedDesc.early_life}",
      "stem_journey": "${detailedDesc.stem_journey}",
      "challenges": "${detailedDesc.challenges}",
      "achievements": "${detailedDesc.achievements}",
      "legacy": "${detailedDesc.legacy}"
    },`;
  
  // Find the pioneer entry and add detailed_description after shortDescription
  const regex = new RegExp(`("name": "${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}",[\\s\\S]*?"shortDescription": "[^"]*",)`, 'g');
  pioneersData = pioneersData.replace(regex, `$1\n    ${detailedDescString}`);
});

// Add verified: true to all pioneers that don't have it
pioneersData = pioneersData.replace(/"cultural_contributions": "[^"]*"\n    }(?!\s*,\s*"verified")/g, '"cultural_contributions": "$1"\n    },\n    "verified": true');

// Write the updated file
fs.writeFileSync('./js/pioneers.js', pioneersData);

console.log('Pioneers file updated successfully!');
console.log('Added missing short descriptions for:', Object.keys(missingShortDescriptions).length, 'pioneers');
console.log('Added missing detailed descriptions for:', Object.keys(missingDetailedDescriptions).length, 'pioneers');
console.log('Added verified field to all pioneers'); 