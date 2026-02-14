<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

// 控制手机菜单是否打开的状态
const isMenuOpen = ref(false)

// 点击链接后自动关闭菜单
const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
    <div class="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">

      <RouterLink to="/" class="text-2xl font-black tracking-tighter hover:opacity-70 transition-opacity z-50 relative" @click="closeMenu">
        MY<span class="text-blue-600">.SPACE</span>
      </RouterLink>

      <div class="hidden md:flex items-center space-x-8 text-sm font-bold tracking-wide">
        <RouterLink to="/" class="hover:text-blue-600 transition-colors">HOME</RouterLink>
        <RouterLink to="/blog" class="hover:text-blue-600 transition-colors">BLOG</RouterLink>
        <RouterLink to="/about" class="px-5 py-2.5 bg-black text-white hover:bg-blue-600 transition-colors">
          ABOUT ME
        </RouterLink>
      </div>

      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden z-50 relative w-10 h-10 flex flex-col justify-center items-end group">
        <span class="block h-0.5 bg-black transition-all duration-300 ease-out"
              :class="isMenuOpen ? 'w-8 rotate-45 translate-y-2.5' : 'w-8 mb-1.5'"></span>
        <span class="block h-0.5 bg-black transition-all duration-300 ease-out"
              :class="isMenuOpen ? 'w-0 opacity-0' : 'w-6 mb-1.5 group-hover:w-8'"></span>
        <span class="block h-0.5 bg-black transition-all duration-300 ease-out"
              :class="isMenuOpen ? 'w-8 -rotate-45 -translate-y-2.5' : 'w-4 group-hover:w-8'"></span>
      </button>

    </div>
  </nav>

  <div
      class="fixed inset-0 bg-white z-40 flex flex-col justify-center items-center gap-8 md:hidden transition-all duration-500 ease-in-out"
      :class="isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'"
  >
    <RouterLink to="/" @click="closeMenu" class="text-4xl font-black tracking-tighter hover:text-blue-600 transition-colors">
      HOME.
    </RouterLink>
    <RouterLink to="/blog" @click="closeMenu" class="text-4xl font-black tracking-tighter hover:text-blue-600 transition-colors">
      BLOG.
    </RouterLink>
    <RouterLink to="/about" @click="closeMenu" class="text-4xl font-black tracking-tighter hover:text-blue-600 transition-colors">
      ABOUT.
    </RouterLink>

    <div class="absolute bottom-10 text-xs text-gray-400 tracking-[0.2em]">
      DESIGNED BY ZHIMIAO
    </div>
  </div>

  <div class="h-20"></div>
</template>