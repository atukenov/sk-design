import Image from "next/image";
import SK from "./components/SK";

export default function Home() {
  const ten = () => {};
  return (
    <main className="flex flex-col md:flex-row">
      <div className="w-[100%] h-[100vh]">pervoe</div>
      <div className="w-[100%] h-[100vh]">
        <SK />
      </div>
    </main>
  );
}
