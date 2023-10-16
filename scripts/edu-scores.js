schoolList = {
  "TEV Inanc Turkes High School (TEVİTÖL)": [
    "https://tevitol.k12.tr",
    "Kocaeli, Turkey",
    "High School",
    "September 2020 – Present",
  ],
  "UKEB (International Culture, Education and Science Schools)": [
    "https://www.ukeb.com.tr/",
    "Izmir, Turkey",
    "Middle School",
    "September 2017 – June 2020",
  ],
};
scoreList = {
  SAT: ["1470", "Reading/Writing: 680, Math: 790", "December 3, 2022"],
  "TOEFL ITP1": [
    "663",
    "Listening: 68, Structure & Written: 68, Reading: 63",
    "June 2022",
  ],
  "AP Physics C: Mechanics": [
    "5",
    "AP Physics C: Mechanics is an AP science course in which students study Newtonian mechanics.",
    "May 2022",
  ],
  "AP Computer Science A": [
    "4",
    "AP Computer Science A is a course primarly focused on the basics of Java.",
    "May 2022",
  ],
  "AP Statistics": [
    "3",
    "AP Statistics is a college-level non-calculus-based statistics course. ",
    "May 2022",
  ],
  PSAT: [
    "1290",
    "Math: 730, Evidence-Based Reading and Writing: 560",
    "October 2021",
  ],
  "TOEFL ITP": ["593", "", "June 2021"],
};

for (const [key, value] of Object.entries(schoolList)) {
  card = `<div class="school-card">
            <div class="school-title">
              <a href="${value[0]}"
                >${key}</a
              >
            </div>
            <div class="school-location">${value[1]}</div>
            <div class="school-type">— ${value[2]}</div>
            <div class="school-date">&bull; ${value[3]}</div>
          </div>`;

  document.querySelector(".school-list").insertAdjacentHTML("beforeend", card);
}

for (const [key, value] of Object.entries(scoreList)) {
  key1 = key.slice(-1) == "1" ? key.slice(0, -1) : key;
  card = `<div class="score-card">
            <div class="score-title">${key1}</div>
            <div class="score">Score: ${value[0]}</div>
            <div class="score-description">${value[1]}</div>
            <div class="score-date">&bull; <em>${value[2]}</em></div>
          </div>`;

  document.querySelector(".score-list").insertAdjacentHTML("beforeend", card);
}
