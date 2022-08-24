<script context="module" lang="ts">
	import {authGuard} from '$lib/guards';
	import DesktopDashboard from '$lib/components/navigation/desktopDashboard.svelte';
	import MobileDashboard from '$lib/components/navigation/mobileDashboard.svelte';

	export async function load({url, fetch, session, context}: any): Promise<any> {
		return await authGuard({url, fetch, session, context});
	}
</script>

<script>

	import {goto} from '$app/navigation';
	import {user} from '$lib/store';

	export function load() {
		if (!$user.isLoggedIn) {
			goto('/');
		}
	}
</script>

<!-- top bar menus -->
<DesktopDashboard />
<MobileDashboard /> 

	<!-- header -->
	<header class="bg-white shadow">
		<div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
			<h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
		</div>
	</header>

	<!-- content -->
	<main>
		<div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 flex flex-col items-center">
			<slot />
		</div>
	</main>
