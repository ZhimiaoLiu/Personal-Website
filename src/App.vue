<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue' // 我们马上创建这个组件
</script>

<template>
  <div class="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
    <NavBar />

    <RouterView />
  </div>
</template>