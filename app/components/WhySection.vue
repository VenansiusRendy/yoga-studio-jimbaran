<template>
	<section id="why" class="py-24 px-4 bg-yoga-light/20">
		<div
			class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
		>
			<!-- Image -->
			<div
				class="rounded-2xl overflow-hidden shadow-lg h-96 order-2 md:order-1"
			>
				<img
					src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?w=600&h=600&fit=crop"
					alt="NUI Community"
					class="w-full h-full object-cover"
				/>
			</div>

			<!-- Content -->
			<div class="space-y-6 order-1 md:order-2">
				<div>
					<p
						class="text-yoga-primary text-sm font-semibold uppercase tracking-wide"
					>
						{{ data.why.subtitle }}
					</p>
					<h2 class="text-4xl font-bold text-yoga-dark mt-2 font-heading">
						{{ data.why.title }}
					</h2>
				</div>

				<p class="text-gray-700 leading-relaxed text-lg">
					{{ data.why.description }}
				</p>

				<!-- Key Statements -->
				<div class="space-y-3 pt-4">
					<div
						v-for="(statement, index) in data.why.statements"
						:key="index"
						class="flex items-start gap-3"
					>
						<div
							class="w-2 h-2 rounded-full bg-yoga-accent mt-2 flex-shrink-0"
						></div>
						<p class="text-gray-800 font-medium text-lg italic">
							{{ statement }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { community } from "@/data/community";

const data = community;
</script>
