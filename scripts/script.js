
let navbar = document.querySelector('.nav_menu');

let nav_link = document.querySelectorAll('.nav_link');

window.addEventListener('scroll', function () {
  let header = document.querySelector('.header');
  if (this.scrollY >= 250) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
});

window.addEventListener('scroll', function () {
    let scrollup = document.querySelector('.scrollup');
    if (this.scrollY >= 560) {
      scrollup.classList.add('show-scroll');
    } else {
      scrollup.classList.remove('show-scroll');
    }
  });

function toggleHeader(params) {
    let className = '.' + params;
    nav_link.forEach((a) => {
      a.classList.remove('active-link');
    });
    document.querySelector(className).classList.add('active-link');
  }