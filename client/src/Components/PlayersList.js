import React from 'react';


const PlayersList = (props) =>{
    console.log('PlayersLists', props)
    return(
        <div>
            <p>{props.player.name}</p>
        </div>
    )
}

export default PlayersList 