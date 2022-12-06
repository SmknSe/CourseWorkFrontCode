<template>
    <router-view v-slot="{Component}">
      <transition name="fade" mode="out-in">
        <component :is="Component"/>
      </transition>
    </router-view>
</template>

<script>

import Header from "@/components/Header";
import Main from "@/components/Main";

export default {
  name: 'App',
  components: {
    Header, Main
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@300&display=swap');
* {
  font-family: 'Montserrat Alternates', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

header {
  position: fixed;
  width: 100%;
  height: 80px;
  z-index: 100;
}

.center{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

body {
  background: #232323;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
