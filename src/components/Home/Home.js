import React from 'react';
import useComments from '../../hooks/useComments';
import Comment from '../Comment/Comment';
import CommentRe from '../CommentRe/CommentRe';




const Home = () => {

    const [comment,setComment] = useComments()

    return (
        <div>
            <div className='flex justify-between  m-6'>
                <div className='mt-12'>
                    <h1 className='text-6xl font-bold text-emerald-600 mt-6'> my head phone center</h1>
                    <h1 className='text-6xl font-bold text-indigo-700 mt-8'> woasame head phone </h1>

                    <p className='text-center mt-10 w-50 text-gray-700  font-sans'>
                        The JBL Quantum ONE gaming headphones
                         
                          professional gaming headset with
                           head-tracking enhanced JBL 
                           complete with QuantumSPHERE 360 
                    </p>

                    <p className='mt-16 '><a className='text-gray-900 p-3 bg-slate-400 rounded text-2xl hover:bg-green-200 font-bold' href="">LarnMore</a></p>


                </div>
                <div>
                    <img className=' rounded' src={require('../img/img12.jpeg')} alt="" />
                </div>
            </div>

            <h1 className='text-4xl text-indigo-900 font-sans font-bold mt-20'>castomar reviwes</h1>

            <div className='grid grid-cols-3 gap-4 mt-12'>
                {
                    comment.slice(0,3).map(user=> <Comment
                    key={user.id}
                    user={user}
                    ></Comment>)
                }
           
            </div>
            <CommentRe></CommentRe>
       </div>
        
    );
};

export default Home;