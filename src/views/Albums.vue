<template>
    <div class="flex">
    <header>
      <Navbar></Navbar>
    </header>

    <body>
      <h1>Информация о самых популярных альбомах всего мира</h1>
      <div class="gallery_list">
        <Album_card 
        v-for="i in 18" :key="i"
         />
      </div>
    </body>
    <footer>
      <span>© 2022 IN TUNE ALL RIGHTS RESERVED PRIVACY POLICY</span>
    </footer>
  </div>
</template>
    
<script>
import Navbar from '@/components/Navbar.vue';
import Album_card from '@/components/Album_card.vue';
export default {
    name: "About",
    components:{Navbar,Album_card}
}
</script>
    
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
}

.flex{
  display: flex;
  flex-direction: column;
  gap: 150px;
}

body {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
  top: 150px;
}

body h1{
  padding: 0 7.1vw; 
  font-size: 2.88vw;
}

.center {
  width: 100%;
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

footer{
  width: 100%;
  text-align: center;
  filter: brightness(.5);
}

@media (max-width: 1150px){
  body h1{
    font-size: 35px;
  }
}

@media(max-width: 480px){
  footer{
    font-size: xx-small;
  }
}
</style>