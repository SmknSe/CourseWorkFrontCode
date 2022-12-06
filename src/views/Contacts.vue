<template>
    <div id="contacts">
        <header>
            <Navbar></Navbar>
        </header>
        <main>
            <div class="container">
                <img src="@/assets/img_bg.jpg" alt="" class="img_bg">
                <div class="block center">
                    <h1>Помогите нам стать лучше.</h1>
                    <h2>Используйте форму ниже для отправки письма с вашим предложением.</h2>
                </div>
            </div>
            <form action="#">
                <input type="text" placeholder="Имя*" required="true" class="name">
                <input type="text" placeholder="Фамилия*" required="true" class="surname">
                <input type="email" placeholder="Почта*" required="true" class="email">
                <input type="tel" placeholder="Телефон" class="phone">
                <textarea placeholder="Что сделало бы наш сайт лучше?" name="" id="" cols="50" rows="10"
                    class="textarea"></textarea>
                <div class="btn center">
                    <button>Отправить</button>
                </div>
            </form>
            <div class="contacts">
                <div id="map">
                    <l-map style="height: 100px" :zoom="zoom" :center="center">
                        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                        <l-marker :lat-lng="markerLatLng"></l-marker>
                    </l-map>
                </div>
                <div class="right_footer">
                    <img src="@/assets/mic.png" alt="" class="footer_img">
                    <p>Проспект Вернадского 78A</p>
                    <p>+7-999-999-99-99 / intune@mail.ru</p>
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
                    <span>© 2022 IN TUNE</span>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import L from 'leaflet';
import { LMap, LTileLayer, LMarker } from 'vue3-leaflet';
export default {
    name: "About",
    components: {
        Navbar, LMap,
        LTileLayer,
        LMarker,
    },
    data() {
        return {
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution:
                '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            zoom: 15,
            center: [55.669885199999996, 37.480599853484755],
            markerLatLng: [55.669885199999996, 37.480599853484755]
        };
    }
}
</script>
    
<style scoped>
main {
    display: flex;
    flex-direction: column;
}

.block {
    color: white;
    top: 0;
    left: 0;
    position: absolute;
    gap: 3em;
}

.block h1 {
    position: relative;
    font-size: 2.2em;
    font-weight: 500;
    text-align: center;
}

.block h1::after {
    content: '';
    position: absolute;
    left: 35%;
    bottom: -20%;
    width: 30%;
    height: 5px;
    background-color: white;
    z-index: 3;
}

.block h2 {
    font-size: 1.25em;
    max-width: 900px;
    text-align: justify;
    color: lightgray;
    padding: 5px;
}

.container {
    position: relative;
    width: inherit;
    height: 800px;
    overflow: hidden;
    font-size: 120%;
}

.img_bg {
    filter: brightness(.6);
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.container::before {
    content: '';
    background-color: #232323;
    position: absolute;
    rotate: 10deg;
    left: -15%;
    top: 70%;
    width: 70%;
    aspect-ratio: .5;
    z-index: 3;
}

.container::after {
    content: '';
    background-color: #232323;
    position: absolute;
    rotate: -10deg;
    right: -15%;
    top: 70%;
    width: 70%;
    aspect-ratio: .5;
    z-index: 3;
}

form {
    width: 80%;
    display: grid;
    grid-template-areas:
        "name surname"
        "email phone"
        "area area"
        "button button";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, 80px);
    gap: 20px;
    margin-bottom: 100px;
    margin-left: auto;
    margin-right: auto;
}

form *:not(.btn) {
    width: 100%;
    background-color: inherit;
    border: none;
    outline: none;
    border: solid rgb(152, 152, 216) 1px;
    padding: 1.2em 0.25em 1.2em 1em !important;
    color: white;
    transition: .2s;
    z-index: 4;
}

form input::placeholder,
textarea::placeholder {
    color: rgb(197, 197, 197);
    font-size: 120%;
}

.name {
    grid-area: name;
}

.surname {
    grid-area: surname;
}

.email {
    grid-area: email;
}

.phone {
    grid-area: phone;
}

.textarea {
    grid-area: area;
    resize: none;
}

.btn {
    grid-area: button;
}

.btn button {
    width: fit-content;
    padding: 20px !important;
    background-color: inherit;
    border: solid rgb(152, 152, 216) 1px;
    color: white;
    font-size: 120%;
    transition: .2s;
}

.btn button:hover {
    cursor: pointer;
    color: black;
    font-weight: bold;
    background: rgb(152, 152, 216);
    box-shadow: 0px 0px 10px 1px rgb(135, 135, 210);
}

form *:focus {
    box-shadow: 0px 0px 10px 1px rgb(135, 135, 210);
}

.contacts {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.contacts>* {
    height: 500px;
    background-color: black;
}

.footer_img {
    width: 10rem;
    height: auto;
}

.right_footer {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: white;
    padding-top: 30px;
}

.right_footer p {
    font-size: 120%;
}

.right_footer span {
    justify-self: flex-end;
    filter: brightness(.6);
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
    border-radius: 50%;
    overflow: hidden;
    border: solid white 1px;
    transition: .2s;
}

.links a img {
    padding: 10px;
    filter: invert(100);
    transition: all .5s;
}

.links a:hover {
    scale: 1.1;
    filter: brightness(1.5);
}

#map {
    z-index: 3;
}

@media (max-width: 950px) {

    .container {
        font-size: 110%;
    }

    form {
        margin-top: -100px;
        grid-template-areas:
            "name"
            "surname"
            "email"
            "phone"
            "area"
            "button";
        grid-template-columns: 1fr;
        grid-template-rows: repeat(4, 80px);
    }

    .contacts {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
    }
}

@media (max-width: 400px) {

    form {
        margin-top: -200px;
    }

    .container {
        font-size: 100%;
    }

    .contacts {
        font-size: 80%;
    }

    .links {
        scale: .9;
        gap: 5px;
    }

    .footer_img {
        width: 7rem;
    }

}
</style>