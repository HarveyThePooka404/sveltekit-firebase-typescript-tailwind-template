<script lang="ts">
	import NavigationMenu from '../menu/navigationMenu.svelte';
	import DropdownMenu from '../menu/dropdownMenu.svelte';
</script>

<!-- should be desktop dashboard-->
<div class="hidden md:block">
	<NavigationMenu />
</div>

<div class="hidden md:block">
	<div class="ml-4 flex items-center md:ml-6">
		<DropdownMenu />
	</div>
</div>
