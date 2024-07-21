import apiclient from "./API_Create"

// export default GetInputValues

export const GetInputValues = (name: string, mail: string, city: string, status: boolean) =>{
    console.log(name);

}

export const CreateUser = async (name: string|null, mail: string, city: string, status: boolean): Promise<{name: string, mail: string, city: string, status: boolean}> =>{
    try{
        const response = await apiclient.post('/create', {name, mail, city, status})
        return response.data;
    }
    catch(error){
        throw new Error("Failed to Create");
    }
}
