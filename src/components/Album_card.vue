<template>
  <div class="img_wrapper">
    <h1 class="like" @click="like" ref="like">
      <font-awesome-icon icon="fa-regular fa-heart" class="like_btn" />
      <font-awesome-icon icon="fa-solid fa-heart" class="unlike_btn" />
    </h1>
    <div class="boximg" onclick="location.href='https://genius.com/albums/Big-baby-tape-and-kizaru/Bandana-i'">
      <img src="@/assets/bandana.png" alt="" class="default">
      <div class="hovered">
        <img src="@/assets/bbt_kizaru.jpg" alt="" class="back">
        <div class="container">
            <h1>Bandana I</h1>
            <p>Big Baby Tape & Kizaru</p>
        </div>
      </div>
    </div>
  </div>
</template>
    
<script>
export default {
  name: "Artist_card",
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
  margin: 0;
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
  overflow: hidden;
  position: relative;
  height: 250px;
  aspect-ratio: 1;
  border: 5px solid #000;
  cursor: pointer;
}

.boximg .default {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: auto;
  transition: .5s;
  z-index: 5;
}

.boximg .hovered {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transition: .5s;
  z-index: 3;
}

.hovered .back {
  width: 100%;
  height: auto;
  filter: brightness(.5);
}

.container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

@media (min-width: 481px) {
  .boximg:hover .default {
  transform: translateX(-100%);
}
}

@media (max-width: 480px){
  .boximg .default{
    filter: brightness(.5);
  }

  .hovered{
    z-index: 6 !important;
  }

  .hovered img{
    display: none;
  }

  .container{
    gap: 5px;
  }
}
</style>