<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">

import SignUp from '$lib/templates/SignUp.svelte';

</script>

<svelte:head>
	<title>Sign Up</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<SignUp />
</section>