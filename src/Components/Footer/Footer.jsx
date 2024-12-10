import logo from '../../assets/logo-footer.png'
const Footer = () => {
    return (
        <div className='max-w-[1320px] mx-auto'>
            <div className='pt-44 space-y-4'>
                <div className='flex justify-center py-4'>
                    <img src={logo} alt="" />
                </div>
                <div className='grid grid-cols-3'>
                    <div className='space-y-4'>
                        <h1 className='font-bold text-xl text-white'>About Us</h1>
                        <p className='text-gray-400'>We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>
                    <div className='space-y-4'>
                        <h1 className='font-bold text-xl text-white'>Quick Links</h1>
                        <ul className='text-gray-400'>
                            <li>Home</li>
                            <li>Services</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className='space-y-4'>
                        <h1 className='font-bold text-xl text-white'>Subscribe</h1>
                        <p className='text-gray-400'>Subscribe to our newsletter for the latest updates.</p>
                        <div className="flex ">
                            <input className="rounded-r-none px-4 py-2 rounded-lg focus:outline-none" type="search" name="" id="" placeholder="Enter Your Email" />
                            <input className="rounded-l-none btn bg-[#E7FE29]" type="submit" value="Subscribe" />
                        </div>

                    </div>
                </div>
               <hr />
                <p className='text-gray-400 text-center py-4'>@2024 Your Company All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;