import React from 'react';

const SelectedCard = ({player, removePlayer}) => {

    console.log(player);

    const handleRemove = () => {
        removePlayer(player)
    } 

    return (
        <div className='border-2 border-gray-300 rounded-sm p-1 flex justify-between items-center mt-4'>
                <div className='flex justify-between items-center gap-2 '>
                    <img className='h-[50px] w-[50px] rounded-xl' src={player.player_img
} alt="" />

                    <div>
                        <h3 className='text-xl font-semibold'> {player.player_name} </h3>
                        <p className='text-sm font-regular'>{player.playing_role
}</p>
                    </div>
                </div>
                <div onClick={handleRemove}>
                    <img src="https://i.ibb.co.com/Jj7Z6212/delete-button.png"  alt="" />
                </div>

            </div>

    );
};

export default SelectedCard;