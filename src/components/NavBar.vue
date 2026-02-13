<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
    <div class="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
      <RouterLink to="/" class="text-2xl font-black tracking-tighter hover:opacity-70 transition-opacity">
        MY<span class="text-blue-600">.SPACE</span>
      </RouterLink>

      <div class="hidden md:flex items-center space-x-8 text-sm font-bold tracking-wide">
        <RouterLink to="/" class="hover:text-blue-600 transition-colors">HOME</RouterLink>
        <RouterLink to="/blog" class="hover:text-blue-600 transition-colors">BLOG</RouterLink>
        <RouterLink to="/about" class="px-5 py-2.5 bg-black text-white hover:bg-blue-600 transition-colors">
          ABOUT ME
        </RouterLink>
      </div>
    </div>
  </nav>
  <div class="h-20"></div>
</template>