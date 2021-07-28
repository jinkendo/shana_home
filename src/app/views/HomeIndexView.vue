<template>
    <!-- 菜单工具 -->
    <Sometools></Sometools>
    <!-- 内容三级 核心 -->
    <ContentCore></ContentCore>
    <!-- 内容三级 8个方面焦点 -->
    <ContentFocus></ContentFocus>
    <!-- 内容三级 基础流量 -->
    <ContentStream></ContentStream>
    <!-- 底部 -->
    <Bottom />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Sometools from '../components/Sometools.vue'
import ContentCore from '../components/ContentCore.vue'
import ContentFocus from '../components/ContentFocus.vue'
import ContentStream from '../components/ContentStream.vue'
import Bottom from '../components/Bottom.vue'

export default defineComponent({
  name: 'HomeIndexView',
  components: {
    Sometools,
    ContentCore,
    ContentFocus,
    ContentStream,
    Bottom
  },

  setup: () => {
    return {  }
  },
  mounted(){


  }
})

</script>
