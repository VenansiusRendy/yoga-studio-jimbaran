<template>
  <section id="instructors" class="py-20 px-4 bg-white">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <p class="text-yoga-primary text-sm font-semibold uppercase tracking-wide mb-2">Expert Guidance</p>
        <h2 class="text-4xl font-bold text-yoga-dark font-heading">Meet Your Instructors</h2>
        <p class="text-gray-600 mt-4">Our teachers lead with presence, compassion, and clarity. Each brings a unique approach to movement while sharing the same intention — to create a calm, inclusive space for everyone.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="instructor in instructors" :key="instructor.id" class="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-yoga-accent transition-colors">
          <div class="h-64 overflow-hidden">
            <img :src="instructor.image" :alt="instructor.name" class="w-full h-full object-cover"/>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-yoga-dark font-heading">{{ instructor.name }}</h3>
            <p class="text-yoga-primary text-sm font-semibold mt-1">{{ instructor.role }}</p>
            <p class="text-gray-600 text-sm mt-3 leading-relaxed">{{ instructor.bio }}</p>
            <div class="flex flex-wrap gap-2 mt-4">
              <span v-for="specialty in instructor.specialties" :key="specialty" class="inline-block px-3 py-1 bg-yoga-light text-yoga-dark text-xs rounded-full font-medium">
                {{ specialty }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const instructors = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Slow Flow & Gentle Vinyasa',
    bio: "Sarah's classes center on mindful transitions and steady breathing. Her warm, grounding guidance helps students reconnect with their natural rhythm.",
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?w=400&h=500&fit=crop',
    specialties: ['Slow Flow', 'Gentle Vinyasa', 'Restorative']
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Mobility, Alignment & Functional Movement',
    bio: 'Michael blends yoga, mobility, and modern movement principles. His teaching is calm, precise, and supportive — ideal for building strength with ease.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=400&h=500&fit=crop',
    specialties: ['Alignment', 'Mobility', 'Functional']
  },
  {
    id: 3,
    name: 'Emma Williams',
    role: 'Yin & Restorative Yoga',
    bio: "Emma's sessions offer deep rest and gentle release. Her nurturing approach helps students soften, unwind, and restore balance from within.",
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?w=400&h=500&fit=crop',
    specialties: ['Yin', 'Restorative', 'Release']
  }
]
</script>
