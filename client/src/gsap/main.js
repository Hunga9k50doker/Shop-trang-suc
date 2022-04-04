const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const nav__bar = $(".nav__bar");
const items = $$(".main__project__item");

const app = {
  handleEvents: function () {
    const _this = this;
    // toggle nav
    nav__bar.onclick = () => {
      nav__bar.classList.toggle("active");
    };
  },

  start: function () {
    this.handleEvents();
  },
};

app.start();
