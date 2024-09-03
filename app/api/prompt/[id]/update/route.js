
import { connectToDB } from "@/utils/database";
import Prompt from "@/models/prompt";

export const PATCH = async (req, {params}) =>{
    const {prompt, tag} = await req.json();
   
    try{
        await connectToDB();

        const editPrompt = await Prompt.findById(params.id);
        if(!editPrompt) return new Response("promt not fount", { status: 404})
        
        editPrompt.prompt = prompt;
        editPrompt.tag = tag;

        await editPrompt.save();

        return new Response(JSON.stringify(editPrompt), {status: 200})
    }catch(err){
        console.log(err)
        return new Response('Failed to create a new prompt',{status:500})
    }

}