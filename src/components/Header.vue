<template>
  <div class="head_container">
    <div class="logo_name">
      <img src="@/assets/mic.png" alt="">
      <h1>In Tune</h1>
    </div>
    <h3>информационный портал для всех любителей музыки</h3>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
.head_container {
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  position: relative;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
}

.logo_name {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
}

.logo_name img {
  width: 100px;
  height: auto;
}

.logo_name h1{
  font-size: 75px;
}

.head_container h3{
  font-size: 20px;
  text-align: center;
}

@media (max-width: 720px) {
  .cards {
    grid-template-columns: repeat(1, 250px);
    grid-template-rows: repeat(5, 1fr);
  }

  .logo_name h1{
    font-size: 10vw;
  }

  .logo_name img{
    width: 15%;
  }

  .head_container h3{
    font-size: 4vw;
  }
}
</style>