import { writable} from "svelte/store"

//type

export const count = writable(0);

export const user = writable({
    firstName: '', 
    lastName: '', 
    email: '',
    isLoggedIn: false
})