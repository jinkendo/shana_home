<template>
    <!-- 核心 -->
    <section class="ContentCore" style="background-image:url(/bk.jpg)"  >
        <div class="ContentCore-title">
            <p>时间链接科学艺术</p>
        </div>
    </section>
</template>

<style scoped>
    .ContentCore{
        width: 100vw;
        height:61.8vh;
        background-size:100%;
        position: relative;
        user-select: none;
        display: flex;
        justify-items: center;
        align-items: center;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        color: var( --brand-color );
    }

    .ContentCore-title{
        padding: 1.236vw 0;
        text-shadow: 0 1px 1px rgb(0 0 0 / 60%);
        color: var( --back-color );
        text-align: center;
        -webkit-box-shadow: var(--shadow-1-right);
        box-shadow: var(--shadow-1-right);
        margin: 0 auto;   
        line-height: 2em;
    }

    @media (min-width: 960px){
        .ContentCore-title p{
            font-size: 2em;
            padding: 0.618vw 6.18vw;
        }
    }

    @media (max-width: 960px){
        .ContentCore-title p{
            font-size: 1.2em;
            padding: 0.618vw 6.18vw;
        }
    }

</style>
<script lang="ts">
import { defineComponent } from 'vue'
import logo from './logo.vue'


export default defineComponent({
    name:"ContentCore",
    components:{
        logo: logo
    },
    setup() {
        
    },
})
</script>
