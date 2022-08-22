<script>
import DropdownMenu from "../menu/dropdownMenu.svelte";
import NavigationMenu from "../menu/navigationMenu.svelte";
</script>

<!-- Mobile menu, show/hide based on menu state. -->
<div class="md:hidden" id="mobile-menu">
	<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <NavigationMenu />
	</div>
	<div class="pt-4 pb-3 border-t border-gray-700">
            <DropdownMenu />
	</div>
</div>
