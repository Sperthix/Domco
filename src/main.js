import Swiper from 'swiper';
import 'swiper/css';

// Menu
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click',() => {
  navMenu.classList.toggle('hidden');
})

// Swiper
function updateSlidesGrayState(swiper) {
  swiper.slides.forEach(slide => {
    const rect = slide.getBoundingClientRect();
    if (rect.left < 0 || rect.right > window.innerWidth) {
      slide.classList.add('gray-slide');
    } else {
      slide.classList.remove('gray-slide');
    }
  });
}

const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1.4,
  spaceBetween: 12,
  centeredSlides: true,

  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 33,
    },
    1024: {
      slidesPerView: 5,
    },
    1920: {
      slidesPerView: 7
    }
  },
  on: {
    init(swiper) {
      updateSlidesGrayState(swiper);
    },
    transitionEnd(swiper) {
      updateSlidesGrayState(swiper);
    },
  }
});

// Swiper Navigation
document.getElementById('swiper-btn-prev').addEventListener('click', () => {
  swiper.slidePrev();
});
document.getElementById('swiper-btn-next').addEventListener('click', () => {
  swiper.slideNext();
});

// Parts

const content = {
  roof: {
    text: 'Izolácia strechy mäkkou penou zvonka sa využíva najmä pri novostavbách...'
  },
  attic: {
    text: 'Izolácia strechy mäkkou penou zvonka sa využíva najmä pri novostavbách na zachovanie priznaných krokiev. Pri starších domoch sa aplikuje pri rekonštrukciách, keď je minerálna vlna poškodená škodcami a vonkajšia prerábka je ekonomickejšia.'
  },
  ceiling: {
    text: 'Izolácia stropov napomáha k zachovaniu tepla v horných miestnostiach domu...'
  },
  walls: {
    text: 'Steny izolované striekanou penou zabezpečujú výbornú akustiku a energetickú úsporu...'
  },
  fasade: {
    text: 'Fasády s kvalitnou izoláciou predĺžia životnosť stavby a znížia prevádzkové náklady...'
  },
  floor: {
    text: 'Izolácia podláh zabezpečuje lepší tepelný komfort a oddeľuje chladu zo zeme...'
  }
};

const menuItems = document.querySelectorAll('.parts-menu-item');
const description = document.getElementById('part-description');

menuItems.forEach(item => {
  item.addEventListener('click', () => {

    menuItems.forEach(i => i.classList.remove('selected'));

    item.classList.add('selected');

    const part = item.getAttribute('data-part');
    if (content[part]) {
      description.textContent = content[part].text;
    }
  });
});
