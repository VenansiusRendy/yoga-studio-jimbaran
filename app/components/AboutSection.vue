<template>
  <section id="about" class="py-24 px-4 bg-yoga-light/20">
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
          <p class="text-yoga-primary text-sm font-semibold uppercase tracking-wide">About Us</p>
          <h2 class="text-4xl font-bold text-yoga-dark mt-2 font-heading">A Calm Space for Mindful Living</h2>
        </div>
        
        <p class="text-gray-700 leading-relaxed text-lg">
          Jimbaran Yoga Studio blends movement, mindfulness, and healthy living into one balanced experience. Created by the NUI Healthy Food ecosystem, our studio is a place to realign your body, clear your mind, and grow through gentle, consistent practice.
        </p>

        <p class="text-gray-700 leading-relaxed text-lg">
          We believe wellness is not a moment — it's a lifestyle shaped through intention, clarity, and community.
        </p>

        <!-- Features Grid -->
        <div class="grid grid-cols-2 gap-4 pt-4">
          <div v-for="feature in features" class="bg-white rounded-xl p-4 border border-gray-200">
            <div class="text-center">
              <img class="w-12 h-12 mx-auto mb-2" :src="feature.icon" :alt="feature.title">
              <p class="font-semibold text-yoga-dark text-sm">{{ feature.title }}</p>
              <p class="text-gray-600 text-xs mt-1">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Features {
  icon: string,
  title: string,
  description: string
}
const features = <Features[]>[
  {
    icon: '/beginner.png',
    title: 'Beginner-Friendly Classes',
    description: 'Accessible sessions designed for all levels, with a focus on comfort and ease.'
  },
  {
    icon: '/mindful.png',
    title: 'Mindful, Modern Environment',
    description: 'A clean, minimalist studio inspired by the gentle colors and rhythm of the ocean.'
  },
  {
    icon: '/instructor.png',
    title: 'Skilled & Caring Instructors',
    description: 'Teachers who guide with warmth, presence, and supportive attention.'
  },
  {
    icon: '/healthy.png',
    title: 'Part of Healthy Ecosystem',
    description: 'Wellness supported through movement and nourishment — because balance begins within.'
  }
]
</script>
