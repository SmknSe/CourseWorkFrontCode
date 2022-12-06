<template>
  <body>
  <div class="body_wrap">
    <Header/>
    <Main
        v-bind:cards_db="cards_db"
    />
    <footer>
      <span>© 2022 IN TUNE ALL RIGHTS RESERVED PRIVACY POLICY</span>
    </footer>
  </div>
  </body>
</template>

<script>
import Header from "@/components/Header";
import Main from "@/components/Main";

export default {
  name: 'Home',
  data() {
    return {
      cards_db: [
        {label: 'О нас', path: '/about', description: "Подробная информация о нашем сервисе", img_url: "about.svg"},
        {label: 'Артисты', path: '/artists', description: "Самые популярные артисты со всего мира",img_url:"artist.svg"},
        {label: 'Альбомы', path: '/albums', description: "Самые прослушиваемые альбомы",img_url:"album.svg"},
        {label: 'Контакты', path: '/contacts',description: "Свяжитесь с нами",img_url:"contact.svg"},
      ]
    }
  },
  components: {
    Header, Main
  },
  mounted(){
        window.scrollTo(0,0);
    },
}
</script>

<style scoped>
* {
  font-family: 'Montserrat Alternates', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
}

body {
  background: #232323;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

.body_wrap {
  width: 100vw;
  overflow-x: hidden;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
}

footer{
  filter: brightness(.5);
  width: 100%;
  text-align: center;
}

@media(max-width: 480px) {
  footer {
    font-size: xx-small;
  }
}
</style>
