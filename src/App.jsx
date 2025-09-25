import { Suspense, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import AvailablePlayers from "./components/availablePlayers/availablePlayers";
import SelectedPlayers from "./components/selectedPlayers/selectedPlayers";
 import { ToastContainer} from 'react-toastify';


// data fetch
const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};



const playersPromise = fetchPlayers();


function App() {

  const [toogle, setToggle] = useState(true)

  const [availableBalance, setAvailableBalance] = useState(59000000)

  const [purchasedPlayers, setPurchasedPlayers] = useState([])
  
const removePlayer = (p) =>{

  const filteredData = purchasedPlayers.filter(delPlayer => delPlayer.player_name!== p.player_name )
  setPurchasedPlayers(filteredData);
  setAvailableBalance(availableBalance + parseInt(p.price.split("৳").join("").split(",").join("")))
}



  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>

    <div className="w-[1200px] mx-auto flex justify-between items-center">

    <h1 className="font-bold text-3xl">{toogle=== true? "Available Players" :`Selected Player (${purchasedPlayers.length}/6)`}</h1>

    <div className="">
      <button onClick={()=> setToggle(true)} className={`p-3 px-4 border-2 border-r-0 border-gray-400  rounded-l-lg ${toogle === true? "bg-[#E7FE29]": ""} font-bold`}>Available</button>
      <button onClick={()=> setToggle(false)} className={`p-3 px-4 border-2 border-l-0 border-gray-400 rounded-r-lg font-semibold text-[#13131380] ${toogle=== false? "bg-[#E7FE29]": ""}`}> Selected <span>({purchasedPlayers.length})</span></button>
    </div>

    </div>

    {

      toogle === true?  <Suspense
        fallback={<span className="loading loading-dots loading-xl flex justify-center items-center mx-auto"></span>}>
          
        <AvailablePlayers purchasedPlayers ={purchasedPlayers} setPurchasedPlayers= {setPurchasedPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance}  playersPromise={playersPromise}></AvailablePlayers>
      </Suspense>:
      
      <SelectedPlayers removePlayer= {removePlayer} purchasedPlayers={purchasedPlayers} ></SelectedPlayers>


    }
     

   
     <ToastContainer/>

      
    </>
  );
}

export default App;
