<script setup>
// 这里的技能列表会自动在跑马灯里循环
const skills = ['Java', 'JavaScript', 'UI/UX DESIGN', 'C++', 'C', 'Python', 'Unity 3D'];
</script>

<template>
  <main class="min-h-screen bg-white">

    <section class="max-w-6xl mx-auto px-6 pt-24 pb-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div class="animate-slide-right">
        <p class="text-sm font-bold tracking-[0.3em] text-blue-600 mb-6">WHO AM I?</p>
        <h1 class="text-6xl md:text-8xl font-black leading-none mb-8">
          BEYOND<br>THE<br><span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">CODE.</span>
        </h1>
        <div class="w-24 h-2 bg-black"></div>
      </div>

      <div class="text-lg md:text-xl text-gray-600 leading-relaxed space-y-6 animate-slide-left" style="animation-delay: 0.2s">
        <p>
          <strong class="text-black">I am LiJem. </strong> A normal developer who is constantly learning new knowledge.
        </p>
        <p>
          I don't just write code—I build experiences. To me, web pages are more than mere carriers of information; they are extensions of art. I love achieving the most complex animations with the most minimal code, pursuing pixel-perfect perfection.        </p>
        <p>
          When I'm not writing code, I enjoy traveling, reading, or seeking inspiration for my next self-development project.
        </p>
      </div>
    </section>

    <section class="border-y border-black py-6 overflow-hidden bg-black text-white mb-24">
      <div class="flex whitespace-nowrap animate-marquee">
        <span v-for="i in 2" :key="i" class="flex">
          <span v-for="skill in skills" :key="skill" class="mx-8 text-4xl font-black tracking-tighter opacity-50 hover:opacity-100 transition-opacity cursor-default">
            {{ skill }} <span class="text-blue-600 text-2xl align-middle">●</span>
          </span>
        </span>
      </div>
    </section>

    <section class="max-w-4xl mx-auto px-6 pb-32">
      <h2 class="text-4xl font-black mb-16 text-center">EXPERIENCE</h2>

      <div class="space-y-12 relative border-l-2 border-gray-100 ml-4 md:ml-0 md:pl-0">
        <div class="relative md:grid md:grid-cols-5 md:gap-8 group">
          <div class="md:col-span-1 text-sm font-bold text-gray-400 md:text-right pt-1 group-hover:text-blue-600 transition-colors">
            2026 - Present
          </div>
          <div class="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white border-4 border-black group-hover:border-blue-600 transition-colors md:hidden"></div>

          <div class="md:col-span-4 pl-8 md:pl-0">
            <h3 class="text-2xl font-bold mb-2">IT Engineer at Shima Seiki </h3>
            <div class="text-sm font-bold tracking-widest text-blue-600 mb-4">Shima Seki Co.</div>
            <p class="text-gray-500">New 社員</p>
          </div>
        </div>

        <div class="relative md:grid md:grid-cols-5 md:gap-8 group">
          <div class="md:col-span-1 text-sm font-bold text-gray-400 md:text-right pt-1 group-hover:text-blue-600 transition-colors">
            2023 - 2025
          </div>
          <div class="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white border-4 border-black group-hover:border-blue-600 transition-colors md:hidden"></div>

          <div class="md:col-span-4 pl-8 md:pl-0">
            <h3 class="text-2xl font-bold mb-2">Graduate School of International Relations</h3>
            <div class="text-sm font-bold tracking-widest text-blue-600 mb-4">Ritsumeikan University</div>
            <p class="text-gray-500">Studied economic and statistics at GSIR department and finished thesis "An Analysis of the Impacts
              of EU Sanctions on Domestic Gasoline Price"</p>
          </div>




        </div>
        <div class="relative md:grid md:grid-cols-5 md:gap-8 group">
          <div class="md:col-span-1 text-sm font-bold text-gray-400 md:text-right pt-1 group-hover:text-blue-600 transition-colors">
            2018 - 2022
          </div>
          <div class="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white border-4 border-black group-hover:border-blue-600 transition-colors md:hidden"></div>

          <div class="md:col-span-4 pl-8 md:pl-0">
            <h3 class="text-2xl font-bold mb-2">Undergraduate School of Computer Science </h3>
            <div class="text-sm font-bold tracking-widest text-blue-600 mb-4">Virginia Tech + Coventry University</div>
            <p class="text-gray-500">Studied in computer science, tough days but learned a lot.</p>
          </div>




        </div>
      </div>
    </section>

  </main>
</template>

<style scoped>
/* 跑马灯动画 */
.animate-marquee {
  animation: marquee 20s linear infinite;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* 简单的滑入动画 */
.animate-slide-right {
  animation: slideRight 1s ease-out forwards;
  opacity: 0;
  transform: translateX(-50px);
}

.animate-slide-left {
  animation: slideLeft 1s ease-out forwards;
  opacity: 0;
  transform: translateX(50px);
}

@keyframes slideRight { to { opacity: 1; transform: translateX(0); } }
@keyframes slideLeft { to { opacity: 1; transform: translateX(0); } }
</style>