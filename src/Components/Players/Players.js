import React from 'react';
import Player from '../Player/Player';
import './Players.css'

const Players = ({players, setCart, cart, idPlayer}) => {
    return (

        <div>
            <div className="card-container" data-aos="zoom-in">
            {
                players.map(pd => <Player
                     player={pd}
                     key={pd.idPlayer}
                     cart={cart}
                     setCart={setCart}
                     ></Player>)
            }
            </div>
        </div>
    );
};

export default Players;