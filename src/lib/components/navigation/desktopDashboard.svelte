<script lang="ts">
	import NavigationMenu from '../menu/navigationMenu.svelte';
	import DropdownMenu from '../menu/dropdownMenu.svelte';
	import BellIcon from '../icons/bellIcon.svelte';
</script>

<nav class="bg-gray-800">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between h-16 hidden md:flex">
			<div class="flex-shrink-0">
				<img
					class="h-8 w-8"
					src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
					alt="Workflow" />
			</div>
			<!-- should be desktop dashboard-->
			<div class="hidden md:block">
				<NavigationMenu />
			</div>

			<div class="hidden md:block">
				<div class="ml-4 flex items-center md:ml-6">
					<button
						type="button"
						class="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
						<BellIcon />
					</button>
					<DropdownMenu />
				</div>
			</div>
		</div>
	</div>
</nav>
