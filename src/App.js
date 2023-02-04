import './App.css';
import { useEffect, useState } from 'react';
import Home from './Components/Home/Home';
import Banner from './Components/Banner/Banner';
import Nav from './Components/Nav/Nav';
import Players from './Components/Players/Players';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [players, setPlayer] = useState([]);
  useEffect(() => {
    fetch("https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=Danny%20Welbeck")
      .then(res => res.json())
      .then(data => setPlayer(data?.player))
  }, [])
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  return (
    <div className='App'>
      <Nav></Nav>
      <Home></Home>
      <Banner></Banner>
    </div>
  );
}

export default App;