import React, { useState } from 'react';
import userImg from "../../assets/usericon.png";
import flagImg from "../../assets/flag.png"

const PlayerCard = ({player, availableBalance, setAvailableBalance}) => {

        const [isSelected, setIsSelected] = useState(false)


        const handleSelected = (playerData) => {
                const playerPrice = parseInt(playerData.price.split("৳").join("").split(",").join(""));

                if(availableBalance<playerPrice){

                    alert("Not Enough Coins")
                    return;
                }

                setIsSelected(true)
                setAvailableBalance (availableBalance - playerPrice)
            


        }

    return (
        <div className="card bg-base-100 shadow-sm p-4 space-y-2">
        <figure>
          <img className="w-full h-[300px] object-cover"
            src={player.player_img}
          />
        </figure>
        <div className="">

            <div className="flex gap-1.5 mt-4">
             <img  src={userImg} alt="" /> <h2 className="card-title ">{player.player_name}</h2>
            </div>
          
          <div className="flex justify-between mt-4 border-b-1 pb-2 border-gray-400">
            <div className="flex gap-1.5 items-center justify-between">
                <img className="w-[20%] h-[20px] object-cover " src={flagImg} alt="" />
                <span>{player.player_country}</span>
            </div>

            <button className="btn">{player.playing_role}</button>


          </div>

          <div className="flex justify-between font-bold space-y-2">
            <span>Rating</span>
            <span> {player.rating} </span>
          </div>


          <div className="flex gap-2 justify-between space-y-1 ">
            <span className="font-bold">Player Style</span>
            <span>{player.playing_style}</span>
          </div>


          <div className="card-actions justify-between items-center  mt-3">
            <p className="font-bold">Price: {player.price}</p>
            <button disabled={isSelected} onClick={()=>{handleSelected(player)}}
             className="btn ">{isSelected? "Selected":"Choose Player" }</button>
          </div>
        </div>
      </div>
    );
};

export default PlayerCard;