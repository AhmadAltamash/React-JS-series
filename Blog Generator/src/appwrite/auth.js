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

    async login({email,password}){
        try {

            return await this.account.createEmailPasswordSession(email,password)

        } catch (error) {
            throw error
        }
    }

    async getCurrentUser({}){
        try {
            return await this.account.get()
            
        } catch (error) {
            console.log(error)
        }

        return null;
    }

    async logout({}){
        try {

            return await this.account.deleteSessions()
            
        } catch (error) {
            console.log(error)
        }
    }
}

const authentication = new Authenticate()

export default authentication