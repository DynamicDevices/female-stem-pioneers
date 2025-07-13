// Script to add new pioneers to the database
// This script will add pioneers that are not already in the database

const newPioneers = [
  {
    "name": "Maria Mitchell",
    "birthDate": "1818",
    "deathDate": "1889",
    "country": "United States",
    "fields": ["Astronomy"],
    "roles": ["Astronomer", "Educator"],
    "shortDescription": "Maria Mitchell was the first professional female astronomer in the United States and discovered a comet in 1847. She became the first woman elected to the American Academy of Arts and Sciences and was a pioneer in women's education in science.",
    "detailed_description": {
      "early_life": "Born in Nantucket, Massachusetts in 1818, Maria was encouraged by her father to study astronomy. She learned to use astronomical instruments and began making observations from their rooftop observatory.",
      "stem_journey": "In 1847, Maria discovered a comet using her telescope, which became known as 'Miss Mitchell's Comet.' This discovery brought her international recognition and a gold medal from the King of Denmark.",
      "challenges": "As a woman in 19th-century America, Maria faced significant barriers to pursuing science professionally. She was often excluded from scientific societies and meetings.",
      "achievements": "Discovered a comet in 1847, became the first woman elected to the American Academy of Arts and Sciences, and was appointed professor of astronomy at Vassar College.",
      "legacy": "Maria Mitchell's work paved the way for women in astronomy and science education. She inspired generations of women to pursue careers in science."
    },
    "achievements": [
      "Discovered 'Miss Mitchell's Comet' in 1847",
      "First woman elected to American Academy of Arts and Sciences",
      "First professional female astronomer in the United States",
      "Professor of astronomy at Vassar College"
    ],
    "verified": true
  },
  {
    "name": "Annie Jump Cannon",
    "birthDate": "1863",
    "deathDate": "1941",
    "country": "United States",
    "fields": ["Astronomy"],
    "roles": ["Astronomer"],
    "shortDescription": "Annie Jump Cannon was a pioneering astronomer who classified over 350,000 stars and developed the stellar classification system still used today. She was known as the 'census taker of the sky' and received numerous awards for her groundbreaking work.",
    "detailed_description": {
      "early_life": "Born in Delaware in 1863, Annie was deaf from childhood due to scarlet fever. She studied physics and astronomy at Wellesley College and later at Radcliffe College.",
      "stem_journey": "Annie joined the Harvard College Observatory in 1896 and began classifying stars based on their spectra. She could classify three stars per minute and eventually classified over 350,000 stars.",
      "challenges": "As a deaf woman in the early 20th century, Annie faced communication barriers and gender discrimination in the scientific community.",
      "achievements": "Developed the stellar classification system (OBAFGKM), classified over 350,000 stars, and was the first woman to receive an honorary doctorate from Oxford University.",
      "legacy": "Annie's stellar classification system is still used today and her work revolutionized our understanding of stellar evolution and the universe."
    },
    "achievements": [
      "Developed the stellar classification system (OBAFGKM)",
      "Classified over 350,000 stars",
      "First woman to receive honorary doctorate from Oxford University",
      "Received the Henry Draper Medal from the National Academy of Sciences"
    ],
    "verified": true
  },
  {
    "name": "Henrietta Swan Leavitt",
    "birthDate": "1868",
    "deathDate": "1921",
    "country": "United States",
    "fields": ["Astronomy"],
    "roles": ["Astronomer"],
    "shortDescription": "Henrietta Swan Leavitt discovered the relationship between the brightness and period of Cepheid variable stars, which became the key to measuring distances in the universe. Her discovery enabled Edwin Hubble to prove the existence of other galaxies.",
    "detailed_description": {
      "early_life": "Born in Massachusetts in 1868, Henrietta studied astronomy at Radcliffe College and graduated in 1892. She was partially deaf from an early age.",
      "stem_journey": "Henrietta joined the Harvard College Observatory in 1893 and began studying variable stars in the Magellanic Clouds. She discovered the period-luminosity relationship for Cepheid variables.",
      "challenges": "As a woman in astronomy, Henrietta was paid only 30 cents per hour and was not allowed to use telescopes herself. She worked as a 'computer' analyzing photographic plates.",
      "achievements": "Discovered the period-luminosity relationship for Cepheid variables, which became the foundation for measuring cosmic distances and understanding the scale of the universe.",
      "legacy": "Henrietta's discovery enabled astronomers to measure distances to galaxies and ultimately led to the discovery that the universe is expanding."
    },
    "achievements": [
      "Discovered the period-luminosity relationship for Cepheid variables",
      "Catalogued over 2,400 variable stars",
      "Her work enabled measurement of cosmic distances",
      "Foundation for understanding the scale of the universe"
    ],
    "verified": true
  },
  {
    "name": "Vera Rubin",
    "birthDate": "1928",
    "deathDate": "2016",
    "country": "United States",
    "fields": ["Astronomy", "Physics"],
    "roles": ["Astronomer", "Physicist"],
    "shortDescription": "Vera Rubin was a pioneering astronomer whose observations of galaxy rotation curves provided the first direct evidence for dark matter. Her groundbreaking work revolutionized our understanding of the universe and earned her numerous prestigious awards.",
    "detailed_description": {
      "early_life": "Born in Philadelphia in 1928, Vera was fascinated by astronomy from childhood. She earned her PhD in astronomy from Georgetown University in 1954.",
      "stem_journey": "Vera's research focused on galaxy rotation curves. Her observations showed that galaxies rotate faster than expected, providing evidence for dark matter's existence.",
      "challenges": "As a woman in astronomy in the 1950s and 1960s, Vera faced significant gender discrimination. She was often excluded from major observatories and had to fight for access to telescopes.",
      "achievements": "Provided first direct evidence for dark matter through galaxy rotation studies, discovered the Rubin-Ford effect, and was the first woman to receive the Gold Medal of the Royal Astronomical Society.",
      "legacy": "Vera's work on dark matter fundamentally changed our understanding of the universe and inspired generations of women in astronomy."
    },
    "achievements": [
      "Provided first direct evidence for dark matter",
      "Discovered the Rubin-Ford effect",
      "First woman to receive Gold Medal of Royal Astronomical Society",
      "National Medal of Science recipient"
    ],
    "verified": true
  },
  {
    "name": "Jocelyn Bell Burnell",
    "birthDate": "1943",
    "country": "United Kingdom",
    "fields": ["Astronomy", "Physics"],
    "roles": ["Astronomer", "Physicist"],
    "shortDescription": "Jocelyn Bell Burnell discovered pulsars as a graduate student, one of the most important astronomical discoveries of the 20th century. Despite her crucial role in the discovery, she was controversially excluded from the Nobel Prize awarded to her supervisor.",
    "detailed_description": {
      "early_life": "Born in Northern Ireland in 1943, Jocelyn was interested in science from an early age. She studied physics at the University of Glasgow and later at Cambridge University.",
      "stem_journey": "As a PhD student at Cambridge, Jocelyn helped build a radio telescope and discovered the first pulsar in 1967. She went on to discover three more pulsars.",
      "challenges": "As a woman in physics in the 1960s, Jocelyn faced significant discrimination. Her discovery of pulsars was initially attributed to her male supervisor, who received the Nobel Prize without her.",
      "achievements": "Discovered the first pulsar, discovered three additional pulsars, and made fundamental contributions to our understanding of neutron stars and the universe.",
      "legacy": "Jocelyn's discovery of pulsars revolutionized astronomy and our understanding of neutron stars. She has become a strong advocate for women in science."
    },
    "achievements": [
      "Discovered the first pulsar in 1967",
      "Discovered three additional pulsars",
      "Revolutionized understanding of neutron stars",
      "Received numerous awards including the Breakthrough Prize"
    ],
    "verified": true
  }
];

console.log(`Found ${newPioneers.length} new pioneers to add`);
console.log('New pioneers:', newPioneers.map(p => p.name)); 