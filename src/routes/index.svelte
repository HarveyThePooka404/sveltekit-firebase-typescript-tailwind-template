<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">

import SignIn from '$lib/templates/SignIn.svelte';

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<SignIn />
</section>

