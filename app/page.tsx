import Navbar from "./components/Navbar";
import SK from "./components/SK";

export default function Home() {
  return (
    <main className="flex flex-1 justify-center overflow-hidden">
      <div className="flex flex-1 flex-col items-center">
        <div className="flex flex-col items-center pt-10 relative mb-12">
          <h1 className="text-5xl">PORTFOLIO</h1>
          <h1 className="text-4xl text-red-600 absolute -bottom-5">Saltanat</h1>
          <h1 className="text-4xl text-red-600 absolute -bottom-10">
            Kadirova
          </h1>
        </div>
        <Navbar home={true} />
        <SK />
      </div>
    </main>
  );
}
