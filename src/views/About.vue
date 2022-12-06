<template>
  <div id="about">
    <header>
      <Navbar></Navbar>
    </header>
    <main class="center">
      <particles-bg color="#232323" type="lines" :bg="true" />
      <img src="@/assets/mic.png" alt="" class="logo">
      <h2 class="mblock">Music News</h2>
      <h1 class="mblock">In Tune - сервис, который поможет вам окунуться в мир музыки.</h1>
      <p class="mblock">In Tune предоставит вам возможность не только узнать о новых лицах в музыкальной индустрии, но и
        прослушать их самые популярные альбомы. А благодаря переходу на страницы албомов на GENIUS вы сможете
        ознакомиться
        с текстами интересующих вас треков, для того чтобы лучше понять смысл, который исполнитель в них вложил.</p>
    </main>
  </div>
</template>

<script>
import { ParticlesBg } from "particles-bg-vue";
import Navbar from '@/components/Navbar.vue';
export default {
  name: "About",
  components: { Navbar, ParticlesBg }
}
</script>

<style scoped>
canvas {
  filter: brightness(.6);
  min-height: 100vh !important;
  height: 100%;
}

main {
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  color: white;
}

main h1 {
  text-align: justify;
  font-size: 2.5em;
  text-align: center;
}

main p {
  display: block;
  margin: 0px auto 3em;
  max-width: 700px;
  font-size: 1.5em;
  text-align: justify;
}

.mblock {
  width: fit-content;
  margin: 0 auto;
  display: block;
  margin-bottom: .5em;
}

.logo {
  display: block;
  height: 9em;
  width: auto;
  margin: 0 auto;
  margin-bottom: .2em;
  margin-top: 100px;
}

@media (max-width: 480px) {
  main h1 {
    text-align: justify;
    font-size: 1.65em;
    text-align: center;
  }

  main p {
    display: block;
    font-size: medium;
    line-height: 1.5;
    margin: 0px auto 3em;
    max-width: 700px;
    text-align: justify;
  }

  .logo {
    height: 6em;
  }

  h2 {
    font-size: smaller;
  }
}
</style>