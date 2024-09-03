import Prompt from "@/models/prompt";
import { connectToDB } from "@/utils/database";

export const DELETE = async (request, { params }) => {
    try {
        await connectToDB()

        await Prompt.findByIdAndDelete(params.id);

        return new Response("Prompt deleted successfully", { status: 200 });
    } catch (error) {
        console.log('***********ERROR DELETE: ' + error)
        return new Response("Failed to fetch prompt by id", { status: 500 })
    }
} 