<template>
  <div class="img_wrapper">
    <h1 class="like" @click="like" ref="like">
      <font-awesome-icon icon="fa-regular fa-heart" class="like_btn" />
      <font-awesome-icon icon="fa-solid fa-heart" class="unlike_btn" />
    </h1>
    <div class="boximg">
      <router-link :to="{ name: 'Artist_info', params: { id: artist.name},query: { path: artist.path, bg: artist.bg, album: artist.album, album_wrap: artist.album_wrap, name: artist.name, desc: artist.desc } }">
        <img :src="require(`../assets/${artist.pic}`)" alt="">
        <div class="container">
          <div class="text">
            <h1>{{artist.name}}</h1>
            <p>{{artist.desc}}</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "Artist_card",
  props:["artist"],
  methods: {
    like() {
      this.$refs.like.classList.toggle('liked');
    }
  }
}
</script>
  
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  position: relative;
}


.img_wrapper {
  display: block;
  position: relative;
  overflow: hidden;

}

.like {
  position: absolute;
  top: 5px;
  right: 7px;
  height: 32px;
  z-index: 50;
  transition: .2s;
}


.liked .unlike_btn {
  scale: 1;
}

.unlike_btn {
  position: relative;
  color: red;
  top: -35px;
  scale: 0;
  transition: .2s;
}

.like_btn {
  position: relative;
  display: block;
  color: red;
}

.like:hover {
  cursor: pointer;
  scale: 1.1;
}

.boximg {
  width: 260px;
  overflow: hidden;
  position: relative;
  height: 350px;
  border: 5px solid #000;
}

.boximg img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: .5s;
}

.container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.container::before,
.container::after {
  content: '';
  width: 260px;
  height: 500px;
  position: absolute;
  top: 0;
  left: 0;
  background: #000;
  opacity: 0;
  transition: 1s;
}

.container::after {
  width: 360px !important;
}

.container::before {
  transform: translateX(-125%) rotate(45deg);
}

.container::after {
  transform: translateX(125%) rotate(45deg);
}

.text {
  width: 100%;
  position: absolute;
  top: 15%;
  color: #fff;
  text-align: center;
  z-index: 10;
}

.text h1 {
  margin-top: 30%;
  margin-bottom: 20px;
  font-size: 30px;
  transform: scale(0);
  transition: .5s;
}

.text p {
  font-size: 20px;
  float: right;
  margin-left: 75px;
  margin-right: 30px;
  transform: scale(2);
  transition: .5s;
  opacity: 0;
}

.boximg:hover {
  cursor: pointer;
}

@media (min-width: 481px) {
  .boximg:hover img {
    transform: rotate(-38deg) scale(2);
    filter: blur(2px);
  }

  .boximg:hover .container::before {
    transform: translateX(92%) rotate(45deg) scale(2);
    transition: .5s;
    opacity: .6;
  }

  .boximg:hover .container::after {
    transform: translateX(.25%) rotate(45deg) scale(2);
    transition: .5s;
    opacity: .6;
  }

  .boximg:hover .text h1 {
    transform: scale(1) rotate(-45deg) translateY(-50px);
  }

  .boximg:hover .text p {
    transform: scale(1) translateY(10%);
    opacity: 1;
  }
}

@media(max-width: 480px) {

  .container::after {
    transform: translateX(.25%) rotate(45deg) scale(2);
    transition: .5s;
    opacity: .6;
  }

  .text h1 {
    transform: scale(1) translateY(-90px);
  }

  .text p {
    transform: scale(1) translateY(100%);
    opacity: 1;
  }
}
</style>