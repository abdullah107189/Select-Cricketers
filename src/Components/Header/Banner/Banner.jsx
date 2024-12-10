import './Banner.css'
import bannerImg from '../../../assets/banner-main.png'
import PropTypes from 'prop-types';
const Banner = ({ handleGetFreeDolar }) => {
    return (
        <div className='bg-img bg-slate-900 text-white flex flex-col items-center justify-center space-y-4 py-10 mt-2'>
            <div><img src={bannerImg} alt="" /></div>
            <h1 className='text-4xl'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className='text-gray-400'>Beyond Boundaries Beyond Limits</p>
            <div>
                <button onClick={handleGetFreeDolar} className='px-5 py-2 rounded-lg bg-[#E7FE29] font-bold text-black'>Claim Free Credit</button>
            </div>
        </div>
    );
};
Banner.propTypes = {
    handleGetFreeDolar: PropTypes.func
}

export default Banner;