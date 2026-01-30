<template>
	<section id="faq" class="py-24 px-4 bg-yoga-light/20">
		<div class="max-w-4xl mx-auto">
			<!-- Header -->
			<div class="text-center mb-16">
				<p
					class="text-yoga-primary text-sm font-semibold uppercase tracking-wide mb-2"
				>
					{{ data.subtitle }}
				</p>
				<h2 class="text-4xl font-bold text-yoga-dark font-heading">
					{{ data.title }}
				</h2>
			</div>

			<!-- FAQ Items -->
			<div class="space-y-4">
				<div
					v-for="item in data.items"
					:key="item.id"
					class="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-yoga-accent transition-colors"
				>
					<button
						@click="toggleFaq(item.id)"
						class="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
					>
						<h3 class="text-lg font-semibold text-yoga-dark pr-4">
							{{ item.question }}
						</h3>
						<svg
							class="w-5 h-5 text-yoga-accent flex-shrink-0 transition-transform"
							:class="{ 'rotate-180': openFaq === item.id }"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</button>
					<div
						v-show="openFaq === item.id"
						class="px-6 pb-5 text-gray-700 leading-relaxed"
					>
						{{ item.answer }}
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { faq } from "@/data/faq";

const data = faq;
const openFaq = ref<number | null>(null);

const toggleFaq = (id: number) => {
	openFaq.value = openFaq.value === id ? null : id;
};
</script>
