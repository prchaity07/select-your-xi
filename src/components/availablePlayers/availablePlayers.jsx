import React, { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";


const AvailablePlayers = ({
    playersPromise, 
    availableBalance, setAvailableBalance,
    purchasedPlayers, setPurchasedPlayers }) => {
  const playerData = use(playersPromise);
  

  return (
    <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">

    {
        playerData.map(player => <PlayerCard 
          purchasedPlayers ={purchasedPlayers}
          setPurchasedPlayers = {setPurchasedPlayers}
          availableBalance={availableBalance} 
          setAvailableBalance={setAvailableBalance} 
          player= {player}></PlayerCard> )

    }



    </div>
  );
};

export default AvailablePlayers;
