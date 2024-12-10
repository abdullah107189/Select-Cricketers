import PropTypes from "prop-types";
import SelectCart from "../SelectCart/SelectCart";

const Selected = ({ addPlayers, handleDeleteCart, handleSetActive }) => {
    return (
        <div>
            <div className="p-4 space-y-4">
                {
                    addPlayers.map(select => <SelectCart
                        select={select}
                        key={select.playerId}
                        handleDeleteCart={handleDeleteCart}
                    ></SelectCart>)
                }
            </div>
            {addPlayers.length < 6 ? <button onClick={() => handleSetActive('available')} className='px-5 py-2 rounded-lg bg-[#E7FE29] font-bold text-black'>Add More Player</button> : ''}
        </div>
    );
};
Selected.propTypes = {
    addPlayers: PropTypes.array.isRequired,
    handleDeleteCart: PropTypes.func,
    handleSetActive: PropTypes.func
}
export default Selected;