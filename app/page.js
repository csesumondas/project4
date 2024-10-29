import Items from "./Components/Items";
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <div className="">
        <Items />
      </div>
    </main>
  );
}
