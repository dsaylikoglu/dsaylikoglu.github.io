programList = {
  "Pioneer Academics Research Program": [
    "https://pioneeracademics.com/",
    "Pioneer Academics is a rigorous program that allows high school students to work with a professor and write an academic paper. My study subject is particle physics and my paper’s topic are <em>transverse momentum and rapidity distributions for Z bosons</em>.",
    "June – September 2022",
  ],
  "Nesin Mathematics Village": [
    "https://nesinkoyleri.org/events/2022-analytical-methods-in-physics/",
    "Attended the “Analytical methods in Physics” program under the “Undergraduate and Graduate Mathematics Camp” in Nesin Mathematics Village. Learned about different mathematical concepts and methods used in solving complex physics questions.",
    "September 2022",
  ],
  "DENEYAP Turkey": [
    "https://deneyapturkiye.org/",
    "Attending varied courses from “Design and Production” to “Artificial Intelligence”.",
    "April 2022 – Present",
  ],
  "Kadir Has University Summer/Winter School for High School Students": [
    "http://liseyazokulu.khas.edu.tr/",
    "Attended university level physics courses (Augmented Mechanics, Augmented Electricity & Magnetism, Introduction to Quantum Mechanics, Phase Transitions and Renormalization Group Theory) given by the Dean of Engineering and Natural Sciences of Kadir Has University and Emeritus Professor of Physics at Massachusetts Institute of Technology.	Completed “Augmented Mechanics” and “Augmented Electricity & Magnetism” with Success, completed “Introduction to Quantum Mechanics” with Outstanding Success.",
    "July 2021 & January 2022 & July 2022",
  ],
  "QBronze Introduction to Quantum Programming": [
    "https://qturkey.org/kuantum-programlamaya-giris-atolyesi-qbronze/",
    "Attented QBronze program and learned how to use the Qiskit library from Python programming language to simulate quantum computers.",
    "April – May 2021",
  ],
  "Space Camp Turkey": [
    "https://www.spacecampturkey.com/en",
    "I participated in a Space Camp Turkey program in Izmir. I presented my project space debris and was the mission commander for the simulated space flight.",
    "August 2018",
  ],
};

for (const [key, value] of Object.entries(programList)) {
  card = `<div class="program-card">
            <div class="program-title">
              <a href="${value[0]}"
                >${key}</a
              >
            </div>
            <div class="program-description">— ${value[1]}</div>
            <div class="program-date">&bull; ${value[2]}</div>
          </div>`;

  document.querySelector(".program-list").insertAdjacentHTML("beforeend", card);
}
