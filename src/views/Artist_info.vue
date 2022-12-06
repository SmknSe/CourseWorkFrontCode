<template>
    <div id="#artist_info">
        <header>
            <Navbar></Navbar>
        </header>

        <body>
            <div class="load_container">
                <img :src="require(`../assets/${bg}`)" alt="" class="load_bg">
                <div class="container">
                    <h1 class="h1">{{ name }}</h1>
                    <div class="artist_desc">{{ desc }}</div>
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
                </div>
            </div>
            <div class="albums">
                <h2 class="h2">Альбомы/Песни артиста</h2>
                <div class="songs">
                    <div class="album_name center">
                        <img :src="require(`../assets/${album_wrap}`)" alt="" class="album">
                        <div class="name">{{ album }}</div>
                    </div>
                    <div class="center">
                        <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0"
                            style="max-width:960px;overflow:hidden;background:transparent;"
                            :src="('https://embed.music.apple.com/us/album/' + path)"></iframe>
                    </div>
                </div>
            </div>
        </body>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
export default {
    name: "Artist_info",
    props: ['path', 'bg', 'album', 'name', 'desc', 'album_wrap'],
    components: { Navbar },
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.center {
    display: flex;
    justify-content: center;
    align-items: center;
}

body {
    position: relative;
    width: 100%;
    height: 100%;
}

.container {
    position: relative;
    padding: 0 10.5556vw;
    z-index: 3;
}

.h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 4.1667vw;
    line-height: 4.8611vw;
    text-transform: uppercase;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
}

.albums {
    padding: 5.5556vw 10.5556vw 2.7778vw;
    margin-bottom: 100px;
}

.album_name {
    display: flex;
    flex-direction: column;
}

iframe {
    width: 43.75vw;
    height: 28.9583vw;
}

.name {
    font-style: normal;
    font-weight: 500;
    font-size: 1.6667vw;
    line-height: 2.3611vw;
    text-transform: uppercase;
    color: white;
}

.h2 {
    color: white;
    font-style: normal;
    font-weight: 500;
    font-size: 2.3611vw;
    line-height: 3.0556vw;
    text-transform: uppercase;
}

.songs {
    margin-top: 2.7778vw;
    display: flex;
    justify-content: space-between;
}

.album {
    width: 28.9583vw;
    aspect-ratio: 1;
    margin-bottom: 0.6944vw;
}

.artist_desc {
    font-style: normal;
    font-weight: normal;
    font-size: 1.25vw;
    line-height: 1.8056vw;
    text-transform: uppercase;
    color: #FFFFFF;
    width: 55.0694vw;
    margin-top: 1.0417vw;
}

.load_bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(.8);
}

.links {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 2.7778vw 0 2.0833vw;
    gap: 1vw;
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
    box-shadow: 0px 0px 10px 1px white;
    transition: .2s;
}

.links a img {
    padding: 10px;
    filter: invert(100%);
    transition: all .5s;
}

.links a:hover {
    scale: 1.1;
    filter: brightness(1.5);
}

.load_container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100vh;
    overflow: hidden;
    padding-bottom: 4vw;
}

.albums {
    position: relative;
    width: 100%;
    height: 100%;
}

@media (max-width: 700px) {
    .songs {
        flex-direction: column;
        gap: 20px;
    }

    .album {
        width: 100%;
    }

    iframe {
        width: 100%;
        height: auto;
        aspect-ratio: 1;
    }

    .h1 {
        font-size: 8.2vw;
    }

    .h2 {
        font-size: 4.5vw;
    }

    .artist_desc {
        margin-top: 4vw;
        font-size: 2.5vw;
    }

    .links {
        gap: 2vw;
    }
}
</style>