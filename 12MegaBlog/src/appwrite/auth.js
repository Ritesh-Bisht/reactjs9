import conf from "../conf/conf";
import {client, Account, ID, Client} from "appwrite"

// QUALITY CODE
export class AuthService {
    client = new Client();
    account;

    // 
    constructor(){

        this.client
        .setEndpoint(conf.appwriteUrl)
        .setEndpoint(conf.appwriteProjectId);

        this.account = 
        new Account(this.client)
    }

    async createAccount({email,password,name}){
        try {
            const userAccount = await this.account
            .create(ID.unique ,email, password, name);

            if(userAccount){
                // call another method
                // if user exist then login method call 
                return this.login({email,name,ID})
            }
            else{
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login(email, password) {
        try{
            return await this.account.createEmailPasswordSession(email, password);

        }
        catch(error){
            return error;

        }
    }
    

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("APPWRITE SERVICE :: getCurrenytUser :: error", error);
        }
        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions()
           // await this.account.deleteSession('current') for 1 session

            
            
        } catch (error) {
            console.log("APPWRITE SERVICE :: getCurrenytUser :: error", error);
            
        }
    }

}

const authService = new AuthService();
export default AuthService;