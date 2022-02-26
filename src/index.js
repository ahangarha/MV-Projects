import './style.css';
import projects from './data.js';

const toggleMenuBtns = document.querySelectorAll('#openMenu, #closeMenu');
const menu = document.getElementById('menu');
const menuItems = document.querySelectorAll('#menu .menuLinks');

function toggleMenu(event, prevent = true) {
  if (prevent) event.preventDefault();
  menu.classList.toggle('hidden');
  document.body.classList.toggle('overflow-y-hidden');
}

toggleMenuBtns.forEach((btn) => {
  btn.addEventListener('click', (event) => toggleMenu(event));
});

menuItems.forEach((item) => {
  item.addEventListener('click', (event) => toggleMenu(event, false));
});

function dateDiff(dateStr) {
  const now = Date.now();
  const date = new Date(dateStr);

  const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));

  if (diffDays >= 60) {
    return `${Math.floor(diffDays / 30)} months ago`;
  }
  if (diffDays >= 30) {
    return `${Math.floor(diffDays / 30)} month ago`;
  }
  return `${diffDays} days ago`;
}

// inject projects
const projectContainter = document.getElementById('projectContainter');

if (projects.length) projectContainter.innerHTML = '';

projects.forEach((project) => {
  const cardTitle = project.title.length > 45
    ? project.title.slice(0, 40).concat('...')
    : project.title;
  const cardDescription = project.description.length > 100
    ? project.description.slice(0, 90).concat('...')
    : project.description;

  let techs = project.techs.map(
    (tech) => `<li class="text-yellow-700 rounded">${tech}</li>`,
  );
  techs = `<ul class="text-xs flex flex-wrap font-bold gap-1">
    ${techs.join('')}
  </ul>`;
  projectContainter.innerHTML += `
  <div
      class="border rounded-lg overflow-hidden flex flex-col shadow-lg hover:shadow-xl hover:border-gray-300 hover:scale-105 transition duration-300 cursor-pointer"
    >
      <img
        class="h-28 md:h-40 object-cover object-top"
        src="${project.screenshot}"
        alt=""
      />

      <div class="flex flex-col gap-3 p-3 md:p-4 grow">
        <h3 class="font-bold">${cardTitle}</h3>
        ${techs}
        <p class="text-gray-600 text-sm">
          ${cardDescription}
        </p>
      </div>

      <div class="bg-gray-200 flex flex-col gap-1 text-xs p-3 grow-0">
        <div class="flex items-center gap-2 font-bold">
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>${project.author}</span>
        </div>
        <div class="flex items-center gap-2">
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>${dateDiff(project.publishedOn)}</span>
        </div>
      </div>
    </div>
  `;
});
