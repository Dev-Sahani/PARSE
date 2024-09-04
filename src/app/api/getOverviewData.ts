import { promises as fs } from "fs";
import path from "path";
import { textToData } from "./uplaod-pdf";

export async function getBasicDetails(filename: string) {
  try {
    const filePath = path.join(process.cwd(), "uploads", filename + ".txt");
    const fileBuffer = await fs.readFile(filePath, "utf-8");

    const final_data = await textToData(fileBuffer);
    return final_data.data;
  } catch (err) {
    console.log(err);
    return {};
  }
}
