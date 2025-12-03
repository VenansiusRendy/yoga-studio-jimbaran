<template>
  <section id="pricing" class="py-24 px-4 bg-yoga-light/20">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <p class="text-yoga-primary text-sm font-semibold uppercase tracking-wide mb-2">Pricing</p>
        <h2 class="text-4xl font-bold text-yoga-dark font-heading">Practice at Your Own Pace</h2>
        <p class="text-gray-600 mt-4">Choose the option that supports your journey — whether you're just beginning or deepening your practice.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Drop-in Class -->
        <div class="bg-white rounded-2xl p-8 border border-gray-100 hover:border-yoga-accent transition-colors">
          <h3 class="text-xl font-bold text-yoga-dark font-heading mb-2">Drop-In Class</h3>
          <p class="text-gray-600 text-sm mb-6">A complete session whenever you need a moment of calm and clarity.</p>
          <p class="text-3xl font-bold text-yoga-accent mb-6">$20</p>
          <ul class="space-y-3 mb-8 text-sm text-gray-700">
            <li class="flex items-center gap-2">
              <svg class="w-5 h-5 text-yoga-primary" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              One 60-minute class
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-5 h-5 text-yoga-primary" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              All class types
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-5 h-5 text-yoga-primary" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              No commitment
            </li>
          </ul>
          <a :href="whatsappLink" target="_blank" class="w-full px-4 py-2 bg-yoga-accent text-white rounded-lg hover:bg-yoga-primary transition-colors font-medium text-sm text-center inline-block">
            Book Class
          </a>
        </div>

        <!-- Monthly Pass (Featured) -->
        <div class="bg-gradient-to-br from-yoga-primary to-yoga-accent rounded-2xl p-8 text-white shadow-lg relative md:scale-105">
          <div class="absolute -top-4 left-6 bg-yoga-accent text-white px-4 py-1 rounded-full text-xs font-bold">POPULAR</div>
          <h3 class="text-xl font-bold mb-2 font-heading">Monthly Pass</h3>
          <p class="text-green-100 text-sm mb-6">Unlimited access to classes.<br />A gentle commitment to your daily balance.</p>
          <p class="text-3xl font-bold mb-6">$80<span class="text-lg">/mo</span></p>
          <ul class="space-y-3 mb-8 text-sm text-green-50">
            <li class="flex items-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              Unlimited classes
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              Priority booking
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              Member discounts
            </li>
          </ul>
          <a :href="whatsappLink" target="_blank" class="w-full px-4 py-2 bg-white text-yoga-primary rounded-lg hover:bg-yoga-light transition-colors font-medium text-sm text-center inline-block">
            Get Started
          </a>
        </div>

        <!-- Private Sessions -->
        <div class="bg-white rounded-2xl p-8 border border-gray-100 hover:border-yoga-accent transition-colors">
          <h3 class="text-xl font-bold text-yoga-dark font-heading mb-2">Private Session</h3>
          <p class="text-gray-600 text-sm mb-6">A personalized practice tailored to your goals, pace, and comfort.</p>
          <p class="text-3xl font-bold text-yoga-accent mb-6">$60</p>
          <ul class="space-y-3 mb-8 text-sm text-gray-700">
            <li class="flex items-center gap-2">
              <svg class="w-5 h-5 text-yoga-primary" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              Personal instructor
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-5 h-5 text-yoga-primary" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              Customized practice
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-5 h-5 text-yoga-primary" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              Flexible timing
            </li>
          </ul>
          <a :href="whatsappLink" target="_blank" class="w-full px-4 py-2 bg-yoga-accent text-white rounded-lg hover:bg-yoga-primary transition-colors font-medium text-sm text-center inline-block">
            Book Session
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const whatsappLink = computed(() => {
  const phoneNumber = '62812345678'
  const message = encodeURIComponent('Hi, I would like to book a yoga session at Jimbaran Yoga Studio.')
  return `https://wa.me/${phoneNumber}?text=${message}`
})
</script>
