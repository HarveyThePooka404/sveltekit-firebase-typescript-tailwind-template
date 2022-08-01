import { writable} from "svelte/store"
import { browser } from "$app/env";

//type
import type { User } from "$lib/types"; 



export const count = writable(0);


//wonky user code
let user : User 
if (browser){
    let userAsString = localStorage.getItem('user');
    user = JSON.parse(userAsString!);
}

export { user }