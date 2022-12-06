<template>
  <div class="card">
    <div class="center">
      <img :src="require(`../assets/${card.img_url}`)" alt="" class="back">
    </div>
    <span class="htext">{{ card.label }}</span>
    <span>{{ card.description }}</span>
    <router-link :to="{ path: card.path }" class="btn">
      <span>Подробнее</span>
    </router-link>
  </div>
</template>

<script>

export default {
  props: {
    card: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.card {
  position: relative;
  border-radius: 20px;
  background: rgb(19, 19, 19);
  width: 100%;
  height: auto;
  aspect-ratio: 1.5 !important;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  /* gap: 10px; */
  align-items: flex-start;
  box-shadow: 0px 0px 29px 11px rgb(23, 23, 23);
  padding-left: 22%;
  padding-right: 10px;
  padding-top: 7px;
  padding-bottom: 7px;
  font-size: 1rem;
}

.center {
  position: absolute;
  width: calc(100% - 14px);
  height: calc(100% - 14px);
  top: 7px;
  left: 7px;
  bottom: 7px;
  right: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .5s;
}

.btn {
  background: linear-gradient(144deg, #AF40FF, #5B42F3 50%, #00DDEB);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 2px;
  cursor: pointer;
  text-decoration: none;
  transition: all .3s;
}

.btn:active,
.btn:hover {
  outline: 0;
}

.btn span {
  background-color: rgb(5, 6, 45);
  padding: 5px;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  transition: 300ms;
}

.btn:hover span {
  background: none;
}

.btn:active {
  transform: scale(0.9);
}

.card>.htext {
  display: inline-block;
  font-size: 2rem;
  color: rgb(135, 135, 210);
}

.card span {
  display: block;
  color: white;
}

.card::before {
  content: '';
  position: absolute;
  border-radius: 20px;
  width: calc(100% - 14px);
  height: calc(100% - 14px);
  top: 7px;
  left: 7px;
  bottom: 7px;
  right: 7px;
  background: rgba(255, 255, 255, .1);
  backdrop-filter: blur(7px);
  transition: all .5s;
}

.back {
  content: '';
  filter: invert(72%) sepia(0%) saturate(1%) hue-rotate(242deg) brightness(89%) contrast(90%);
  position: relative;
  height: 70%;
  opacity: .5;
  width: auto;
  aspect-ratio: 1;
  transition: all .5s;
}

@media (min-width: 481px) {
  .card:hover::before {
    left: -20%;
    width: 36%;
    transform: scaleY(60%);
    height: auto;
  }

  .card:hover .center {
    left: -20%;
    width: 36%;
    transform: scale(60%);
    height: auto;
  }
}

@media (max-width: 480px) {
  .card {
    scale: .8;
  }

  .card::before {
    left: -10%;
    top: -10%;
    width: 30%;
    height: auto;
    aspect-ratio: 1;
  }

  .center {
    left: -10%;
    top: -10%;
    width: 30%;
    height: auto;
    aspect-ratio: 1;
  }
}
</style>