import logo from '../../../assets/logo.png'
import doalrIcon from '../../../assets/dolar-icon.png'
import PropTypes from 'prop-types';
const Navbar = ({ freeDolar }) => {
    return (
        <div className='flex items-center justify-between py-2 sticky top-0 z-50 bg-white rounded-b-lg px-2'>
            <div className=''>
               <a href="#"> <img className='w-14 h-14 ' src={logo} alt="" /></a>
            </div>
            <div className='flex items-center justify-end  md:gap-12 gap-4'>
                <ul className='flex items-center justify-between md:gap-14 gap-4'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#all-players">All Players</a></li>
                    <li><a href="#">Teams</a></li>
                    <li><a href="#">Schedules</a></li>
                </ul>
                <div className='flex bg-[#e7fe29] justify-between items-center gap-2 px-4 py-2 rounded-lg border-gray-400 border font-bold'>
                    <span>{freeDolar}</span>
                    Coin
                    <img className='w-5 h-5' src={doalrIcon} alt="" />
                </div>
            </div>
        </div>
    );
};
Navbar.propTypes = {
    freeDolar: PropTypes.number.isRequired
}
export default Navbar;