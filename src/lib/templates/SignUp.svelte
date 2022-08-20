
<div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Create An Account</h2>
      </div>
        <input type="hidden" name="remember" value="true">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>            
            <label for="first-name" class="sr-only">First Name</label>
            <input id="first-name" bind:value={firstName} name="First Name" type="string" autocomplete="name" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="First Name">
          </div>
          <div>
            <label for="last-name" class="sr-only">Last Name</label>
            <input id="last-name" bind:value={lastName} name="Last Name" type="string" autocomplete="family-name" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Last Name">
          </div>
          <div>
            <input bind:value={email} name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" bind:value={password} name="password" type="password" autocomplete="password" required class="appearance-none mt-4 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm " placeholder="Password">
          </div>
          <div>
            <label for="confirm-password" class="sr-only">Password</label>
            <input id="confirm-password" bind:value={passwordConfirm} name="password" type="password" autocomplete="confirm-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Confirm Password">
          </div>
        </div>
        <div>
          <button type="submit" on:click={wrapperFunction} class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <!-- Heroicon name: solid/lock-closed -->
              <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
              </svg>
            </span>
            Create Account
          </button>
        </div>
    </div>
  </div>

  <script lang="ts">
    import {  User } from "$lib/types"
    import { createUserWithEmailAndPassword } from "firebase/auth";
    import { auth, createDocument } from "../../firebase/firebase";
    import { goto } from "$app/navigation";

    const user: User = new User();
    
    let firstName = "";
    let lastName = "";
    let email = "";
    let password = "";
    let passwordConfirm = "";

    async function createAccount() {

      const userData = {
        firstName: firstName, 
        lastName: lastName, 
        email: email
      }

      createDocument("users", userData, true);

      //probably needs to change the state of the user;
      
      goto("/dashboard");

    }
    
    function wrapperFunction() {
     createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        createAccount();
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });  
    }
    
  </script>