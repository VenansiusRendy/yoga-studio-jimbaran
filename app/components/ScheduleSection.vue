<template>
  <section id="schedule" class="py-20 px-4 bg-white">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <p class="text-yoga-primary-green text-sm font-semibold uppercase tracking-wide mb-2">Schedule</p>
        <h2 class="text-4xl font-bold text-yoga-ocean-dark">This Week's Classes</h2>
        <p class="text-gray-600 mt-4">Find a class that fits your schedule</p>
      </div>

      <div class="space-y-4">
        <div v-for="yogaClass in classes" :key="yogaClass.id" class="bg-gradient-to-r from-white to-gray-50 rounded-xl p-6 border border-gray-100 hover:border-yoga-primary-green hover:shadow-md transition-all">
          <div class="flex items-start justify-between gap-4">
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-2">
                <p class="text-lg font-bold text-yoga-ocean-dark">{{ yogaClass.time }}</p>
                <span :class="`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white ${yogaClass.typeColor}`">
                  {{ yogaClass.type }}
                </span>
                <span v-if="yogaClass.level" class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-yoga-cream text-yoga-ocean-dark">
                  {{ yogaClass.level }}
                </span>
              </div>
              <p class="text-gray-600 text-sm">with <span class="font-semibold">{{ yogaClass.instructor }}</span> • {{ yogaClass.duration }} min</p>
              <div class="flex items-center gap-4 mt-3 text-xs text-gray-500">
                <span v-if="yogaClass.spots > 0" class="flex items-center gap-1">
                  <svg class="w-4 h-4 text-yoga-primary-green" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/></svg>
                  {{ yogaClass.spots }} spots available
                </span>
                <span v-else class="text-orange-600 font-semibold">Nearly Full</span>
              </div>
            </div>
            <a 
              v-if="yogaClass.spots > 0"
              :href="whatsappLink"
              target="_blank"
              class="px-4 py-2 bg-yoga-primary-green text-white rounded-lg hover:bg-yoga-earth transition-colors font-medium text-sm whitespace-nowrap"
            >
              Book
            </a>
            <button v-else disabled class="px-4 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed font-medium text-sm">
              Full
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const classes = [
  {
    id: 1,
    time: '6:00 AM',
    type: 'Morning Flow',
    level: 'All Levels',
    instructor: 'Sarah Johnson',
    duration: 60,
    spots: 8,
    typeColor: 'bg-yoga-sand'
  },
  {
    id: 2,
    time: '9:30 AM',
    type: 'Hatha Yoga',
    level: 'Beginner',
    instructor: 'Michael Chen',
    duration: 75,
    spots: 5,
    typeColor: 'bg-yoga-earth'
  },
  {
    id: 3,
    time: '12:00 PM',
    type: 'Lunch & Yoga',
    level: 'Intermediate',
    instructor: 'Emma Williams',
    duration: 45,
    spots: 0,
    typeColor: 'bg-gray-400'
  },
  {
    id: 4,
    time: '5:00 PM',
    type: 'Power Yoga',
    level: 'Advanced',
    instructor: 'Sarah Johnson',
    duration: 60,
    spots: 3,
    typeColor: 'bg-yoga-primary-green'
  },
  {
    id: 5,
    time: '6:30 PM',
    type: 'Restorative',
    level: 'All Levels',
    instructor: 'Michael Chen',
    duration: 60,
    spots: 12,
    typeColor: 'bg-yoga-ocean-dark'
  }
]

const whatsappLink = computed(() => {
  const phoneNumber = '62812345678'
  const message = encodeURIComponent('Hi, I would like to book a yoga session at Jimbaran Yoga Studio.')
  return `https://wa.me/${phoneNumber}?text=${message}`
})
</script>
