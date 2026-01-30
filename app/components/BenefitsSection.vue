<template>
	<section id="benefits" class="py-24 px-4 bg-white">
		<div class="max-w-6xl mx-auto">
			<!-- Header -->
			<div class="text-center mb-16">
				<p
					class="text-yoga-primary text-sm font-semibold uppercase tracking-wide mb-2"
				>
					{{ data.subtitle }}
				</p>
				<h2 class="text-4xl font-bold text-yoga-dark font-heading mb-4">
					{{ data.title }}
				</h2>
				<p class="text-gray-600 max-w-3xl mx-auto">{{ data.description }}</p>
			</div>

			<!-- Benefits Grid -->
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
				<div
					v-for="benefit in data.list"
					:key="benefit.id"
					class="flex items-start gap-4 p-6 bg-yoga-light/20 rounded-xl hover:bg-yoga-light/40 transition-colors"
				>
					<p class="text-gray-700 leading-relaxed">{{ benefit.text }}</p>
				</div>
			</div>

			<!-- Community Reward -->
			<div
				class="bg-gradient-to-br from-yoga-accent to-yoga-primary rounded-2xl p-8 text-white mb-8"
			>
				<div class="flex items-start gap-4">
					<div class="text-4xl">🎁</div>
					<div>
						<h3 class="text-xl font-bold mb-2 font-heading">
							{{ data.reward.title }}
						</h3>
						<p class="text-green-50 leading-relaxed">
							{{ data.reward.description }}
						</p>
					</div>
				</div>
			</div>
			<!-- Pricing Note -->
			<p class="text-center text-sm text-gray-600 italic mt-8">
				{{ data.note }}
			</p>
		</div>
	</section>
</template>

<script setup lang="ts">
import { benefits } from "@/data/benefits";

const data = benefits;
</script>
