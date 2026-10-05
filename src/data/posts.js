// src/data/posts.js

import { aug2026 } from './galleries'

export const posts = [
  {
    id: 1,
    title: '为什么极简主义永不过时？',
    date: '2026.02.14',
    category: 'DESIGN',
    desc: '少即是多。在信息过载的时代，如何通过留白和排版传达更有力的信息...',
    image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2000&auto=format&fit=crop',
    // 这里是文章的正文内容
    content: `
      <p class="mb-6">极简主义不仅仅是一种视觉风格，更是一种生活哲学。在网页设计中，它意味着去除干扰，让用户专注于核心内容。</p>
      <h3 class="text-2xl font-bold mb-4">留白的力量</h3>
      <p class="mb-6">很多人觉得留白非常的枯燥，认为那是浪费空间。但实际上，留白是信息的呼吸孔。它引导用户的视线，创造出高级的阅读节奏。</p>
      <p>当我们减少页面上的元素时，剩下的每一个元素都必须完美无缺。这就是极简设计的挑战所在。</p>
    `
  },
  {
    id: 2,
    title: 'Vue 3 + Tailwind v4 开发体验',
    date: '2026.02.10',
    category: 'CODE',
    desc: '刚刚升级了最新的技术栈，Tailwind v4 的配置简直太丝滑了...',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop',
    content: `
      <p class="mb-6">Tailwind CSS v4 是一次巨大的飞跃。它不再需要繁琐的配置文件，只有一个 CSS import 就能搞定一切。</p>
      <p>结合 Vue 3 的 Composition API，开发速度简直快得飞起。</p>
    `
  },

  {
    id: 3,
    title: 'Vibe Coding',
    date: '2026.03.4',
    category: 'CODE',
    desc: 'What Is Vibe Coding?',
    image: '/images/vibe_coding.jpeg',
    content: `
      <p class="mb-6">&#8195;If you search the term Vibe Coding on Google, you’ll find a common definition: by describing requirements through natural language conversations with AI (such as Claude or GPT), the AI takes care of code generation, debugging, and optimization. Developers shift from “line-by-line coding” to a more product-manager–like role focused on guidance and review.</p>
      <p class="mb-6">&#8195;But is Vibe Coding really that simple?</p>
      <p class="mb-6">&#8195;“Anyone can cook.” — Ratatouille </p>
      <p class="mb-6">&#8195;The year 2026 marks an era in which programming is accessible to everyone. This realization echoes a vision my classmates and I once shared in college. We recognized that programming is difficult—not only to learn, but to master. Our ultimate goal was to create a programming tool or language that anyone could use, regardless of background.
      </p>
      <p class="mb-6">&#8195;Today, with the rapid proliferation of large language models, that vision has become reality.</p>
      <p class="mb-6">&#8195;
When OpenAI released its first major model in 2023, programming was still demanding. While tools like ChatGPT could help optimize code, setting up environments, configuring dependencies, and deploying large-scale projects remained challenging—even for AI. But in 2026, AI systems can autonomously deploy environments, configure projects, perform optimizations, and execute workflows with remarkable reliability. Vibe Coding is no longer an experiment; it is a seamless experience.</p>
      <p class="mb-6">&#8195;It feels almost surreal.</p>
      <p class="mb-6">&#8195;Programming, once considered a high-skill, high-barrier profession, seems to have dismantled its own formidable walls. I recently spent an hour experimenting with Vibe Coding on a Unity 3D project. The experience was astonishingly smooth. The AI-generated syntax was precise, with virtually no bugs. By simply describing my requirements, I received a fully functional project. Had I written the same project myself, it likely would have taken several times longer.</p>

      <p class="mb-6">&#8195;Vibe Coding does not merely improve efficiency—it redefines it.</p>

      <p class="mb-6">&#8195;Some critics argue that although Vibe Coding works smoothly, users may not understand the underlying algorithms or syntax, which could pose long-term risks. I believe this concern is overstated.</p>

      <p class="mb-6">&#8195;After all, assembly-line workers at Foxconn do not need to understand semiconductor physics to build an iPhone. Vibe Coding empowers anyone to assemble their own “iPhone”—to transform ideas into products at unprecedented speed. It dramatically shortens the distance between imagination and execution.</p>

      <p class="mb-6">&#8195;Steve Jobs was not primarily an engineer, yet he designed extraordinary products by focusing on vision, direction, and refinement.</p>

      <p class="mb-6">&#8195;Perhaps that is the true essence of Vibe Coding: not replacing programmers, but elevating human creativity above mechanical implementation.</p>
    `
  },

  {
    id: 4,
    title: 'Pressure',
    date: '2026.07.12',
    category: 'Reflection',
    desc: 'I Maintain Mine',
    image: '/images/pressure.jpeg',
    content: `
      <p class="mb-6">&#8195;A great war movie is never about how bloody the fighting can be — it's about the struggle within the human heart. In this film, ninety-five percent of the runtime has no blood and no explosions; it's all about people making the right choices. And here is what matters most: as the one in command, can you make the right decision when you don't have the information you need, while the clock keeps ticking? Can you hold your position when everyone around you is questioning it? </p>
      <p class="mb-6">&#8195;Even if you never stand somewhere as critical as a commander, it still matters to keep a clear head and hold your own ground. Once you reach a conclusion you believe is right, you should stand by it to the very end. This is the best quality anyone can have.</p>
      <p class="mb-6">&#8195;Pressure is not a bad thing. It was exactly that pressure that made D-Day a success. When you feel pressure, it means only one thing: you are about to succeed, or about to become a better version of yourself.</p>
    `
  },

    {
    id: 5,
    type: 'gallery',              // 关键字段
    title: '八月生活集锦',
    date: '2026.08.12',
    category: 'LIFE',
    desc: '终于遇到了属于自己的星星...',
    image: aug2026[0].src,        // 封面直接复用第一张
    intro: `<p class="mb-6">美好时光～</p>`,
    photos: aug2026,
  },

    {
    id: 6,         // 关键字段
    title: 'Is Odysseus a Hero? Thoughts on Nolan’s The Odyssey',
    date: '2026.10.05',
    category: 'Reflection',
    desc: 'Is Odysseus a Hero...',
    image: '/images/odyssey.jpeg',
    content: `
      <p class="mb-6">&#8195;As it happens, The Odyssey is the tenth Christopher Nolan film I've seen. Overall, it's a first-rate blockbuster. It trims away much of the detail in Homer's epic, yet the story stays coherent and flows effortlessly from beginning to end. The costumes are larger than life and show how warriors dressed at the height of the Bronze Age. If you can catch it in IMAX, it's a true feast for the eyes. </p>
      <p class="mb-6">&#8195;Visuals and music aside, the film's theme is homecoming. Its subtext, though, is strikingly close to that of Nolan's previous film, Oppenheimer. What stands out most is its reflection on human nature, and above all its depiction of the cruelty of war. The film opens with a bard hailing Odysseus as a war hero. But is he really a hero? I don't think so. He is simply a commander, a brave and clever one. His Trojan Horse merely wrote the ending of a ten-year war, an ending in which the invaders emerged victorious. As with the bomb in Oppenheimer, ending a war does not by itself make the man behind it a hero. The film may look like a story about going home, but at its heart it is Odysseus's journey to find himself.</p>
      <p class="mb-6">&#8195;In the film, every decision is Odysseus's alone. More than once his men disagree with him, and each time he stands by his own decision. After the fall of Troy, he is convinced he is the hero who saved the allied Greek forces. Proud and arrogant, he even believes he can defy the gods and change the fate laid out for him. Yet the harder he tries, the farther he drifts from home, and the more of his men die needless deaths. In the end, he is the only one who makes it home, and the price is an entire generation of Ithaca's young men.</p>
      <p class="mb-6">&#8195;"With great power comes great responsibility." But most of us are not heroes, and we have no right to decide the fates of others. We tend to want to be the savior, or else to wait for one to come and save us. The truth is that even a man as mighty as Odysseus can master only his own fate, and he comes home alone.</p>
    `
  },
]