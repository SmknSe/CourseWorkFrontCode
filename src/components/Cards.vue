<template>
  <div class="cards">
    <Card
      v-for="card of cards_db"
      v-bind:card="card"
    />
  </div>
</template>

<script>
import Card from "@/components/Card";
export default {
  props:['cards_db'],
  name: "Cards",
  components:{
    Card
  }
}
</script>

<style scoped>
.cards {
  position: relative;
  display: grid;
  width: 100%;
  margin: 0 auto;
  row-gap: 30px;
  column-gap: 100px;
  grid-template-columns: repeat(5, 250px);
  justify-content: center;
}

@media (max-width: 1780px) {
  .cards {
    grid-template-columns: repeat(3, 250px);
    grid-template-rows: 1fr 1fr;
  }
}

@media (max-width: 1080px) {
  .cards {
    grid-template-columns: repeat(2, 250px);
    grid-template-rows: 1fr 1fr 1fr;
  }
}

@media (max-width: 720px) {
  .cards {
    grid-template-columns: repeat(1, 250px);
    grid-template-rows: repeat(5, 1fr);
  }
}

</style>