hobbyList = {
	"Rubik's Cube": ["rubiks-cube.png", "rubik's cube"],
	Calisthenics: ["calisthenics.png", "calisthenics"],
	YouTube: ["ds_cuber.png", "ds cuber logo"],
	Rockets: ["SpaceX-Superheavy.png", "spacex superheavy"],
	Dancing: ["dancing.png", "latin dancing"],
	Skating: ["skating.png", "skating"],
	Guitar: ["guitar.png", "guitar"],
	Drones: ["drone.png", "drones"],
	Reading: ["reading.png", "reading"],
	"3D Design": ["3d.png", "3d design"],
	MUN: ["MUN.png", "mun"],
	Swimming: ["swimming.png", "swimming"],
};

for (const [key, value] of Object.entries(hobbyList)) {
	card = `<div class="hobby">
            <img src="/images/hobbies/${value[0]}" alt="${value[1]}">
            <p class="hobby-name">${key}</p>
          </div>`;

	document.querySelector(".hobby-images-grid").insertAdjacentHTML("beforeend", card);
}
