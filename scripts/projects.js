fetch("https://api.github.com/users/dsaylikoglu/repos")
  .then((res) => {
    if (res.ok) {
      console.log("SUCCESS");
    } else {
      console.log("FAIL");
    }
    return res.json();
  })
  .then((data) => {
    data.forEach((project) => {
      var projectTitleArray = project.name.split("-");
      var projectTitle;
      for (i = 0; i < projectTitleArray.length; i++) {
        projectTitle +=
          projectTitleArray[i][0].toUpperCase() +
          projectTitleArray[i].slice(1) +
          " ";
      }
      const card = `<div class="card">
                      <div><img class="card-image" src="${
                        project.owner.avatar_url
                      }" alt="Profile Picture"></div>
                      <div class="card-content">
                        <div class="card-title">${projectTitle.slice(9)}</div>
                        <div class="card-description">${
                          project.description
                        }</div>
                        <div class="card-language">&bull; ${
                          project.language
                        }</div>
                        <div>Link: <a class="card-url" href="${
                          project.html_url
                        }">${project.html_url}</a></div>
                      </div>
                    </div>`;

      document
        .querySelector(".project-list")
        .insertAdjacentHTML("beforeend", card);
    });
  })
  .catch((err) => console.error("ERROR!:", err));
