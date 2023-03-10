const faBars = document.querySelector('.fa-bars');
const main = document.querySelector('.main');
const menuToggle = document.querySelector('.menu-toggle');
const menuToggleAnchor = document.querySelector('.toggle-ul');

faBars.addEventListener('click', () => {
  faBars.classList.toggle('fa-xmark');
  main.classList.toggle('none');
  menuToggle.classList.toggle('menu-toggle-height');
});

menuToggleAnchor.addEventListener('click', () => {
  faBars.classList.toggle('fa-xmark');
  main.classList.toggle('none');
  menuToggle.classList.toggle('menu-toggle-height');
});

const projects = [
  {
    name: 'To-Do List Web Application',
    description: 'A to-do list app is a web application designed to help individuals manage their tasks and improve productivity.',
    'featured image': "url('./images-desktop/to-do project.jpg')",
    technologies: ['html', 'bootstrap', 'ruby'],
    'link to live version': 'https://torobucci.github.io/Portfolio-finish-mobile-version/',
    'link to source': 'https://github.com/torobucci/Portfolio-finish-mobile-version',
    'li class': ['html-tag', 'bootstrap-tag', 'ruby-tag'],
    'card work class': 'card-works1',
  },
  {
    name: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard',
    'featured image': "url('./images-desktop/card-works2.png')",
    technologies: ['html', 'bootstrap', 'ruby'],
    'link to live version': 'https://torobucci.github.io/Portfolio-finish-mobile-version/',
    'link to source': 'https://github.com/torobucci/Portfolio-finish-mobile-version',
    'card work class': 'card-works2',
  },
  {
    name: 'Website Protfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard',
    'featured image': "url('./images-desktop/card-works3.png')",
    technologies: ['html', 'bootstrap', 'ruby'],
    'link to live version': 'https://torobucci.github.io/Portfolio-finish-mobile-version/',
    'link to source': 'https://github.com/torobucci/Portfolio-finish-mobile-version',
    'card work class': 'card-works3',
  },
  {
    name: 'Professional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard',
    'featured image': "url('./images-desktop/card-works1.png')",
    technologies: ['html', 'bootstrap', 'ruby'],
    'link to live version': 'https://torobucci.github.io/Portfolio-finish-mobile-version/',
    'link to source': 'https://github.com/torobucci/Portfolio-finish-mobile-version',
    'card work class': 'card-works1',
  },
  {
    name: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard',
    'featured image': "url('./images-desktop/card-works2.png')",
    technologies: ['html', 'bootstrap', 'ruby'],
    'link to live version': 'https://torobucci.github.io/Portfolio-finish-mobile-version/',
    'link to source': 'https://github.com/torobucci/Portfolio-finish-mobile-version',
    'card work class': 'card-works2',
  },
  {
    name: 'Website Protfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard',
    'featured image': "url('./images-desktop/card-works3.png')",
    technologies: ['html-tag', 'bootstrap-tag', 'ruby-tag'],
    'link to live version': 'https://torobucci.github.io/Portfolio-finish-mobile-version/',
    'link to source': 'https://github.com/torobucci/Portfolio-finish-mobile-version',
    'card work class': 'card-works3',
  },

];
const grid1 = document.querySelector('.grid-container1');
for (let i = 0; i < projects.length; i += 1) {
  const cardwork = document.createElement('div');
  cardwork.className = projects[i]['card work class'];
  cardwork.style.backgroundImage = 'linear-gradient(179.35deg, rgba(38, 38, 38, 0) 0.85%, rgba(38, 38, 38, 0.9) 84%),'+ projects[i]['featured image'];
  grid1.appendChild(cardwork);
  const frame43 = document.createElement('div');
  frame43.className = 'frame43-right-block flex';
  cardwork.appendChild(frame43);
  const h2 = document.createElement('h2');
  h2.className = 'title-post1';
  h2.textContent = projects[i].name;
  frame43.appendChild(h2);
  const p = document.createElement('p');
  p.className = 'supporting-text2';
  p.textContent = projects[i].description;
  frame43.appendChild(p);
  const ul = document.createElement('ul');
  ul.className = 'tags1 flex';
  frame43.appendChild(ul);

  for (let j = 0; j < projects[0].technologies.length; j += 1) {
    const li = document.createElement('li');
    li.textContent = projects[0].technologies[j];
    li.className = projects[0]['li class'][j];
    ul.appendChild(li);
  }
  const button = document.createElement('button');
  button.textContent = 'See Project';
  button.className = 'see-project-btn1';
  button.type = 'button';
  cardwork.appendChild(button);
}

