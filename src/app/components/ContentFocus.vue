<template>
    <div class="ContentFocus">
        <div class="ContentFocus-item">
            <router-link class="Filter" to="#" style="background-image:url(https://static.is26.com/uploads/2019/07/cat-video.jpg)">
                <b>苹果</b>
            </router-link>
        </div>

        <div class="ContentFocus-item">
            <router-link class="Filter" to="#" style="background-image:url(https://static.is26.com/uploads/2019/07/cat-video.jpg)">
                <b>新能源</b>
            </router-link>
        </div>

        <div class="ContentFocus-item">
            <router-link class="Filter" to="#" style="background-image:url(https://static.is26.com/uploads/2019/07/cat-video.jpg)">
                <b>智能家居</b>
            </router-link>
        </div>

        <div class="ContentFocus-item">
            <router-link class="Filter" to="#" style="background-image:url(https://static.is26.com/uploads/2019/07/cat-video.jpg)">
                <b>新制造</b>
            </router-link>
        </div>
        
        <div class="ContentFocus-item">
            <router-link class="Filter" to="#" style="background-image:url(https://static.is26.com/uploads/2019/07/cat-video.jpg)">
                <b>娱乐</b>
            </router-link>
        </div>

    </div>
</template>

<style scoped>

    .ContentFocus {
        display: flex;
        flex-direction: row;
        width: 93.82vw;
        height: 18.764vw;
        margin: 6.18vh auto;
        justify-content: space-around;
    }

    /* //不再使用 */
    @media (max-width: var(--m)){
        .ContentFocus {
            display: flex;
            flex-direction: row;
            width: var(--m);
            height: calc(--m / 3);
            margin: 6.18vh auto;
            justify-content: space-between;
            flex-wrap: nowrap;
        }
    }

    .ContentFocus-item{
        padding: 0.5rem;
        width: 100%;
    }
    .ContentFocus-item a{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-items: center;
        border-radius: 1.68%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
    .ContentFocus-item a:hover{
        animation:pulse 1s 1;
    }

    .ContentFocus-item a b{
        color: var(--back-color);
        font-weight: 400;
        margin: 0 auto;
        display: block;
        padding: 0 0.618vw;
    }



</style>