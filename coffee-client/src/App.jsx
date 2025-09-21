import { NavLink, useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./componenets/CoffeeCard";
import { FaLongArrowAltLeft } from "react-icons/fa";

function App() {
  const coffeeData = useLoaderData();

  return (
    <div className="p-28 bg-[#ebe6e2]">
     
      <div className="">
        <h1 className="text-3xl text-center font-extrabold text-red-900 m-8">
          Coffee House ${coffeeData.length}
        </h1>
      </div>
      <div className="ml-4 font-bold text-black underline flex" >
         <FaLongArrowAltLeft/>
         <h3>Add Coffee </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {coffeeData.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
