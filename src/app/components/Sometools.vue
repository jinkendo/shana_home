<template>
    <header class="Somettools">
        <nav class="Sometool-System">
            <router-link to="/HOME/index">
                <h1 class="title" >UBN-ELE</h1>
            </router-link>
            <router-link to="#" class="Sometool-System-class">過去</router-link>
            <router-link to="#" class="Sometool-System-class" >現在</router-link>
            <router-link to="#" class="Sometool-System-class" >未來</router-link>
        </nav>
        <logo class="Sometool-logo"/>
        <nav class="Sometool-Menu">
            <router-link class="Sometool-Menu-loginbut" to="#">登录/注册</router-link>
            <router-link class="Sometool-Menu-meus" to="#"> <span class="mdi mdi-menu" /><i>菜单</i></router-link>
        </nav>
    </header>
</template>

<style scoped>
    .Somettools{
        font-weight: 900;
        width: 100vw;
        height: 6.18vh;
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        mix-blend-mode: difference;
        transition: all .5s;
        background-color: transparent;
        justify-content: space-around;
        user-select: none;
        align-items: center;
        z-index: 95;
        box-shadow: var(--shadow-1-down);
        /* background: var(--back-color); */
        /* background: var(--main-color, #1f2040); */
    }
    .Sometool-logo {
        height: 13px;
    }
    .Sometool-System a, .Sometool-Menu a{
        margin: 0 10px;
        color: var( --brand-color );
    }
    .Sometool-System a h1{ display: inline; }

    /* //菜单和logo */
    @media (max-width: 640px){
        .Sometool-System { display: none;}
        .Sometool-Menu-loginbut { display: none;}
    }

    @media (min-width: 640px){
        .Sometool-Menu-meus { display: none;}
    }




</style>
<script>
import logo from './logo.vue'

export default {
    name:"Sometools",

    components:{
        logo: logo
    },
    setup() {
    return {};
    },
};
</script>
