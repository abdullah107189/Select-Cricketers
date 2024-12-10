import PropTypes from "prop-types";
import { FaUser, FaFlag } from "react-icons/fa";
const Player = ({ player, handleStoreCart }) => {
    const { name, country, image, role, battingType, bowlingType, biddingPrice } = player;
    // const obj = {
    //     "playerId": 13,
    //     "name": "Steve Smith",
    //     "country": "Australia",
    //     "image": "https://example.com/images/steve_smith.jpg",
    //     "role": "Batsman",
    //     "battingType": "Right-hand bat",
    //     "bowlingType": "Right-arm legbreak",
    //     "biddingPrice": "$2.4M"
    // }
    return (
        <div className="card bg-base-100 shadow-xl border   ">
            <figure className="p-4">

                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl w-full h-[250px] object-cover" />

            </figure>
            <div className="card-body p-5">
                <h1 className="flex items-center gap-4 text-xl font-bold"><FaUser /> {name}</h1>
                <div className="flex justify-between items-center">
                    <h1 className="flex items-center gap-4"><FaFlag /> {country}</h1>
                    <button className="px-3 py-2 badge badge-ghost">{role}</button>
                </div>
                <h1 className="text-xl font-bold">Ratting</h1>
                <p><span className="font-bold">Batting Type : </span>{battingType}</p>
                <p><span className="font-bold">Bowling Type : </span>{bowlingType}</p>
                <div className="flex justify-between items-center my-2">
                    <p><span className="font-bold">Price : $</span>{biddingPrice}</p>
                    <button onClick={() => handleStoreCart(player)} className="btn hover:bg-[#E7FE29]">Choose Player</button>
                </div>

            </div>

        </div>
    );
};
Player.propTypes = {
    player: PropTypes.object.isRequired,
    handleStoreCart: PropTypes.func.isRequired
}
export default Player;