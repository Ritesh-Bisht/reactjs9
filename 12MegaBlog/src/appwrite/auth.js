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
            await this.account.createEmailPasswordSession(email, password);

        }
        catch(error){
            return error;

        }
    }

}

const authService = new AuthService();
export default AuthService;