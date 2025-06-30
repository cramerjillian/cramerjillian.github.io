async function fetchProjects() {
    try {
        const response = await fetch('https://api.github.com/users/cramerjillian/repos');
        const data = await response.json();

        data.forEach((repo) => {

            if (repo.name !== "cramerjillian.github.io") {
                const project = document.createElement("div")
                project.innerHTML = `<a href="${repo.html_url}">${repo.name}</a>`
                const projectContainer = document.querySelector(".project-container");

                projectContainer.appendChild(project);
            }
        });
    }
    catch(error) {
        console.error(error);
    }
}

fetchProjects();