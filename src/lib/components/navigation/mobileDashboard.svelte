<script lang="ts">
	import DropdownMenu from '../menu/dropdownMenu.svelte';
	import NavigationMenu from '../menu/navigationMenu.svelte';
	import MobileMenu from '../icons/mobileMenu.svelte';

    function showMenu() {
       menuVisible = !menuVisible
    }

	let menuVisible = false;
</script>

<nav class="bg-gray-800">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between h-16 md:hidden">
			<div class="flex-shrink-0 ">
				<img
					class="h-8 w-8"
					src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
					alt="Workflow" />
			</div>
			<MobileMenu on:click={showMenu}/>
		</div>
		<!-- Mobile menu, show/hide based on menu state. -->
		<div class="{menuVisible ? 'block'  : 'hidden'}" id="mobile-menu">
			<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 md:hidden">
				<NavigationMenu />
			</div>
			<div class="pt-4 pb-3 border-t border-gray-700 md:hidden">
				<DropdownMenu />
			</div>
		</div>
	</div>
</nav>
