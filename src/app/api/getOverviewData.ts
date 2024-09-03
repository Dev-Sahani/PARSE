import { promises as fs } from "fs";
import path from "path";
import FormData from "form-data";
import { textToData } from "./uplaod-pdf";
import axios from "axios";

export async function getBasicDetails(filename: string) {
  try {
    const filePath = path.join(process.cwd(), "uploads", filename + ".pdf");
    const fileBuffer = await fs.readFile(filePath);
    const fileBlob = new File([fileBuffer], filename + ".txt", {
      type: "application/pdf",
    });

    // const formData = new FormData();
    // formData.append("file", fileBlob);
    // formData.append("filename", filename + ".pdf");
    const response = await axios.post("http://localhost:5001/upload", {
      file: fileBlob,
    });

    console.log(response.statusText);
    if (response.status === 200) throw new Error("Cannot parse the pdf.");

    const data = await response.data;

    const final_data = await textToData(data.extracted_text);
    return final_data.data;
  } catch (err) {
    console.log(err);
    return {};
  }
}
