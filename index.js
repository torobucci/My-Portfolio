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
    name: 'Professional art Printing data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard',
    'featured image': './images-desktop/card-works1.png',
    technologies: ['html', 'bootstrap', 'ruby'],
    'link to live version': 'https://torobucci.github.io/Portfolio-finish-mobile-version/',
    'link to source': 'https://github.com/torobucci/Portfolio-finish-mobile-version',
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
const grid1 = document.querySelector('.grid-container1');
for (let i = 0; i < projects.length; i += 1) {
  const cardwork = document.createElement('div');
  cardwork.className = projects[i]['card work class'];
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
const popupWindow = document.querySelector('.popup-window');
const seeProject = document.querySelectorAll('.see-project-btn1');
const bodycontent = document.querySelector('.body');
seeProject.forEach((el) => {
  el.addEventListener('click', () => {
    popupWindow.classList.toggle('show');
    bodycontent.classList.toggle('body-overflow');
  });
});

const faX = document.querySelector('.fa-x');
faX.addEventListener('click', () => {
  popupWindow.classList.toggle('show');
  bodycontent.classList.toggle('body-overflow');
});