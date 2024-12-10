import PropTypes from "prop-types";
import deleteIcon from '../../../assets/deleteStoke.png'
const SelectCart = ({ select, handleDeleteCart }) => {
    const { name, image, battingType, playerId } = select
    return (
        <div className="flex justify-between items-center p-4 rounded-xl border" id="selectedCart">
            <div className="flex gap-6 items-center">
                <div className="w-16 h-16">
                    <img className="w-full h-full object-cover rounded-xl" src={image} alt="" />
                </div>
                <div className="">
                    <h1 className="text-xl font-bold">{name}</h1>
                    <p className="text-gray-400">{battingType}</p>
                </div>
            </div>
            <button className="p-4" onClick={() => handleDeleteCart(playerId)}><img className="w-6" src={deleteIcon} alt="" /></button>
        </div>
    );
};
SelectCart.propTypes = {
    select: PropTypes.object.isRequired,
    handleDeleteCart: PropTypes.func
}
export default SelectCart;