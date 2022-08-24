<script lang="ts">
    import { user } from "$lib/store"
    import Card from "$lib/components/card/card.svelte"
</script>

<p class="mb-2"> Hello {$user.firstName} {$user.lastName} </p>
<Card />