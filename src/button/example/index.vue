<script setup>
import gButton from '..'
import { AppType } from '@varlet/cli/client'
</script>

<template>
    <app-type>基本使用</app-type>
    <div class="grid">
        <g-button>默认按钮</g-button>
        <g-button type="primary">primary按钮</g-button>
        <g-button type="danger">danger按钮</g-button>
        <g-button type="info">info按钮</g-button>
        <g-button type="success">success按钮</g-button>
        <g-button type="warning">warning按钮</g-button>
    </div>
    <app-type>朴素的线框</app-type> 
    <div class="grid">
      <g-button plain>2224444</g-button>
      <g-button type="primary" plain>111</g-button>
      <g-button type="success" plain>222</g-button>
      <g-button type="info" hairline>0.5px边框</g-button>
      <g-button type="warning" hairline>0.5px边框</g-button>
    </div>
    <app-type>禁用</app-type> 
    <div class="grid">
      <g-button disabled>禁用</g-button>
      <g-button type="primary" disabled>一个</g-button>
      <g-button type="success" plain disabled>还</g-button>
      <g-button type="info" hairline disabled>不够</g-button>
      <g-button type="warning" hairline disabled>啊？</g-button>
    </div>
    <app-type>加载点什么</app-type> 
    <div class="grid">
      <g-button loading>loading</g-button>
    </div>
</template>
<style scoped>
.grid {
    padding: 5px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
}
</style>
