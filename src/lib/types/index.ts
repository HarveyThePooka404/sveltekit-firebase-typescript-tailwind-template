export class User {
    firstName: string;
    lastName: string;
    email: string;
    isLoggedIn: boolean;
    constructor() {
        this.firstName = "First Name";
        this.lastName = "Last Name";
        this.email = "Email";
        this.isLoggedIn = false;
    }
}

//store related types
export interface AppState {}

export interface AuthState {
  loggedIn:       boolean;
}