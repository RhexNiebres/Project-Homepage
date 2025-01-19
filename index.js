const gridContainer = document.querySelector(".grid");

function getRandomColor(){
    const r = Math.floor(Math.random() *256);
    const g = Math.floor(Math.random() *256);
    const b = Math.floor(Math.random() *256);
    return `rgb(${r}, ${g},${b} )`
}

function driver() {
    const projectCount = 6;

    for (let i = 0; i < projectCount; i++) {
        const projTile = document.createElement("div");
        projTile.classList.add("project");

        const projImg = document.createElement("div");
        projImg.classList.add("projImg");
        projImg.textContent = "Preview of project";
        projImg.style.backgroundColor = getRandomColor();
        const descSec = document.createElement("div");
        descSec.classList.add("descSec");

        const descHead = document.createElement("div");
        descHead.classList.add("descHead");
       
        const projName = document.createElement("h2");
        projName.textContent = "Project Name";
        projName.tabIndex = 0;
       
        const descIcons = document.createElement("div");
        descIcons.classList.add("descIcons");

        const gitIcon = document.createElement("img");
        gitIcon.src =
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg";
        gitIcon.tabIndex = 0;
       
        const extIcon = document.createElement("img");
        extIcon.src = "./images/open-in-new.svg";
        extIcon.tabIndex = 0;
       
        descIcons.appendChild(gitIcon);
        descIcons.appendChild(extIcon);

        descHead.appendChild(projName);
        descHead.appendChild(descIcons);

        const description = document.createElement("div");
        description.classList.add("description");
        description.textContent =
            "description of the project.";

        descSec.appendChild(descHead);
        descSec.appendChild(description);

        projTile.appendChild(projImg);
        projTile.appendChild(descSec)
        gridContainer.appendChild(projTile);
    }
}
driver();