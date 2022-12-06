import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home";
import Artists from "@/views/Artists";
import About from "@/views/About";
import Albums from "@/views/Albums";
import Contacts from "@/views/Contacts";
import Artist_info from "@/views/Artist_info"

const routes =[
    {
        path: "/Home.vue",alias:"/",
        name: "Home",
        component: Home
    },
    {
        path: "/artists",
        name: "Artists",
        component: Artists,
    },
    {
        path: "/artists/:id",
        name: "Artist_info",
        component:Artist_info,
        props: route => ({ 
            path: route.query.path,
            bg: route.query.bg,
            album: route.query.album,
            album_wrap: route.query.album_wrap,
            name: route.query.name,
            desc: route.query.desc,
         })
    },
    {
        path: "/about",
        name: "About",
        component: About
    },
    {
        path: "/albums",
        name: "Albums",
        component: Albums,
    },
    {
        path: "/contacts",
        name: "Contacts",
        component: Contacts,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;