import {data, modal} from "./data.js";

(function () {
  function displayData() {
    data.map(item => {
      createMainContent.call(item, 'body', 'beforeend');
    })
  }

  function createModal() {
    document.getElementById('openBtn').addEventListener('click', () => {
      modal.map(item => {
        createMainContent.call(item, 'body', 'afterbegin');
      })
      document.getElementById('openBtn').classList.add('hidden');
      document.getElementById('closeBtn').classList.remove('hidden');
      displayList(document.querySelector('.modal').querySelector('.product'));
      displayList(document.querySelector('.modal').querySelector('.company'));
      displayList(document.querySelector('.modal').querySelector('.connect'));
    })
    document.getElementById('closeBtn').addEventListener('click', () => {
      document.querySelector('.modal').remove();
      document.getElementById('closeBtn').classList.add('hidden');
      document.getElementById('openBtn').classList.remove('hidden');
    })
  }
  
  function createMainContent(query, location) {
    return document.querySelector(query).insertAdjacentHTML(location,
      `<${this.tag} class='${this.class}'>${this.content}</${this.tag}>`);
  }

  function loadImage(query, location, list, source) {
    return document.querySelector(query).insertAdjacentHTML(location,
      `<img class=${list} src=${source} />`);
  }
  
  function displayImages() {
    loadImage('.header', 'afterbegin', `'logo left'`, './src/images/logo.svg');
    loadImage('h3', 'afterend', `'editor mobile'`, './src/images/illustration-editor-mobile.svg');
    loadImage('h3', 'afterend', `'editor desktop'`, './src/images/illustration-editor-desktop.svg');
    loadImage('.section-2', 'afterbegin', `'phones abs center'`, './src/images/illustration-phones.svg');
    loadImage('.section-3', 'afterbegin', `'laptop mobile'`, './src/images/illustration-laptop-mobile.svg');
    loadImage('.section-3', 'afterbegin', `'laptop desktop'`, './src/images/illustration-laptop-desktop.svg');
    loadImage('.footer', 'afterbegin', 'logo', './src/images/logo.svg');
  }
    
  function displayList(query) {
    query.querySelector('.fa-chevron-down').addEventListener('click', () => {
      query.querySelector('.fa-chevron-down').classList.add('hidden');
      query.querySelector('.fa-chevron-up').classList.remove('hidden');
      query.querySelectorAll('li').forEach(item => {
        item.classList.remove('hidden');
      })
    });
    query.querySelector('.fa-chevron-up').addEventListener('click', () => {
      query.querySelector('.fa-chevron-down').classList.remove('hidden');
      query.querySelector('.fa-chevron-up').classList.add('hidden');
      query.querySelectorAll('li').forEach(item => {
        item.classList.add('hidden');
      })
    })
  }

  function displayOnResize() {
    if (window.matchMedia("(width<=375px)").matches) {
      // RULES
      document.querySelectorAll('.desktop').forEach(item => {
        item.classList.add('hidden');
      })
      if (!document.querySelector('.modal')) {
        document.querySelectorAll('.mobile').forEach(item => {
          item.classList.remove('hidden');
        })
      }
      document.querySelector('.foot-list').classList.add('flex-col');
      document.querySelector('.foot-list').classList.remove('flex-row');
    }
      
    if (window.matchMedia("(width>375px)").matches) {
      // RULES
      document.querySelectorAll('.mobile').forEach(item => {
        item.classList.add('hidden');
      })
      if (!document.querySelector('.modal')) {
        document.querySelectorAll('.desktop').forEach(item => {
          item.classList.remove('hidden');
        })
      }
      document.querySelector('.foot-list').classList.add('flex-row');
      document.querySelector('.foot-list').classList.remove('flex-col');
    }
  }

  window.addEventListener('DOMContentLoaded', () => {
    displayData();
    displayList(document.querySelector('.product'));
    displayList(document.querySelector('.company'));
    displayList(document.querySelector('.connect'));
    createModal();
    displayImages();
    displayOnResize();
  });

  window.addEventListener('resize', () => {
    let timer;
    window.clearTimeout(timer);
    timer = window.setTimeout(displayOnResize(), 500);
  });
})();