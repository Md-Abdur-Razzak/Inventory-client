

const Contack = () => {
    return (
        <div className='w-full  p-12 bg-[#14114106] mt-9'>
        <h1 className='flex justify-center text-4xl font-extrabold pb-12'>Contact <span className='ml-3 text-green-700'>Us</span></h1>
       <div className='lg:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-3 md:mt-0 mt-9'>
            <div className='mt-2 lg:block flex flex-wrap gap-3 justify-center'>
                <div className=' bg-green-700  text-white w-[250px] rounded-md p-4'>
                    <h1 className='font-bold'><i className="fa-solid fa-location-dot"></i>  Office Location</h1>
                    <h1>2rd floor,Bashundhara Road</h1>
                </div >
                <div className=' bg-green-700 text-white w-[250px] rounded-md mt-3 p-4'>
                   <h1 className='font-bold'><i className="fa-solid fa-phone"></i> Contact No </h1>
                   <h1>+88 01701811157 </h1>

                </div>
                <div className=' bg-green-700  font-bold text-white mt-3 w-[250px] rounded-md p-4'>
                    <h1 className='font-bold'> <i className="fa-solid fa-envelope "></i><span> Email</span></h1>
                    <h1>razzak445444@gmail.com</h1>
                </div>
            </div>
            <div className='lg:col-span-2 md:mt-0 mt-9'>
                    <form >
                    <div className='md:block flex flex-col'>
                        <input placeholder='First Name' required className='border-2 rounded-md m-3 md:w-[45%] py-4 px-3 border-blue-300 ' type="text" />
                        <input placeholder='Last Name' className='border-2 rounded-md m-3 md:w-[45%] py-4 px-3 border-blue-300 ' type="text" />
                    </div>
                    <div className='md:block flex flex-col'>
                        <input placeholder='E-mail' className='border-2 rounded-md m-3 md:w-[45%] py-4 px-3 border-blue-300 ' type="text" />
                        <input placeholder='Phone No' className='border-2 rounded-md m-3 md:w-[45%] py-4 px-3 border-blue-300 ' type="text" />
                    </div>
                    <div className='ml-3'>
                        <textarea placeholder='Your Message' className='rounded-md p-4 md:w-[95%] w-[98%] border border-blue-600' name="" id=""  rows="7"></textarea>
                    </div>
                    <div className='flex justify-center mt-4'>
                        <button className='btn bg-blue-950 hover:bg-blue-500 text-white'>Submit</button>
                    </div>
                    </form>
    
                </div>
            </div>
       </div>
    );
};

export default Contack;