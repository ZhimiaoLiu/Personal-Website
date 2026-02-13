<script setup>
</script>

<template>
  <main class="max-w-6xl mx-auto px-6 pt-20 pb-32">
    <section class="flex flex-col justify-center min-h-[60vh] animate-fade-in">
      <p class="text-blue-600 font-bold tracking-[0.2em] mb-6">CREATIVE DEVELOPER</p>

      <h1 class="text-7xl md:text-9xl font-black tracking-tighter leading-none mb-10">
        HELLO.<br>
        I AM <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">LiJem</span>.
      </h1>

      <p class="text-xl md:text-2xl text-gray-500 max-w-2xl leading-relaxed mb-12">
        Stay hungry, stay foolish.<br>  &#12288; &#12288; &#12288; &#12288; &#12288; &#12288;   &#12288; &#12288; &#12288; &#12288;    -- Steve Jobs
      </p>

      <!--<div class="flex gap-6">
       <button class="px-8 py-4 bg-black text-white font-bold text-sm tracking-widest hover:bg-blue-600 transition-colors">
          查看作品
        </button>
        <button class="px-8 py-4 border-2 border-black font-bold text-sm tracking-widest hover:bg-black hover:text-white transition-colors">
          关于我
        </button>
      </div>-->
    </section>

    <div class="w-full h-px bg-gray-200 my-20"></div>

  </main>
</template>

<style scoped>
/* 一个简单的入场动画 */
.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>