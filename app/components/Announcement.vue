<template>
  <div class="bg-yoga-primary text-yoga-light py-4 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-4 md:space-y-0">
      
      <!-- Content -->
      <div class="flex-1">
        <h3 class="font-heading font-semibold text-lg md:text-xl leading-tight mb-2">
          Yoga sessions by NUI Community launching on 12 January 2025.
        </h3>
        <p class="font-body text-sm md:text-base opacity-90">
          More than movement — a space to slow down, connect, and feel at home
        </p>
      </div>

      <!-- Actions -->
      <div class="flex flex-col sm:flex-row gap-3 items-center justify-center md:justify-end shrink-0">
        <a 
          :href="whatsappEventLink" 
          target="_blank" 
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-yoga-primary bg-yoga-light hover:bg-white transition-colors duration-200 shadow-sm"
        >
          Join Event
        </a>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const message = encodeURIComponent("Hi! I'm interested in the Yoga sessions by NUI Community launching on 12 January 2025.")
const whatsappEventLink = computed(() => `https://wa.me/+6287776336882?text=${message}`)
</script>
