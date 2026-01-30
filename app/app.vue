<template>
	<div class="min-h-screen bg-white">
		<Header />
		<Announcement
			v-if="
				new Date() < announcement.endDate && new Date() > announcement.startDate
			"
			:data="{
				title: announcement.title,
				description: announcement.description,
				message: announcement.message,
			}"
		/>
		<HeroSection />
		<WhySection />
		<ActivitiesSection />
		<ScheduleSection />
		<PricingSection />
		<BenefitsSection />
		<BookingSection />
		<SpaceSection />
		<CollaborateSection />
		<FAQSection />
		<ContactSection />
		<Footer />
		<FloatingWhatsAppButton />
	</div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Announcement from "@/components/Announcement.vue";
import HeroSection from "@/components/HeroSection.vue";
import WhyNuiSection from "~/components/WhySection.vue";
import ActivitiesSection from "@/components/ActivitiesSection.vue";
import ScheduleSection from "@/components/ScheduleSection.vue";
import BenefitsSection from "@/components/BenefitsSection.vue";
import BookingSection from "@/components/BookingSection.vue";
import SpaceSection from "@/components/SpaceSection.vue";
import CollaborateSection from "@/components/CollaborateSection.vue";
import FAQSection from "@/components/FAQSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import Footer from "@/components/Footer.vue";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton.vue";
import { announcement } from "./data/announcement";
</script>
