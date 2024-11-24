import config from "../config/config";
import { Client, ID, Account } from "appwrite";
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';

export class Authenticate {
    client = new Client();
    account;
    dispatch;

    constructor(dispatch) {
        this.client
            .setEndpoint(config.appwriteURL)
            .setProject(config.appwriteProjectID);
        this.account = new Account(this.client);
        this.dispatch = dispatch;
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            const session = await this.account.createEmailPasswordSession(email, password);
            console.log("Logged in:", session);

            // Fetch user data and dispatch login
            const userData = await this.getCurrentUser();
            if (userData) {
                // Store user data in Redux
                this.dispatch(login(userData));
                // Also store in localStorage to persist across reloads
                localStorage.setItem('user', JSON.stringify(userData));
            }

            return session;
        } catch (error) {
            console.log("Login failed:", error);
        }
    }

    async getCurrentUser() {
        try {
            const user = await this.account.get();
            console.log("Current User:", user);
            return user;
        } catch (error) {
            console.log("No user logged in");
            return null;
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions();
            this.dispatch(logout()); // Dispatch logout to update Redux state
            localStorage.removeItem('user'); // Remove user data from localStorage
        } catch (error) {
            console.log(error);
        }
    }
}

// Update authentication instance creation to pass dispatch
const authentication = (dispatch) => new Authenticate(dispatch);

export default authentication;
