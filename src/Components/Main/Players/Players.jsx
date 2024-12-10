import { useEffect } from "react";
import { useState } from "react";
import Player from "../Player/Player";
import PropTypes from "prop-types";
const Players = ({handleStoreCart}) => {
    const [players, setPlayers] = useState([])
    useEffect(() => {
        fetch('cricketersData.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])
    return (
        <div className="grid grid-cols-3 gap-4" id="players-container">
            {
                players.map(player => <Player
                    key={player.playerId}
                    handleStoreCart={handleStoreCart}
                    player={player}
                ></Player>)
            }
        </div>
    );
};
Players.propTypes = {
    handleStoreCart: PropTypes.func.isRequired
}
export default Players;