/* POP UP WINDOW */
/* const popupWindow = document.querySelector('.popup-window'); */
const bodycontent = document.querySelector('.body');
function elementFromHtml(html) {
  const template = document.createElement('template');

  template.innerHTML = html.trim();

  return template.content.firstElementChild;
}
const projects2 = [
  {
    name: 'Multi-post stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text',
    'featured image': './images-desktop/card-works1.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    'link to live version': 'https://torobucci.github.io/Portfolio-finish-mobile-version/',
    'link to source': 'https://github.com/torobucci/Portfolio-finish-mobile-version',
    'li class': ['html-tag', 'bootstrap-tag', 'ruby-tag'],
    'card work class': 'card-works1',
  },
  {
    name: 'To-Do List Web Application',
    description: 'A to-do list app is a web application designed to help individuals manage their tasks and improve productivity.The app typically allows users to add ,remove and track progress towards list items completion.',
    'featured image': './images-desktop/To-Do-List-1.jpg',
    technologies: ['html', 'bootstrap', 'ruby'],
    'link to live version': 'https://torobucci.github.io/To-Do-List/dist',
    'link to source': 'https://github.com/torobucci/To-Do-List',
    'li class': ['html-tag', 'bootstrap-tag', 'ruby-tag'],
    'card work class': 'card-works1',
  },
  {
    name: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard',
    'featured image': './images-desktop/card-works2.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    'link to live version': 'https://torobucci.github.io/Portfolio-finish-mobile-version/',
    'link to source': 'https://github.com/torobucci/Portfolio-finish-mobile-version',
    'card work class': 'card-works2',
  },
  {
    name: 'Website Protfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard',
    'featured image': './images-desktop/card-works2.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    'link to live version': 'https://torobucci.github.io/Portfolio-finish-mobile-version/',
    'link to source': 'https://github.com/torobucci/Portfolio-finish-mobile-version',
    'card work class': 'card-works3',
  },
  {
    name: 'Professional art Printing data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard',
    'featured image': './images-desktop/card-works1.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    'link to live version': 'https://torobucci.github.io/Portfolio-finish-mobile-version/',
    'link to source': 'https://github.com/torobucci/Portfolio-finish-mobile-version',
    'card work class': 'card-works1',
  },
  {
    name: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard',
    'featured image': './images-desktop/card-works2.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    'link to live version': 'https://torobucci.github.io/Portfolio-finish-mobile-version/',
    'link to source': 'https://github.com/torobucci/Portfolio-finish-mobile-version',
    'card work class': 'card-works2',
  },
  {
    name: 'Website Protfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard',
    'featured image': './images-desktop/card-works2.png',
    technologies: ['html-tag', 'bootstrap-tag', 'ruby-tag'],
    'link to live version': 'https://torobucci.github.io/Portfolio-finish-mobile-version/',
    'link to source': 'https://github.com/torobucci/Portfolio-finish-mobile-version',
    'card work class': 'card-works3',
  },

];
const seeProject = document.querySelectorAll('.see-project-btn1');
seeProject.forEach((el, i) => {
  const popupWindow = elementFromHtml(`<div class="popup-window">
  <div class="popup-window-content">
      <div class="top-content">
          <div class="top-content-text flex">
              <h2>${projects2[i].name}</h2>
              <i class="fa-regular fa-x"></i>
          </div>
          <ul class="top-content-tag flex">
              <li class="html-tag">html</li>
              <li class="bootstrap-tag">Bootstrap</li>
              <li class="ruby-tag">Ruby on rails</li>
          </ul>
      </div>
      <div class="popup-content">
          <img id="snapshot-portfolio" src=${projects2[i]['featured image']} alt="Snapshoot Portfolio">
          <div class="popup-content-text flex">
              <p>${projects2[i].description}</p>
  
              <div class="popup-content-text-btn flex">
                  <button type="button" class="pop-btn flex"><a
                          href=${projects2[i]['link to live version']}>See live</a><img
                          src="./images-desktop/Icon-see live.svg" alt=""></button>
                  <button type="button" class="pop-btn"><a
                          href=${projects2[i]['link to source']}>See source</a><img
                          src="./images-desktop/Icon-see-source.svg" alt=""></button>
  
              </div>
          </div>
  
      </div>
  </div>
  </div>`);

  el.addEventListener('click', () => {
    bodycontent.appendChild(popupWindow);
    popupWindow.classList.toggle('show');
    bodycontent.classList.toggle('body-overflow');
    const faX = document.querySelector('.fa-x');
    faX.addEventListener('click', () => {
      if (bodycontent.contains(popupWindow)) {
        bodycontent.removeChild(popupWindow);
        popupWindow.classList.toggle('show');
        bodycontent.classList.toggle('body-overflow');
      }
    });
  });
});

/* FORM VALIDATION && LOCAL STORAGE */
const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const userName = document.getElementById('name');
const message = document.getElementById('message');
const error = document.querySelector('.error');
form.addEventListener('submit', (e) => {
  const emailRegex = /[A-Z]+/;
  const emailValue = emailInput.value;
  if (emailRegex.test(emailValue)) {
    error.querySelector('p').textContent = 'Form not submitted';
    error.querySelector('small').textContent = 'Please ensure your email is in lowercase';
    setTimeout(() => {
      error.querySelector('p').textContent = '';
      error.querySelector('small').textContent = '';
    }, 5000);
    e.preventDefault();
  }
});

function populateStorage() {
  const data = { name: '', email: '', message: '' };
  data.name = userName.value;
  data.email = emailInput.value;
  data.message = message.value;
  const storageData = JSON.stringify(data);
  localStorage.setItem('Form Data', storageData);
}
function refillValue() {
  const currentData = localStorage.getItem('Form Data');
  const currentDataObj = JSON.parse(currentData);
  userName.value = currentDataObj.name;
  emailInput.value = currentDataObj.email;
  message.value = currentDataObj.message;
}
userName.onchange = populateStorage;
emailInput.onchange = populateStorage;
message.onchange = populateStorage;
if (!localStorage.getItem('Form Data')) {
  populateStorage();
} else {
  refillValue();
}