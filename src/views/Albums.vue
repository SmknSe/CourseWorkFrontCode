<template>
  <div id="#albums">
    <header>
      <Navbar></Navbar>
    </header>
    <div class="flex">

      <body>
        <h1>Информация о самых популярных альбомах всего мира</h1>
        <div class="input_wrap">
          <div class="center">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" id="search_img" />
          </div>
          <input type="text" id="search" placeholder="Введите название альбома" ref="search">
        </div>
        <div class="gallery_list">
          <Album_card v-for="i in 18" :key="i" />
        </div>
      </body>
      <footer>
        <span>© 2022 IN TUNE ALL RIGHTS RESERVED PRIVACY POLICY</span>
      </footer>
    </div>
  </div>
</template>
    
<script>
import Navbar from '@/components/Navbar.vue';
import Album_card from '@/components/Album_card.vue';
export default {
  name: "About",
  components: { Navbar, Album_card },
  methods: {
    makeSearch() {
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
    }
  },
  mounted() {
    search.addEventListener("keyup", this.makeSearch);
  },
  beforeUnmount() {
    search.removeEventListener("keyup", this.makeSearch)
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
  width: 85%;
  min-width: 250px;
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
  font-size: 2.88vw;
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
