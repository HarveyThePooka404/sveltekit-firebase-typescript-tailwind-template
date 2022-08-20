import state from '$lib/store'; // stores related to app state, auth state

let auth = { ...state.initialAuthState };
state.authStore.subscribe(authState => auth = authState);

export async function authGuard({ url }: any): Promise<any> {
  const loggedIn = auth.loggedIn;
  
  if (loggedIn || url === '/signup') {
    return {};
  } else {
    return { status: 302, redirect: '/' }
  }
}

export default {
  authGuard
}