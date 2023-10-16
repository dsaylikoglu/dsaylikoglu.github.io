extracurricularList = {
  "IMC FRC (FIRST Robotics Competition)": [
    "imc.png",
    "img logo",
    "(Robotics Captain)",
    "—	Robot Winner of Pendik 2021 FRC Off-Season<br />—	Chairman’s Award Winner Pendik 2021 FRC Off-Season<br />—	Gracious Professionalism Award Winner Istanbul Regional 2022<br />—	Team Spirit Award Winner Pendik 2022 FRC Off-Season",
    "Sep. 2021 — Present",
  ],
  "Rocket Club": [
    "teknofest-rocket.png",
    "teknofest rocket",
    "(Co-President)",
    "—	Competed in TEKNOFEST High School category rocket competition and 3D designed a rocket<br />—	Studied about orbital mechanics and rocket science",
    "Sep. 2021 — Present",
  ],
  BL4S: [
    "cern.jpg",
    "bl4s",
    "(Team Captain)",
    "—	Competing in CERN’s Beamline for Schools competition with our particle accelerator system/experiment",
    "Jan. 2021 — June 2022 ",
  ],
  "Web Design Club": [
    "web_design.jpg",
    "html tag",
    "(Club President)",
    "— Teaching HTML, CSS, and JavaScript to club members",
    "Sep. 2021 — Present ",
  ],
  "Astronomy Club": [
    "moon.jpeg",
    "moon",
    "(Club Vice President)",
    "— Learning about cosmology, orbital mechanics, and physics<br />— Observing the sky and the space with the club’s telescopes<br />— Taking photos of celestial object like the Moon, Jupiter, stars…",
    "Sep. 2020 — Present ",
  ],
  "TEAM+S Club": [
    "team+s.png",
    "team+s",
    "(Team Member)",
    "—	Competing in TSA’s TEAM+S (Tests of Engineering Aptitude, Mathematics, and Science) competition",
    "Sep. 2021 — Present",
  ],
  MUN: [
    "MUN.png",
    "mun committee",
    "(Delegate)",
    "— Attending Model United Nations debates<br />—	Discussing global issues in different MUN committees in each one<br />—	MUNs that I attended: JMUNDP 2019, PBMUN 2021, IDAMUN 2021, RCIMUN 2022",
    "Apr. 2019 — Present",
  ],
  "Entrepreneurship Club": [
    "businessplan.jpg",
    "business plan",
    "(Team Member)",
    "— Organizing summits about diverse subjects and inviting experienced speakers to learn about their experiences as entrepreneurs",
    "Sep. 2022 — Present",
  ],
  "Mind Games Club": [
    "mind-games.jpg",
    "mind games brain",
    "(Team Member)",
    "— Learning new mind games and practicing<br />— Competing in many Turkish mind games competitions by TZV (Turkish Intelligence Foundation) and many more",
    "Sep. 2021 — Present",
  ],
  "Dance Club": [
    "dancing.png",
    "dancing",
    "(Team Member)",
    "— Learning Latin dances and hip hop<br />—	Dancing at our school’s dance night",
    "Oct. 2021 — Present",
  ],
  "Project Development and Startup Club": [
    "meetup2teamup.jpg",
    "meetup2teamup logo",
    "(Team Member)",
    "— Created a YouTube channel called TeenTalk<br />—	Created a site and a Windows application MeetUp2TeamUp to make easier for students to find project team members",
    "Apr. 2019 — Present",
  ],
  "TEVİTÖL Game Studio": [
    "game developing.jpg",
    "game developing",
    "(Team Member)",
    "— Learning how to create video games and make our own video games<br />—	Competing in game jams with our original games",
    "Sep. 2021 — Present",
  ],
  "Philosophy Club": [
    "philosophy.jpg",
    "philosophy",
    "(Club Member)",
    "— Discussing about our own philosophical subjects with our own opinions<br />—	Learning about different philosophies",
    "Sep. 2020 — Present",
  ],
  "TEVİTÖL Geography Olympiads Team": [
    "geography.jpg",
    "geography",
    "(Team Member)",
    "— Learning about geography and solving questions about it<br />—	Studying for and attending geography olympiads",
    "Sep. 2021 — Present",
  ],
  "Guitar Club": [
    "guitar.png",
    "guitar",
    "(Club Member)",
    "— Learning new songs and practicing them",
    "Dec. 2021 — June 2022",
  ],
  "Interact Club": [
    "interact.png",
    "interact",
    "(Club Member)",
    "— Teaching physics and programming 101 lessons to middle schoolers who are disadvantaged",
    "Sep. 2022 — Present",
  ],
  "TEVİTÖL Neuroscience and Medicine Society": [
    "neuron.jpg",
    "neuron",
    "(Club Member)",
    "— Learning about the physiology of the brain and its functions.<br />—	Discussing about different neurological and ethical problems<br />— Writing research papers about various topics",
    "Sep. 2022 — Present",
  ],
  "Swimming Club": [
    "swimming.png",
    "swimming",
    "(Club Member)",
    "— Training and practicing routinely our swimming techniques<br />—	Attending regional competitions",
    "Sep. 2021 — Present",
  ],
};

for (const [key, value] of Object.entries(extracurricularList)) {
  card = `<div class="card extracurricular-card">
            <div>
              <img class="card-image extracurricular-image" src="/images/extracurriculars/${value[0]}" alt="${value[1]}">
            </div>
            <div class="card-content">
              <p class="card-title">${key}</p>
              <p class="hierarchy">${value[2]}</p>
              <p class="card-description">${value[3]}</p>
              <p class="card-date">&bull; <em>${value[4]}</em></p>
            </div>
          </div>`;

  document
    .querySelector(".extracurricular-list")
    .insertAdjacentHTML("beforeend", card);
}
