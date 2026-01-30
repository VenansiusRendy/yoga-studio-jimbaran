<template>
	<section id="book" class="py-24 px-4 bg-yoga-light/20">
		<div class="max-w-6xl mx-auto">
			<!-- How to Book -->
			<div class="mb-16">
				<div class="text-center mb-12">
					<p
						class="text-yoga-primary text-sm font-semibold uppercase tracking-wide mb-2"
					>
						{{ data.howToBook.subtitle }}
					</p>
					<h2 class="text-4xl font-bold text-yoga-dark font-heading mb-4">
						{{ data.howToBook.title }}
					</h2>
					<p class="text-gray-600 max-w-3xl mx-auto">
						{{ data.howToBook.description }}
					</p>
				</div>

				<!-- Steps -->
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
					<div
						v-for="(step, index) in data.howToBook.steps"
						:key="index"
						class="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
					>
						<div
							class="w-12 h-12 bg-yoga-accent text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4"
						>
							{{ index + 1 }}
						</div>
						<p class="text-gray-700 text-sm">{{ step }}</p>
					</div>
				</div>

				<!-- CTA -->
				<div class="text-center">
					<a
						href="#schedule"
						class="inline-flex items-center justify-center px-8 py-4 bg-yoga-accent text-white rounded-lg hover:bg-yoga-primary transition-colors font-medium text-base shadow-lg"
					>
						{{ data.howToBook.cta }}
					</a>
				</div>
			</div>

			<!-- Booking Policy -->
			<div class="mb-16">
				<div class="text-center mb-12">
					<p
						class="text-yoga-primary text-sm font-semibold uppercase tracking-wide mb-2"
					>
						{{ data.policy.subtitle }}
					</p>
					<h2 class="text-4xl font-bold text-yoga-dark font-heading mb-4">
						{{ data.policy.title }}
					</h2>
					<p class="text-gray-600 max-w-3xl mx-auto">
						{{ data.policy.description }}
					</p>
				</div>

				<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div
						v-for="rule in data.policy.rules"
						:key="rule.id"
						class="flex items-start gap-3 p-4 bg-white rounded-lg"
					>
						<p class="text-gray-700 text-sm">{{ rule.text }}</p>
					</div>
				</div>
			</div>

			<!-- What to Bring -->
			<div>
				<div class="text-center mb-8">
					<p
						class="text-yoga-primary text-sm font-semibold uppercase tracking-wide mb-2"
					>
						{{ data.whatToBring.subtitle }}
					</p>
					<h2 class="text-3xl font-bold text-yoga-dark font-heading mb-4">
						{{ data.whatToBring.title }}
					</h2>
					<p class="text-gray-600">{{ data.whatToBring.description }}</p>
				</div>

				<div class="flex flex-wrap justify-center gap-4 mb-6">
					<div
						v-for="item in data.whatToBring.items"
						:key="item.id"
						class="flex items-center gap-2 px-6 py-3 bg-white rounded-full border-2 border-yoga-secondary"
					>
						<span class="text-gray-700 font-medium">{{ item.text }}</span>
					</div>
				</div>

				<p class="text-center text-sm text-gray-600 italic">
					{{ data.whatToBring.note }}
				</p>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { bookingPolicy } from "@/data/bookingPolicy";

const data = bookingPolicy;
</script>
