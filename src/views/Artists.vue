<template>
  <div id="artists">
    <header>
      <Navbar></Navbar>
    </header>
    <div class="flex">

      <body>
        <h1>Информация о самых популярных артистах всего мира</h1>
        <div class="input_wrap">
          <div class="center">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" id="search_img" />
          </div>
          <input type="text" id="search" placeholder="Введите имя артиста" ref="search">
        </div>
        <div class="gallery_list">
          <Artist_card v-for="artist of artists" v-bind:artist="artist" />
        </div>
      </body>
      <footer>
        <span>© 2022 IN TUNE ALL RIGHTS RESERVED PRIVACY POLICY</span>
      </footer>
    </div>
  </div>
</template>

<script>
import Artist_card from '@/components/Artist_card.vue';
import Navbar from '@/components/Navbar.vue';

export default {
  name: "Artists",
  components: { Artist_card, Navbar },
  methods: {
  },
  data() {
    return {
      artists: [
        { name: "Big Baby Tape", desc: "он же DJ Tape и Tape LaFlare", pic: "bbt.jpg", path: "bandana-i/1650765462", bg: "bbt_back.jpg", album: "BANDANA I", album_wrap: "bandana.png" },
        { name: "Дора", desc: "королева кьют рока", pic: "dora.webp", path: "miss/1610175009", bg: "dora_back.webp", album: "miss", album_wrap: "miss.jpg" },
        { name: "SQWOZ BAB", desc: "татарский богатырь", pic: "sqwoz.webp", path: "ауф/1534798603?i=1534798604", bg: "sqwoz_back.webp", album: "АУФ", album_wrap: "auf.jpg" },
        { name: "kizaru", desc: "Олег Нечипоренко", pic: "kizaru.jpg", path: "bandana-i/1650765462", bg: "kizaru_back.jpg", album: "BANDANA I", album_wrap: "bandana.png" },
        { name: "Дети rave", desc: "качает", pic: "deti.jpg", path: "fanat/1550626408", bg: "deti_back.webp", album: "FANAT", album_wrap: "fanat.jpg" },
        { name: "МУККА", desc: "поп-панк и эмо-рок", pic: "mukka.jpg", path: "пижама-с-динозаврами/1553325223", bg: "mukka_back.jpg", album: "Пижама с динозаврами", album_wrap: "pizhama.webp" },
        { name: "Big Baby Tape", desc: "он же DJ Tape и Tape LaFlare", pic: "bbt.jpg", path: "bandana-i/1650765462", bg: "bbt_back.jpg", album: "BANDANA I", album_wrap: "bandana.png" },
        { name: "Дора", desc: "королева кьют рока", pic: "dora.webp", path: "miss/1610175009", bg: "dora_back.webp", album: "miss", album_wrap: "miss.jpg" },
        { name: "SQWOZ BAB", desc: "татарский богатырь", pic: "sqwoz.webp", path: "ауф/1534798603?i=1534798604", bg: "sqwoz_back.webp", album: "АУФ", album_wrap: "auf.jpg" },
        { name: "kizaru", desc: "Олег Нечипоренко", pic: "kizaru.jpg", path: "bandana-i/1650765462", bg: "kizaru_back.jpg", album: "BANDANA I", album_wrap: "bandana.png" },
        { name: "Дети rave", desc: "качает", pic: "deti.jpg", path: "fanat/1550626408", bg: "deti_back.webp", album: "FANAT", album_wrap: "fanat.jpg" },
        { name: "МУККА", desc: "поп-панк и эмо-рок", pic: "mukka.jpg", path: "пижама-с-динозаврами/1553325223", bg: "mukka_back.jpg", album: "Пижама с динозаврами", album_wrap: "pizhama.webp" },
        { name: "Big Baby Tape", desc: "он же DJ Tape и Tape LaFlare", pic: "bbt.jpg", path: "bandana-i/1650765462", bg: "bbt_back.jpg", album: "BANDANA I", album_wrap: "bandana.png" },
        { name: "Дора", desc: "королева кьют рока", pic: "dora.webp", path: "miss/1610175009", bg: "dora_back.webp", album: "miss", album_wrap: "miss.jpg" },
        { name: "SQWOZ BAB", desc: "татарский богатырь", pic: "sqwoz.webp", path: "ауф/1534798603?i=1534798604", bg: "sqwoz_back.webp", album: "АУФ", album_wrap: "auf.jpg" },
        { name: "kizaru", desc: "Олег Нечипоренко", pic: "kizaru.jpg", path: "bandana-i/1650765462", bg: "kizaru_back.jpg", album: "BANDANA I", album_wrap: "bandana.png" },
        { name: "Дети rave", desc: "качает", pic: "deti.jpg", path: "fanat/1550626408", bg: "deti_back.webp", album: "FANAT", album_wrap: "fanat.jpg" },
        { name: "МУККА", desc: "поп-панк и эмо-рок", pic: "mukka.jpg", path: "пижама-с-динозаврами/1553325223", bg: "mukka_back.jpg", album: "Пижама с динозаврами", album_wrap: "pizhama.webp" },
      ]
    }
  },
  mounted() {
    search.addEventListener("keyup", (e) => {
      let images = document.querySelectorAll(".img_wrapper");
      let searchValue = search.value
      if (search.value == "") {
        images.forEach((image) => {
          image.style.display = "block";
        });
        return
      }
      let value = searchValue.toLowerCase();
      images.forEach((image) => {
        let name = image.getAttribute('name').toLowerCase()
        if (name.includes(value)) {
          return (image.style.display = "block");
        }
        image.style.display = "none";
      });
      console.log(value);
    });
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
}

.flex {
  height: 100%;
  min-height: calc(100vh - 150px);
  display: flex;
  flex-direction: column;
  position: relative;
  top: 150px;
  justify-content: space-between;
}

.input_wrap {
  position: relative;
  display: flex;
  margin-left: 7.1vw;
  min-width: 250px;
  width: 85%;
  height: 50px;
  box-shadow: 0px 0px 10px 1px rgb(135, 135, 210);
  border-radius: 10px;
  padding: 5px 10px;
}

#search {
  min-width: 90%;
  min-height: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  padding-left: 15px;
  font-size: x-large;
}

#search::placeholder {
  font-size: x-large;
}

#search_img {
  position: relative;
  filter: brightness(.6);
  height: 80%;
}

body {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

body h1 {
  padding: 0 7.1vw;
  font-size: 3vw;
}

.center {
  width: fit-content !important;
  display: flex;
  justify-content: center;
  align-items: center;
}

.center h1 {
  text-align: center;
}

.gallery_list {
  position: relative;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  gap: 30px;
  padding-left: 5.5vw;
  padding-right: 5.5vw;
  margin-bottom: 100px;
}

footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  filter: brightness(.5);
}

@media (max-width: 1150px) {
  body h1 {
    font-size: 35px;
  }
}

@media(max-width: 480px) {
  footer {
    font-size: xx-small;
  }

  #search::placeholder {
    font-size: 60%;
  }
}
</style>