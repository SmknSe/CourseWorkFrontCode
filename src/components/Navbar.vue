<template>
    <div class="navbar transparent" ref = "navbar">
        <div class="logo_cat">
            <router-link :to="{ path: '/' }">
                <img src="@/assets/mic.png" style="width: 70px; height: auto;" alt="">
            </router-link>
            <routerLink to="/about">О нас</routerLink>
            <routerLink to="/artists">Артисты</routerLink>
            <routerLink to="/albums">Альбомы</routerLink>
            <routerLink to="/contacts">Контакты</routerLink>
        </div>
        <div class="links">
            <a href="#">
                <img src="@/assets/youtube.svg" alt="">
            </a>
            <a href="#">
                <img src="@/assets/vk.svg" alt="">
            </a>
            <a href="#">
                <img src="@/assets/instagram.svg" alt="">
            </a>
            <a href="#">
                <img src="@/assets/twitter.svg" alt="">
            </a>
        </div>
        <MenuBurger class = "burger"></MenuBurger>
    </div>
</template>
    
<script>
import { onUnmounted } from 'vue';
import MenuBurger from './MenuBurger.vue';
export default {
    name: "Navbar",
    data(){
        return{
            pad: 0,
            flag: true,
        }
    },
    methods:{
        check(){
            this.pad = window.scrollY;
            if (this.pad > 50 && this.flag){
                this.$refs.navbar.classList.toggle("transparent");
                this.flag = false;
            }
            else if (this.pad <=50 && !this.flag){
                this.$refs.navbar.classList.toggle("transparent");
                this.flag = true;
            }
        }    
    },
    components: { MenuBurger },
    mounted(){
        window.scrollTo(0,0);
        document.addEventListener("scroll",this.check)
    },
    beforeUnmount(){
        document.removeEventListener("scroll",this.check)
    }
}


</script>
    
<style scoped>
.navbar {
    position: relative;
    height: 80px;
    width: 100%;
    background: rgba(0, 0, 0);
    border-radius: 0px 0px 20px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 40px 10px 40px;
    font-size: xx-large;
    z-index: 2;
    box-shadow: 0px 0px 29px 25px rgb(0, 0, 0);
}

.transparent{
    background: transparent;
    box-shadow: none;
}

.logo_cat {
    display: flex;
    flex-direction: row;
    gap: 25px;
    align-items: center;
}

.logo_cat a {
    text-decoration: none;
    color: rgb(152, 152, 216);
    transition: all .2s;
}

.logo_cat a:hover {
    filter: brightness(1.5);
}

.links {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 30px;
}


.links a {
    position: relative;
    width: 50px;
    height: 50px;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    border-radius: 50%;
    box-shadow: 0px 0px 10px 1px rgb(135, 135, 210);
    overflow: hidden;
    transition: .2s;
}

.links a img {
    padding: 10px;
    filter: invert(84%) sepia(48%) saturate(3491%) hue-rotate(193deg) brightness(88%) contrast(92%);
    transition: all .5s;
}

.links a:hover {
    scale: 1.1;
    filter: brightness(1.5);
}

@media (max-width: 1150px) {
    .links {
        scale: .8;
    }

    .logo_cat a {
        font-size: 2.2vw;
    }
}

@media (max-width: 950px) {

    .links {
        display: none;
    }

    .logo_cat a {
        font-size: 2.7vw;
    }
}

@media (max-width:600px) {
    .logo_cat a {
        display: none;
    }

    .burger {
        display: block;
    }

    .logo_cat a:has(img) {
        display: block !important;
    }
}
</style>