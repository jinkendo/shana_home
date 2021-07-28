<template>
    <!-- 菜单工具 -->
    <Sometools/>
    <div class="ContentBox Markdown"  v-html="mdDom" ></div>
    <!-- 底部 -->
    <Bottom />
</template>

<script lang="ts">
import { defineComponent} from 'vue'
import axios from 'axios'
import Md from "../util/Md";
import Sometools from '../components/Sometools.vue'
import Bottom from '../components/Bottom.vue'
import '../assets/css/md.css'

export default defineComponent({
  name: 'ContentView',
  data: ()=>{
    return { md: "" }
  },
  components: {
    Sometools: Sometools,
    Bottom: Bottom
  },
  computed: {
    mdDom() :string {
      return Md.toHtml(this.md)
    }
  },
  mounted(){
      axios.get("/HOME/Content.api/key/test/type/md").then( async (res) => {
        let data = res.data
        this.md = data.data.txt
      })
  }
})
</script>

<style scoped>
    .ContentBox{
      margin: 6.18vh auto;
      padding: 6.18vw 6.18vw;
    }
</style>