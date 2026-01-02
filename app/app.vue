<template>
  <div class="min-h-screen bg-white">
    <Header />
    <Announcement />
    <HeroSection />
    <AboutSection />
    <InstructorsSection />
    <PricingSection />
    <ScheduleSection />
    <ContactSection />
    <Footer />
    <FloatingWhatsAppButton />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Announcement from '@/components/Announcement.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import InstructorsSection from '@/components/InstructorsSection.vue'
import PricingSection from '@/components/PricingSection.vue'
import ScheduleSection from '@/components/ScheduleSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import Footer from '@/components/Footer.vue'
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton.vue'
</script>
