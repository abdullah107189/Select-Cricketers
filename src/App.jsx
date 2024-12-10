import { useState } from 'react'
import './App.css'
import Footer from './Components/Footer/Footer'
import Banner from './Components/Header/Banner/Banner'
import Navbar from './Components/Header/Navbar/Navbar'
import Main from './Components/Main/Main'
import Swal from 'sweetalert2'
function App() {
  const [freeDolar, setFreeDolar] = useState(0)
  const [addPlayers, setAddPlayers] = useState([])

  const handleGetFreeDolar = () => {
    setFreeDolar(freeDolar + 1600000)
    Swal.fire({
      position: "top",
      icon: "success",
      title: "Congratulation you earn 1600000$ 😍😎",
      showConfirmButton: false,
      timer: 1500
    });
  }

  const handleStoreCart = (cart) => {
    const newCart = [cart, ...addPlayers]
    // check taka empty or not
    if (freeDolar <= cart.biddingPrice) {
      return Swal.fire({
        icon: "warning",
        title: "First 'Claim Free Credit' click this button and earn Dolar",
      });
    }

    if (addPlayers.length === 0) {
      setAddPlayers(newCart)
    }

    if (addPlayers.length === 6) {
      return Swal.fire({
        icon: "error",
        title: "Can't select more than 6 cricketers 🏏",
      });
    }

    for (let players of addPlayers) {
      if (players.playerId === cart.playerId) {
        return Swal.fire({
          icon: "error",
          title: "Player already exist",
          text: "More than one cricketer cannot be added",
        });
      }
    }
    const buyAfter = freeDolar - cart.biddingPrice
    setFreeDolar(buyAfter)
    setAddPlayers(newCart);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500
    });
  }

  const handleDeleteCart = (id) => {
    const filterPlayers = addPlayers.filter(cart => cart.playerId !== id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        setAddPlayers(filterPlayers)
      }
    });

  }
  return (
    <div className=''>
      <div className='max-w-[1320px] mx-auto'>
        <Navbar freeDolar={freeDolar}></Navbar>
        <Banner handleGetFreeDolar={handleGetFreeDolar}></Banner>

        <main className='max-w-[1320px] mx-auto ' id='all-players'>
          <Main
            addPlayers={addPlayers}
            handleStoreCart={handleStoreCart}
            handleDeleteCart={handleDeleteCart}
          ></Main>
        </main>

      </div>
      <footer className='border bg-[#06091A]'>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default App
