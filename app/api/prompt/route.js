import { connectToDB } from "@/utils/database";
import Prompt from "@/modals/prompt";

export const GET = async (request) => {
  try {
    await connectToDB();

    const prompt = await Prompt.find({}).populate("creator");
    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
