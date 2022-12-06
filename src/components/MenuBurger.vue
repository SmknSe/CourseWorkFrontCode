<template>
  <div class="burger-menu" :class="{ 'burger-menu_active': isActive }">
    <button @click="burgerMenu" class="burger-menu_button">
      <span class="burger-menu_lines"></span>
    </button>
    <nav class="burger-menu_nav">
      <div data-text="О нас" class="menu_item">
        <router-link to="/about" class="burger-menu_link">О нас</router-link>
      </div>
      <div data-text="Артисты" class="menu_item">
        <router-link to="/artists" class="burger-menu_link">Артисты</router-link>
      </div>
      <div data-text="Альбомы" class="menu_item">
        <router-link to="/albums" class="burger-menu_link">Альбомы</router-link>
      </div>
      <div data-text="Контакты" class="menu_item">
        <router-link to="/contacts" class="burger-menu_link">Контакты</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "MenuBurger",
  data() {
    return {
      isActive: false,
      isScroll: true
    }
  },
  components: {},
  methods: {
    burgerMenu() {
      let menu = document.querySelector('.burger-menu');
      let links = menu.querySelector('.burger-menu_link');
      links.addEventListener('click', this.toggleMenu());

    },
    toggleMenu() {
      this.isScroll = !this.isScroll
      if (!this.isScroll) document.body.style.overflowY = 'hidden'
      else document.body.style.overflowY = 'visible'
      this.isActive= !this.isActive
    },
    f() {
      if (window.innerWidth > 600) {
        if (this.isActive) this.isActive = !this.isActive
        if (!this.isScroll) {
          document.body.style.overflowY = 'visible'
          this.isScroll = !this.isScroll
        }
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.f)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.f)
    if (this.isActive) this.isActive = !this.isActive
        if (!this.isScroll) {
          document.body.style.overflowY = 'visible'
          this.isScroll = !this.isScroll
        }
  }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,700');

* {
  margin: 0;
  padding: 0;
}

.burger-menu {
  display: none;
}

.burger-menu_button {
  position: relative;
  cursor: pointer;
  z-index: 30;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: transparent;
  border: none;
  -webkit-transition: 0.4s;
  -moz-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
}

.burger-menu_lines::before,
.burger-menu_lines::after,
.burger-menu_lines {
  display: block;
  position: relative;
  width: 100%;
  height: 3px;
  background: linear-gradient(144deg, #AF40FF, #5B42F3 50%, #00DDEB);
  margin: 0;
  transition: all .2s;
}

.burger-menu_lines::before {
  float: right;
  content: '';
  width: 60%;
  top: -10px;
}

.burger-menu_lines::after {
  float: right;
  content: '';
  width: 80%;
  top: 10px;
}

.burger-menu_active .burger-menu_lines {
  transform: rotate(45deg);
}

.burger-menu_active .burger-menu_lines::before {
  opacity: 0;
  top: 0;
  width: 100%;
  transform: rotate(0);
}

.burger-menu_active .burger-menu_lines::after {
  width: 100%;
  transform: translateY(-13px) rotate(90deg);
}

.burger-menu_nav {
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: center;
  visibility: visible;
  top: 0;
  left: 100%;
  width: 100vw;
  height: 100vh;
  margin: 0;
  gap: 20px;
  align-items: center;
  background-color: rgb(0, 0, 0);
  transition: all .5s;
  z-index: 20;
}

.burger-menu_active .burger-menu_nav {
  left: 0;
}


.burger-menu_link:hover {
  filter: brightness(0.9);
}

.burger-menu_overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
}

.burger-menu_active .burger-menu_overlay {
  display: block;
  background-color: rgba(0, 0, 0, 0.5);
}

.menu_item {
  display: flex;
  justify-content: center;
  list-style: none;
}

.menu_item a {
  position: relative;
  display: inline-block;
  text-align: center;
  padding: 12px 24px;
  color: white;
  font-size: xx-large;
  font-weight: 600;
  text-decoration: none;
  transition: all .5s;
  text-decoration: none;
  z-index: 100;
}

.menu_item::before {
  content: attr(data-text);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgb(135, 135, 210);
  font-size: 2.5em;
  font-weight: 700;
  pointer-events: none;
  opacity: 0;
  letter-spacing: 20px;
  transition: all .5s;
  white-space: nowrap;
}

.menu_item a:hover {
  transform: scale(1.4);
  z-index: 1000;
}

.menu_item:hover::before {
  opacity: .3;
  letter-spacing: 0px;
}
</style>