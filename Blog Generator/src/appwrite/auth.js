import config from "../config/config";
import {Client, ID, Account} from "appwrite"

export class Authenticate {
    client = new Client()
    account;

    constructor(){
        this.client
        .setEndpoint(config.appwriteURL)
        .setProject(config.appwriteProjectID)
        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}){
        try {
            
            const userAccount = await this.account.create(ID.unique(),email,password,name)
            if(userAccount) {
                return this.login({email,password})
            }
            else{
                return userAccount
            }

        } catch (error) {
            throw error
        }
    }

    async login({ email, password }) {
        try {
            const session = await this.account.createEmailPasswordSession(email, password);
            console.log("Logged in:", session);
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
    

    async logout(){
        try {

            return await this.account.deleteSessions()
            
        } catch (error) {
            console.log(error)
        }
    }
}

const authentication = new Authenticate()

export default authentication