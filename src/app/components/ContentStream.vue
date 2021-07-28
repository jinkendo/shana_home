<template>
    <div  class="ContentStream">
        <nav class="ContentStream-sort">
            <router-link to="#">深度</router-link>
            <router-link to="#">时间</router-link>
            <router-link to="#">未知</router-link>
            <router-link to="#">人气</router-link>
            <router-link to="#">混乱</router-link>
        </nav>
        <div class="ContentStream-items">
        <section class="ContentStream-item " :key=item.key v-for="item in ContentStreamItems">
            <router-link class="ContentStream-item-synopsis" :to="{name: 'HomeContent', params: { id: item.key }}">
                <img src="https://hinpc.github.io/Daily/img/2018/seaandship.jpg">
                <h4>{{item.title}}</h4>
                <p>{{item.synopsisText}}</p>                
            </router-link>
            <div class="ContentStream-item-attr ">
                <router-link to="#"><span class="mdi mdi-account" />{{item.author}}</router-link>
                <label><span class="mdi mdi-camera-timer" />{{item.readingVolume}} </label>
            </div>
        </section>
        </div>

    </div>
</template>

<style scoped>
    .ContentStream{
        width: 93.82vw;
        margin: 6.18vh auto;
        /* height: 6000px; */

    }
    .ContentStream-sort {
        display: none;
    }
    .ContentStream-sort::after {
        content: "";

    }
    @media (min-width: 960px){
        .ContentStream-items{
            display: flex;  
            flex-flow: row wrap;
        }


        .ContentStream-item{
            margin: 0.618vw;
            padding: 1.236vw;
            width: 15.056vw;
            break-inside: avoid;
            border-radius: 1.68%;
            box-shadow: var(--shadow-1-down)
        }
    }

    @media (max-width: 960px){
        .ContentStream-items{
            display: flex;  
            flex-flow: column nowrap;
            justify-items: center;
            align-items: center;
        }
        .ContentStream-item{
            margin: 2.472vw 0;
            padding: 1.236vw;
            width: 93.82vw;
            break-inside: avoid;
            border-radius: 1.68%;
            box-shadow: var(--shadow-1-down)
        }
        
        .ContentStream-item:nth-child(even){
            background-color: #fff;
        }
    }

    .ContentStream-item::after {
        background-color: #0000000a !important;
    }

    .ContentStream-item-synopsis img{
        width: 100%;
        border-radius: 1.68%;
    }
    .ContentStream-item-synopsis img:hover{
        animation:pulse 1s 1;
    }

    .ContentStream-item-synopsis h4{
        padding: 1em;
        text-align: center;
    }
    .ContentStream-item-synopsis p{
        text-indent: 2em;
    }

    .ContentStream-item-attr{
        text-align: right;
        margin: 1.236vh 0;
    }
    .ContentStream-item-attr a{
        padding: 0 1em;
    }
    


</style>
<script>
export default {
    name:"ContentStream",
    components:{
    },
    setup() {
        const t1 = "未知元素测试数据";
        const t2 = "未知元素测试数据 迢迢牵牛星，皎皎河汉女。纤纤擢素手，札札弄机杼。终日不成章，泣涕零如雨。河汉清且浅，相去复几许。盈盈一水间，脉脉不得语。"     
        const ContentStreamItem = {key:Math.random()*1000, title: t1, 
        synopsisText:t2, readingVolume:100, author:"bbbbbbb" }
        const ContentStreamItems = Array( 100 ).fill( ContentStreamItem );
          
        return {ContentStreamItems}
    },
};
</script>
