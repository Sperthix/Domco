import Swiper from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

// Swiper
const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 24,

  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    }
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
    text: 'Izolácia podkrovia zabezpečí skvelú tepelnú izoláciu a zníženie tepelných strát...'
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
