import FileUpload from "@/components/ui/FileUpload";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <>
      <Navbar showDownload={false} />
      <main className="w-full px-6" style={{ width: "fill-container" }}>
        <FileUpload />
      </main>
    </>
  );
}
