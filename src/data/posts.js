// src/data/posts.js
export const posts = [
    {
        id: 1,
        title: '为什么极简主义永不过时？',
        date: '2024.02.14',
        category: 'DESIGN',
        desc: '少即是多。在信息过载的时代，如何通过留白和排版传达更有力的信息...',
        image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2000&auto=format&fit=crop',
        // 这里是文章的正文内容
        content: `
      <p class="mb-6">极简主义不仅仅是一种视觉风格，更是一种生活哲学。在网页设计中，它意味着去除干扰，让用户专注于核心内容。</p>
      <h3 class="text-2xl font-bold mb-4">留白的力量</h3>
      <p class="mb-6">很多人害怕留白，认为那是浪费空间。但实际上，留白是信息的呼吸孔。它引导用户的视线，创造出高级的阅读节奏。</p>
      <p>当我们减少页面上的元素时，剩下的每一个元素都必须完美无缺。这就是极简设计的挑战所在。</p>
    `
    },
    {
        id: 2,
        title: 'Vue 3 + Tailwind v4 开发体验',
        date: '2024.02.10',
        category: 'CODE',
        desc: '刚刚升级了最新的技术栈，Tailwind v4 的配置简直太丝滑了...',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop',
        content: `
      <p class="mb-6">Tailwind CSS v4 是一次巨大的飞跃。它不再需要繁琐的配置文件，只有一个 CSS import 就能搞定一切。</p>
      <p>结合 Vue 3 的 Composition API，开发速度简直快得飞起。</p>
    `
    }
]