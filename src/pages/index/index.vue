<template>
  <u-collapse @change="change" @close="close" @open="open">
    <u-collapse-item title="文档指南" name="Docs guide">
      <text class="u-collapse-content"
        >涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川</text
      >
    </u-collapse-item>
    <u-collapse-item title="组件全面" name="Variety components">
      <text class="u-collapse-content"
        >众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用</text
      >
    </u-collapse-item>
    <u-collapse-item title="众多利器" name="Numerous tools">
      <text class="u-collapse-content"
        >众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨</text
      >
    </u-collapse-item>
  </u-collapse>
</template>

<script>
export default {
  methods: {
    open(e) {
      // console.log('open', e)
    },
    close(e) {
      // console.log('close', e)
    },
    change(e) {
      // console.log('change', e)
    },
  },
};
</script>
