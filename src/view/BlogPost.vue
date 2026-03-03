<script setup>
import { useRoute, RouterLink } from 'vue-router'
import { computed, ref, onMounted } from 'vue' // 引入所需的 vue 功能
import { posts } from '../data/posts.js'
import { supabase } from '../lib/supabaseClient.js' // 引入你的云端数据库

const route = useRoute()

// 1. 根据 URL 查找对应的文章
const post = computed(() => {
  return posts.find(p => p.id == Number(route.params.id))
})

// --- 点赞功能核心逻辑 ---
const currentLikes = ref(0)
const isSyncing = ref(false)

// 2. 从 Supabase 获取真实点赞数
const fetchLikes = async () => {
  if (!post.value) return
  const { data, error } = await supabase
      .from('posts_likes')
      .select('count')
      .eq('post_id', post.value.id)
      .single()

  if (data) {
    currentLikes.value = data.count
  }
}

// 3. 点击按钮，更新云端数据
const handleLike = async () => {
  if (isSyncing.value || !post.value) return
  isSyncing.value = true

  // 乐观更新：先在页面上 +1，让用户感觉瞬间响应
  currentLikes.value++

  const { error } = await supabase
      .from('posts_likes')
      .update({ count: currentLikes.value })
      .eq('post_id', post.value.id)

  if (error) {
    // 如果网络出问题，悄悄减回去
    currentLikes.value--
    console.error('点赞同步失败:', error)
  }

  isSyncing.value = false
}

// 4. 页面一加载就去取点赞数
onMounted(() => {
  fetchLikes()
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

      <div class="max-w-prose mx-auto mt-12 flex justify-end">
        <button
            @click="handleLike"
            :disabled="isSyncing"
            class="group flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-gray-200 hover:border-black hover:bg-black hover:text-white transition-all duration-300"
        >
          <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 transition-transform duration-300 group-active:scale-125 group-hover:fill-current"
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <span class="font-bold text-sm tracking-widest">{{ currentLikes }}</span>
        </button>
      </div>
      <div class="mt-20 pt-10 border-t border-gray-200 text-center">
        <RouterLink to="/blog" class="inline-block px-8 py-3 border border-black hover:bg-black hover:text-white transition-colors font-bold text-sm tracking-widest">
          BACK TO LIST
        </RouterLink>
      </div>
    </article>
  </main>
</template>

<style>
/* 微调正文的样式 */
.prose p {
  line-height: 1.8;
  color: #4b5563;
}
/* 为了让按钮和排版对齐，我们限制了最大宽度 */
.max-w-prose {
  max-width: 65ch;
}
.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>