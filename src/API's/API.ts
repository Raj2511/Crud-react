import { Console } from "console";
import apiclient from "./API_Create"

// export default GetInputValues

export const GetInputValues = (name: string, mail: string, city: string, status: boolean) =>{
    console.log(name);

}

export const CreateUser = async (user: { name: string | null; mail: string; city: string; status: boolean }): Promise<{ name: string; mail: string; city: string; status: boolean}> =>{
    try{
        const response = await apiclient.post('/create', {user})
        return response.data;
    }
    catch(error){
        throw new Error("Failed to Create");
    }
}

export const ReadUser = async() =>{
    try{
        console.log("called read user")
        const response = await apiclient.get('/read', {})
        console.log(response.data);
        return response.data;
    }
    catch(error){
        throw new Error("Failed To Retrieve");
    }
}
