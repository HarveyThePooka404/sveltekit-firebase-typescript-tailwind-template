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

<div class="min-h-full">
	<nav class="bg-gray-800">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex items-center justify-between h-16">
				<div class="flex-shrink-0">
					<img
						class="h-8 w-8"
						src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
						alt="Workflow" />
				</div>
				<DesktopDashboard />
				<MobileDashboard />
				<div class="-mr-2 flex md:hidden">
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
			</div>
		</div>
	</nav>

	<!-- header -->
	<header class="bg-white shadow">
		<div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
			<h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
		</div>
	</header>

	<!-- content -->
	<main>
		<div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
			<slot />
		</div>
	</main>
</div>
