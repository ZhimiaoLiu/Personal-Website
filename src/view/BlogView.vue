<script setup>
import { ref } from 'vue'

// 1. 模拟博客数据 (以后我们可以把它换成真正的后端数据或 Markdown 文件)
const posts = ref([
  {
    id: 1,
    title: '为什么极简主义永不过时？',
    date: '2024.02.14',
    category: 'DESIGN',
    desc: '少即是多。在信息过载的时代，如何通过留白和排版传达更有力的信息...',
    image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Vue 3 + Tailwind v4 开发体验',
    date: '2024.02.10',
    category: 'CODE',
    desc: '刚刚升级了最新的技术栈，Tailwind v4 的配置简直太丝滑了，不需要繁琐的 config...',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 3,
    title: '给设计师的 10 个配色建议',
    date: '2024.01.28',
    category: 'ART',
    desc: '颜色不只是装饰，它是情感的载体。如何运用对比色创造视觉冲击力？',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2000&auto=format&fit=crop'
  }
])
</script>

<template>
  <main class="max-w-6xl mx-auto px-6 py-20">
    <header class="mb-20 animate-fade-in">
      <h1 class="text-5xl md:text-7xl font-black mb-4 tracking-tighter">WRITINGS.</h1>
      <p class="text-gray-400 text-lg">关于技术、设计与生活的随笔。</p>
    </header>

    <div class="grid gap-12">
      <article
          v-for="(post, index) in posts"
          :key="post.id"
          class="group cursor-pointer border-t border-gray-100 pt-12 flex flex-col md:flex-row gap-8 items-start hover:border-black transition-colors duration-300"
          :style="{ animationDelay: `${index * 0.1}s` }"
      >
        <div class="hidden md:block w-32 pt-2 text-xs font-bold tracking-widest text-gray-400 group-hover:text-blue-600 transition-colors">
          {{ post.date }}
          <br>
          <span class="text-black">{{ post.category }}</span>
        </div>

        <div class="flex-1 space-y-4">
          <h2 class="text-3xl font-bold group-hover:text-blue-600 transition-colors leading-tight">
            {{ post.title }}
          </h2>
          <p class="text-gray-500 leading-relaxed max-w-2xl">
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
      </article>
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