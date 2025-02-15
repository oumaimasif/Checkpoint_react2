import React from 'react';
import Player from "./Player";
import players from "./players";

const PlayersList = () => {
    return (
        <>
            <div className='w-full m-auto grid grid-cols-1 lg:grid-cols-4 gap-8'>
                {players.map((player,id) => (
                    <Player key={id}
                        name={player.name}
                        team={player.team}
                        nationality={player.nationality}
                        jerseyNumber={player.jerseyNumber}
                        age={player.age}
                        ImageUrl={player.ImageUrl}
                    />
                ))}
            </div> 
        </>
    );
};

export default PlayersList;
