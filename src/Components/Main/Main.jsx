import '../Main/Main.css'
import { useState } from "react";
import Players from "./Players/Players";
import Selected from './Selected/Selected';
import Form from './Form/Form';
import PropTypes from 'prop-types';

const Main = ({ handleStoreCart, addPlayers, handleDeleteCart }) => {
    const [isActive, setIsActive] = useState({ available: true, state: 'available' })
    const handleSetActive = (state) => {
        switch (state) {
            case 'available':
                setIsActive({
                    available: true,
                    state: 'available'
                })
                break;
            case 'selected':
                setIsActive({
                    available: false,
                    state: 'selected'
                })
                break
            default:
                setIsActive({
                    available: true,
                    state: 'available'
                })
                break;
        }
    }
    return (
        <div className=''>
            <div className=''>
                <div className="flex items-center justify-end py-6 sticky top-[60px] z-40 px-2">
                    <div>
                        <button onClick={() => handleSetActive('available')} className={`${isActive.available ? 'isActive btn btn-outline border-gray-400 rounded-r-none border-r-0' : 'btn btn-outline border-gray-400 rounded-r-none border-r-0'}`}>Available</button>
                        <button onClick={() => handleSetActive('selected')} className={`${isActive.available ? 'btn btn-outline border-gray-400 rounded-l-none border-l-0 bg-white' : 'isActive btn btn-outline border-gray-400 rounded-l-none border-l-0 bg-white'}`}>Selected ({addPlayers.length})</button>
                    </div>
                </div>
                    <h1 className="text-2xl font-bold">{isActive.available ? `Available Players` : `Selected Player (${addPlayers.length}/6)`}</h1>

                {/* all players cart */}
                <div>
                    {
                        isActive.available ?
                            <Players handleStoreCart={handleStoreCart}></Players>
                            :
                            <Selected
                                addPlayers={addPlayers}
                                handleDeleteCart={handleDeleteCart}
                                handleSetActive={handleSetActive}
                            ></Selected>
                    }
                </div>


            </div>
            <div className='py-10'>
                <div className='w-full '>
                    <Form></Form>
                </div>
            </div>
        </div >
    );
};

Main.propTypes = {
    handleStoreCart: PropTypes.func,
    handleDeleteCart: PropTypes.func,
    addPlayers: PropTypes.array
}

export default Main;