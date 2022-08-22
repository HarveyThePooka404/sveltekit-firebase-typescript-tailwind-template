<script lang="ts">

    import {clickOutside } from "$lib/directives/clickOutside"
    import BellIcon from "../icons/bellIcon.svelte";

    const routes = [
        {
        name: "Your Profile",
        link: "/profile"
    },
    {
        name: "Settings", 
        link: "/settings"
    }, 
    {
        name: "Sign Out", 
        link: "/"
    }
    ] 

    let showMenu = false;

    function toggleMenu() {
    showMenu = !showMenu 
    }

    function handleClickOutside() {
        if(showMenu) {
            toggleMenu()
        }
    }

</script>

<!-- desktop -->
<div class="ml-3 relative hidden md:block">
    <button on:click={toggleMenu} type="button" class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
        <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
    </button>
    
    <div use:clickOutside on:click_outside={handleClickOutside} class="{showMenu ? 'block' : 'hidden'} origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
    
        {#each routes as {name, link}}
    <a href={link} class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"> {name}</a>
    {/each}

    </div>
</div>

<!-- mobile -->
<div class="flex items-center px-5 md:hidden">
    <div class="flex-shrink-0">
      <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
    </div>
    <div class="ml-3">
      <div class="text-base font-medium leading-none text-white">Tom Cook</div>
      <div class="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
    </div>
    <button type="button" class="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
      <BellIcon />
    </button>
</div>
  <div class="mt-3 px-2 space-y-1 md:hidden">
    {#each routes as {name, link}}
        <a href={link} class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0"> {name}</a>
    {/each}
  </div>