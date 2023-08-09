import Navbar from "./components/Navbar";
import SK from "./components/SK";

export default function Home() {
  return (
    <main className="flex flex-1 justify-center overflow-hidden">
      <div className="flex flex-1 flex-col items-center">
        <div className="flex flex-col items-center pt-10 relative mb-24">
          <h1 className="text-5xl theseasons">PORTFOLIO</h1>
          <h1 className="text-4xl text-red-600 absolute -bottom-[35px] halimun">
            Saltanat
          </h1>
          <h1 className="text-4xl text-red-600 absolute -bottom-[85px] halimun">
            Kadirova
          </h1>
        </div>
        <Navbar home={true} />
        <SK />
      </div>
    </main>
  );
}
