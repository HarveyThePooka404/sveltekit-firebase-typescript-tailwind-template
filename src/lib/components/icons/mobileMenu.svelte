<script lang="ts">

		import { createEventDispatcher } from 'svelte';
		const dispatch = createEventDispatcher()

		function emitClick() {
			dispatch("click")
		} 
</script>

<div id="button" class="-mr-2 flex md:hidden" on:click={emitClick}>
	<!-- Mobile menu button -->
	<button
		type="button"
		class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
		aria-controls="mobile-menu"
		aria-expanded="false">
		<svg
			class="block h-6 w-6"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="2"
			stroke="currentColor"
			aria-hidden="true">
			<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
		</svg>

		<svg
			class="hidden h-6 w-6"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="2"
			stroke="currentColor"
			aria-hidden="true">
			<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
		</svg>
	</button>
</div>