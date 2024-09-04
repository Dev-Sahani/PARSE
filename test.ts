import { promises as fs } from "fs";
import path from "path";

const filename = "cover_letter";
const filePath = path.join(process.cwd(), "uploads", filename + ".pdf");
fs.readFile(filePath, "utf-8").then((res) => console.log(res));
