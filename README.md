## What’s this?

This is a kick-start template for an application in SvelteKit (using Typescript), with pre-installed Tailwind and DaisyUI - and Firebase for your database. 

## How to use?
To get started, install all dependencies 

```bash
# install all dependencies
npm install
```

## Add Firebase
You can easily add Firebase by adding a ‘firebaseConfig.ts’ file to the Firebase folder. This template comes with Email and Password authentication out-of-the-box. 

When an authentication is created, a user document with firstName and lastName will also be created automatically. 

## Tailwind and DaisyUI
The template is based on [`TailwindUI components`](https://tailwindui.com/components) and uses [`DaisyUI`](https://daisyui.com/) as a component library. 

## Folder structure

In directives, you can find the [`‘clickOutside.ts’`](https://svelte.dev/repl/0ace7a508bd843b798ae599940a91783?version=3.16.7) directive - used on the dropdown menu component

In guards, you can find [`‘authGuard’`](https://www.reddit.com/r/sveltejs/comments/mor0qd/protect_routes_in_sveltekit/) used on protected routes. 



## What’s next?
You can create your own pages in the routes folder, and update the navigation route in lib > components > menu

Good luck and have fun! 
