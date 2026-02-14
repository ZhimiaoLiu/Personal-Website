<script setup>
import { computed } from 'vue' // 1. 引入 computed
import { posts } from '../data/posts.js'

// 2. 创建一个计算属性，生成倒序列表
// [...posts] 的意思是“复制一份数据”，以免直接修改原始数据
const reversedPosts = computed(() => {
  return [...posts].reverse()
})
</script>

<template>
  <main class="max-w-6xl mx-auto px-6 py-20">
    <header class="mb-20 animate-fade-in">
      <h1 class="text-5xl md:text-7xl font-black mb-4 tracking-tighter">WRITINGS</h1>
      <p class="text-gray-400 text-lg">Technology, Design, and Life.</p>
    </header>

    <div class="grid gap-12">
      <RouterLink
          v-for="(post, index) in reversedPosts"
          :key="post.id"
          :to="`/blog/${post.id}`"
          class="group block border-t border-gray-100 pt-12 hover:border-black transition-colors duration-300"
          :style="{ animationDelay: `${index * 0.1}s` }"
      >
        <div class="flex flex-col md:flex-row gap-8 items-start">

          <div class="hidden md:block w-32 pt-2 text-xs font-bold tracking-widest text-gray-400 group-hover:text-blue-600 transition-colors">
            {{ post.date }}
            <br>
            <span class="text-black">{{ post.category }}</span>
          </div>

          <div class="flex-1 space-y-4">
            <h2 class="text-3xl font-bold group-hover:text-blue-600 transition-colors leading-tight">
              {{ post.title }}
            </h2>
            <p class="text-gray-500 leading-relaxed max-w-2xl line-clamp-3">
              {{ post.desc }}
            </p>

            <div class="md:hidden text-xs font-bold text-gray-400 mt-4">
              {{ post.date }} · {{ post.category }}
            </div>
          </div>

          <div class="w-full md:w-64 aspect-video bg-gray-100 overflow-hidden relative rounded-sm">
            <div class="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors z-10"></div>
            <img
                :src="post.image"
                class="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-700 ease-out"
            >
          </div>

        </div>
      </RouterLink>
    </div>
  </main>
</template>

<style scoped>
/* 简单的入场动画 */
.animate-fade-in {
  animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
  transform: translateY(40px);
}

@keyframes slideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 让列表项也依次入场 */
article {
  animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
  transform: translateY(40px);
}
</style>