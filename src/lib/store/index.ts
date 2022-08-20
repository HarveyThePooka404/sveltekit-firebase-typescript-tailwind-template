import { writable} from "svelte/store"

//type
import type { User, AppState, AuthState } from "../types/index"

//#region Utilisateur data
const initialUser: User = {
    firstName: '', 
    lastName: '', 
    email: '',
    isLoggedIn: false
}

export const user = writable(initialUser)
//#endregion


//boiler plat for auth state

  const initialAppState: AppState = {}
  
  const initialAuthState: AuthState = {
    loggedIn:       false,
  }
   
  const authStore = writable(initialAuthState);
  const appState = writable(initialAppState);
  
  const resetAppState = (): void => appState.update(() => initialAppState);
  const resetAuthState = (): void => authStore.update(() => initialAuthState);
  
  export default {
    authStore,
    appState,
    initialAppState,
    initialAuthState,
  }