// Toggle Theme
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// Update About Me Bio
const aboutText = document.getElementById('aboutText');
const aboutInput = document.getElementById('aboutInput');
const updateBioButton = document.getElementById('updateBio');

updateBioButton.addEventListener('click', () => {
    if (aboutInput.value.trim()) {
        aboutText.textContent = aboutInput.value.trim();
        aboutInput.value = '';
    }
});

// Dynamic Project List
const projects = [
    { title: 'Portfolio Website', description: 'A personal portfolio built with HTML, CSS, and JavaScript.' },
    { title: 'E-commerce App', description: 'A full-stack e-commerce application.' },
    { title: 'Weather App', description: 'A weather application using an API.' },
];

const projectList = document.getElementById('projectList');
const filterInput = document.getElementById('filterInput');

// Render Projects
function renderProjects(filter = '') {
    projectList.innerHTML = ''; // Clear the list
    projects
        .filter(project => project.title.toLowerCase().includes(filter.toLowerCase()))
        .forEach(project => {
            const projectDiv = document.createElement('div');
            projectDiv.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
            projectList.appendChild(projectDiv);
        });
}

// Initialize with all projects
renderProjects();

// Filter Projects
filterInput.addEventListener('input', () => {
    renderProjects(filterInput.value);
});
