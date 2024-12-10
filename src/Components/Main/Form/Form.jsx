
const Form = () => {
    return (
        <div className="relative top-44 p-4 bg-gray-200 bg-opacity-15 rounded-3xl border border-gray-300">
            <div className=' bg-img bg-slate-100  flex flex-col items-center justify-center space-y-6 py-20'>
                <h1 className="text-2xl font-bold">Subscribe to our Newsletter</h1>
                <p className='text-gray-400'>Get the latest updates and news right in your inbox!</p>
                <div className="flex gap-4 w-1/2">
                    <input className="px-4 py-2 rounded-lg w-full" type="search" name="" id="" placeholder="Enter Your Email" />
                    <input className="btn bg-[#E7FE29]" type="submit" value="Subscribe" />
                </div>
            </div>
        </div>
    );
};

export default Form;