import React from 'react';


const Home = () => {
    return (
        <>
            <div className='flex justify-between  m-6'>
                <div>
                    <h1 className='text-6xl font-bold text-emerald-600 mt-6'> my head phone center</h1>
                    <h1 className='text-6xl font-bold text-indigo-700 mt-8'> woasame head phone </h1>

                    <p className='text-center mt-10 w-50 text-gray-700  font-sans'>
                        The JBL Quantum ONE gaming headphones
                         USB wired over-ear
                          professional gaming headset with
                           head-tracking enhanced JBL 
                           complete with QuantumSPHERE 360 
                    </p>

                    <p className='mt-16 '><a className='text-white p-3 bg-green-700 rounded text-2xl hover:bg-green-800' href="">LarnMore</a></p>


                </div>
                <div>
                    <img className=' rounded' src={require('../img/img12.jpeg')} alt="" />
                </div>
            </div>


        </>
    );
};

export default Home;