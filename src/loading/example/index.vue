<script setup>
import gLoading from '..'
import { AppType } from '@varlet/cli/client'
</script>

<template>
    <app-type>基本使用</app-type>
    <div class="grid">
       <g-loading size="25" color="#3a7afe" type="spinner"></g-loading>
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
