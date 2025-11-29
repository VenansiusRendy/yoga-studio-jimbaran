<template>
  <section id="about" class="py-20 px-4 bg-yoga-cream/30">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <!-- Image -->
      <div class="rounded-2xl overflow-hidden shadow-lg h-96 order-2 md:order-1">
        <img
          src="https://images.pexels.com/photos/314127/pexels-photo-314127.jpeg?w=600&h=600&fit=crop"
          alt="Sunrise Serenity"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Content -->
      <div class="space-y-6 order-1 md:order-2">
        <div>
          <p class="text-yoga-primary-green text-sm font-semibold uppercase tracking-wide">About Us</p>
          <h2 class="text-4xl font-bold text-yoga-ocean-dark mt-2">Mindful Movement Awaits</h2>
        </div>
        
        <p class="text-gray-700 leading-relaxed text-lg">
          We create a sanctuary where your body and mind find harmony. Our studio combines traditional yoga wisdom with modern wellness practices, tailored for everyone from beginners to dedicated practitioners.
        </p>

        <!-- Features Grid -->
        <div class="grid grid-cols-2 gap-4 pt-4">
          <div class="bg-white rounded-xl p-4 border border-gray-200">
            <svg class="w-6 h-6 text-yoga-primary-green mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2 1m2-1l-2-1m2 1v2.5"/>
            </svg>
            <p class="font-semibold text-yoga-ocean-dark text-sm">Expert Teachers</p>
          </div>
          <div class="bg-white rounded-xl p-4 border border-gray-200">
            <svg class="w-6 h-6 text-yoga-primary-green mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
            <p class="font-semibold text-yoga-ocean-dark text-sm">All Levels</p>
          </div>
          <div class="bg-white rounded-xl p-4 border border-gray-200">
            <svg class="w-6 h-6 text-yoga-primary-green mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <p class="font-semibold text-yoga-ocean-dark text-sm">Flexible Hours</p>
          </div>
          <div class="bg-white rounded-xl p-4 border border-gray-200">
            <svg class="w-6 h-6 text-yoga-primary-green mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
            </svg>
            <p class="font-semibold text-yoga-ocean-dark text-sm">Personal Growth</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No state needed
</script>
