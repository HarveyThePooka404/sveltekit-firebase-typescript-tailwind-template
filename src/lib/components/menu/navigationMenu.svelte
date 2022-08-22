<script lang="ts">
    import { page } from "$app/stores";
    const routes = [
        {
        name: "Dashboard",
        link: "/dashboard"
    },
    {
        name: "Team", 
        link: "/team"
    }, 
    {
        name: "Projects", 
        link: "/projects"
    },
    {
        name: "Calendar", 
        link: "/calendar"
    }, 
    {
        name: "Reports", 
        link: "/report"
    }] 

</script>

<!-- desktop -->
<div class="ml-10 flex items-baseline space-x-4 hidden md:block">
    {#each routes as {name, link}}
    <!-- active page -->
    {#if $page.url.pathname == link }
    <a href={link} class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">{name}</a>

    {:else}
    <!-- not active page -->
    <a href={link} class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">{ name }</a>
    {/if}
    {/each}
</div>

<!-- mobile -->
<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 md:hidden">
    {#each routes as {name, link}}
    <!-- active page -->
    {#if $page.url.pathname == link }
    <a href={link} class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">{name}</a>

    {:else}
    <!-- not active page -->
    <a href={link} class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{ name }</a>
    {/if}
    {/each}
</div>

