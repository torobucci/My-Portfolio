const faBars = document.querySelector('.fa-bars');
const header = document.querySelector('.main-header');
const main = document.querySelector('.main');
const menuToggle = document.querySelector('.menu-toggle');
const menuToggleAnchor = document.querySelector('.toggle-ul');

faBars.addEventListener('click', () => {
  faBars.classList.toggle('fa-xmark');
  main.classList.toggle('none');
  header.classList.toggle('fixed');
  menuToggle.classList.toggle('menu-toggle-height');
});

menuToggleAnchor.addEventListener('click', () => {
  menuToggle.classList.toggle('menu-toggle-height');
  faBars.classList.toggle('fa-xmark');
  header.classList.toggle('fixed');
  main.classList.toggle('none');
});

const projects = [
  {
    name: 'Space Travellers',
    description:
      'Space Travelers is a SPA that uses SpaceX live API to display available rockets and missions. It also enables a user to reserve/cancel a rocket and join/leave a mission and display them on their profile.',
    'featured image': './images-desktop/spacetravellers.jpg',
    technologies: ['react', 'bootstrap', 'apis'],
  },
  {
    name: 'Budget Buddy',
    description:
      'Budget_App is a ruby on rails application that allow users to budget their money effectively. It utilizes devise gem for proper user authentication. User can add a category and see expenses on that category.',
    'featured image': './images-desktop/budget1.jpg',
    technologies: ['ruby', 'rails', 'devise', 'postgresql'],
  },
  {
    name: 'GlobalGroove Concert',
    description:
     'Global Groove Concert is a website project advertising a concert event by Global Groove. Its displays the main program events, featured artists and info about the organization',
    'featured image': './images-desktop/concert.jpg',
    technologies: ['html5', 'css3', 'javascript'],
  },
  {
    name: 'Leaderboard',
    description:
      'Leaderboard is a project that display ThunderSlap game current rankings. It enables a new player to add their score and display current scores when the refresh button is clicked.',
    'featured image': './images-desktop/leaderboard.jpg',
    technologies: ['html5', 'css3', 'javascript', 'APIs'],
  },
  {
    name: 'Math Magicians',
    description:
      'Math Magicians is a calculator web app built using React that allow users to perform basic math operations and display results. It has an added feature of displaying quotes fetched from an API.',
    'featured image': './images-desktop/math_magicians.jpg',
    technologies: ['react', 'css3', 'APIs'],
  },
  {
    name: 'Awesome Books',
    description:
      'Awesome book is a mid Fidelity wireframe, single page app that enables a user to add and remove a book from his/her collection. It implements the use of modules to make code simple',
    'featured image': './images-desktop/awesomeBooks.jpg',
    technologies: ['html5', 'javascript', 'css3'],
  },
];
const grid1 = document.querySelector('.grid-container1');
for (let i = 0; i < projects.length; i += 1) {
  const cardwork = document.createElement('div');
  cardwork.style.backgroundImage = `url(${projects[i]['featured image']}`;
  cardwork.style.backgroundSize = '100% 100%';
  cardwork.className = 'cw';
  grid1.appendChild(cardwork);

  const cardOverlay = document.createElement('div');
  cardOverlay.className = 'card-overlay';
  const button = document.createElement('button');
  button.textContent = 'See Project';
  button.className = 'see-project-btn1 btn';
  button.type = 'button';
  cardOverlay.appendChild(button);
  cardwork.appendChild(cardOverlay);
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
    name: 'BookFlix Application',
    description:
      'BookFlix is a web applications that allow users to book reservations for movies cast in a cinema. User can see details of a movie and reserve from it. Moreover user can also see lists of their reservations. Admins can add or delete movies.',
    'featured image': './images-desktop/bookflix.jpg',
    technologies: ['react', 'bootstrap', 'ruby', 'ruby on rails'],
    'link to live version': 'https://book-flix-frontend.vercel.app/',
    'link to source': 'https://github.com/torobucci/BookFlix-Backend',
  },
  {
    name: 'Space Travelers',
    description: 'Space Travelers is a SPA that uses SpaceX live API to display available rockets and missions. It also enables a user to reserve/cancel a rocket and join/leave a mission and display them on their profile.',
    'featured image': './images-desktop/spacetravellers1.jpg',
    technologies: ['react', 'redux', 'bootstrap5', 'apis'],
    'link to live version': 'https://space-travelers-hib.onrender.com/',
    'link to source': 'https://github.com/torobucci/space-travelers',
  },
  {
    name: 'Budget Buddy',
    description:
    'Budget_App is a ruby on rails application that allow users to budget their money effectively. It utilizes devise gem for proper user authentication. User can add a category and see expenses on that category',
    'featured image': './images-desktop/budget.jpg',
    technologies: ['ruby', 'rails', 'devise', 'postgresql'],
    'link to live version': 'https://budgetbuddy-xwce.onrender.com/',
    'link to source': 'https://github.com/torobucci/Budget_app',
  },
  {
    name: 'GlobalGroove Concert',
    description:
      'Global Groove Concert is a website project advertising a concert event by Global Groove. Its displays the main program events, featured artists and info about the organization',
    'featured image': './images-desktop/concert1.jpg',
    technologies: ['html5', 'css3', 'javascript'],
    'link to live version':
      'https://torobucci.github.io/GlobalGroove-Concert/',
    'link to source':
      'https://github.com/torobucci/GlobalGroove-Concert',
  },
  {
    name: 'Leaderboard',
    description:
      'Leaderboard is a project that display ThunderSlap game current rankings. It enables a new player to add their score and display current scores when the refresh button is clicked.',
    'featured image': './images-desktop/leaderboard1.jpg',
    technologies: ['html5', 'css3', 'javascript', 'APIs'],
    'link to live version':
      'https://torobucci.github.io/Leaderboard/dist/',
    'link to source':
      'https://github.com/torobucci/Leaderboard',
  },
  {
    name: 'Math Magicians',
    description:
      'Math Magicians is a calculator web app built using React that allow users to perform basic math operations and display results. It has an added feature of displaying quotes fetched from an API.',
    'featured image': './images-desktop/math_magicians1.jpg',
    technologies: ['react', 'css3', 'APIs'],
    'link to live version':
      'https://math-magicians-ga6o.onrender.com/',
    'link to source':
      'https://github.com/torobucci/math-magicians',
  },
  {
    name: 'Awesome Books',
    description:
      'Awesome book is a mid Fidelity wireframe, single page app that enables a user to add and remove a book from his/her collection. It implements the use of modules to make code simple',
    'featured image': './images-desktop/awesomeBooks1.jpg',
    technologies: ['html', 'javascript', 'css3'],
    'link to live version':
      'https://torobucci.github.io/Awesomebooks-Modules/',
    'link to source':
      'https://github.com/torobucci/Awesomebooks-Modules',
  },
  {
    name: 'Website Protfolio',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard',
    'featured image': './images-desktop/card-works2.png',
    technologies: ['html-tag', 'bootstrap-tag', 'ruby-tag'],
    'link to live version':
      'https://torobucci.github.io/Portfolio-finish-mobile-version/',
    'link to source':
      'https://github.com/torobucci/Portfolio-finish-mobile-version',
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
          <ul class="top-content-tag flex tags">
           ${projects2[i].technologies
    .map((tech) => `<li class='btn btn-secondary tags-btn'>${tech}</li>`).join('')}
          </ul>
      </div>
      <div class="popup-content">
          <img id="snapshot-portfolio" src=${
  projects2[i]['featured image']
} alt="Snapshoot Portfolio">
          <div class="popup-content-text flex">
              <p>${projects2[i].description}</p>

              <div class="popup-content-text-btn flex">
                  <button type="button" class="pop-btn btn flex"><a
                          target="_blank"
                          href=${
  projects2[i]['link to live version']
}>See live</a><img
                          src="./images-desktop/Icon-see live.svg" alt=""></button>
                  <button type="button" class="pop-btn btn flex"><a
                          target="_blank"
                          href=${
  projects2[i]['link to source']
}>See source</a><img
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
  localStorage.clear();
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

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.reveal');

  function checkElements() {
    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight * 0.75) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', checkElements);

  checkElements();
});
