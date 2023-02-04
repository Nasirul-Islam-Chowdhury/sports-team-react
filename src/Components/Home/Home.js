import React, { useState, useEffect } from 'react';
import Players from '../Players/Players';
import './Home.css'
import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify';


const Home = () => {
    const [players, setPlayers] = useState([]);
    const [search, setSearch] = useState('');
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${search}`)
        .then(res => res.json())
        .then(data => setPlayers(data?.player));
    },[search])

    const handleDelete = (id) =>{
        const leftPlayer = cart.filter(pd => pd.idPlayer !== id);
        setCart(leftPlayer);
        Swal.fire(
            'Deleted',
          )
    }
    return (
        <div>
            <div className="home-container">
                <div className="left-side">
                    <input onChange={(e)=>{setSearch(e.target.value)}} className='search-input' type="text" />
                    <button className='search-btn'>Search</button>
                    <div className="players-container">
                        <Players
                         players={players}
                         cart={cart}
                         setCart={setCart}
                         key={players.map(p=>p.idPlayer)}
                         ></Players>
                    </div>
                </div>
                <div className="right-side">
                    <div className="cart">
                         <p>this is player cart</p>
                        {
                            cart.map(pew=>(
                            <div  className='player-container'>
                                <li>{pew.strPlayer}</li>
                                <button  className='btn-dlt' onClick={()=>handleDelete(pew.idPlayer)}>x</button>
                            </div>
                            )
                         )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;