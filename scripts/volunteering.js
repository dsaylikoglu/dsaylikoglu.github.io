volunteeringList = {
  "Math & Physics Tutoring": [
    ["Tutoring-with-zoom-square.png", "zoom tutoring"],
    "I tutor other high school students on physics and mathematics topics.",
    "December 2022 – Present",
  ],
  "NKolay 44th Istanbul Marathon": [
    ["istanbul-maratonu.jpg", "44th istanbul marathon image"],
    "I ran 15 KM (9.3 miles) to raise money for people who cannot cover their education expenses.",
    "November 6, 2022",
  ],
};

for (const [key, value] of Object.entries(volunteeringList)) {
  card = `<div class="card volunteering-card">
            <div>
              <img
                class="card-image volunteering-image"
                src="images/${value[0][0]}"
                alt="${value[0][1]}"
              />
            </div>
            <div class="card-content">
              <div class="card-title">${key}</div>
              <div class="card-description">
                ${value[1]}
              </div>
              <div class="card-date">&bull; <em>${value[2]}</em></div>
            </div>
          </div>`;

  document
    .querySelector(".volunteering-list")
    .insertAdjacentHTML("beforeend", card);
}
