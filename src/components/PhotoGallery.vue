<script setup>
import { ref } from 'vue'
defineProps({ photos: Array })
const active = ref(null)
</script>

<template>
  <div class="columns-2 md:columns-3 gap-3 [column-fill:_balance]">
    <figure
      v-for="(p, i) in photos" :key="i"
      class="mb-3 break-inside-avoid cursor-zoom-in"
      @click="active = p"
    >
      <img :src="p.src" loading="lazy" decoding="async"
           class="w-full rounded-lg transition hover:opacity-85" />
      <figcaption v-if="p.caption" class="mt-1.5 text-xs text-neutral-500">
        {{ p.caption }}
      </figcaption>
    </figure>
  </div>

  <!-- 极简 lightbox -->
  <Teleport to="body">
    <div v-if="active" @click="active = null"
         class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 cursor-zoom-out">
      <img :src="active.src" class="max-h-full max-w-full object-contain" />
    </div>
  </Teleport>
</template>