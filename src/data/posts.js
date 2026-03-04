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
      <p class="mb-6">很多人觉得留白非常的枯燥，认为那是浪费空间。但实际上，留白是信息的呼吸孔。它引导用户的视线，创造出高级的阅读节奏。</p>
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
    },

    {
        id: 3,
        title: '日本高市早苗旋风',
        date: '2024.02.14',
        category: 'Politics',
        desc: '高市早苗率领自民党拿下超过2/3的席位...',
        image: '/images/takashi.jpeg',
        content: `
      <p class="mb-6">&#8195;在本次的2026年度日本众议员大选中，高市早苗带领的自民党获得了316个席位，加上其执政联盟日本维新会的席次则是352个席位。
      这表明在未来的几年内，高市早苗的政策将会没有任何阻力。这场大胜甚至超过了美国总统特朗普在2025年选举的胜利。后者即将面对2026年底的中期选举的考验。
      </p>
      <p class="mb-6">&#8195;从特朗普到高市早苗的胜利揭示了一个问题，那就是人民已经不满建制派政治，希望激进的领袖来带来变革。从各个国家积极拥抱全球化的时候开始，世界其实就面临一个问题。那就是蛋糕如何坐大。
      从经济学术上来讲，全球化的分工是利于生产的。举个例子，美国可以用一小时生产100台电脑和1000件衣服。而南边的墨西哥则一小时可以生产50台电脑和800件衣服。如果美国放弃生产衣服，并且墨西哥放弃生产电脑。
      对于世界来说同样一小时可以获得100台电脑和800件衣服。虽然美国在生产两样东西拥有绝对优势但是专注于生产电脑显然是更理性的选择。而问题在于，当美国完全放弃了生产衣服，
      这意味着本土的纺织产业将会逐步消失。美国有这个问题，日本同样也有。日本通过全球化逐渐放弃了一些低端的产业，像是钥匙扣，收纳盒，汽车用品等大多进口自中国。这导致了另一个问题，当本国的制造产业链全球化之后，大量的进口需要大量的外汇。而日元的持续疲软
      导致日本不得不消耗大量外汇进行进口以及物价随着日元的贬值而上升。日本的一些100日元店也最终会变成300日元店。而这个问题似乎唯一的答案就是逆全球化，建立自己完整的的生产体系。而对于日本来说，放下容易而拿起来难。大部分日本人想的是如何找一份稳定的工作而不是创新。</p>
      <p class="mb-6">&#8195;其实如果日本放宽投资签证的话，其实有可能通过投资来重新建立这种自给自足的体系，但是日本政府通过打击外国人的方式来获得极右翼生态的选票。这无可厚非，但是却不利于国家的长期发展。
      这对于在日外国人来说意味着什么呢？这意味着日本政府并没有像特朗普一样选择大量吸引(强制)外国投资来建立本国完整产业链，而是走向一个期望于日本人自己缓慢的调整的路线。日本希望来的永远是低端劳动力而不是高端人才。
      在东亚文化中，只有上位者拥有绝对优势才会对下位者施以温柔。而日本现在失去了上位者优势。
      </p>
      <p class="mb-6">&#8195;高市早苗所代表的大部分日本人都认为，仅靠纯血日本人就可以振兴国家，而日本在历史大部分时间也是这么做的。这条路是否能像过去一样成功，可以让我们拭目以待</p>

    `
    },

    {
        id: 4,
        title: 'Vibe Coding',
        date: '2024.03.4',
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
    }
]