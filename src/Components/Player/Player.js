import React from 'react';
import './Player.css'

const Player = ({ player, cart, setCart }) => {
    const { strPlayer, strCutout, strDescriptionEN, idPlayer } = player;


    const handleBookmark = () => {
        const info = {
            strPlayer,
            strCutout,
            idPlayer,
            strDescriptionEN,
            price: 3445,
            bookmark: "true"
        }
        const prevBookmark = localStorage.getItem("bookmark");
        const oldBookmark = JSON.parse(prevBookmark);
        if (oldBookmark) {
            const isExists = oldBookmark.find(p => p.idPlayer === idPlayer);
            if (isExists) {
                isExists.price = isExists.price + 1;
                localStorage.setItem("bookmark", JSON.stringify(oldBookmark));
                // isExists.price = updatedPrice;
                // alert("already Bookmarked");
            } else {
                localStorage.setItem("bookmark", JSON.stringify([...oldBookmark, info]));
            }
        }
        else {
            localStorage.setItem("bookmark", JSON.stringify([info]));
            console.log('nai');
        }
    }
    const handleAddToCart = () => {
        const info = {
            strPlayer,
            strCutout,
            strDescriptionEN,
            price: 3445,
            idPlayer
        }
        if (cart) {
            const added = [...cart, info];
            setCart(added);
            return;
        }
        else {
            setCart([info])
            return;
        }


    }

    return (
        <div className='card'>
            <img className='player-img' src={strCutout} alt="" />
            <h6>{strPlayer}</h6>
            <p>{strDescriptionEN ? strDescriptionEN?.slice(0, 40) : "lorem span doler set amet hdgh dghfghd 5teyt"}</p>
            <button className='card-btn'>Details</button>
            <button onClick={handleAddToCart} className='card-btn'>Add To Cart</button>
            <button onClick={handleBookmark} className='card-btn'>Bookmark</button>
        </div>
    );
};

export default Player;