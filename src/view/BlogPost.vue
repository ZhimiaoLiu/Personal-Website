<script setup>
import { useRoute, RouterLink } from 'vue-router'
import { computed } from 'vue'
import { posts } from '../data/posts.js' // 引入刚才的数据库

const route = useRoute()
// 根据 URL 中的 id (比如 /blog/1) 找到对应的文章
const post = computed(() => {
  return posts.find(p => p.id == Number(route.params.id))
})
</script>

<template>
  <main class="max-w-4xl mx-auto px-6 pt-24 pb-32">
    <div v-if="!post" class="text-center py-20">
      <h1 class="text-4xl font-bold mb-4">404</h1>
      <p>文章未找到</p>
      <RouterLink to="/blog" class="text-blue-600 underline">返回列表</RouterLink>
    </div>

    <article v-else class="animate-fade-in">
      <header class="mb-12 text-center max-w-2xl mx-auto">
        <div class="text-xs font-bold tracking-widest text-blue-600 mb-4 uppercase">
          {{ post.category }} · {{ post.date }}
        </div>
        <h1 class="text-4xl md:text-6xl font-black leading-tight mb-8">{{ post.title }}</h1>
      </header>

      <img :src="post.image" class="w-full aspect-video object-cover mb-16 grayscale hover:grayscale-0 transition-all duration-700">

      <div class="prose prose-lg prose-slate mx-auto" v-html="post.content"></div>

      <div class="mt-20 pt-10 border-t border-gray-200 text-center">
        <RouterLink to="/blog" class="inline-block px-8 py-3 border border-black hover:bg-black hover:text-white transition-colors font-bold text-sm tracking-widest">
          BACK TO LIST
        </RouterLink>
      </div>
    </article>
  </main>
</template>

<style>
/* 这里可以微调正文的样式 */
.prose p {
  line-height: 1.8;
  color: #4b5563;
}
.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>